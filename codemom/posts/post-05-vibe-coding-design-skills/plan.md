---
post_number: 05
slug: vibe-coding-design-skills
axis: AI # 보조: DEV (방법론·워크플로우)
theme: TECH # 8장 전부 TECH 통일
slide_count: 8
status: approved
hook_title: "바이브 코딩, 결국은 `설계`에서 갈려요"
accent: amber # #E8B960
hashtags:
  [
    codemom,
    코드맘,
    AI육아,
    AI활용,
    클로드,
    클로드코드,
    바이브코딩,
    개발자맘,
    1인개발,
    AI개발자,
  ]
created: 2026-04-24
formats: [carousel]
---

## 기획 배경

- 타깃 독자는 **이미 `claude code` · `cursor` · `copilot`을 써본 개발자**. AI 코딩 자체는 익숙한 사람들.
- 공유할 메시지: **"딸깍으로 안 되는 이유 = 설계를 건너뛰어서"**. AI 도구가 아무리 좋아져도 스펙이 없으면 엉뚱한 걸 정성스럽게 만든다.
- 해결책으로 내가 실제로 쓰는 설계 스킬 2개 공유 — `brainstorming` · `explore-plan-code`.
- 리서치 소스: `posts/_research/brainstorming-vs-explore-plan-code.md` — 두 스킬 공식 정의 + `~/app/dailyclip`에서의 실사용 패턴 정리.
- 증거물: dailyclip 프로젝트에서 **9일 동안 13개 설계 문서** (brainstorming 8 + explore-plan-code 5) 누적 — 코드 치기 전에 합의된 의사결정의 흔적.

---

## 한 줄 주장

> 바이브 코딩에서 결과를 가르는 건 도구가 아니라 **설계**.
> 설계를 **강제로** 만들어주는 스킬 2개(`brainstorming` + `explore-plan-code`)를 CLAUDE.md에 박아두면, 매번 잔소리할 필요 없이 엉뚱한 결과가 줄어든다.

---

## 훅 (확정)

- [x] **A · 선언형** — "바이브 코딩, 결국은 `설계`에서 갈려요"
- [ ] B · 도구 나열 수렴형 — "`claude code` · `cursor` · `copilot` — 다 써봤는데 결국 `설계`에서 갈려요"
- [ ] C · 역설 + 범용형 — "AI로 뭘 만들든 / 가장 중요한 건 — 코드가 아니라 `설계`"

**선택 이유:** 업계 신조어 "바이브 코딩" 1개만 두고 담담하게 선언. 도구 종속성 없어 범용. 페르소나 규칙(주어 생략 + 담담한 톤) 정석. 첫 장 서브 라벨로 "설계 스킬 2개"를 작게 노출해 저장 유인 추가.

---

# ▶︎ 포토뉴스 (Carousel 8장)

## 슬라이드 구성

| #   | 템플릿 ID                  | 모드 | 역할                                | 한 줄 요약                                                      |
| --- | -------------------------- | ---- | ----------------------------------- | --------------------------------------------------------------- |
| 01  | `02-cover-tech`            | TECH | 훅 — 선언                           | 바이브 코딩, 결국은 `설계`에서 갈려요                           |
| 02  | `06-quote`                 | TECH | 정답 먼저 — 두 스킬 이름 공개       | `brainstorming` × `explore-plan-code`                           |
| 03  | `04-before-after`          | TECH | 실수 대비 (HITL 플로우)             | 딸깍 → 엉뚱 · 설계 먼저 → 맞음                                  |
| 04  | `03-list-topn`             | TECH | `brainstorming` 심화 (4 항목)       | 뭘 만들지 — 하드게이트·한 질문·2~3안·visual-companion           |
| 05  | `10-photo-essay`           | TECH | **visual-companion 스크린샷**       | 시각 논의는 브라우저로 — 4안 한 화면 비교                       |
| 06  | `03-list-topn`+`11-matrix` | TECH | **`explore-plan-code` + 커밋 분할** | 4단계 + Plan이 남기는 커밋 분할 테이블 한 장에                  |
| 07  | `04-before-after`          | TECH | 선택 기준 (도메인 페어 예시)        | 같은 문제 · 모호 → `brainstorming` · 명확 → `explore-plan-code` |
| 08  | `09-cta`                   | TECH | **CTA — DM 주세요 + 저장·팔로우**   | 스킬 파일 2개 + CLAUDE.md 템플릿 + 다음 AI 설계 팁도            |

