# MOV/MP4 Guide — 캐러셀 → 릴스 변환

선택 단계. 기획안에 `reels_version: true` 가 있을 때만.

## 목차

- 산출물 스펙
- 방법 1 — HTML 애니메이션 + 녹화 (추천)
  - 1. 릴스용 HTML 생성
  - 2. Puppeteer로 프레임 덤프
  - 3. ffmpeg로 MP4 합치기
- 방법 2 — 슬라이드 PNG를 이어붙이기 (간단)
- 음악

---

## 산출물 스펙

- **크기:** 1080×1920 (9:16 세로)
- **길이:** 15~20초
- **포맷:** `.mp4` (H.264 · AAC) 또는 `.mov`
- **프레임:** 30fps
- **자막:** 인스타 자동자막 대신 **직접 번인** (브랜드 톤 유지)

---

## 방법 1 — HTML 애니메이션 + 녹화 (추천)

### 1. 릴스용 HTML 생성

`posts/post-NN-<slug>/reel.html` 에 1080×1920 풀스크린 애니메이션 작성.

구조:

```html
<div class="reel" style="width:1080px;height:1920px;">
  <section class="beat" data-in="0" data-out="3">...슬라이드 1 카피...</section>
  <section class="beat" data-in="3" data-out="6">
    ...슬라이드 3 카피 + 사진...
  </section>
  ...
</div>
```

각 `<section>`은 `opacity`/`transform`으로 페이드 인/아웃.

### 2. Puppeteer로 프레임 덤프

```js
// record.js
const puppeteer = require("puppeteer");
const fs = require("fs");
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920, deviceScaleFactor: 1 });
  await page.goto("file://" + require("path").resolve("reel.html"));
  fs.mkdirSync("exports/frames", { recursive: true });
  const totalFrames = 20 * 30; // 20s × 30fps
  for (let i = 0; i < totalFrames; i++) {
    await page.evaluate((t) => window.setTime(t), i / 30);
    await page.screenshot({
      path: `exports/frames/${String(i).padStart(4, "0")}.png`,
    });
  }
  await browser.close();
})();
```

**전제:** `reel.html` 안에 `window.setTime(seconds)` 함수가 있어서 시간에 따라 현재 장면을 세팅.

### 3. ffmpeg로 MP4 합치기

```bash
ffmpeg -framerate 30 -i exports/frames/%04d.png \
  -c:v libx264 -pix_fmt yuv420p -crf 18 \
  exports/reel.mp4
```

오디오 얹고 싶다면:

```bash
ffmpeg -framerate 30 -i exports/frames/%04d.png -i music.mp3 \
  -c:v libx264 -pix_fmt yuv420p -crf 18 \
  -c:a aac -shortest \
  exports/reel.mp4
```

---

## 방법 2 — 슬라이드 PNG를 이어붙이기 (간단)

이미 `exports/png/01-*.png` ~ `08-*.png` 가 있으니, 각 슬라이드를 2초씩 보여주는 릴스 만들기.

```bash
# 각 PNG를 2초짜리 비디오로
for i in exports/png/*.png; do
  base=$(basename "$i" .png)
  ffmpeg -loop 1 -i "$i" -t 2 -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2:color=0x0E0D0A" \
    -c:v libx264 -pix_fmt yuv420p -y "exports/temp-$base.mp4"
done

# 이어붙이기
(for f in exports/temp-*.mp4; do echo "file '$(basename $f)'"; done) > exports/concat.txt
cd exports && ffmpeg -f concat -i concat.txt -c copy reel.mp4
rm temp-*.mp4 concat.txt
```

---

## 음악

인스타에서 제공하는 곡을 직접 쓰면 릴스 업로드 시 추가하게 됨. 미리 번인 금지.
별도 배경음이 필요하면 CC0/로열티프리 — Epidemic Sound, Artlist, YouTube Audio Library.

---

## 자막 번인 (선택)

ffmpeg 자막 필터 — 폰트는 Pretendard 쓰되 경로 지정 필요.

```bash
ffmpeg -i reel.mp4 -vf "subtitles=captions.srt:force_style='FontName=Pretendard Variable,Fontsize=48,PrimaryColour=&HFAF7F2&'" -c:a copy reel-subbed.mp4
```

일반적으로 슬라이드 자체에 카피가 이미 있으니 번인은 릴스-only 훅에만.

---

## 업로드 전 체크

- [ ] 1080×1920 정확한가
- [ ] 20초 이하인가 (인스타는 길면 자름)
- [ ] 파일 사이즈 100MB 이하인가
- [ ] 첫 1초 안에 훅이 보이는가 (스킵 방지)
