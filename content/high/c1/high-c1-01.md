---
id: high-c1-01
title: 다항식의 연산
level: 고등학교
grade: 공통수학1
area: 다항식
keywords: ["다항식의 덧셈·뺄셈·곱셈", "곱셈 공식", "다항식의 나눗셈", "조립제법", "조립제법 원리", "다항식 나눗셈 나머지 차수", "세제곱 공식", "a³+b³ 공식", "곱셈 공식 변형 x+y xy", "조립제법 하는 법"]
prerequisites: ["mid-2-1-02", "mid-3-1-02"]
next: ["high-c1-02"]
status: draft
note: 2022 개정 공통수학1의 첫 단원으로, 2015 개정 수학(상)의 '다항식의 연산'과 내용이 거의 같다.
---

## 핵심 개념

> **한 줄 요약.** 다항식은 "문자가 들어간 수"처럼 더하고, 빼고, 곱하고, 나눌 수 있다. 자주 나오는 곱셈은 공식으로 외워 두고, 나눗셈은 $A = BQ + R$ 한 줄로 정리한다.

다항식의 계산은 결국 자연수 계산을 문자로 옮긴 것이다. $23 \times 14$를 $(20+3)(10+4)$로 쪼개 계산하듯 다항식의 곱셈도 분배법칙으로 쪼개고, $47 \div 5 = 9 \cdots 2$를 $47 = 5 \times 9 + 2$로 쓰듯 다항식의 나눗셈도 "나누는 식 $\times$ 몫 $+$ 나머지"로 쓴다. 차이가 있다면 자릿수 대신 **차수**를 기준으로 줄을 세운다는 것뿐이다.

**왜 배우는가.** 상자의 모서리를 조금 늘렸을 때 부피가 얼마나 커지는지, 정사각형 땅의 한 변을 늘렸을 때 넓이가 얼마나 늘어나는지 같은 계산은 모두 다항식의 곱셈이다. 또 이 단원의 나눗셈과 조립제법은 바로 다음 단원의 나머지정리·인수분해, 그 뒤의 삼차방정식 풀이로 그대로 이어지므로 공통수학1 전체의 계산 기초가 된다.

**다항식의 정리.** 다항식을 한 문자에 대해 차수가 높은 항부터 쓰는 것을 **내림차순**, 낮은 항부터 쓰는 것을 **오름차순**이라고 한다. 문자가 여러 개일 때는 기준이 되는 문자를 하나 정하고, 나머지 문자는 계수처럼 취급한다. 덧셈과 뺄셈은 동류항끼리 계수를 더하거나 빼는 것이고, 교환법칙·결합법칙이 성립한다. 뺄셈 $A - B$는 $B$의 **모든 항의 부호를 바꿔** 더하는 것이다.

**다항식의 곱셈.** 분배법칙으로 한 다항식의 각 항을 다른 다항식의 각 항에 모두 곱한 뒤 동류항을 정리한다. 자주 나오는 꼴은 미리 **곱셈 공식**으로 정리해 둔다. 중학교에서 배운 제곱 공식에 세제곱 공식과 세 문자 공식이 더해진다. 곱셈 공식은 넓이(또는 부피)를 나누어 세는 것과 같다.

```svg 한 변이 a+b인 정사각형은 a², b² 정사각형과 넓이 ab인 직사각형 2개로 나뉜다. 그래서 (a+b)² = a² + 2ab + b²
<svg viewBox="0 0 320 290">
  <rect x="40" y="20" width="150" height="150" class="s-base f-surf" stroke-width="1.5"/>
  <rect x="190" y="20" width="90" height="150" class="s-base f-soft" stroke-width="1.5"/>
  <rect x="40" y="170" width="150" height="90" class="s-base f-soft" stroke-width="1.5"/>
  <rect x="190" y="170" width="90" height="90" class="s-base f-surf" stroke-width="1.5"/>
  <text x="115" y="14" text-anchor="middle" class="f-base" font-size="15" font-style="italic">a</text>
  <text x="235" y="14" text-anchor="middle" class="f-base" font-size="15" font-style="italic">b</text>
  <text x="30" y="100" text-anchor="end" class="f-base" font-size="15" font-style="italic">a</text>
  <text x="30" y="220" text-anchor="end" class="f-base" font-size="15" font-style="italic">b</text>
  <text x="115" y="100" text-anchor="middle" class="f-base" font-size="16">a²</text>
  <text x="235" y="100" text-anchor="middle" class="f-ac" font-size="16">ab</text>
  <text x="115" y="220" text-anchor="middle" class="f-ac" font-size="16">ab</text>
  <text x="235" y="220" text-anchor="middle" class="f-base" font-size="16">b²</text>
  <text x="160" y="284" text-anchor="middle" class="f-base" font-size="14">(a+b)² = a² + 2ab + b²</text>
</svg>
```

