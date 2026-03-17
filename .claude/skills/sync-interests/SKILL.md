새로 저장된 아티클만 블로그 interests 페이지에 추가하고 배포한다.

인자: `$ARGUMENTS` — 방금 저장한 아티클 파일명 (없으면 직전에 저장한 아티클 사용)

## 절차

### 1단계: 대상 아티클 확인

1. `$ARGUMENTS`가 있으면 해당 아티클을 읽는다
2. 없으면 현재 대화에서 방금 저장한 아티클을 대상으로 한다
3. 이미 interests.astro에 동일 title이 있으면 "이미 반영됨"으로 종료

### 2단계: 토픽 매핑

아티클 내용을 기반으로 interests 토픽을 2~4개 부여한다. 기존 토픽 재사용 우선.

기존 토픽 목록: AI 코딩 에이전트, 토큰 최적화, 오픈소스 도구, CLI, Agentic Workflow, 자동화, Context Engineering, 프롬프트 엔지니어링, LLMOps, Claude Code, TDD, 코드 리뷰, 웹 스크래핑

새 토픽이 필요하면 추가해도 된다.

### 3단계: interests.astro에 추가

1. `/tmp/parkseulkee.github.io`가 없으면 clone
2. `interests.astro`의 `articles` 배열 맨 앞(최신순)에 항목 추가:
   ```js
   {
     title: '아티클 제목',
     date: 'YYYY-MM-DD',
     url: '아티클 URL',
     topics: ['토픽1', '토픽2'],
   },
   ```
3. 기존 항목은 건드리지 않는다

### 4단계: 커밋 & 배포

1. `git diff`로 변경 확인 → 없으면 종료
2. 커밋 메시지: `interests: 아티클 추가 — {제목}`
3. `git push`

### 5단계: 결과 보고 (한 줄)

추가된 아티클 제목과 배포 상태만 보고.