**모드 전환:** 없음 (8장 전부 TECH). 정보 포스트 정석 — AI축 단일 모드.
**악센트:** 앰버 `#E8B960` 단일.
**주요 변경:** 기존 Slide 06 (commit breakdown) 을 Slide 06 (explore-plan-code)에 병합. visual-companion은 brainstorming(04) 직후로 이동해 문맥 연결.

---

## 카피 (슬라이드별 전문)

### Slide 01 — Cover (`02-cover-tech`, TECH)

- 상단 라벨 (mono, 작게): `AI · 설계 스킬 2개`
- 메인 (Display 중앙):
  > **바이브 코딩,**
  > **결국은 `설계`에서 갈려요**
- 서브 (em dash, 작게):
  > — 실전에서 쓰는 설계 스킬 2개, 이 포스트에 담았어요
- 페이지: `01 / 08`
- 하단 카운터: `@codemom.life` · `SWIPE →`

### Slide 02 — 정답 선언 (`06-quote`, TECH)

- 상단 라벨 (mono, 작게): `— SKILLS IN THIS POST`
- 본문 (스킬 이름: 큰 타이포, 설명: em dash 서브 · 중앙 스택):

  > ```
  > brainstorming
  > — 설계 스펙을 잡아줘요
  >
  >            ×
  >
  > explore-plan-code
  > — 구현 계획을 짜줘요 (커밋 분할까지)
  > ```

- 하단 서브 (작게):
  > 설계를 **강제로** 만들어주는 두 스킬
- 하단 메타: `claude code · anthropic skill`
- 페이지: `02 / 08`

**제작 노트:** 스킬 이름은 `JetBrains Mono` 48~56px, em dash 설명은 `Pretendard` 22~24px로 위계 차이 명확히. "설계 스펙" vs "구현 계획" 대비가 Slide 04/05 심화의 예고편 역할.

### Slide 03 — 실수 대비 (`04-before-after`, TECH)

- 상단 라벨: `WHY IT MISSES`
- **좌 (Before)**
  - 라벨: `딸깍`
  - 예: `"대시보드 만들어줘"`
  - ↓
  - 결과: 엉뚱한 걸 정성스럽게
  - 원인: 스펙이 머릿속에만
- **우 (After)**
  - 라벨: `설계 먼저`
  - 플로우 (세로 스택, HITL 강조):

    ```
    brainstorming
       ⟷  나 (승인·피드백)
    explore-plan-code
       ⟷  나 (승인·피드백)
         ↓
        코드
    ```

  - 결과: 어긋남을 **코드 전에** 잡음
  - 원인: `human-in-the-loop` — 매 단계 승인·피드백

- 중앙 구분자: `—`
- 서브: 같은 AI, 다른 결과
- 페이지: `03 / 08`

**제작 노트:** 우측 플로우의 `⟷` 는 mono 폰트로 크게. "나"는 앰버 하이라이트로 주체 강조 — HITL이 포스트의 숨은 핵심 키워드(Slide 04 하드게이트, Slide 05 sign-off로 연결). 좌측 Before는 화살표 1개로 단선형 → 우측과 구조적 대비.

### Slide 04 — `brainstorming` 심화 (`03-list-topn`, TECH)

- 상단 라벨: `SKILL 1 · brainstorming`
- 제목: **뭘 만들지 합의**
- 4항목:
  1. **하드게이트** — 유저가 설계를 승인할 때까지 코드 금지. "간단해서"는 안 먹힘.
  2. **한 번에 한 질문** — 목적·제약·성공 기준. 가능하면 객관식.
  3. **2~3안 비교** — 트레이드오프 + 추천안 + 그 이유.
  4. **`visual-companion`** — 시각 논의는 브라우저로. mockup·다이어그램·A/B 비교를 한 화면에 (→ NEXT SLIDE 05).
