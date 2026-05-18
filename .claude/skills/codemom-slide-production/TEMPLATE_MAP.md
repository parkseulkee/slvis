# Template Map — 슬라이드 템플릿 선택 가이드

기획안의 각 슬라이드는 **템플릿 ID** 하나에 매핑됩니다.
템플릿 원본: `slides/` (12종)

---

## 전체 목록

| ID | 파일 | 언제 써요 |
|---|---|---|
| `01-cover-life` | `slides/01-cover-life.html` | 표지 · LIFE 축 · 크림 배경 · 세리프 이태릭 훅 |
| `02-cover-tech` | `slides/02-cover-tech.html` | 표지 · TECH/AI/APP 축 · 다크 배경 · 모노 프롬프트 |
| `03-list-topn` | `slides/03-list-topn.html` | TOP N 리스트 (3~7개 항목) |
| `04-before-after` | `slides/04-before-after.html` | 예상 vs 현실 · 대비 두 칸 |
| `05-timeline` | `slides/05-timeline.html` | 시간 기반 일과/루틴 |
| `06-quote` | `slides/06-quote.html` | 인용 · 명언 · 큰 문장 하나 · 전환 슬라이드로도 굿 |
| `07-process` | `slides/07-process.html` | 단계별 프로세스 (3~5단계) |
| `08-pros-cons` | `slides/08-pros-cons.html` | 장단점 / 두 관점 비교 |
| `09-cta` | `slides/09-cta.html` | 마지막 슬라이드 · 저장/공유 유도 |
| `10-photo-essay` | `slides/10-photo-essay.html` | 감성 · 사진 한 장 + 짧은 캡션 |
| `11-matrix` | `slides/11-matrix.html` | 2×2 / 3×3 비교 매트릭스 |
| `12-section` | `slides/12-section.html` | 섹션 구분 · 캐러셀 중간 챕터 표시 |

---

## 포스트 구성 시 권장 패턴

### 🔥 표준 8장 (LIFE 축)
```
01 cover-life → 05 timeline → 10 photo-essay → 06 quote → 03 list-topn → 04 before-after → 02 cover-tech → 09 cta
```
감성 → 정보 → 감성 → 정보 → 전환 → CTA 리듬.

### ⚡ 표준 7장 (TECH/AI 축)
```
02 cover-tech → 07 process → 03 list-topn → 11 matrix → 04 before-after → 06 quote → 09 cta
```

### 📱 APP 런칭 (8장)
```
01 cover-life → 04 before-after → 12 section → 02 cover-tech → 03 list-topn → 07 process → 10 photo-essay → 09 cta
```
일상 문제 → 앱 소개 → 사용법 → CTA.

### 🎯 짧은 5장 (공감형)
```
01 cover-life → 10 photo-essay → 06 quote → 10 photo-essay → 09 cta
```
서사 중심. 정보 없이 감정만.

---

## 혼합 규칙

- **모드 전환은 최대 1회.** LIFE 다수 중 TECH 1장 OK. 하지만 LIFE→TECH→LIFE→TECH 지그재그 금지.
- **`12-section`은 모드 전환 직전에 넣기.** 시각적 쉼표 역할.
- 연속 2장 같은 템플릿 금지 (03+03 X). 같은 정보면 한 장으로 합치기.

---

## 템플릿별 카피 길이 가이드

| 템플릿 | 제목 | 본문 |
|---|---|---|
| `01-cover-life` | 10~18자 | 서브 8~14자 |
| `02-cover-tech` | 8~16자 | 프롬프트형 1줄 |
| `03-list-topn` | 10~14자 | 항목당 8~12자 |
| `04-before-after` | 6~10자 | 좌/우 각 10~20자 |
| `05-timeline` | 10~16자 | 시간당 8~16자 |
| `06-quote` | — | 문장 하나 20~40자 |
| `07-process` | 10~14자 | 단계당 8~14자 |
| `08-pros-cons` | 8~14자 | 각 칸 3~5 불릿 |
| `09-cta` | 6~12자 | 서브 10~20자 |
| `10-photo-essay` | 0~6자 | 캡션 8~16자 |
| `11-matrix` | 10~14자 | 셀당 6~10자 |
| `12-section` | 4~8자 | 서브 8~14자 |

넘어가면 자동으로 읽기 힘들어집니다. 넘기면 기획에 피드백 주세요.
