# Export Guide — HTML → PNG (그리고 MOV)

슬라이드 HTML 8장이 완성됐다면 이제 **1080×1350 PNG**로 뽑아야 인스타에 올릴 수 있습니다.

---

## 옵션 A — 공용 스크립트 (추천)

프로젝트 루트의 `scripts/export-png.js` 를 씁니다. Puppeteer는 루트 `node_modules/` 한 곳에만 설치돼 있고, 모든 포스트가 공유합니다.

### 1회 셋업 (이미 설치돼 있으면 스킵)

```bash
cd <project-root>
npm install   # package.json에 puppeteer가 있음
```

### 실행 (프로젝트 루트에서)

```bash
node scripts/export-png.js posts/post-NN-<slug>
# 또는
npm run export -- posts/post-NN-<slug>
```

산출: `posts/post-NN-<slug>/exports/png/01-*.png` ~ `NN-*.png` (2x 해상도 · 2160×2700)

스크립트 동작:

- 포스트 디렉터리에서 `^\d{2}-.*\.html$` 패턴의 파일을 모두 찾음
- 각 파일을 `.slide` 요소만 1080×1350 (2x) 로 캡처
- `exports/png/` 에 동일 이름 PNG로 저장

---

## 옵션 B — Chrome DevTools (수동, 단건)

1. 터미널에서 `open 01-cover.html` (또는 더블클릭)
2. Chrome DevTools 열기 (`Cmd+Opt+I` / `F12`)
3. `Cmd+Shift+P` → `Capture full size screenshot` 입력 → Enter
4. 다운로드 폴더에서 `exports/png/`로 이동
5. 8장 반복

주의: 이 방법은 1080×1350 정확도를 위해 브라우저 창 크기를 1080+ 로 설정해야 합니다.

---

## 옵션 C — Playwright (팀 · CI 환경에서 안정적)

Puppeteer와 동일 API 흐름. 설치만 다릅니다.

```bash
npm i -D playwright
npx playwright install chromium
```

---

## 업로드 전 해상도 체크

```bash
# 8장 전부 1080×1350 or 2160×2700인지 확인
for f in exports/png/*.png; do
  sips -g pixelWidth -g pixelHeight "$f"
done
```

사이즈가 안 맞으면 인스타가 자동 크롭 — **카피 잘림의 주원인**입니다.

---

## 트러블슈팅

| 증상                    | 원인                          | 해결                                                   |
| ----------------------- | ----------------------------- | ------------------------------------------------------ |
| 폰트가 기본 sans로 나옴 | `fonts.ready` 이전 캡처       | `await page.evaluate(() => document.fonts.ready)` 추가 |
| 색이 뿌옇게 찍힘        | `deviceScaleFactor` 1         | 2 로 설정                                              |
| 일부 슬라이드만 누락    | HTML 파일명이 `NN-` 형식 아님 | `^\d{2}-.*\.html$` 패턴 맞추기                         |
| PNG가 투명              | `omitBackground: true`        | `false` 로                                             |

---

## MOV 생성은?

캐러셀 → 릴스 변환은 `MOV_GUIDE.md` 참조.
