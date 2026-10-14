---
id: high-c1-08
title: 순열과 조합
level: 고등학교
grade: 공통수학1
area: 경우의 수
keywords: ["합의 법칙", "곱의 법칙", "순열 nPr", "조합 nCr", "경우의 수", "순열 조합 차이", "0! 왜 1", "팩토리얼", "이웃하게 세우기 묶어서", "적어도 한 명 경우의 수", "회장 부회장 뽑기 순열"]
prerequisites: ["mid-2-2-06"]
next: ["high-c2-05"]
note: 2015 개정에서는 수학(하) 단원이었으나 2022 개정에서 공통수학1로 옮겨졌다.
status: draft
---

## 핵심 개념

> **한 줄 요약.** 경우의 수는 "또는"이면 더하고(합의 법칙) "이어서"이면 곱한다(곱의 법칙). 뽑아서 **줄을 세우면** 순열 ${}_n\mathrm{P}_r$, **뽑기만 하면** 조합 ${}_n\mathrm{C}_r$다.

경우의 수를 셀 때 가장 흔한 실패는 "빠뜨리기"와 "두 번 세기"다. 하나하나 늘어놓으면 정확하지만 경우가 수십, 수백 개가 되면 불가능하다. 이 단원의 공식들은 빠짐없이, 겹치지 않게 세는 규칙을 계산으로 바꾼 것이다. 그래서 공식을 쓰기 전에 "순서가 의미 있는가", "두 경우가 겹치는가"를 먼저 묻는 습관이 중요하다.

**생활 속에서.** 자물쇠 비밀번호, 반 대표 뽑기, 축구 리그의 경기 수, 메뉴 고르기는 모두 경우의 수 문제다. 예를 들어 $10$팀이 서로 한 번씩 경기하는 리그의 경기 수는 $10$팀 중 $2$팀을 고르는 조합 ${}_{10}\mathrm{C}_2 = 45$이고, 1·2·3위를 정하는 방법의 수는 순서가 있으므로 순열 ${}_{10}\mathrm{P}_3 = 720$이다.

**합의 법칙과 곱의 법칙.** 두 사건 $A$, $B$가 **동시에 일어나지 않을 때**, $A$가 $m$가지, $B$가 $n$가지로 일어나면 $A$ 또는 $B$가 일어나는 경우는 $m + n$가지다(합의 법칙). $A$가 $m$가지로 일어나고 **그 각각에 대하여** $B$가 $n$가지로 일어나면, $A$와 $B$가 잇달아(또는 동시에) 일어나는 경우는 $m \times n$가지다(곱의 법칙). "또는"이면 더하고, "그리고, 이어서"이면 곱한다고 생각하면 된다.

```svg 상의 3벌(A, B, C) 각각에 하의 2벌(1, 2)을 짝지으면 가지 끝이 3 × 2 = 6개. 곱의 법칙은 나뭇가지 그림의 끝을 세는 것과 같다
<svg viewBox="0 0 440 240">
  <circle cx="40" cy="120" r="5" class="f-base"/>
  <line x1="40" y1="120" x2="150" y2="40" class="s-mute" stroke-width="1.5"/>
  <line x1="40" y1="120" x2="150" y2="120" class="s-mute" stroke-width="1.5"/>
  <line x1="40" y1="120" x2="150" y2="200" class="s-mute" stroke-width="1.5"/>
  <text x="160" y="45" class="f-base" font-size="15">상의 A</text>
  <text x="160" y="125" class="f-base" font-size="15">상의 B</text>
  <text x="160" y="205" class="f-base" font-size="15">상의 C</text>
  <line x1="215" y1="40" x2="290" y2="22" class="s-mute" stroke-width="1.5"/>
  <line x1="215" y1="40" x2="290" y2="58" class="s-mute" stroke-width="1.5"/>
  <line x1="215" y1="120" x2="290" y2="102" class="s-mute" stroke-width="1.5"/>
  <line x1="215" y1="120" x2="290" y2="138" class="s-mute" stroke-width="1.5"/>
  <line x1="215" y1="200" x2="290" y2="182" class="s-mute" stroke-width="1.5"/>
  <line x1="215" y1="200" x2="290" y2="218" class="s-mute" stroke-width="1.5"/>
  <text x="298" y="27" class="f-ac" font-size="14">하의 1 → A1</text>
  <text x="298" y="63" class="f-ac" font-size="14">하의 2 → A2</text>
  <text x="298" y="107" class="f-ac" font-size="14">하의 1 → B1</text>
  <text x="298" y="143" class="f-ac" font-size="14">하의 2 → B2</text>
  <text x="298" y="187" class="f-ac" font-size="14">하의 1 → C1</text>
  <text x="298" y="223" class="f-ac" font-size="14">하의 2 → C2</text>
</svg>
```

