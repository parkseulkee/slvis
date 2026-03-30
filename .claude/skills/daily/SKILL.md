---
name: daily
description: 오늘의 일일 브리핑을 수행한다. "/daily" 또는 "일일 브리핑", "오늘 일정", "뉴스 큐레이션" 요청 시 사용. 선택 인수로 날짜(YYYY-MM-DD) 지정 가능, 생략 시 오늘. Google 캘린더 일정 조회, 긱뉴스(AI/기술) + 경제/정치 뉴스 큐레이션을 수행하고 결과를 Obsidian 일일 노트에 저장한다.
allowed-tools:
  - Bash(obsidian *)
  - Bash(gcalcli *)
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

```bash
gcalcli agenda "대상날짜" "대상날짜+1일" --details calendar
```

결과를 캘린더별로 분류:
- 📅 개인 (qud9787@gmail.com)
- ❤️ 가족
- 🇰🇷 공휴일

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