그림에서 주황색 직사각형 두 개($2ab$)를 빼먹으면 $(a+b)^2 = a^2 + b^2$이라는 흔한 실수가 된다. 변형 공식 $a^2 + b^2 = (a+b)^2 - 2ab$도 "큰 정사각형에서 주황 부분 두 개를 뺀다"로 읽으면 바로 이해된다.

**다항식의 나눗셈.** 다항식 $A$를 $0$이 아닌 다항식 $B$로 나누는 것은 자연수의 나눗셈과 같은 방식이다. 몫의 최고차항을 하나씩 정해 $B$와 곱해서 빼는 일을 반복하고, 남은 식의 차수가 $B$의 차수보다 작아지면 멈춘다. 이때 남은 식이 **나머지**다.

**조립제법.** 일차식 $x - a$로 나눌 때는 계수만 늘어놓고 곱하고 더하는 계산으로 몫과 나머지를 빠르게 구할 수 있다. 이것을 **조립제법**이라고 한다. 차수가 빠진 항은 계수를 $0$으로 적어 자리를 채운다. 아래는 $x^3 - 2x + 5$를 $x - 1$로 나누는 조립제법이다. 맨 앞 계수를 그대로 내리고, "아래 칸 수 $\times 1$을 다음 계수에 더한다"를 반복한다.

```svg 조립제법으로 x³ − 2x + 5 를 x − 1 로 나누기. 빠진 x² 자리에 0을 쓰고, 마지막 칸 4가 나머지, 앞의 1, 1, −1이 몫 x² + x − 1 의 계수
<svg viewBox="0 0 380 190">
  <text x="40" y="45" text-anchor="middle" class="f-ac" font-size="17">1</text>
  <line x1="62" y1="20" x2="62" y2="140" class="s-base" stroke-width="1.5"/>
  <text x="110" y="45" text-anchor="middle" class="f-base" font-size="17">1</text>
  <text x="180" y="45" text-anchor="middle" class="f-base" font-size="17">0</text>
  <text x="250" y="45" text-anchor="middle" class="f-base" font-size="17">−2</text>
  <text x="320" y="45" text-anchor="middle" class="f-base" font-size="17">5</text>
  <text x="180" y="88" text-anchor="middle" class="f-mute" font-size="16">1</text>
  <text x="250" y="88" text-anchor="middle" class="f-mute" font-size="16">1</text>
  <text x="320" y="88" text-anchor="middle" class="f-mute" font-size="16">−1</text>
  <line x1="62" y1="102" x2="360" y2="102" class="s-base" stroke-width="1.5"/>
  <text x="110" y="130" text-anchor="middle" class="f-base" font-size="17">1</text>
  <text x="180" y="130" text-anchor="middle" class="f-base" font-size="17">1</text>
  <text x="250" y="130" text-anchor="middle" class="f-base" font-size="17">−1</text>
  <rect x="296" y="110" width="48" height="30" class="s-ac" fill="none" stroke-width="2"/>
  <text x="320" y="130" text-anchor="middle" class="f-ac" font-size="17">4</text>
  <line x1="122" y1="122" x2="166" y2="92" class="s-mute" stroke-width="1" marker-end="url(#ah)"/>
  <line x1="192" y1="122" x2="236" y2="92" class="s-mute" stroke-width="1" marker-end="url(#ah)"/>
  <line x1="262" y1="122" x2="306" y2="92" class="s-mute" stroke-width="1" marker-end="url(#ah)"/>
  <text x="180" y="172" text-anchor="middle" class="f-base" font-size="13">몫: x² + x − 1</text>
  <text x="320" y="172" text-anchor="middle" class="f-ac" font-size="13">나머지</text>
</svg>
```