**순열.** 서로 다른 $n$개에서 $r$개를 택하여 **일렬로 나열**하는 것을 $n$개에서 $r$개를 택하는 순열이라 하고, 그 수를 ${}_n\mathrm{P}_r$로 쓴다. 나열하므로 순서가 다르면 다른 경우다. 예를 들어 회장과 부회장을 뽑을 때 "A 회장, B 부회장"과 "B 회장, A 부회장"은 서로 다르다.

**계승.** $1$부터 $n$까지의 자연수를 모두 곱한 $n \times (n-1) \times \cdots \times 2 \times 1$을 $n!$($n$의 계승, "$n$ 팩토리얼")이라 한다. 서로 다른 $n$개를 모두 일렬로 세우는 방법의 수가 $n!$이다. 예를 들어 $3! = 6$, $4! = 24$, $5! = 120$이고, $10!$은 $3628800$으로 아주 빠르게 커진다.

**조합.** 서로 다른 $n$개에서 순서를 생각하지 않고 $r$개를 택하는 것을 $n$개에서 $r$개를 택하는 조합이라 하고, 그 수를 ${}_n\mathrm{C}_r$로 쓴다. 대표 $2$명을 뽑을 때 "A, B"와 "B, A"는 같은 모임이므로 한 가지로 센다. **순서가 의미 있으면 순열, 뽑기만 하면 조합**이다.

## 공식·정리

**합의 법칙·곱의 법칙** (사건 $A$가 일어나는 경우 $m$가지, $B$가 일어나는 경우 $n$가지)

- 합의 법칙: $A$, $B$가 **동시에 일어나지 않을 때** ($A$ 또는 $B$의 경우의 수) $= m + n$. 겹치는 경우가 $k$가지 있으면 $m + n - k$.
- 곱의 법칙: $A$의 **각 경우마다** $B$가 $n$가지씩 일어날 때 ($A$와 $B$가 잇달아 일어나는 경우의 수) $= m \times n$.

**순열의 수** ($0 \le r \le n$, $n$은 자연수, $r$은 정수, 서로 다른 것 $n$개에서 중복 없이 택할 때)

$$
{}_n\mathrm{P}_r = \underbrace{n(n-1)(n-2)\cdots(n-r+1)}_{r\text{개}} = \frac{n!}{(n-r)!}
$$

- ${}_n\mathrm{P}_n = n!$, ${}_n\mathrm{P}_0 = 1$, $0! = 1$로 약속한다.

**조합의 수** ($0 \le r \le n$, 서로 다른 것 $n$개에서 중복 없이 택할 때)

$$
{}_n\mathrm{C}_r = \frac{{}_n\mathrm{P}_r}{r!} = \frac{n!}{r!\,(n-r)!}
$$

- ${}_n\mathrm{C}_0 = {}_n\mathrm{C}_n = 1$
- ${}_n\mathrm{C}_r = {}_n\mathrm{C}_{n-r}$
- ${}_n\mathrm{C}_r = {}_{n-1}\mathrm{C}_{r-1} + {}_{n-1}\mathrm{C}_r$ ($1 \le r < n$)

**자주 쓰는 셈법**

- "이웃하게": 이웃할 것들을 하나로 묶어 나열한 뒤, 묶음 안에서의 나열 수를 곱한다.
- "이웃하지 않게": 나머지를 먼저 세우고, 그 사이사이와 양 끝 자리에 넣는다.
- "적어도 하나": (전체 경우의 수) $-$ (하나도 없는 경우의 수).

## 왜 성립하는가

