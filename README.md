# K12-math — 초·중·고 수학 전체 정리

대학 입학 이전에 배우는 모든 수학 개념과 공식을 학년·학기·단원 순으로 정리한 공개 정적 사이트.
수학에 어려움을 겪는 학생이 "막힌 단원 → 먼저 볼 단원"을 따라 앞 학년으로 되돌아갈 수 있게 만드는 것이 목표다.
기준 교육과정은 2022 개정 교육과정(수학과). 개발계획서 v0.1(2026-10-11) 기준.

- 사이트: https://seung1won-dot.github.io/K12-math/
- 스택: Astro 7 · Markdown + frontmatter · KaTeX · Pagefind · GitHub Pages

## 명령어

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 (검색은 빌드 후 `preview`에서만 동작) |
| `npm run build` | 정적 빌드 + Pagefind 인덱스 생성 → `dist/` |
| `npm run preview` | 빌드 결과 미리보기 |
| `npm run stubs` | `data/units.json`의 단원 중 파일이 없는 것을 `status: todo` 스텁으로 생성 |
| `npm run validate` | 단원 파일 전수 검사 (템플릿 순서, 링크 실존, status 조건) |
| `npm run check` | validate + build. CI와 동일 |

## 저장소 구조

```
content/            단원 Markdown. content/{학교급}/{학년-학기 | 과목코드}/{id}.md
  elem/ mid/ high/
data/units.json     단원 뼈대(ID·제목·키워드). 0단계 산출물. 여기서 스텁을 생성
scripts/            gen-stubs.ts, validate.ts (Node 22+ 로 .ts 직접 실행)
src/
  content.config.ts frontmatter 스키마 (zod)
  lib/units.ts      ID 파싱, 진행률, URL 헬퍼
  layouts/ pages/ components/ styles/
public/             favicon, SVG 그림
.github/workflows/  main 푸시 시 validate → build → Pages 배포
```

## 단원 ID 규칙

`학교급-학년(과목)-학기-순번`. 한 번 정하면 바꾸지 않는다 (링크가 깨진다).

- 초·중: `elem-3-1-02`, `mid-2-2-05`
- 고등: `high-c1-05` (공통수학1), `high-c2-..`, `high-alg-..` (대수), `high-cal1-..` (미적분Ⅰ), `high-stat-..` (확률과 통계),
  `high-geo-..` (기하), `high-cal2-..` (미적분Ⅱ), `high-econ-..`, `high-ai-..`, `high-job-..`, `high-cul-..`, `high-pstat-..`, `high-inq-..`

파일 위치는 ID로 결정된다: `mid-2-2-05` → `content/mid/2-2/mid-2-2-05.md`.

## 단원 템플릿

frontmatter 다음에 아래 항목을 **이 순서로** 둔다. ⑥ 연계의 링크는 frontmatter `prerequisites` / `next`로 관리하고, 본문 ⑥은 설명이 필요할 때만 쓴다.

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

- 수식은 `$...$`, `$$...$$` (KaTeX). 공식에는 조건(정의역·부호·단위)을 반드시 같이 적는다.
- 오개념은 "왜 틀리는가"와 "어떻게 바로잡는가"를 쌍으로 쓴다.
- 그림은 `public/` 아래 SVG. 대체 텍스트 필수.
- 교과서·참고서 문장과 문제를 그대로 옮기지 않는다. 설명·예제·그림은 직접 작성한다.

## 작성 워크플로우

1. `data/units.json`에 단원 추가 → `npm run stubs`
2. 우선순위(중등 → 고등 공통 → 일반선택 → 진로선택 → 초등 → 기타) 순으로 한 학기씩 작성, `status: draft`
3. 체크리스트 자기 검토 후 `status: reviewed`, `reviewedAt` 기록
4. `npm run check` 통과 확인 후 푸시 → 자동 배포

## 라이선스

콘텐츠 CC BY-NC-SA 4.0, 코드 MIT (검토 중).