비스듬한 화살표는 "아래 칸 수에 $1$을 곱해 다음 열 가운데 칸에 쓴다"는 뜻이고, 각 열은 위아래를 더해 아랫줄을 채운다. 결과는 $x^3 - 2x + 5 = (x-1)(x^2 + x - 1) + 4$이다.

## 공식·정리

**곱셈 공식** (모든 실수 $a,\,b,\,c,\,x$에 대해 성립하는 항등식. 문자 대신 다항식을 넣어도 성립한다)

- $(a+b)^2 = a^2 + 2ab + b^2$, $\;(a-b)^2 = a^2 - 2ab + b^2$
- $(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$
- $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$, $\;(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$
- $(a+b)(a^2 - ab + b^2) = a^3 + b^3$, $\;(a-b)(a^2 + ab + b^2) = a^3 - b^3$
- $(x+a)(x+b)(x+c) = x^3 + (a+b+c)x^2 + (ab+bc+ca)x + abc$

**곱셈 공식의 변형** (합 $a+b$, 곱 $ab$만 알 때 쓴다. $a$, $b$를 따로 구할 필요가 없다)

- $a^2 + b^2 = (a+b)^2 - 2ab = (a-b)^2 + 2ab$
- $a^3 + b^3 = (a+b)^3 - 3ab(a+b)$, $\;a^3 - b^3 = (a-b)^3 + 3ab(a-b)$
- $a^2 + b^2 + c^2 = (a+b+c)^2 - 2(ab+bc+ca)$
- $x \ne 0$일 때 $x^2 + \dfrac{1}{x^2} = \left(x + \dfrac{1}{x}\right)^2 - 2$ ($b = \dfrac{1}{x}$이면 $ab = 1$인 경우)

**다항식의 나눗셈** ($B \ne 0$)

$$
A = BQ + R \qquad (R\text{의 차수} < B\text{의 차수})
$$

$Q$는 몫, $R$은 나머지다. 나머지가 $0$이면 $A$는 $B$로 **나누어떨어진다**고 한다. $B$가 일차식이면 나머지는 상수, 이차식이면 나머지는 일차 이하의 식($px + q$ 꼴)이다. 이 등식은 $x$에 어떤 값을 넣어도 성립하는 **항등식**이다.

**조립제법** (나누는 식이 일차식 $x - a$일 때만 쓸 수 있다)

- 나누어지는 식을 내림차순으로 정리하고, 빠진 차수의 계수는 $0$으로 적는다.
- 왼쪽에는 $x - a = 0$이 되는 값 $a$를 쓴다. $x + 2$로 나누면 $a = -2$다.
- 마지막 칸이 나머지, 그 앞의 수들이 몫의 계수(차수가 하나 낮아짐)다.

**일차식 $ax + b$로 나누기** ($a \ne 0$): $x + \dfrac{b}{a}$로 조립제법을 한 몫이 $Q'$, 나머지가 $R$이면

$$
A = \left(x + \frac{b}{a}\right)Q' + R = (ax + b)\cdot\frac{Q'}{a} + R
$$

이므로 실제 몫은 $\dfrac{Q'}{a}$이고 나머지는 $R$ 그대로다.

## 왜 성립하는가

**$(a+b+c)^2$ 공식.** 한 변이 $a + b + c$인 정사각형을 가로·세로 모두 $a$, $b$, $c$로 자르면 9조각이 생긴다. 대각선 위의 세 조각은 정사각형 $a^2$, $b^2$, $c^2$이고, 나머지 여섯 조각은 $ab$, $bc$, $ca$가 두 개씩이다.

```svg 한 변이 a+b+c인 정사각형을 9조각으로 자르면 대각선의 a², b², c²와 ab, bc, ca 직사각형이 두 개씩 생긴다
<svg viewBox="0 0 300 280">
  <rect x="40" y="20" width="120" height="120" class="s-base f-surf" stroke-width="1.5"/>
  <rect x="160" y="140" width="70" height="70" class="s-base f-surf" stroke-width="1.5"/>
  <rect x="230" y="210" width="50" height="50" class="s-base f-surf" stroke-width="1.5"/>
  <rect x="40" y="20" width="240" height="240" class="s-base" fill="none" stroke-width="2"/>
  <line x1="160" y1="20" x2="160" y2="260" class="s-base" stroke-width="1.5"/>
  <line x1="230" y1="20" x2="230" y2="260" class="s-base" stroke-width="1.5"/>
  <line x1="40" y1="140" x2="280" y2="140" class="s-base" stroke-width="1.5"/>
  <line x1="40" y1="210" x2="280" y2="210" class="s-base" stroke-width="1.5"/>
  <text x="100" y="14" text-anchor="middle" class="f-base" font-size="14" font-style="italic">a</text>
  <text x="195" y="14" text-anchor="middle" class="f-base" font-size="14" font-style="italic">b</text>
  <text x="255" y="14" text-anchor="middle" class="f-base" font-size="14" font-style="italic">c</text>
  <text x="30" y="85" text-anchor="end" class="f-base" font-size="14" font-style="italic">a</text>
  <text x="30" y="180" text-anchor="end" class="f-base" font-size="14" font-style="italic">b</text>
  <text x="30" y="240" text-anchor="end" class="f-base" font-size="14" font-style="italic">c</text>
  <text x="100" y="85" text-anchor="middle" class="f-base" font-size="15">a²</text>
  <text x="195" y="85" text-anchor="middle" class="f-ac" font-size="15">ab</text>
  <text x="255" y="85" text-anchor="middle" class="f-ac" font-size="15">ca</text>
  <text x="100" y="180" text-anchor="middle" class="f-ac" font-size="15">ab</text>
  <text x="195" y="180" text-anchor="middle" class="f-base" font-size="15">b²</text>
  <text x="255" y="180" text-anchor="middle" class="f-ac" font-size="14">bc</text>
  <text x="100" y="240" text-anchor="middle" class="f-ac" font-size="15">ca</text>
  <text x="195" y="240" text-anchor="middle" class="f-ac" font-size="14">bc</text>
  <text x="255" y="240" text-anchor="middle" class="f-base" font-size="15">c²</text>
</svg>
```

조각을 모두 더하면 $(a+b+c)^2 = a^2 + b^2 + c^2 + 2ab + 2bc + 2ca$이다. 그림은 $a,\,b,\,c$가 양수일 때의 모습이지만, 식으로 전개해도 똑같이 나오므로 모든 실수에서 성립한다.

**$(a+b)^3$ 공식.** 제곱 공식을 먼저 쓰고 한 번 더 분배한다.

$$
\begin{aligned}
(a+b)^3 &= (a+b)(a+b)^2 = (a+b)(a^2 + 2ab + b^2) \\
&= a^3 + 2a^2b + ab^2 + a^2b + 2ab^2 + b^3 \\
&= a^3 + 3a^2b + 3ab^2 + b^3
\end{aligned}
$$

$(a-b)^3$은 여기에 $b$ 대신 $-b$를 넣으면 된다. $b$가 홀수 번 곱해진 항($3a^2b$, $b^3$)만 부호가 바뀐다. 부피로 보면 한 모서리가 $a + b$인 정육면체를 잘랐을 때 정육면체 $a^3$, $b^3$ 하나씩과 직육면체 $a^2b$ 3개, $ab^2$ 3개가 나온다는 뜻이다.

**$a^3 + b^3$ 공식.** 좌변을 전개하면 가운데 항이 서로 지워진다.

$$
(a+b)(a^2 - ab + b^2) = a^3 - a^2b + ab^2 + a^2b - ab^2 + b^3 = a^3 + b^3
$$

**나머지의 차수 조건이 필요한 이유.** 조건이 없으면 $A = BQ + R$을 만족하는 $Q$, $R$이 무수히 많다. 예를 들어 $x^2 + 1 = (x-1)(x+1) + 2$이지만 $x^2 + 1 = (x-1)\cdot x + (x + 1)$도 등식으로는 참이다. "$R$의 차수 $< B$의 차수"라는 조건을 붙여야 몫과 나머지가 하나로 정해진다. 나눗셈을 "$B$의 차수보다 작아질 때까지" 계속하는 이유가 이것이다.

**조립제법의 원리.** 삼차식을 $x - a$로 나누는 경우를 보자. 몫을 $Q = px^2 + qx + r$, 나머지를 $R$이라 하면

$$
\begin{aligned}
c_3x^3 + c_2x^2 + c_1x + c_0 &= (x - a)(px^2 + qx + r) + R \\
&= px^3 + (q - ap)x^2 + (r - aq)x + (R - ar)
\end{aligned}
$$

계수를 맞추면 $p = c_3$, $q = c_2 + ap$, $r = c_1 + aq$, $R = c_0 + ar$이다. 즉 "앞 칸 결과에 $a$를 곱해 다음 계수에 더한다"를 반복하면 몫의 계수 $p,\,q,\,r$과 나머지 $R$이 차례로 나온다. 위의 조립제법 그림은 이 계산을 계수만으로 줄여 적은 것이다.

## 대표 예제

**예제 1 (기본).** 다음을 전개하시오. (1) $(2x - 1)^3$ (2) $(x+1)(x^2 - x + 1)$

풀이 전략: 식의 모양을 보고 맞는 공식을 고른 뒤, 문자 자리에 덩어리($2x$ 등)를 통째로 넣는다.

(1) $(a-b)^3$ 공식에 $a = 2x$, $b = 1$을 넣는다.

$$
(2x)^3 - 3(2x)^2\cdot 1 + 3(2x)\cdot 1^2 - 1^3 = 8x^3 - 12x^2 + 6x - 1
$$

확인: $x = 1$을 넣으면 좌변 $1^3 = 1$, 우변 $8 - 12 + 6 - 1 = 1$.

(2) $(a+b)(a^2 - ab + b^2)$ 꼴이고 $a = x$, $b = 1$이므로 $a^3 + b^3 = x^3 + 1$. 확인: $x = 2$이면 좌변 $3 \times 3 = 9$, 우변 $8 + 1 = 9$.

**예제 2 (표준).** $2x^3 - 3x^2 + x + 5$를 $x^2 - x + 1$로 나눈 몫과 나머지를 구하시오.

풀이 전략: 나누는 식이 이차식이라 조립제법을 쓸 수 없다. 최고차항끼리 나누어 몫의 항을 하나씩 정하고, 남은 식이 일차 이하가 될 때까지 반복한다.

1. 몫의 첫 항은 $\dfrac{2x^3}{x^2} = 2x$. $2x(x^2 - x + 1) = 2x^3 - 2x^2 + 2x$를 빼면 $(2x^3 - 3x^2 + x + 5) - (2x^3 - 2x^2 + 2x) = -x^2 - x + 5$가 남는다.
2. 다음 항은 $\dfrac{-x^2}{x^2} = -1$이고, $-1\cdot(x^2 - x + 1) = -x^2 + x - 1$을 빼면 $(-x^2 - x + 5) - (-x^2 + x - 1) = -2x + 6$이 남는다.
3. $-2x + 6$은 일차식이라 이차식 $x^2 - x + 1$보다 차수가 낮으므로 멈춘다.

몫 $Q = 2x - 1$, 나머지 $R = -2x + 6$.

확인: $(x^2 - x + 1)(2x - 1) = 2x^3 - x^2 - 2x^2 + x + 2x - 1 = 2x^3 - 3x^2 + 3x - 1$이고, 여기에 $-2x + 6$을 더하면 $2x^3 - 3x^2 + x + 5$로 원래 식이 된다.

**예제 3 (표준).** $2x^3 + x^2 - x + 3$을 $2x - 1$로 나눈 몫과 나머지를 조립제법으로 구하시오.

풀이 전략: $2x - 1 = 0$이 되는 $x = \dfrac{1}{2}$로 조립제법을 한 뒤, 나누는 식이 $x - \dfrac{1}{2}$의 $2$배이므로 몫만 $2$로 나눈다.

1. 계수 $2,\ 1,\ -1,\ 3$을 적고 $2$를 그대로 내린다.
2. $2 \times \dfrac{1}{2} = 1$을 다음 계수 $1$에 더해 $2$.
3. $2 \times \dfrac{1}{2} = 1$을 $-1$에 더해 $0$.
4. $0 \times \dfrac{1}{2} = 0$을 $3$에 더해 $3$. 이것이 나머지다.

따라서

$$
2x^3 + x^2 - x + 3 = \left(x - \frac{1}{2}\right)(2x^2 + 2x) + 3 = (2x - 1)(x^2 + x) + 3
$$

몫은 $x^2 + x$, 나머지는 $3$. 확인: $(2x-1)(x^2+x) = 2x^3 + 2x^2 - x^2 - x = 2x^3 + x^2 - x$이고 $3$을 더하면 원래 식이다.

**예제 4 (응용).** 한 모서리의 길이가 $x\,\text{cm}$인 정육면체 모양 상자가 있다. 모서리를 모두 $1\,\text{cm}$씩 늘린 상자를 새로 만들면 부피는 몇 $\text{cm}^3$ 늘어나는지 $x$에 대한 식으로 나타내고, $x = 10$일 때의 값을 구하시오.

풀이 전략: 새 부피 $(x+1)^3$을 세제곱 공식으로 전개해 원래 부피 $x^3$을 뺀다.

1. 새 상자의 부피는 $(x+1)^3 = x^3 + 3x^2 + 3x + 1\,(\text{cm}^3)$.
2. 늘어난 부피는 $(x^3 + 3x^2 + 3x + 1) - x^3 = 3x^2 + 3x + 1\,(\text{cm}^3)$.
3. $x = 10$이면 $3 \times 100 + 3 \times 10 + 1 = 331\,\text{cm}^3$.

확인: $11^3 - 10^3 = 1331 - 1000 = 331$로 같다. 늘어난 부분은 $x^2$짜리 판 3장, $x$짜리 막대 3개, $1$짜리 작은 정육면체 1개라는 것이 식 $3x^2 + 3x + 1$에 그대로 드러난다.

**예제 5 (심화).** $x + y = 3$, $xy = 1$일 때 $x^2 + y^2$과 $x^3 + y^3$의 값을 구하시오.

풀이 전략: $x$, $y$를 직접 구하면 무리수가 나와 계산이 복잡하다. 합과 곱만으로 나타내는 변형 공식을 쓴다.

1. $x^2 + y^2 = (x+y)^2 - 2xy = 9 - 2 = 7$.
2. $x^3 + y^3 = (x+y)^3 - 3xy(x+y) = 27 - 3\cdot 1\cdot 3 = 18$.

다른 풀이: $x^3 + y^3 = (x+y)(x^2 - xy + y^2) = 3 \times (7 - 1) = 18$. 두 방법의 답이 같다.

### 스스로 확인

1. $(x - 2)^3$을 전개하시오.
2. $x^3 + 2x^2 - 5x + 1$을 $x + 2$로 나눈 몫과 나머지를 조립제법으로 구하시오.
3. $a - b = 2$, $ab = 3$일 때 $a^3 - b^3$의 값을 구하시오.

<details>
<summary>정답과 풀이</summary>

1. $(a-b)^3$ 공식에 $a = x$, $b = 2$를 넣으면 $x^3 - 3\cdot x^2 \cdot 2 + 3 \cdot x \cdot 4 - 8 = x^3 - 6x^2 + 12x - 8$. ($x = 3$을 넣으면 양쪽 모두 $1$.)
2. $x + 2 = 0$이 되는 $-2$로 조립제법: 계수 $1,\ 2,\ -5,\ 1$에서 $1$; $1 \times (-2) + 2 = 0$; $0 \times (-2) - 5 = -5$; $-5 \times (-2) + 1 = 11$. 몫 $x^2 - 5$, 나머지 $11$. (확인: $(x+2)(x^2-5) + 11 = x^3 + 2x^2 - 5x - 10 + 11$.)
3. $a^3 - b^3 = (a-b)^3 + 3ab(a-b) = 8 + 3 \cdot 3 \cdot 2 = 26$. (다른 풀이: $a^2 + b^2 = 4 + 6 = 10$이므로 $(a-b)(a^2 + ab + b^2) = 2 \times 13 = 26$.)

</details>

## 자주 하는 실수와 오개념

**실수 1. $(a+b)^3 = a^3 + b^3$이라고 쓴다.**

- **왜 틀리는가:** 거듭제곱이 덧셈에 분배된다고 착각한 것이다. $a = b = 1$이면 $(1+1)^3 = 8$이지만 $1^3 + 1^3 = 2$로 다르다.
- **어떻게 바로잡는가:** $(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$로 가운데 두 항이 반드시 생긴다는 것을 기억하고, 헷갈리면 $a = b = 1$을 넣어 검산한다. 넓이 그림에서 $2ab$ 조각이 빠지는 것과 같은 실수다.

**실수 2. 뺄셈에서 뒤 식의 첫 항만 부호를 바꾼다.**

- **왜 틀리는가:** $(3x^2 + x) - (x^2 - 2x + 1)$을 $3x^2 + x - x^2 - 2x + 1$로 쓴다. 괄호 앞의 $-$는 괄호 안 **모든 항**에 곱해지는 $-1$인데 첫 항에만 적용했다.
- **어떻게 바로잡는가:** 괄호를 풀기 전에 $-1 \times (\ \ )$로 바꿔 쓰고 분배한다. 바른 답은 $3x^2 + x - x^2 + 2x - 1 = 2x^2 + 3x - 1$이다.

**실수 3. 나머지의 차수가 나누는 식의 차수 이상인데 멈춘다.**

- **왜 틀리는가:** 이차식으로 나누는데 이차식이 남았을 때 그것을 나머지라고 쓴다. 나머지는 반드시 나누는 식보다 차수가 낮아야 하므로 아직 한 번 더 나눌 수 있다.
- **어떻게 바로잡는가:** 나눗셈을 끝낼 때마다 "나머지 차수 $<$ 나누는 식 차수"인지 확인한다. 이차식으로 나누면 나머지는 $px + q$ 꼴(상수 포함), 일차식으로 나누면 상수다.

**실수 4. 조립제법에서 빠진 차수의 $0$을 안 쓴다.**

- **왜 틀리는가:** $x^3 - 2x + 5$를 $x - 1$로 나누면서 계수를 $1,\ -2,\ 5$만 적으면 칸이 밀려 몫과 나머지가 모두 틀린다. $x^2$항의 계수 $0$이 빠졌기 때문이다.
- **어떻게 바로잡는가:** 내림차순으로 정리하고 없는 차수는 $0$으로 채워 $1,\ 0,\ -2,\ 5$처럼 적는다. 그러면 몫 $x^2 + x - 1$, 나머지 $4$가 나온다(확인: $x = 1$을 넣으면 $1 - 2 + 5 = 4$).

**실수 5. $ax + b$로 나눌 때 조립제법의 몫을 그대로 쓴다.**

- **왜 틀리는가:** 조립제법은 $x + \dfrac{b}{a}$로 나눈 결과를 준다. 나누는 식이 $a$배 커졌으므로 몫은 $\dfrac{1}{a}$배가 되어야 한다. 예제 3에서 $2x^2 + 2x$를 몫이라고 쓰면 틀린다.
- **어떻게 바로잡는가:** 조립제법의 몫을 $a$로 나누고, 나머지는 바꾸지 않는다. 마지막에 $A = BQ + R$에 넣어 검산한다.

## 앞뒤 학년 연계

중2 「식의 계산」의 동류항 정리·분배법칙과 중3 「다항식의 곱셈과 인수분해」의 제곱 공식이 이 단원의 바탕이다. 여기서는 세제곱 공식과 다항식의 나눗셈이 새로 더해진다. 다음 단원 「나머지정리와 인수분해」에서는 $A = BQ + R$이 항등식이라는 점을 이용해 $x$에 특정한 값을 넣어 나머지정리와 인수정리를 얻고, 조립제법은 삼차 이상의 식을 인수분해하는 핵심 도구가 된다.