**${}_n\mathrm{P}_r$ 공식.** $r$개의 자리를 왼쪽부터 채운다. 첫째 자리에는 $n$개 중 아무거나 올 수 있어 $n$가지, 둘째 자리에는 이미 쓴 하나를 뺀 $n - 1$가지, …, $r$째 자리에는 $n - r + 1$가지가 가능하다.

```svg ₅P₃ 은 세 자리를 차례로 채우는 것. 첫째 자리 5가지, 둘째 자리 남은 4가지, 셋째 자리 남은 3가지라 5 × 4 × 3 = 60
<svg viewBox="0 0 440 140">
  <rect x="20" y="25" width="80" height="60" rx="6" class="s-base f-soft" stroke-width="1.5"/>
  <rect x="140" y="25" width="80" height="60" rx="6" class="s-base f-soft" stroke-width="1.5"/>
  <rect x="260" y="25" width="80" height="60" rx="6" class="s-base f-soft" stroke-width="1.5"/>
  <text x="60" y="64" text-anchor="middle" class="f-ac" font-size="22">5</text>
  <text x="180" y="64" text-anchor="middle" class="f-ac" font-size="22">4</text>
  <text x="300" y="64" text-anchor="middle" class="f-ac" font-size="22">3</text>
  <text x="120" y="64" text-anchor="middle" class="f-base" font-size="20">×</text>
  <text x="240" y="64" text-anchor="middle" class="f-base" font-size="20">×</text>
  <text x="390" y="64" text-anchor="middle" class="f-base" font-size="20">= 60</text>
  <text x="60" y="110" text-anchor="middle" class="f-mute" font-size="13">첫째 자리</text>
  <text x="180" y="110" text-anchor="middle" class="f-mute" font-size="13">둘째 자리</text>
  <text x="300" y="110" text-anchor="middle" class="f-mute" font-size="13">셋째 자리</text>
  <text x="60" y="128" text-anchor="middle" class="f-mute" font-size="12">5개 중</text>
  <text x="180" y="128" text-anchor="middle" class="f-mute" font-size="12">1개 쓰고 남은 4개</text>
  <text x="300" y="128" text-anchor="middle" class="f-mute" font-size="12">2개 쓰고 남은 3개</text>
</svg>
```

곱의 법칙에 따라

$$
{}_n\mathrm{P}_r = n(n-1)\cdots(n-r+1) = \frac{n(n-1)\cdots(n-r+1)\cdot(n-r)!}{(n-r)!} = \frac{n!}{(n-r)!}
$$

이다. 분자와 분모에 $(n-r)!$을 곱한 것뿐이다.

**$0! = 1$로 약속하는 이유.** $r = n$이면 위 식은 ${}_n\mathrm{P}_n = \dfrac{n!}{0!}$이 된다. 그런데 $n$개를 모두 나열하는 방법은 $n!$가지이므로 이 식이 맞으려면 $0! = 1$이어야 한다. 또 $n! = n \times (n-1)!$이라는 관계에 $n = 1$을 넣으면 $1! = 1 \times 0!$이므로 역시 $0! = 1$이 자연스럽다. $0!$은 계산 결과가 아니라 공식이 끝까지 성립하도록 정한 **약속**이다.

**${}_n\mathrm{C}_r = \dfrac{{}_n\mathrm{P}_r}{r!}$ 유도.** $n$개에서 $r$개를 택해 나열하는 일을 두 단계로 나눈다. ① 순서 없이 $r$개를 고른다(${}_n\mathrm{C}_r$가지). ② 고른 $r$개를 일렬로 세운다($r!$가지). 곱의 법칙으로 ${}_n\mathrm{P}_r = {}_n\mathrm{C}_r \times r!$이므로

$$
{}_n\mathrm{C}_r = \frac{{}_n\mathrm{P}_r}{r!} = \frac{n!}{r!\,(n-r)!}
$$

즉 조합 하나는 순열 $r!$개를 한 묶음으로 본 것이다. 아래는 A, B, C, D 네 명에서 두 명을 뽑는 경우다. 순서 있게 나열한 $12$가지가 $2! = 2$개씩 짝지어 $6$묶음이 된다.

