---
name: daily
description: 오늘의 일일 브리핑을 수행한다. "/daily" 또는 "일일 브리핑", "오늘 일정", "뉴스 큐레이션" 요청 시 사용. 선택 인수로 날짜(YYYY-MM-DD) 지정 가능, 생략 시 오늘. Google 캘린더 일정 조회, 긱뉴스(AI/기술) + 경제/정치 뉴스 큐레이션을 수행하고 결과를 Obsidian 일일 노트에 저장한다.
allowed-tools:
  - Bash(obsidian *)
  - mcp__claude_ai_Google_Calendar__list_events
  - mcp__claude_ai_Google_Calendar__list_calendars
  - WebFetch
  - WebSearch
---

오늘의 일일 브리핑을 수행한다. 분석하지 말고 정해진 절차만 따른다.

대상 날짜: `$ARGUMENTS` (없으면 오늘)

## 1단계: 일일 노트 확인

1. `obsidian daily:read`로 오늘 일일 노트를 읽는다
2. 없으면 `Templates/일일 노트.md` 템플릿으로 생성
3. 이미 브리핑 내용(일정/뉴스)이 채워져 있으면 사용자에게 알리고 중단

## 2단계: Google 캘린더 일정 조회

Google Calendar MCP(`mcp__claude_ai_Google_Calendar__list_events`)로 조회한다.

캘린더별로 병렬 조회:

- 📅 개인: `calendarId` 생략 (기본 = primary)
- ❤️ 가족: `calendarId = "arnpc7lm92a7p9jkcbf9p1o3cc@group.calendar.google.com"`
- 🇰🇷 공휴일: `calendarId = "ko.south_korea#holiday@group.v.calendar.google.com"`

공통 파라미터:

- `startTime`: 대상날짜 `T00:00:00`
- `endTime`: 대상날짜+1일 `T00:00:00`
- `timeZone`: `Asia/Seoul`
- `orderBy`: `startTime`

일정 없으면 "일정 없음"으로 표시.

## 3단계: 뉴스 큐레이션

### AI/기술 (긱뉴스)

1. `WebFetch`로 https://news.hada.io 메인 페이지 조회
2. AI 에이전트·LLM·개발 도구 관련 **3~5개** 선별
3. 형식: `- [제목](https://news.hada.io/topic?id=...) — 한 줄 요약` (외부 URL 금지)

### 경제/정치

1. `WebSearch`로 오늘의 주요 경제·정치 뉴스 검색
2. **3~5개** 선별 (출처 링크 없는 뉴스 제외)
3. 형식: `- [제목](출처URL) — 한 줄 요약`

## 4단계: 일일 노트 저장

`assets/daily-note-template.md` 형식을 참고하여 `obsidian daily:append`로 저장.

## 5단계: 브리핑 출력

저장한 내용을 그대로 출력. 추가 분석·코멘트 불필요.

## 출력 규칙

- 링크는 반드시 마크다운 링크 형식: `[제목](URL) — 요약` (URL만 별도 노출 금지)
- 겨울이 생후 일수는 표시하지 않음