- 하단 메타: 종료 시 `docs/plans/brainstorming/YYYY-MM-DD-*.md` 커밋
- 페이지: `04 / 08`

**제작 노트:** 4항목으로 늘어나 리스트 간 행간 줄여 24px 하한 유지. 4번 항목만 mono 라벨(`visual-companion`)로 차별화 — 바로 다음 Slide 05 실물 스크린샷의 티저 역할.

### Slide 05 — visual-companion 스크린샷 (`10-photo-essay`, TECH)

- 상단 라벨: `BRAINSTORMING · visual companion`
- 메인 이미지: `assets/visual-companion.png` (카드·시트 표면 4안 비교 — dailyclip 디자인 세션)
- 이미지 아래 캡션:
  > **시각 논의는 브라우저로**
  > 4안을 한 화면에 띄워 골라요
- 하단 메타: `dailyclip · 카드 표면 4안 비교 세션`
- 페이지: `05 / 08`

**제작 노트:** `object-fit: contain`으로 스크린샷 왜곡 없이 전체 표시. 상하 여백 넉넉히. Slide 04에서 소개된 visual-companion 개념의 **직관적 증거**로 바로 이어져 문맥 자연스러움.

### Slide 06 — `explore-plan-code` + 커밋 분할 (`03-list-topn` + `11-matrix`, TECH)

- 상단 라벨: `SKILL 2 · FLOW + OUTPUT`
- 제목: **어떻게 만들지 — 커밋 분할까지**
- **상단: 4단계 가로 플로우 (Plan 스테이지 앰버 강조)**
  - `Explore` → 읽기만 · 수정 금지
  - **`Plan` (앰버 하이라이트)** → 변경 파일 · 흐름 + **커밋 분할**
  - `Code` → plan 기준 구현
  - `Commit` → plan 단위대로 · "왜"를 설명
- **중앙 Callout:** `Plan 이 남기는 것 ↓`
- **하단: 커밋 분할 테이블 (4열, 3행)**

  | #   | 커밋                               | 리스크 | 의존 |
  | --- | ---------------------------------- | ------ | ---- |
  | 1   | `OverlayFontFamily`로 리네이밍     | 낮음   | —    |
  | 2   | 저장소·렌더 파이프 연결            | 중     | 1    |
  | 3   | 설정 UI 붙이기 (세그먼트·슬라이더) | 중     | 2    |

- 하단 불릿: `리뷰어 친화 · 롤백 지점 · 리스크 가시화`
- 하단 메타: `출처: dailyclip / docs/plans/2026-04-23-overlay-font-size-controls.md`
- 페이지: `06 / 08`

**제작 노트:** 4단계 + 테이블을 한 장에 병합. Plan 단계가 앰버 강조되고 callout 화살표가 테이블로 내려꽂혀 **"Plan 단계가 이 테이블을 낳는다"**가 시각 경로로 명확. 기존 독립 슬라이드 (Slide 06 commit breakdown) 의 뜬금없음 해소 — 이제 맥락 속 결과물로 자리 잡음.

### Slide 07 — 선택 기준 (`04-before-after`, TECH)

- 상단 라벨: `WHICH ONE FIRST?`
- 제목: **어느 스킬부터?**
- **좌 (의도 모호)**
  - 헤드라인: `"어떻게" 할지 방향이 흐릿함`
  - → `brainstorming`
  - 예시: `"결제 실패 화면, 다시 설계하고 싶어"`
- **우 (방향 명확)**
  - 헤드라인: `"무엇을" 할지 이미 잡힘`
  - → `explore-plan-code`
  - 예시: `"결제 실패 응답에 재시도 가능 플래그 추가"`
- 중앙 구분자: `—`
- 하단 서브: `같은 문제라도 모호 와 명확 에 따라 들어가는 스킬이 달라져요`
- 페이지: `07 / 08`