```svg A, B, C, D 에서 2명을 순서 있게 나열하는 12가지(₄P₂)는 같은 두 사람끼리 2개씩 묶여 6묶음(₄C₂)이 된다
<svg viewBox="0 0 480 170">
  <rect x="14" y="16" width="64" height="84" rx="8" class="s-base f-surf" stroke-width="1.5"/>
  <rect x="92" y="16" width="64" height="84" rx="8" class="s-base f-surf" stroke-width="1.5"/>
  <rect x="170" y="16" width="64" height="84" rx="8" class="s-base f-surf" stroke-width="1.5"/>
  <rect x="248" y="16" width="64" height="84" rx="8" class="s-base f-surf" stroke-width="1.5"/>
  <rect x="326" y="16" width="64" height="84" rx="8" class="s-base f-surf" stroke-width="1.5"/>
  <rect x="404" y="16" width="64" height="84" rx="8" class="s-base f-surf" stroke-width="1.5"/>
  <text x="46" y="48" text-anchor="middle" class="f-base" font-size="16">AB</text>
  <text x="46" y="82" text-anchor="middle" class="f-base" font-size="16">BA</text>
  <text x="124" y="48" text-anchor="middle" class="f-base" font-size="16">AC</text>
  <text x="124" y="82" text-anchor="middle" class="f-base" font-size="16">CA</text>
  <text x="202" y="48" text-anchor="middle" class="f-base" font-size="16">AD</text>
  <text x="202" y="82" text-anchor="middle" class="f-base" font-size="16">DA</text>
  <text x="280" y="48" text-anchor="middle" class="f-base" font-size="16">BC</text>
  <text x="280" y="82" text-anchor="middle" class="f-base" font-size="16">CB</text>
  <text x="358" y="48" text-anchor="middle" class="f-base" font-size="16">BD</text>
  <text x="358" y="82" text-anchor="middle" class="f-base" font-size="16">DB</text>
  <text x="436" y="48" text-anchor="middle" class="f-base" font-size="16">CD</text>
  <text x="436" y="82" text-anchor="middle" class="f-base" font-size="16">DC</text>
  <text x="46" y="124" text-anchor="middle" class="f-ac" font-size="13">{A, B}</text>
  <text x="124" y="124" text-anchor="middle" class="f-ac" font-size="13">{A, C}</text>
  <text x="202" y="124" text-anchor="middle" class="f-ac" font-size="13">{A, D}</text>
  <text x="280" y="124" text-anchor="middle" class="f-ac" font-size="13">{B, C}</text>
  <text x="358" y="124" text-anchor="middle" class="f-ac" font-size="13">{B, D}</text>
  <text x="436" y="124" text-anchor="middle" class="f-ac" font-size="13">{C, D}</text>
  <text x="240" y="158" text-anchor="middle" class="f-base" font-size="14">₄P₂ = 12 = ₄C₂ × 2! = 6 × 2</text>
</svg>
```

**${}_n\mathrm{C}_r = {}_n\mathrm{C}_{n-r}$.** $n$개에서 가져갈 $r$개를 고르는 것은, 남겨 둘 $n - r$개를 고르는 것과 일대일로 대응한다. 식으로도 $\dfrac{n!}{(n-r)!\,r!}$과 $\dfrac{n!}{r!\,(n-r)!}$이 같다.

**${}_n\mathrm{C}_r = {}_{n-1}\mathrm{C}_{r-1} + {}_{n-1}\mathrm{C}_r$.** 특정한 한 원소 $a$에 주목한다. $a$를 포함하는 선택은 나머지 $n-1$개에서 $r-1$개를 고르면 되고, $a$를 포함하지 않는 선택은 나머지 $n-1$개에서 $r$개를 고르면 된다. 두 경우는 동시에 일어나지 않으므로 합의 법칙으로 더한다.

## 대표 예제

**예제 1 (기본).** $1,\ 2,\ 3,\ 4,\ 5$가 하나씩 적힌 카드 $5$장 중 $3$장을 뽑아 세 자리 자연수를 만든다. (1) 만들 수 있는 수는 몇 개인가? (2) 그중 짝수는 몇 개인가?

풀이 전략: 카드를 자리에 놓는 순서가 수를 바꾸므로 순열이다. 조건이 있는 자리(일의 자리)를 먼저 채운다.

(1) 서로 다른 $5$개에서 $3$개를 택해 나열하므로 ${}_5\mathrm{P}_3 = 5 \times 4 \times 3 = 60$.

