# 코드맘 · 바이브 코딩 설계 스킬 2개

@codemom.life 에서 공유한 Claude Code 설계 스킬 세트예요.
포스트 보고 DM 주신 분들께 보내드려요.

---

## 담긴 것

- `brainstorming.zip` — "뭘 만들지" 합의해주는 스킬
- `explore-plan-code.zip` — "어떻게 만들지" 합의 + 커밋 분할까지 해주는 스킬
- CLAUDE.md 한 줄 템플릿 (이 페이지 아래에 있어요)

두 스킬 모두 실제로 제 프로젝트 `dailyclip` 에서 9일간 13개의 설계 문서를 만들며 실전 검증한 버전이에요.

---

## 설치 (약 1분)

### 1. 스킬 압축 풀기

다운받은 zip 2개를 홈 디렉터리의 `~/.claude/skills/` 아래에 풀어주세요.

```bash
# 다운받은 경로로 이동 후
mkdir -p ~/.claude/skills
unzip brainstorming.zip -d ~/.claude/skills/
unzip explore-plan-code.zip -d ~/.claude/skills/
```

설치 후 폴더 구조가 이렇게 나와야 해요.

```
~/.claude/skills/
├── brainstorming/
│   ├── SKILL.md
│   ├── references/
│   └── scripts/
└── explore-plan-code/
    └── SKILL.md
```

### 2. 설치 확인

Claude Code 를 재시작한 뒤 아무 프로젝트에서 아래처럼 호출해보세요.

```
/brainstorming
```

스킬이 뜨면 정상이에요.

### 3. 프로젝트 CLAUDE.md 에 한 줄 박기

쓰고 싶은 프로젝트의 `CLAUDE.md` (없으면 루트에 새로 만들어주세요) 에 아래 블록을 추가하세요.

```markdown
# Workflow

코드 변경 요청이 들어오면 먼저 `brainstorming` 또는 `explore-plan-code` 스킬을 호출한다.
의도·방향 애매하면 `brainstorming`, 구현 방향이 명확하면 `explore-plan-code`.
작업 단위가 끝나면 빌드를 통과시킨 뒤 커밋한다. 메시지는 한국어 한 줄.
```

마지막 줄은 취향이에요 — 영어 커밋 쓰시면 그 부분만 빼거나 고치시면 돼요.

이걸로 끝. 다음 요청부터 Claude 가 알아서 둘 중 하나를 탑니다.

---

## 언제 어떤 스킬이 불리나요

### 의도 모호 → `brainstorming`

```
"결제 실패 화면, 다시 설계하고 싶어"
"온보딩이 너무 길어, 어떻게 줄일까"
"홈 화면 정보 구조 재설계"
```

이런 요청이 들어오면 `brainstorming` 이 먼저 나옵니다.

- 한 번에 한 질문씩 던져서 의도를 확정
- 2~3 접근안 비교해서 추천안 + 이유 제시
- 유저 승인 전까지 **코드 한 줄도 안 씀** (하드게이트)
- 끝나면 `docs/plans/brainstorming/YYYY-MM-DD-*.md` 로 스펙 커밋
- 그다음 자동으로 `explore-plan-code` 로 연결

### 방향 명확 → `explore-plan-code`

```
"결제 실패 응답에 재시도 가능 플래그 추가"
"useState 를 useReducer 로 리팩터"
"Button 컴포넌트에 loading prop 추가"
```

이런 요청은 바로 `explore-plan-code` 가 불려요.

- **Explore** · Plan Mode 에서 읽기만, 수정 금지
- **Plan** · 변경 파일 · 흐름 · 리스크 · **커밋 분할** 까지 문서로 남김
- **Code** · plan 기준으로 구현, 어긋나면 plan 먼저 갱신
- **Commit** · plan 의 커밋 단위대로, 메시지는 "왜"를 설명

`docs/plans/explore-plan-code/*.md` 에 계획이 커밋돼서 의사결정 타임라인으로 남습니다.

두 스킬의 산출물이 같은 루트 (`docs/plans/`) 아래 스킬별 폴더로 나뉘어 쌓입니다 ↓

```
docs/plans/
├── brainstorming/       ← 설계 스펙
└── explore-plan-code/   ← 구현 계획 + 커밋 분할
```

---

## 보너스 — `visual-companion`

`brainstorming` 스킬에는 **visual-companion** 이라는 숨은 기능이 있어요.

시각 논의 (색·타이포·레이아웃 A/B 비교 등) 가 필요해 보이면 Claude 가 브라우저에 mockup 여러 개를 한 화면에 띄워줍니다. 4안을 놓고 "이 중 어느 거" 같이 바로 고를 수 있어요.

실행 방식:

- `~/.claude/skills/brainstorming/scripts/` 안의 로컬 서버가 사용
- 디자인 결정이 들어가는 `brainstorming` 세션에서만 띄우면 됨 (토큰 소모가 있어 상시 X)

처음 쓸 땐 Claude 가 먼저 "시각 컴패니언 띄워드릴까요?" 물어볼 거예요.

---

## 막히면

- **설치 실패 / 스킬 호출 안 됨** → 인스타 DM 으로 터미널 스크린샷 한 장 보내주세요.
- **"이렇게 쓰고 있는데 맞나요?"** → DM 환영이에요.
- **개선 아이디어** → 써보다가 "이 부분은 이렇게 하면 더 좋을 듯" 하는 거 있으면 알려주세요. 다음 포스트에 반영할 수도 있어요.

Instagram: **@codemom.life**

---

## 출처

- `brainstorming` — Anthropic Superpowers 의 brainstorming 스킬을 다듬음. 디자인 스펙 산출 흐름에 맞게 체크리스트 보강.
- `explore-plan-code` — [Claude Code 공식 best practices](https://code.claude.com/docs/en/best-practices) 의 "Explore first, then plan, then code" 워크플로우를 스킬화.

두 스킬 모두 **자유롭게 수정 · 재배포 하셔도 돼요.** SKILL.md 를 프로젝트 톤에 맞게 고쳐 써도 됩니다. 저도 프로젝트마다 조금씩 다르게 쓰고 있어요.

후기 남겨주시면 (DM · 댓글 · 리포스트 뭐든) 계속 다듬는 데에 큰 도움이 돼요.

---

_업데이트: 2026-04-24 · @codemom.life_
