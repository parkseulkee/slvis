---
name: daily
description: 오늘의 일일 브리핑. 일일 노트 확인, Google 캘린더 일정 조회, 긱뉴스(AI/기술) + 경제/정치 뉴스 큐레이션을 수행하고 결과를 일일 노트에 저장한다.
argument-hint: "[YYYY-MM-DD] 날짜 생략 시 오늘"
disable-model-invocation: true
allowed-tools:
  - Bash(obsidian *)
  - Bash(gcalcli *)
  - Bash(python3 *)
  - WebFetch
  - WebSearch
---

오늘의 일일 브리핑을 수행한다. 분석하지 말고 정해진 절차만 따른다.

대상 날짜: `$ARGUMENTS` (없으면 오늘)

## 1단계: 일일 노트 확인

1. `obsidian daily:read`로 오늘 일일 노트를 읽는다
2. 일일 노트가 없으면 Templates/일일 노트.md 템플릿으로 생성한다
3. 이미 브리핑 내용이 있으면(일정/뉴스가 채워져 있으면) 사용자에게 알리고 중복 저장하지 않는다

## 2단계: Google 캘린더 일정

1. `gcalcli agenda "대상날짜" "대상날짜+1일" --details calendar` 실행
2. 결과를 캘린더별로 분류:
   - 📅 개인 (qud9787@gmail.com)
   - ❤️ 가족
   - 🇰🇷 공휴일 (대한민국의 휴일)
3. 일정 없으면 "일정 없음"으로 표시

## 3단계: 뉴스 큐레이션

### AI/기술 (긱뉴스)
1. `WebFetch`로 https://news.hada.io 메인 페이지를 가져온다
2. 오늘 올라온 글 중 AI 에이전트·LLM·개발 도구 관련 **3~5개**만 선별
3. 각 항목 형식: `- [제목](https://news.hada.io/topic?id=...) — 한 줄 요약`
4. 긱뉴스 토론 페이지 링크만 사용 (외부 원본 URL 사용 금지)

### 경제/정치
1. `WebSearch`로 오늘의 주요 경제·정치 뉴스를 검색한다
2. **3~5개** 선별 (뉴닉·어피티 수준의 주요 뉴스)
3. 각 항목 형식: `- [제목](출처URL) — 한 줄 요약`
4. 출처 링크 없는 뉴스는 제외

## 4단계: 일일 노트 저장

`obsidian daily:append`로 아래 형식으로 저장:

```
## 일정
{캘린더별 분류된 일정}

## 뉴스 큐레이션

### AI/기술 (긱뉴스)
{긱뉴스 목록}

### 경제/정치
{경제정치 목록}
```

## 5단계: 브리핑 출력

저장한 내용을 사용자에게 간결하게 보여준다. 추가 분석이나 코멘트 불필요.