(2) 일의 자리가 $2$ 또는 $4$이어야 하므로 $2$가지. 나머지 $4$장에서 백의 자리와 십의 자리를 채우는 방법은 ${}_4\mathrm{P}_2 = 12$. 곱의 법칙으로 $2 \times 12 = 24$.

확인: 일의 자리에 올 수 있는 $5$개 숫자는 대칭적으로 똑같이 $60 \div 5 = 12$번씩 나타나므로, 짝수는 $12 \times 2 = 24$개.

**예제 2 (기본).** 분식집에 김밥 $4$종류, 라면 $3$종류, 음료 $2$종류가 있다. 김밥과 라면 중 **한 가지**를 고르고, 음료를 **하나** 곁들이는 방법의 수를 구하시오.

풀이 전략: "김밥 또는 라면"은 동시에 고르지 않으므로 합의 법칙, 그다음 "음료를 이어서" 고르므로 곱의 법칙이다.

1. 주메뉴: 김밥 또는 라면이므로 $4 + 3 = 7$가지.
2. 주메뉴 각각에 음료 $2$가지가 붙으므로 $7 \times 2 = 14$가지.

확인: 김밥 쪽 $4 \times 2 = 8$, 라면 쪽 $3 \times 2 = 6$으로 나눠 세어도 $8 + 6 = 14$.

**예제 3 (표준).** 남학생 $4$명, 여학생 $3$명 중에서 대표 $3$명을 뽑는다. (1) 뽑는 방법의 수 (2) 남학생 $2$명, 여학생 $1$명을 뽑는 방법의 수 (3) 여학생이 적어도 $1$명 포함되는 방법의 수를 구하시오.

풀이 전략: 대표는 역할이 없으므로 조합이다. "적어도"는 전체에서 반대 경우(여학생 $0$명)를 뺀다.

(1) ${}_7\mathrm{C}_3 = \dfrac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35$.

(2) 남학생 $2$명을 고르고 **이어서** 여학생 $1$명을 고르므로 곱한다. ${}_4\mathrm{C}_2 \times {}_3\mathrm{C}_1 = 6 \times 3 = 18$.

(3) 전체에서 남학생만 뽑는 경우를 뺀다. ${}_7\mathrm{C}_3 - {}_4\mathrm{C}_3 = 35 - 4 = 31$.

확인: 여학생 수로 나누어 직접 세면 여 $1$명 $18$, 여 $2$명 ${}_4\mathrm{C}_1 \times {}_3\mathrm{C}_2 = 12$, 여 $3$명 $1$. 합은 $18 + 12 + 1 = 31$.

**예제 4 (응용).** 동아리 회원 $8$명 중에서 (1) 회장, 부회장, 총무를 한 명씩 뽑는 방법의 수 (2) 축제에 나갈 대표 $3$명을 뽑는 방법의 수를 구하고, (3) 두 답 사이의 관계를 설명하시오.

풀이 전략: 역할이 다르면 같은 세 사람이라도 자리를 바꾸면 다른 경우이므로 순열, 역할이 없으면 조합이다.

(1) ${}_8\mathrm{P}_3 = 8 \times 7 \times 6 = 336$.

(2) ${}_8\mathrm{C}_3 = \dfrac{8 \times 7 \times 6}{3 \times 2 \times 1} = 56$.

(3) 대표 $3$명을 한 번 정하면, 그 세 사람에게 회장·부회장·총무를 나눠 주는 방법이 $3! = 6$가지다. 그래서 $336 = 56 \times 6$이다. ${}_n\mathrm{P}_r = {}_n\mathrm{C}_r \times r!$를 실제 상황으로 확인한 것이다.

**예제 5 (심화).** 남학생 $3$명과 여학생 $3$명이 일렬로 설 때, (1) 여학생끼리 서로 이웃하지 않게 서는 방법의 수 (2) 남학생과 여학생이 교대로 서는 방법의 수를 구하시오.

풀이 전략: "이웃하지 않게"는 조건이 없는 쪽(남학생)을 먼저 세우고, 그 사이사이와 양 끝에 조건이 있는 쪽(여학생)을 넣는다.

