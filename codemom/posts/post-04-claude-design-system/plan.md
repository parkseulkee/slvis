---
post_number: 04
slug: claude-design-system
axis: AI # 보조: APP (내가 만든 시스템)
theme: 혼합 # TECH 2장 + LIFE 6장
slide_count: 8
status: approved
hook_title: "`Claude Design`으로 1시간 만에 만든 인스타 카드뉴스 시스템"
hashtags:
  [
    codemom,
    코드맘,
    AI육아,
    AI활용,
    클로드,
    클로드코드,
    클로드디자인,
    ClaudeDesign,
    디자인시스템,
    바이브코딩,
  ]
accent: terracotta
created: 2026-04-22
formats: [carousel, reel]
---

## 기획 배경

- `Claude Design`(Anthropic 최근 릴리스)으로 **@codemom.life**의 인스타 카드뉴스 디자인 시스템을 1시간 안에 뽑아냈음.
- 결과물 = 팔레트·타입·템플릿 12종(1080×1350) + `handoff.html` / `showcase.html`.
- 이후 `.zip`으로 내려받아 프로젝트에 풀고, `claude code` 스킬 2개(`codemom-content-planning` + `codemom-slide-production`)로 접음 → post-01·02가 이 시스템에서 나옴.
- 이 포스트 = 그 **결과물**을 담담하게 보여주는 쇼케이스. 피드백/거부한 표현/톤 잡는 서사는 제거. 메시지는 **"Figma·Canva 없이 Claude로만"**.

---

## 한 줄 주장

> Figma · Canva 없이 `Claude Design` 하나로 인스타 디자인 시스템 한 벌이 나왔다.
> `.zip`으로 받아 `claude code` 스킬로 접어두니, 다음 포스트는 한 줄에서 시작된다.

---

## 훅 (확정)

- [x] **A · 숫자 + 시간 + 도구명** — "`Claude Design`으로 1시간 만에 만든 인스타 카드뉴스 시스템"
- [ ] B · 대비형 — "AI가 찍어낸 슬라이드 `vs` `Claude Design`으로 짠 시스템"
- [ ] C · 프로세스 요약형 — "`Claude Design` → `claude code` 스킬 — 인스타 운영 2단계"

**선택 이유:** 구체 숫자(1시간) + 고유 도구명(`Claude Design`) + 결과물 명사(카드뉴스 시스템) 3박자. 훅 하나에 **스크롤 멈춤 + 본문 예고** 둘 다 담김. B/C는 본문에서 자연스럽게 드러나므로 훅에선 뺌.

---

# ▶︎ 포토뉴스 (Carousel 8장)

## 슬라이드 구성

| #   | 템플릿 ID         | 모드 | 역할               | 제목                                                         |
| --- | ----------------- | ---- | ------------------ | ------------------------------------------------------------ |
| 01  | `02-cover-tech`   | TECH | 훅                 | "`Claude Design`으로 1시간 만에 만든 인스타 카드뉴스 시스템" |
| 02  | `06-quote`        | TECH | 선언               | "Figma 없이 · Canva 없이 · `Claude`로만"                     |
| 03  | `01-cover-life`   | LIFE | 결과물 진입 (전환) | "나온 것 — 디자인 시스템 한 벌"                              |
| 04  | `03-list-topn`    | LIFE | 결과물 A · 토큰    | 팔레트 · 타입 · 그리드                                       |
| 05  | `11-matrix`       | LIFE | 결과물 B · 템플릿  | "템플릿 12종 — 한 번 만들면 계속 써요"                       |
| 06  | `04-before-after` | LIFE | 결과물 C · Dual    | "같은 시스템, 다른 옷 — LIFE `/` TECH"                       |
| 07  | `07-process`      | LIFE | 반복 가능성        | "만든 건 한 번 / 찍어내는 건 스킬로"                         |
| 08  | `09-cta`          | LIFE | CTA                | "저장해두고 써보세요"                                        |

**모드 전환:** 02(TECH) → 03(LIFE) 1회만. CONTENT_AXES의 "2회 이상 전환 금지" 규칙 준수.

---

## 카피 (슬라이드별 전문)

### Slide 01 — Cover (`02-cover-tech`, TECH)

- 상단 라벨: `AI · DESIGN SYSTEM`
- 제목:
  **`Claude Design`으로 1시간 만에 만든**
  **인스타 카드뉴스 시스템**