**제작 노트:** 예시를 **"결제 실패" 같은 도메인**으로 페어링 — 같은 문제의 다른 결정 깊이를 즉각 체감. "어떻게" vs "무엇을" 헤드라인 대비로 질문 형태 자체의 차이를 시각화. 기존 `CaptionFontFamily` 리네이밍 예시는 dailyclip 특정 맥락이라 독자 이입 약했음 → 결제 플로우는 어떤 서비스에서도 공감 가능한 도메인.

### Slide 08 — CTA · DM + 저장·팔로우 (`09-cta`, TECH)

- 상단 라벨 (mono, 작게): `— START HERE`
- **Primary CTA (상단 중앙):**
  - 작은 라벨: `━ 한 줄 DM 이면 됩니다 ━`
  - 제목: **시작하려면 DM 주세요**
  - Gift 블록 (세로 스택):
    > 스킬 파일 **2개**
    >
    > - `CLAUDE.md` **템플릿**
  - 서브: `— 복붙만 하면 바로 쓸 수 있게 같이 드려요`
- **Secondary CTA (앰버 border 박스):**
  - 라벨: `SAVE + FOLLOW`
  - 메시지: `저장 + 팔로우 해두면 / 다음 AI 설계 팁도 바로 받아요`
  - 서브: `코드맘이 실전에서 쓰는 AI · 설계 · 개발 이야기`
- 하단 handle: `@codemom.life · DM 열려있어요`
- 페이지: `08 / 08`

**제작 노트:** CTA를 **2단 구조**로 설계 — Primary("DM 주세요", 이번 포스트의 실행 포인트) + Secondary(저장·팔로우, 반복 수익화). 박스 앰버 테두리 + "다음 AI 설계 팁" 문구로 **반복 방문 유인**. post-04의 단일 DM 패턴에서 진화 — DM은 깊은 관심자, 저장·팔로우는 가벼운 팔로워 양쪽을 다 거둠.

---

## 캡션 (포스트 본문)

```
바이브 코딩, 결국은 설계에서 갈려요.
claude code에서 실전으로 쓰는 설계 스킬 2개 정리했어요.

`brainstorming` — 뭘 만들지 합의 (코드 금지 구간 강제)
`explore-plan-code` — 어떻게 만들지 합의 (커밋 분할까지)

9일 동안 앱 하나 붙잡고 있었는데
그 사이 쌓인 설계 문서만 13개였어요.
딸깍이 아니라 설계부터 하면,
AI가 엉뚱한 걸 만들 일이 줄어요.

궁금하면 DM 주세요.
스킬 파일 2개 + CLAUDE.md 템플릿 같이 보내드려요.
```

**해시태그 (캡션 끝 또는 첫 댓글):**

```
#codemom #코드맘 #AI육아 #AI활용
#클로드 #클로드코드 #바이브코딩
#개발자맘 #1인개발 #AI개발자
```

---

## 📎 필요한 에셋

**사용자 추가 촬영 없음** — 모두 기존 자산으로 커버.

- [x] **visual-companion 스크린샷** — `~/Desktop/스크린샷 2026-04-23 오후 6.04.33.png` → `assets/visual-companion.png` 로 복사 완료
- [x] **리서치 문서** — `posts/_research/brainstorming-vs-explore-plan-code.md` (카피 소스)
- [x] **커밋 분할 테이블 원본** — `~/app/dailyclip/docs/plans/2026-04-23-overlay-font-size-controls.md`

---

## 🏷 해시태그 전략

- 고정: `#codemom` `#코드맘` `#AI육아`
- AI축 강화: `#AI활용` `#클로드` `#클로드코드` `#바이브코딩` `#AI개발자`
- DEV 보조 (개발자 독자 유입): `#개발자맘` `#1인개발`

**운영 노트:**

- `#바이브코딩` — 업계 신조어, 이 포스트 훅과 직결 → 태그 검색 유입 기대
- `#클로드코드` — 기존 AI축 포스트와 시리즈 연결
- `#개발자맘` · `#1인개발` — 개발자 커뮤니티 타깃

---

## 포지셔닝 체크