(1) 남학생 $3$명을 먼저 세운다: $3! = 6$. 남학생 사이사이와 양 끝, 아래 그림의 $4$자리 중 $3$자리에 여학생을 순서 있게 세운다: ${}_4\mathrm{P}_3 = 24$. 답은 $6 \times 24 = 144$.

```svg 남학생 3명을 먼저 세우면 사이사이와 양 끝에 빈자리 4개가 생긴다. 여학생 3명을 이 중 3곳에 한 명씩 세우면 여학생끼리 이웃하지 않는다
<svg viewBox="0 0 440 120">
  <circle cx="40" cy="45" r="19" class="s-ac" fill="none" stroke-width="2" stroke-dasharray="4 3"/>
  <rect x="78" y="23" width="44" height="44" rx="6" class="s-base f-surf" stroke-width="1.5"/>
  <circle cx="160" cy="45" r="19" class="s-ac" fill="none" stroke-width="2" stroke-dasharray="4 3"/>
  <rect x="198" y="23" width="44" height="44" rx="6" class="s-base f-surf" stroke-width="1.5"/>
  <circle cx="280" cy="45" r="19" class="s-ac" fill="none" stroke-width="2" stroke-dasharray="4 3"/>
  <rect x="318" y="23" width="44" height="44" rx="6" class="s-base f-surf" stroke-width="1.5"/>
  <circle cx="400" cy="45" r="19" class="s-ac" fill="none" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="100" y="51" text-anchor="middle" class="f-base" font-size="16">남</text>
  <text x="220" y="51" text-anchor="middle" class="f-base" font-size="16">남</text>
  <text x="340" y="51" text-anchor="middle" class="f-base" font-size="16">남</text>
  <text x="40" y="50" text-anchor="middle" class="f-ac" font-size="14">①</text>
  <text x="160" y="50" text-anchor="middle" class="f-ac" font-size="14">②</text>
  <text x="280" y="50" text-anchor="middle" class="f-ac" font-size="14">③</text>
  <text x="400" y="50" text-anchor="middle" class="f-ac" font-size="14">④</text>
  <text x="220" y="105" text-anchor="middle" class="f-base" font-size="14">빈자리 4곳 중 3곳에 여학생을 순서 있게: ₄P₃ = 24</text>
</svg>
```

확인: $6$자리 중 서로 이웃하지 않는 $3$자리를 고르는 방법은 (1,3,5), (1,3,6), (1,4,6), (2,4,6)의 $4$가지다. 여기에 여학생 배열 $3!$, 남학생 배열 $3!$을 곱하면 $4 \times 6 \times 6 = 144$로 같다.

(2) 줄의 모양은 "남여남여남여"와 "여남여남여남" $2$가지. 각각 남학생 배열 $3!$, 여학생 배열 $3!$이므로 $2 \times 6 \times 6 = 72$.

확인: (2)의 경우는 모두 여학생끼리 이웃하지 않으므로 (1)의 $144$가지에 포함되어야 하고, 실제로 $72 < 144$이다. 위의 네 자리 조합 중 (1,3,5)와 (2,4,6)이 교대 배열에 해당하므로 $2 \times 36 = 72$로도 확인된다.

### 스스로 확인

1. ${}_6\mathrm{P}_2 + {}_6\mathrm{C}_2$의 값을 구하시오.
2. $0,\ 1,\ 2,\ 3,\ 4$가 하나씩 적힌 카드 $5$장 중 $3$장으로 만들 수 있는 세 자리 자연수의 개수를 구하시오.
3. A, B를 포함한 $6$명이 일렬로 설 때 A와 B가 이웃하는 방법의 수를 구하시오.

<details>
<summary>정답과 풀이</summary>

1. ${}_6\mathrm{P}_2 = 6 \times 5 = 30$, ${}_6\mathrm{C}_2 = \dfrac{30}{2} = 15$이므로 $45$.
2. 백의 자리에는 $0$을 뺀 $4$가지, 십의 자리에는 남은 $4$가지($0$ 포함), 일의 자리에는 남은 $3$가지. $4 \times 4 \times 3 = 48$. (확인: ${}_5\mathrm{P}_3 - {}_4\mathrm{P}_2 = 60 - 12 = 48$.)
3. A와 B를 한 묶음으로 보면 $5$명을 세우는 것과 같아 $5! = 120$. 묶음 안에서 AB, BA $2$가지이므로 $120 \times 2 = 240$.