- 서브: `1080 × 1350 · 템플릿 12종`
- 페이지: `01 / 08`
- 하단 카운터: `@codemom.life` + `SWIPE →`
- **배경 mural (신규 · 시선 유도용):**
  - `post-02-slvis-daily`의 **실제 발행 슬라이드 3장**을 Slide 01 배경 mural로 깔기. "카드뉴스 시스템"이라는 훅의 증거물을 추상 색이 아니라 **실제 포스트**로 보여줌.
  - 사용 슬라이드: `01-cover` (TECH 훅) · `05-list` (번호 리스트) · `07-cta` (컬러 CTA) — 훅·정보·마무리 풀 사이클 축약
  - 배치: 슬라이드 하단 2/3 영역(top:520 ~ bottom:0)에 3장을 가로로 나란히 겹치게 (좌·중·우, 중앙 카드가 front z-index). 기울기 없음(TONE_GUIDE 준수).
  - 카드 스펙: 360 × 450 · `border-radius: 18px` · `border: 1px solid #22201A` · `box-shadow: 0 12px 40px rgba(14,13,10,0.55)`
  - **불투명도:** `opacity: 0.32` — 형태와 대표 카피가 식별되되 타이틀을 방해하지 않음
  - 상단 페이드 `mask-image`로 타이틀 영역 간섭 차단
  - **소스 PNG:** `posts/post-02-slvis-daily/exports/png/*.png` (Puppeteer 기존 export) → `assets/post02-thumbs/t-{01,05,07}-*.png` 로 복사
  - 캡션: `↓ POSTS FROM THIS SYSTEM · @codemom.life / post-02`

### Slide 02 — 선언 (`06-quote`, TECH)

- 상단 라벨: `— 이번엔`
- 본문 (몽타주식):
  > Figma 없이
  > Canva 없이
  > `Claude`로만 다 해봤어요.
- 하단 메타: `Tool · Claude Design (Anthropic Labs)`
- 페이지: `02 / 08`

### Slide 03 — 결과물 진입 (`01-cover-life`, LIFE · 모드 전환)

- 상단 라벨: `WHAT I BUILT · ~1h`
- 제목:
  **나온 것 —**
  **디자인 시스템 한 벌.**
- 서브: `tokens · type · 12 templates`
- 페이지: `03 / 08`

### Slide 04 — 결과물 A · 토큰 (`03-list-topn`, LIFE)

- 상단 라벨: `RESULT · A`
- 제목: **디자인 토큰**
- 리스트 3항목 (각 항목에 모노 코드):
  1. **팔레트** — LIFE `#FAF7F2` · TECH `#0E0D0A` · 공유 `#2E2A22` · 포인트 `#C4461F` / `#E8B960`
  2. **타입** — `Space Grotesk` · `Pretendard Variable` · `JetBrains Mono`
  3. **그리드** — `1080 × 1350` · 패딩 `72 / 96` · 안전영역 고정
- 페이지: `04 / 08`
- **제작 노트:** 팔레트 항목은 실제 스와치(작은 색 도트)를 hex 왼쪽에 덧붙여 시각적 대비.

### Slide 05 — 결과물 B · 템플릿 12종 (`11-matrix`, LIFE)

- 상단 라벨: `RESULT · B`
- 제목: **템플릿 12종**
- 레이아웃: **2×3 그리드 썸네일 6장** (대표 선별) + 우하단에 "… + 6"
  - 선별 썸네일:
    1. `01-cover-life`
    2. `02-cover-tech`
    3. `04-before-after`
    4. `05-timeline`
    5. `07-process`
    6. `11-matrix`
- 서브: 한 번 만들면 계속 써요.
- 페이지: `05 / 08`
- **제작 노트:** 썸네일은 `slides/<id>.html`을 iframe 축소 렌더. `11-matrix` 템플릿을 변형해 2×3 썸네일 그리드로 커스텀. 축소율은 제작 스킬에서 결정.

### Slide 06 — 결과물 C · Dual-Theme (`04-before-after`, LIFE)

- 상단 라벨: `RESULT · C`
- 제목: **같은 시스템, 다른 옷.**
- 좌 (LIFE): 크림 배경 표지 썸네일 + 라벨 `LIFE · #FAF7F2`
- 우 (TECH): 딥 블랙 배경 표지 썸네일 + 라벨 `TECH · #0E0D0A`
- 중앙 구분자: `—`
- 서브: 한 DNA로 두 톤. 축에 따라 골라 써요.
- 페이지: `06 / 08`
- **제작 노트:** 썸네일 각 1장 — 실제 `post-01` 커버(LIFE)와 `post-02` 커버(TECH) 재활용.

### Slide 07 — 반복 가능성 (`07-process`, LIFE)