- **"설계가 중요"** 메시지가 Slide 01(훅) → 02(정답) → 03(대비) 세 장에서 연속 박힘 → 스와이프 초반 3장만 봐도 결론 전달
- **스킬 이름을 Slide 01에선 감추고 02에서 공개** → 계층 유지로 2번 슬라이드에 임팩트 집중
- **문맥 연결 강화:** Slide 04 `brainstorming` 4번 항목(`visual-companion`) → 바로 Slide 05 스크린샷으로 이어져 개념·실물 연결 끊김 없음
- **정보 피크는 Slide 06(explore-plan-code + 커밋 분할 테이블)** — 4단계 플로우의 Plan 단계 출력으로 테이블이 자리 잡음. 기존 독립 슬라이드 배치의 뜬금없음 해소. 개발자 독자 북마크·저장 유인 최강 지점.
- **Slide 07 선택 기준** — 같은 도메인(결제 실패) 페어 예시로 "모호 vs 명확" 결정 깊이 즉각 체감
- **CTA Slide 08** — 2단 구조: Primary("DM 주세요" = 이번 포스트 자원) + Secondary(저장·팔로우 = 반복 수익화). CLAUDE.md만으로 불완전한 점을 정직하게 인정, DM 유인 유지 + 가벼운 팔로워도 거둠. 9/13 숫자는 캡션에 증거로 유지.
- 페르소나 체크리스트:
  - [x] 이모지 0
  - [x] ㅋㅋ·ㄷㄷ·ㅠㅠ 0
  - [x] 호들갑·자기선언 라벨 0
  - [x] 한국어 고유명사 독음 설명 0 (`JANJAN (잔잔)` 계열 금지 준수)
  - [x] 숫자·시간 구체: "9일", "13개", "`04-23`", "4단계"
  - [x] 한 슬라이드 한 생각

---

## 승인 기록

- [x] 훅 확정 (A — 선언형, Claude Code 비종속 범용)
- [x] Slide 01 서브 라벨에 "설계 스킬 2개" 포함 확정
- [x] Slide 02 각 스킬 한 줄 설명 추가 (설계 스펙 / 구현 계획)
- [x] Slide 03 HITL 플로우 시각화 (승인·피드백 루프)
- [x] Slide 04 visual-companion 4번째 항목 추가
- [x] Slide 06 커밋 분할 테이블 출처 확정 (`2026-04-23-overlay-font-size-controls.md`)
- [x] **슬라이드 수 축소: 10장 → 9장** (기존 Slide 09 증거 타임라인 제외)
- [x] **CTA 전환: CLAUDE.md 한 줄 → DM 한 통 (B안)** — 스킬 파일 + 템플릿 묶음 제공
- [x] 에셋 확정 (visual-companion 스크린샷 `assets/visual-companion.png` 복사 완료)
- [x] **최종 승인 (사용자)** — 2026-04-24
- [x] **포스트-승인 리비전 (2026-04-24):**
  - 커밋 분할 독립 슬라이드(기존 06) → `explore-plan-code` 심화 슬라이드에 병합 → 총 9장 → **8장**
  - visual-companion 스크린샷 슬라이드를 `brainstorming` 심화 직후로 이동 (기존 08 → 05) — 문맥 연결
  - Slide 07 예시 프롬프트 재작성 — 결제 실패 도메인 페어 ("모호 → 다시 설계" / "명확 → 플래그 추가")
  - CTA에 **저장·팔로우 유도** 보조 박스 추가 — "다음 AI 설계 팁도 바로 받아요"
- [x] **스킬 파일 산출물 경로 통일 (2026-04-24):**
  - brainstorming: `docs/superpowers/specs/…-design.md` → `docs/plans/brainstorming/YYYY-MM-DD-<topic>.md`
  - explore-plan-code: 암묵적이던 저장 경로를 SKILL.md 에 명시 → `docs/plans/explore-plan-code/YYYY-MM-DD-<topic>.md`
  - 두 스킬 모두 `docs/plans/` 공통 루트 하위, 스킬 이름 서브폴더로 정리
  - `dm-package/` zip 2개 재생성 · `notion-page.md` · Slide 04 HTML·PNG 동기화 완료
  - dailyclip 기존 플랫 파일 13개는 이관하지 않고 그대로 유지 (새 파일부터 신 규약 적용)

서명: 코드맘 · 2026-04-24