</details>

## 자주 하는 실수와 오개념

**실수 1. 순열을 써야 할 곳에 조합을, 조합을 써야 할 곳에 순열을 쓴다.**

- **왜 틀리는가:** "$5$명 중 $2$명을 뽑는다"는 말만 보고 늘 ${}_5\mathrm{C}_2$를 쓴다. 회장·부회장처럼 뽑힌 사람의 역할이 다르면 순서가 생기므로 ${}_5\mathrm{P}_2 = 20$이 맞고, 단순한 대표 $2$명이면 ${}_5\mathrm{C}_2 = 10$이다.
- **어떻게 바로잡는가:** 뽑힌 두 사람의 자리를 바꿔 본다. 바꿨을 때 다른 경우가 되면 순열, 같은 경우이면 조합이다.

**실수 2. "적어도 1명"을 한 명 먼저 뽑고 나머지를 뽑는 식으로 센다.**

- **왜 틀리는가:** 예제 3 (3)을 "여학생 $1$명 먼저 ${}_3\mathrm{C}_1$, 나머지 $6$명에서 $2$명 ${}_6\mathrm{C}_2$"로 계산해 $3 \times 15 = 45$를 얻는다. 여학생 A를 먼저 뽑고 B를 나중에 뽑은 경우와 B를 먼저, A를 나중에 뽑은 경우가 같은 모임인데 두 번 세어졌다.
- **어떻게 바로잡는가:** "적어도"가 나오면 여사건(하나도 없는 경우)을 전체에서 빼거나, 개수별로 경우를 나누어 더한다. 두 방법의 답이 같은지 확인한다.

**실수 3. 합의 법칙과 곱의 법칙을 섞어 쓴다.**

- **왜 틀리는가:** "버스 $3$가지 또는 기차 $2$가지로 갈 수 있다"를 $3 \times 2$로, "A에서 B로 $3$가지, B에서 C로 $2$가지"를 $3 + 2$로 계산한다. 또 겹치는 경우가 있는데 그냥 더하기도 한다.
- **어떻게 바로잡는가:** 두 단계를 **차례로 모두** 거쳐야 하면 곱, 둘 중 **하나만** 일어나면 합이다. 합의 법칙은 동시에 일어나지 않을 때만 쓸 수 있으므로, 겹치는 경우가 있으면 그만큼 빼 준다.

**실수 4. 숫자 카드에 $0$이 있을 때 맨 앞자리에 $0$이 오는 경우를 빼지 않는다.**

- **왜 틀리는가:** $0,\ 1,\ 2,\ 3$으로 세 자리 수를 만들 때 ${}_4\mathrm{P}_3 = 24$라고 답한다. $012$는 세 자리 수가 아니다.
- **어떻게 바로잡는가:** 맨 앞자리부터 채운다. 백의 자리 $3$가지($0$ 제외), 나머지 두 자리 ${}_3\mathrm{P}_2 = 6$가지로 $18$개다. 또는 $24$에서 $0$이 맨 앞인 ${}_3\mathrm{P}_2 = 6$을 빼도 $18$이다.

**실수 5. "이웃하게"에서 묶음 안의 순서를 곱하지 않는다.**

- **왜 틀리는가:** A, B를 묶어 $5! = 120$만 답한다. 묶음 안에서도 "AB"와 "BA"는 다른 줄이므로 $2! = 2$가지가 더 있다.
- **어떻게 바로잡는가:** 묶음을 만들 때마다 "묶음 밖 배열 수 $\times$ 묶음 안 배열 수"를 함께 적는다. 바른 답은 $120 \times 2 = 240$이다.

## 앞뒤 학년 연계

중2 「확률」에서 사건이 일어나는 경우의 수를 표나 나뭇가지 그림으로 세던 것을 합의 법칙·곱의 법칙과 공식으로 정리한 단원이다. 다음 공통수학2 「집합」에서는 원소가 $n$개인 집합에서 원소 $r$개짜리 부분집합의 개수가 바로 ${}_n\mathrm{C}_r$이라는 것으로 다시 만나고, 이후 확률과 통계에서 이항정리와 확률 계산의 기본 도구가 된다.
