# 단원 작성 안내

[README](../README.md)에서 옮겨 온 단원 작성 규칙입니다. 그림 블록 작성법은 [figures.md](figures.md), 검토할 항목은 [review-notes.md](review-notes.md)에 있습니다.

## 만드는 원칙

1. **이유 없는 공식은 없다.** 공식에는 유도와 조건이 같이 있어야 합니다.
2. **오개념은 정정까지.** "이렇게 하면 틀린다"에서 멈추지 않고 바르게 생각하는 법을 같이 씁니다.
3. **단원은 혼자 있지 않다.** 검토 완료 단원은 먼저 볼 단원과 다음 단원이 반드시 하나 이상 있어야 하며, 스크립트가 이를 검사합니다.
4. **베끼지 않는다.** 교과서와 참고서의 문장·문제를 옮기지 않고, 설명·예제·그림은 직접 만듭니다.

## 단원 ID 규칙

`학교급-학년(과목)-학기-순번`. 한 번 정하면 바꾸지 않습니다(링크가 깨집니다).

- 초·중: `elem-3-1-02`, `mid-2-2-05`
- 고등: `high-c1-05` (공통수학1), `high-c2-..` (공통수학2), `high-alg-..` (대수), `high-cal1-..` (미적분Ⅰ), `high-stat-..` (확률과 통계),
  `high-geo-..` (기하), `high-cal2-..` (미적분Ⅱ), `high-econ-..`, `high-ai-..`, `high-job-..`, `high-cul-..`, `high-pstat-..`, `high-inq-..`

파일 위치는 ID로 정해집니다: `mid-2-2-05` → `content/mid/2-2/mid-2-2-05.md`.

## 단원 템플릿

frontmatter 다음에 아래 항목을 **이 순서로** 둡니다. ⑥ 연계의 링크는 frontmatter `prerequisites` / `next`로 관리하고, 본문 ⑥은 설명이 필요할 때만 씁니다.

```markdown
---
id: mid-2-2-05
title: 피타고라스 정리
level: 중학교          # 초등학교 | 중학교 | 고등학교
grade: 2학년           # 고등은 과목명 (공통수학1 등)
term: 2학기            # 고등은 생략
area: 도형과 측정      # 초·중: 수와 연산 | 변화와 관계 | 도형과 측정 | 자료와 가능성. 고등: 대단원명
keywords: [a²+b²=c², 직각삼각형, "피타고라스 정리 왜 성립해"]   # 학생이 검색할 말투도 넣는다
prerequisites: [mid-2-2-01]   # 선수 단원 ID. reviewed 이상은 1개 이상 필수
next: [mid-3-1-01]            # 후속 단원 ID. reviewed 이상은 1개 이상 필수
status: draft                 # todo | draft | reviewed | published
reviewedAt: 2026-10-11        # 선택
note: 2015 개정 대비 이동 사항 등  # 선택
---

## 핵심 개념
## 공식·정리
## 왜 성립하는가
## 대표 예제
## 자주 하는 실수와 오개념
## 앞뒤 학년 연계   (선택)
```

- 수식은 `$...$`, `$$...$$` (KaTeX). `$$`는 수식과 다른 줄에 둡니다(validate가 검사).
- 공식에는 조건(정의역·부호·단위)을 반드시 같이 적습니다.
- 오개념은 "왜 틀리는가"와 "어떻게 바로잡는가"를 쌍으로 씁니다.
- 그림은 본문 안의 `plot`·`numberline`·`svg` 코드 블록으로 그립니다. 그림마다 무엇을 보면 되는지 설명 한 줄이 필수입니다([figures.md](figures.md)).

## 작성 순서

1. `data/units.json`에 단원 추가 → `npm run stubs`
2. 한 학기씩 작성하고 `status: draft`
3. [`docs/review-notes.md`](review-notes.md)의 해당 항목과 계획서 체크리스트로 검토한 뒤 `status: reviewed`, `reviewedAt` 기록
4. `npm run check` 통과 확인 후 푸시 → 자동 배포

## 저장소 구조 (상세)

```text
content/            단원 Markdown. content/{학교급}/{학년-학기 | 과목코드}/{id}.md
  elem/ mid/ high/
data/units.json     단원 뼈대(ID·제목·키워드). 여기서 빈 틀을 생성
scripts/            gen-stubs.ts, validate.ts (Node 22+ 로 .ts 직접 실행)
src/
  content.config.ts frontmatter 스키마 (zod)
  lib/units.ts      ID 파싱, 진행률, URL 헬퍼
  figures/          그림 블록(plot·numberline·svg) → SVG 변환
  scripts/motion.ts 카드·목록 등장 모션 (Motion). 홈 히어로의 Anime.js는 pages/index.astro
  layouts/ pages/ components/ styles/
public/             favicon
docs/               작성 안내, 디자인·모션 규칙, 그림 작성법, 검토 목록, README 스크린샷
.github/workflows/  main 푸시 시 validate → build → Pages 배포
```
