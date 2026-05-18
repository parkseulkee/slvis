---
name: codemom-reel-planning
description: Use this skill when the user wants to plan a reel for @codemom.life. Triggers include "릴스 기획", "릴스 만들어줘", "이 포스트 릴스로도 만들고 싶어", "릴스로도 만들어", requests for a companion reel to an existing carousel post, or a standalone reel. Produces beat-by-beat voiceover script, CapCut editing guide, and SRT captions. Reel tone is intentionally different from carousel — energetic hook, info-dense, voiceover-first. User self-records all video assets.
user-invocable: true
---

# codemom Reel Planning

릴스 기획 전담 스킬. 캐러셀과 **톤을 분리해서** 운용합니다.

- 캐러셀: 저장·공유 유도 — 차분하고 정보 밀도 높게 (TONE_GUIDE 적용)
- 릴스: 알고리즘 도달 우선 — 에너제틱 훅, 보이스오버 중심, 빠른 전개

## Before you start — always read

1. `REEL_HOOK_PATTERNS.md` — 릴스 전용 훅 공식
2. `BEAT_TEMPLATE.md` — 비트 시트 구조
3. `posts/post-04-claude-design-system/reel/VOICEOVER.md` — 레퍼런스 완성본
4. 컴패니언 릴스인 경우: 해당 포스트의 `plan.md`

---

## Planning Flow (strict order)

### Step 1 — 모드 확인

먼저 두 가지를 확인합니다:

**A. 컴패니언 릴스** (기존 캐러셀 포스트와 연결)

- 어느 포스트 기반인가? (`post-NN-<slug>`)
- 캐러셀의 핵심 메시지 한 줄은?

**B. 단독 릴스**

- 어떤 이야기인가?
- 캐러셀 없이 릴스만 올리는 이유는?

이미 답한 것은 묻지 않습니다.

---

### Step 2 — 훅 결정

`REEL_HOOK_PATTERNS.md`에서 훅 패턴 2개 후보를 뽑아 제안합니다.

```
후보 A: "여러분, [툴/경험] 써보셨어요? 저 이걸로 [결과] 만들었어요."
후보 B: "[숫자][단위]에 [결과물]. [A] 없이, [B] 없이."
```

사용자에게: **"어느 방향이 더 맞아요?"**

---

### Step 3 — 비트 구성

`BEAT_TEMPLATE.md`를 기반으로 비트 시트를 채웁니다.

규칙:

- 총 **5~7 비트**, **20~30초**
- Beat 01: 훅 — 첫 1초 안에 키워드 노출
- Beat 마지막: 아웃트로 — 자막 없음, 핸들만
- 각 비트: 화면 + 보이스오버 + 자막 3개 세트로 명시

비트 시트를 사용자에게 보여주고 피드백 받습니다.

---

### Step 4 — 승인 대기

비트 시트를 수정·확정합니다.

1. 비트 시트를 `posts/post-NN-<slug>/reel/VOICEOVER.md`에 draft로 저장한다.
2. 바로 파일을 열어준다:
   ```bash
   open posts/post-NN-<slug>/reel/VOICEOVER.md
   ```
3. 사용자에게 묻는다: **"확인해보시고 이걸로 가면 말씀해주세요."**

수정 요청이 오면 업데이트하고 다시 `open`으로 열어준다. 사용자가 **"이걸로 가자" / "승인" / "ok"** 하면 다음으로.

---

### Step 5 — 파일 생성

3개 파일을 `posts/post-NN-<slug>/reel/` 에 저장합니다.

#### VOICEOVER.md

비트별 말·화면·자막 완전 명세. `BEAT_TEMPLATE.md` 형식 그대로.
녹화 가이드 + CapCut 자막 스펙 포함.

#### SCRIPT.md

CapCut 편집 순서 전문:

- 비트 시트 (VOICEOVER 기준)
- 클립 목록 + 지속시간
- 전환 설정
- 보이스오버 추가 방법
- 자막 추가 방법
- 음악 추가 방법
- 내보내기 스펙
- 업로드 전 체크
- 릴스 캡션 + 해시태그

#### CAPTIONS.srt

VOICEOVER 타이밍 기준 SRT 자막.
아웃트로 비트는 자막 없음 (핸들이 주인공).

#### assets/ 폴더

빈 폴더만 생성. 사용자가 직접 녹화한 클립을 여기에 넣습니다.

---

### Step 6 — 핸드오프

> ✅ `reel/VOICEOVER.md`, `SCRIPT.md`, `CAPTIONS.srt` 저장했어요.
> `reel/assets/` 에 녹화한 클립 넣고 SCRIPT.md 순서대로 CapCut에서 조립하면 돼요.
> 음악은 인스타 업로드 후 앱에서 직접 추가하세요.

---

## 릴스 톤 규칙

캐러셀 TONE_GUIDE와 **별개로** 적용합니다.

### 허용

- "여러분~" 직접 호칭
- 숫자 반복 강조 ("12종이에요. 12종.")
- 빠른 문장 리듬 (마침표 짧게, 쉼표 없이)
- 에너제틱 목소리 톤

### 금지 (릴스도 동일)

- 이모지
- ㅋㅋ / ㅠㅠ
- "대박", "레전드", "미쳤다" 같은 과장 표현
- 호들갑 느낌표 연속 ("!!!!")
- 자기선언 라벨 ("PLOT TWIST", "반전!")

### 자막

- 보이스오버와 **동일하지 않아도 됨** — 핵심 키워드만 추출
- 아웃트로 비트: 자막 없음

---

## 기술 스펙

- 캔버스: **1080×1920** (9:16)
- 길이: **20~30초**
- 프레임: **30fps**
- 보이스오버: 사용자 직접 녹음 (CapCut 내 녹음 기능)
- 화면 녹화: 사용자 직접 (각 비트별 클립)
- 음악: 인스타 업로드 후 앱에서 추가 — 미리 번인 금지
- 자막 번인: CAPTIONS.srt → CapCut 임포트
