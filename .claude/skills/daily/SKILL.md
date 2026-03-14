---
name: daily
description: 오늘의 일일 브리핑. 일일 노트 확인, Google 캘린더 일정 조회, 긱뉴스(AI/기술) + 경제/정치 뉴스 큐레이션을 수행하고 결과를 일일 노트에 저장한다.
allowed-tools:
  - Bash(obsidian *)
  - Bash(gcalcli *)
  - Bash(python3 *)
  - WebFetch
  - WebSearch
---

오늘의 일일 브리핑을 수행합니다.

## 1. 일일 노트 확인
1. `obsidian daily:read`로 오늘 일일 노트를 읽는다
2. 일일 노트가 없으면 생성을 제안한다
3. 있으면 다음을 정리해서 알려준다:
   - 오늘의 일정
   - 미완료 할 일
   - 메모 요약
4. 전체 vault에서 오늘 날짜 관련 노트가 있으면 함께 언급한다

## 2. Google 캘린더 일정
`gcalcli agenda --details calendar`로 오늘 일정을 캘린더별로 구분해서 표시한다.

## 3. 뉴스 큐레이션
1. **AI/기술**: 긱뉴스(news.hada.io)에서 오늘 주목할만한 아티클 3~5개 추천
2. **경제/정치**: 오늘의 주요 경제·정치 뉴스 3~5개 정리
- 모든 뉴스에 출처 링크 필수
- 긱뉴스는 토론 페이지 링크(https://news.hada.io/topic?id=...) 사용
- 각 뉴스는 한 줄 요약과 함께 제공

## 4. 일일 노트에 저장
브리핑 결과(일정, 뉴스 큐레이션)를 오늘 일일 노트에 `obsidian daily:append`로 저장한다.

$ARGUMENTS