- 상단 라벨: `HOW I REUSE IT`
- 제목:
  **만든 건 한 번 /**
  **찍어내는 건 스킬로.**
- 4단계:
  1. `Claude Design`으로 시스템 1회 완성
  2. `.zip` 다운로드 → 프로젝트 폴더에 풀기
  3. `claude code` 스킬 2개로 접음 — **기획** · **제작**
  4. 다음 포스트는 **한 줄**이면 나와요
- 하단 메타: `codemom-content-planning` + `codemom-slide-production`
- 페이지: `07 / 08`

### Slide 08 — CTA (`09-cta`, LIFE)

- 상단 라벨: `—`
- 제목: **저장해두고 써보세요.**
- 본문:
  > 자기 인스타에도 디자인 시스템,
  > `Claude`로 시작해보세요.
  > 시작점이 궁금하면 DM 주세요.
- CTA 아이콘: 북마크 / 하트 (Lucide, stroke-width 1.75)
- 하단: `@codemom.life` · `개발자맘의 AI 라이프`
- 페이지: `08 / 08`

---

## 캡션 (포스트 본문)

```
Figma 없이, Canva 없이 `Claude Design` 하나로
인스타 카드뉴스 디자인 시스템 한 벌 뽑았어요.

팔레트·타입·템플릿 12종까지 약 1시간.
`.zip`으로 내려받아 `claude code` 스킬 2개로 접어두니,
다음 포스트는 한 줄에서 시작돼요.

이 시스템에서 나온 첫 두 포스트 —
`post-01` 캡컷 편집 현실 / `post-02` 아침 /daily 브리핑.

자기 계정 디자인 시스템 시작점이 필요하면 DM 주세요.
```

**해시태그 (캡션 끝 또는 첫 댓글):**

```
#codemom #코드맘 #AI육아 #AI활용
#클로드 #클로드코드 #클로드디자인 #ClaudeDesign
#디자인시스템 #바이브코딩
```

---

# ▶︎ 릴스 (Reel · 약 25초)

## 개요

- **포맷:** 1080 × 1920 (9:16)
- **길이:** 25초
- **톤:** 결과물 쇼케이스 — 내레이션 없음, 자막 + 잔잔한 로-파이
- **전체 촬영 없음** — 모든 씬을 기존 `showcase.html` / `ui_kits/instagram/` / `posts/post-01` / `posts/post-02`의 화면 캡처·스크롤 녹화로 처리
- **끝 씬 하이라이트:** "실제로 이 시스템으로 나온 포스트"가 피드에서 스와이프 되는 장면

## 비트 시트 (25초)

| Beat | Time         | 화면                                                                                    | 텍스트                                            | 사운드          |
| ---- | ------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------- | --------------- |
| 1    | 0.0 – 2.5s   | 딥 블랙 배경 + 타이포만 (Pretendard 800, 센터)                                          | **Figma 없이 · Canva 없이**                       | 로-파이 인트로  |
| 2    | 2.5 – 4.0s   | 전환 페이드 — `Claude Design` 로고 / 워드마크 플래시                                    | `Claude` 로만                                     | 살짝 틱         |
| 3    | 4.0 – 8.0s   | `showcase.html` 팔레트 스와치 4종 줌인 (Cream → Deep Black → Warm Black → Terracotta)   | `팔레트 4색`                                      | 로-파이 유지    |
| 4    | 8.0 – 12.5s  | 타이포 specimen 섹션 세로 스크롤 (Display → Heading → Body → Label)                     | `Space Grotesk · Pretendard · JetBrains Mono`     | —               |
| 5    | 12.5 – 17.0s | 템플릿 12종 프리뷰 그리드 빠른 팬 (`showcase.html`의 slides 갤러리 섹션)                | `템플릿 12종`                                     | 박자 살짝       |
| 6    | 17.0 – 22.5s | `ui_kits/instagram/` 피드 모형 + **`post-01` 8장 + `post-02` 7장 캐러셀 스와이프 시뮬** | **실제로 나온 포스트**<br>`post-01` · `post-02`   | 음악 피크       |
| 7    | 22.5 – 25.0s | `@codemom.life` 워드마크 아웃트로 (LIFE 모드 크림 배경 + 블링킹 커서)                   | **@codemom.life**<br>`한 번 만들어두면 계속 써요` | 아웃트로 페이드 |

## 캡션 (릴스 본문)

```
Figma 없이, Canva 없이 `Claude Design`으로만
인스타 디자인 시스템을 한 시간에 뽑았어요.

이 시스템으로 찍은 첫 두 포스트는 프로필에 있어요.
다음 포스트도 여기서 한 줄로 시작돼요.
```

**해시태그 (캡션 끝):**

```
#codemom #코드맘 #AI육아 #AI활용
#클로드 #클로드코드 #클로드디자인 #ClaudeDesign
#디자인시스템 #바이브코딩
```

## 편집 가이드

- **프레임:** 1080 × 1920 (9:16)
- **텍스트 폰트:** Pretendard Variable 800 (한글) · JetBrains Mono (영문 라벨)
- **컬러 톤:** `showcase.html`의 LIFE 크림 + TECH 딥 블랙 흐름 유지. 악센트는 terracotta 한 곳만.
- **자막 애니메이션:** 페이드인/아웃 0.15s. 튀는 모션 금지.
- **음악:** 잔잔한 로-파이 (인스타 오디오 `lo-fi piano`·`quiet morning` 계열)
- **녹화 방식:** QuickTime 화면 녹화 → 편집에서 키번즈(Ken Burns) · 속도 조정. `codemom-slide-production` 스킬의 MOV 가이드 따름.

---

## 📎 필요한 에셋

### 포토뉴스 — 사용자 직접 촬영 **없음**

전부 기존 프로젝트 자산으로 커버:

- [x] `slides/01~12-*.html` — Slide 05 썸네일 6장 렌더 소스
- [x] `posts/post-01-capcut/01-cover.html` — Slide 06 LIFE 썸네일
- [x] `posts/post-02-slvis-daily/01-cover.html` — Slide 06 TECH 썸네일
- [x] `colors_and_type.css` — Slide 04 토큰 수치 출처
- [x] **Slide 01 배경 mural — post-02 슬라이드 3장** — `posts/post-02-slvis-daily/exports/png/{01-cover,05-list,07-cta}.png`를 `assets/post02-thumbs/` 로 복사. opacity 0.32로 Slide 01 하단 2/3에 3장 mural.
- [x] ~~Slide 01 팔레트 캡처~~ — 사용자 지시로 post-02 슬라이드 mural로 교체. `assets/palette-capture.png` 파일은 남겨둠 (재사용 여지).

### 릴스 — 사용자 직접 촬영 **없음**

- [x] `showcase.html` — Beat 3·4·5 소스
- [x] `ui_kits/instagram/index.html` — Beat 6 피드 모형
- [x] `posts/post-01-capcut/01~08.html` — Beat 6 캐러셀 스와이프
- [x] `posts/post-02-slvis-daily/01~07.html` — Beat 6 캐러셀 스와이프
- [ ] **화면 녹화 (제작 단계 TODO)** — QuickTime 화면 녹화는 `slide-production` 스킬 시점에 수행

---

## 🏷 해시태그 (포토뉴스 · 릴스 공통)

```
#codemom #코드맘 #AI육아 #AI활용
#클로드 #클로드코드 #클로드디자인 #ClaudeDesign
#디자인시스템 #바이브코딩
```

**운영 노트:**

- `#ClaudeDesign` / `#클로드디자인`은 신규 태그 — 초기 선점 기대.
- `#디자인시스템`은 비개발자 디자이너 유입 후킹 — LIFE 축과 접점.
- `#AI활용` · `#바이브코딩` · `#클로드코드`는 기존 AI 축 포스트와 시리즈 연결.

---

## 포지셔닝 체크

- **"Figma·Canva 없이 `Claude`로만"** 메시지가 Slide 02·릴스 Beat 1 두 곳에 박혀 있음 → 스크롤/스와이프에서 놓치지 않음.
- **피드백/거부한 표현/톤 논의** 제거 — 결과물 중심이라는 사용자 지시 준수.
- **AI축 정보성 + APP축 "내가 만든 시스템" 톤** 혼합 — "도구 리뷰"가 아니라 **"내 워크플로우 속에서의 역할"** 각도 (전략.md AI축 톤 힌트).
- **시리즈 연결:** post-01·02가 "이 시스템에서 나온 결과물" 증거물로 등장 → 프로필 탐색 유도.

---

## 승인 기록

- [x] 훅 확정 (A — 숫자 + 시간 + 도구명)
- [x] 슬라이드 구성 확정 (포토뉴스 8장, 모드 전환 1회)
- [x] 카피 초안 확정
- [x] 릴스 비트 시트 초안 확정
- [x] 에셋 목록 확정 (사용자 추가 촬영 없음)
- [x] **최종 승인 (사용자)** — Slide 01 팔레트 배경 레이어 추가 지시와 함께 승인. 에셋은 Chrome MCP로 직접 캡처.

서명: 코드맘 · 2026-04-22
