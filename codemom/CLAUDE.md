# codemom project — Claude Code context

이 프로젝트는 **@codemom.life** 인스타 계정 운영을 위한 디자인 시스템 + 콘텐츠 제작 워크벤치입니다.

## 계정 정보 / 콘텐츠 전략 / 앱 라인업 — 출처

**Obsidian Vault `~/slvis/SNS/codemom-instagram/` 가 단일 출처.** 이 프로젝트에는 페르소나·전략·앱 정보를 중복 저장하지 않습니다.

- `계정 페르소나.md` — 계정 정체성, 캐릭터 설정, 톤앤매너 규칙, 페르소나 체크리스트
- `콘텐츠 전략.md` — 4개 축(DEV/AI/LIFE/APP), 비중, 구체 타이틀 예시, 해시태그, 시리즈 로드맵, 성장 단계
- `JANJAN 앱 소개.md` — 자체 앱 상세(기능·타깃·차별점·브랜드 컬러)
- `내 앱 라인업.md` — 앱 라인업 전체 인덱스(JANJAN + 차기 앱)

콘텐츠 기획·슬라이드 제작 시 항상 이 파일들을 먼저 읽습니다.

## 프로젝트 구조

```
codemom/
  README.md                   ← 디자인 시스템 전체 설명
  TONE_GUIDE.md               ← 카피 톤 가이드 (금기/선호)
  colors_and_type.css         ← 디자인 토큰
  assets/                     ← 로고, 워드마크, SVG (+ 과거 포스트 에셋)
  slides/                     ← 1080×1350 템플릿 12종
  preview/                    ← 디자인 시스템 프리뷰 카드
  ui_kits/instagram/          ← 피드 모형
  posts/                      ← 발행한/중인 포스트들
    post-01-capcut/           ← 완료 사례
  skills/                     ← Claude Code용 스킬 3종
    codemom-content-planning/
    codemom-slide-production/
    codemom-reel-planning/
    README.md
```

## 작업 흐름 (표준)

**새 포스트 만들 때:**

1. 사용자가 아이디어를 던짐 → `codemom-content-planning` 스킬 호출
2. 스킬이 훅 후보·슬라이드 구성·카피 초안 제안 → 사용자 피드백 반영
3. 필요한 에셋(사진/스크린샷) 사용자에게 요청
4. `posts/post-NN-<slug>/plan.md` 저장, `status: approved` 대기
5. 사용자 승인 후 → `codemom-slide-production` 스킬 호출
6. HTML 8장 생성 → PNG export → (옵션) MOV 릴스
7. `CHECKLIST.md` 돌리고 업로드

## Claude가 항상 기억할 것

- **존댓말 캐주얼** (~했어요 / ~해봤어요)
- **이모지 0개**, **ㅋㅋ 0개**, **느낌표 남발 금지**
- 한글 + Pretendard Variable / 영문 + Space Grotesk / 라벨 + JetBrains Mono
- 슬라이드 폰트 **최소 24px** (1080×1350)
- 악센트 컬러는 포스트당 **하나**
- 한국어 고유명사 독음 설명 금지 ("JANJAN (잔잔)" X)
- 자기선언 라벨 금지 ("PLOT TWIST", "반전!", "⚡")

자세한 톤 규칙: `TONE_GUIDE.md`
자세한 비주얼 규칙: `README.md` (VISUAL FOUNDATIONS 섹션)

## 스킬 호출 기준

| 사용자 발화                                     | 호출 스킬                             |
| ----------------------------------------------- | ------------------------------------- |
| "새 포스트 기획", "이 이야기 카드뉴스로"        | `codemom-content-planning`            |
| "만들어줘", "슬라이드 뽑아줘", "export"         | `codemom-slide-production`            |
| "릴스 기획", "릴스 만들어줘", "릴스로도 만들어" | `codemom-reel-planning`               |
| "톤 체크", "이 카피 어때"                       | 스킬 없이 직접 응답 (TONE_GUIDE 참조) |

## 단일 스킬 워크플로우 위반 시

- 기획 없이 슬라이드부터 만들려 하면: **중단하고 기획 스킬로 안내**
- 승인 없이 export 요청하면: **plan.md status 확인 후 요청**
- 이모지·ㅋㅋ가 카피에 섞이면: **침묵 편집 금지, 사용자에게 질문**
