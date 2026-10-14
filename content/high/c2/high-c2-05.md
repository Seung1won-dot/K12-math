---
id: high-c2-05
title: 집합
level: 고등학교
grade: 공통수학2
area: 집합과 명제
keywords: ["집합", "부분집합", "합집합", "교집합", "여집합", "차집합", "원소의 개수", "부분집합 개수 2의 n제곱 이유", "공집합과 {공집합} 차이", "벤 다이어그램", "드모르간의 법칙", "진부분집합 개수", "배수의 개수 구하기"]
prerequisites: ["high-c1-08"]
next: ["high-c2-06", "high-c2-07"]
status: draft
note: 2015 개정에서는 수학(하)의 단원이었고, 2022 개정에서는 공통수학2 '집합과 명제'에 속한다.
---

## 핵심 개념

> **한 줄 요약.** 집합은 "들어가는지 아닌지 분명한 것들의 모임"이고, 합집합·교집합·여집합·차집합은 벤 다이어그램에서 어느 부분을 칠하느냐로 이해하면 된다.

집합은 수학의 "공용어"다. 방정식의 해, 함수의 정의역, 확률의 사건, 명제의 참·거짓이 모두 집합으로 표현된다. 이 단원에서는 집합을 다루는 기호와 연산, 그리고 원소의 개수를 셈하는 방법을 익힌다.

**생활 속에서.** 쇼핑몰 검색에서 "운동화" **그리고** "흰색"으로 거르면 교집합, "운동화" **또는** "샌들"을 함께 보면 합집합, "품절 제외"는 차집합이다. 반 친구들 중 "수학과 영어를 모두 좋아하는 사람이 몇 명인가" 같은 설문 집계도 원소의 개수 공식으로 계산한다(예제 4).

**집합과 원소.** 어떤 기준에 따라 대상을 분명하게 정할 수 있을 때, 그 대상들의 모임을 **집합**이라 하고 집합을 이루는 대상 하나하나를 **원소**라고 한다. "키가 큰 학생의 모임"은 기준이 애매하므로 집합이 아니고, "$10$보다 작은 자연수의 모임"은 집합이다. $a$가 집합 $A$의 원소이면 $a \in A$, 아니면 $a \notin A$로 쓴다.

**집합을 나타내는 방법.** 원소를 모두 적는 **원소나열법** $A = \{1,\,2,\,3,\,6\}$, 원소들의 공통 성질을 적는 **조건제시법** $A = \{x \mid x\text{는 }6\text{의 약수}\}$, 그림으로 나타내는 **벤 다이어그램**이 있다. 원소나열법에서 순서는 상관없고, 같은 원소를 두 번 적어도 하나로 본다.

**원소의 개수와 공집합.** 원소가 유한개인 집합을 유한집합이라 하고 원소의 개수를 $n(A)$로 쓴다. 원소가 하나도 없는 집합을 **공집합**이라 하며 $\varnothing$로 쓰고, $n(\varnothing) = 0$이다. $\{\varnothing\}$은 "공집합 하나를 원소로 가진 집합"이므로 공집합이 아니고 $n(\{\varnothing\}) = 1$이다.

**부분집합.** 집합 $A$의 모든 원소가 집합 $B$에 속할 때 $A$를 $B$의 **부분집합**이라 하고 $A \subset B$로 쓴다. $A \subset B$이고 $B \subset A$이면 두 집합은 **서로 같다**($A = B$). $A \subset B$이지만 $A \ne B$일 때 $A$를 $B$의 **진부분집합**이라고 한다. 공집합은 모든 집합의 부분집합이고, 모든 집합은 자기 자신의 부분집합이다.

**집합의 연산.** 전체집합 $U$ 안에서 생각한다. 합집합 $A \cup B = \{x \mid x \in A \text{ 또는 } x \in B\}$, 교집합 $A \cap B = \{x \mid x \in A \text{ 그리고 } x \in B\}$, 여집합 $A^{C} = \{x \mid x \in U \text{ 그리고 } x \notin A\}$, 차집합 $A - B = \{x \mid x \in A \text{ 그리고 } x \notin B\}$이다. $A \cap B = \varnothing$이면 $A$와 $B$는 **서로소**라고 한다.

```svg 벤 다이어그램에서 색칠한 부분. 왼쪽 위부터 A ∩ B(겹친 렌즈), A ∪ B(두 원 전체), A − B(A에서 겹친 부분을 뺀 초승달), Aᶜ(U에서 A를 뺀 나머지)
<svg viewBox="0 0 500 350">
  <g transform="translate(5,0)">
  <path d="M120,37.58 A45,45 0 0,1 120,112.42 A45,45 0 0,1 120,37.58 Z" class="f-soft s-ac" stroke-width="2"/>
  <rect x="10" y="10" width="220" height="130" class="s-base" fill="none" stroke-width="1.5"/>
  <circle cx="95" cy="75" r="45" class="s-base" fill="none" stroke-width="1.5"/><circle cx="145" cy="75" r="45" class="s-base" fill="none" stroke-width="1.5"/>
  <text x="22" y="30" class="f-mute" font-size="13" font-style="italic">U</text>
  <text x="52" y="40" class="f-base" font-size="14" font-style="italic">A</text>
  <text x="180" y="40" class="f-base" font-size="14" font-style="italic">B</text>
  <text x="120" y="162" text-anchor="middle" class="f-base" font-size="15">A ∩ B</text>
  </g>
  <g transform="translate(255,0)">
  <circle cx="95" cy="75" r="45" class="f-soft"/><circle cx="145" cy="75" r="45" class="f-soft"/>
  <rect x="10" y="10" width="220" height="130" class="s-base" fill="none" stroke-width="1.5"/>
  <circle cx="95" cy="75" r="45" class="s-base" fill="none" stroke-width="1.5"/><circle cx="145" cy="75" r="45" class="s-base" fill="none" stroke-width="1.5"/>
  <text x="22" y="30" class="f-mute" font-size="13" font-style="italic">U</text>
  <text x="52" y="40" class="f-base" font-size="14" font-style="italic">A</text>
  <text x="180" y="40" class="f-base" font-size="14" font-style="italic">B</text>
  <text x="120" y="162" text-anchor="middle" class="f-base" font-size="15">A ∪ B</text>
  </g>
  <g transform="translate(5,175)">
  <path d="M120,37.58 A45,45 0 1,0 120,112.42 A45,45 0 0,1 120,37.58 Z" class="f-soft s-ac" stroke-width="2"/>
  <rect x="10" y="10" width="220" height="130" class="s-base" fill="none" stroke-width="1.5"/>
  <circle cx="95" cy="75" r="45" class="s-base" fill="none" stroke-width="1.5"/><circle cx="145" cy="75" r="45" class="s-base" fill="none" stroke-width="1.5"/>
  <text x="22" y="30" class="f-mute" font-size="13" font-style="italic">U</text>
  <text x="52" y="40" class="f-base" font-size="14" font-style="italic">A</text>
  <text x="180" y="40" class="f-base" font-size="14" font-style="italic">B</text>
  <text x="120" y="162" text-anchor="middle" class="f-base" font-size="15">A − B</text>
  </g>
  <g transform="translate(255,175)">
  <rect x="10" y="10" width="220" height="130" class="f-soft"/><circle cx="95" cy="75" r="45" class="f-bg"/>
  <rect x="10" y="10" width="220" height="130" class="s-base" fill="none" stroke-width="1.5"/>
  <circle cx="95" cy="75" r="45" class="s-base" fill="none" stroke-width="1.5"/><circle cx="145" cy="75" r="45" class="s-base" fill="none" stroke-width="1.5"/>
  <text x="22" y="30" class="f-mute" font-size="13" font-style="italic">U</text>
  <text x="52" y="40" class="f-base" font-size="14" font-style="italic">A</text>
  <text x="180" y="40" class="f-base" font-size="14" font-style="italic">B</text>
  <text x="120" y="162" text-anchor="middle" class="f-base" font-size="15">Aᶜ</text>
  </g>
</svg>
```

직사각형이 전체집합 $U$, 두 원이 $A$와 $B$다. 두 원이 겹친 렌즈 모양이 $A \cap B$, 두 원 전체가 $A \cup B$, 원 $A$에서 겹친 부분을 뺀 초승달 모양이 $A - B$, 직사각형에서 원 $A$를 뺀 나머지가 $A^{C}$이다.

## 공식·정리

**부분집합의 개수.** $n(A) = n$ ($n$은 $0$ 이상의 정수)일 때

$$\text{부분집합의 개수} = 2^{n}, \qquad \text{진부분집합의 개수} = 2^{n} - 1$$

- 특정한 원소 $k$개를 반드시 포함하는(또는 반드시 제외하는) 부분집합의 개수는 $2^{n-k}$ ($k \le n$).
- 원소가 무한히 많은 집합(무한집합)에는 이 공식을 쓰지 않는다.

**연산 법칙.** 전체집합 $U$의 임의의 부분집합 $A$, $B$, $C$에 대하여

- 교환법칙: $A \cup B = B \cup A$, $A \cap B = B \cap A$
- 결합법칙: $(A \cup B) \cup C = A \cup (B \cup C)$, $(A \cap B) \cap C = A \cap (B \cap C)$
- 분배법칙: $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$, $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$
- 드모르간의 법칙: $(A \cup B)^{C} = A^{C} \cap B^{C}$, $(A \cap B)^{C} = A^{C} \cup B^{C}$
- 차집합: $A - B = A \cap B^{C}$, $(A^{C})^{C} = A$, $A \cup A^{C} = U$, $A \cap A^{C} = \varnothing$

**원소의 개수.** $A$, $B$, $C$가 유한집합일 때 (무한집합에는 $n(\;)$을 쓰지 않는다)

$$n(A \cup B) = n(A) + n(B) - n(A \cap B)$$

$$n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(C \cap A) + n(A \cap B \cap C)$$

- $n(A^{C}) = n(U) - n(A)$, $n(A - B) = n(A) - n(A \cap B)$
- $A$, $B$가 서로소이면 $n(A \cup B) = n(A) + n(B)$

## 왜 성립하는가

**부분집합의 개수가 $2^{n}$인 이유.** $A = \{a_1,\,a_2,\,\dots,\,a_n\}$의 부분집합을 하나 만드는 것은 각 원소마다 "넣는다/넣지 않는다" 중 하나를 고르는 것과 같다. 원소마다 선택지가 $2$가지이고 선택은 서로 독립이므로 곱의 법칙에 의해

$$\underbrace{2 \times 2 \times \cdots \times 2}_{n\text{개}} = 2^{n}$$

가지다.

```svg 원소 a, b, c마다 넣을지(○) 뺄지(×) 차례로 고르면 갈래가 2 × 2 × 2 = 8개로 나뉘고, 그 끝이 부분집합 8개다
<svg viewBox="0 0 470 260">
  <text x="80" y="14" text-anchor="middle" class="f-mute" font-size="13">a를 넣을까?</text>
  <text x="180" y="14" text-anchor="middle" class="f-mute" font-size="13">b를 넣을까?</text>
  <text x="280" y="14" text-anchor="middle" class="f-mute" font-size="13">c를 넣을까?</text>
  <line x1="30" y1="130" x2="130" y2="70" class="s-mute" stroke-width="1.5"/>
  <text x="80" y="96" text-anchor="middle" class="f-ac" font-size="12">○</text>
  <line x1="30" y1="130" x2="130" y2="190" class="s-mute" stroke-width="1.5"/>
  <text x="80" y="174" text-anchor="middle" class="f-mute" font-size="12">×</text>
  <line x1="130" y1="70" x2="230" y2="40" class="s-mute" stroke-width="1.5"/>
  <text x="180" y="51" text-anchor="middle" class="f-ac" font-size="12">○</text>
  <line x1="130" y1="70" x2="230" y2="100" class="s-mute" stroke-width="1.5"/>
  <text x="180" y="99" text-anchor="middle" class="f-mute" font-size="12">×</text>
  <line x1="130" y1="190" x2="230" y2="160" class="s-mute" stroke-width="1.5"/>
  <text x="180" y="171" text-anchor="middle" class="f-ac" font-size="12">○</text>
  <line x1="130" y1="190" x2="230" y2="220" class="s-mute" stroke-width="1.5"/>
  <text x="180" y="219" text-anchor="middle" class="f-mute" font-size="12">×</text>
  <line x1="230" y1="40" x2="330" y2="25" class="s-mute" stroke-width="1.5"/>
  <text x="280" y="28" text-anchor="middle" class="f-ac" font-size="12">○</text>
  <line x1="230" y1="40" x2="330" y2="55" class="s-mute" stroke-width="1.5"/>
  <text x="280" y="62" text-anchor="middle" class="f-mute" font-size="12">×</text>
  <line x1="230" y1="100" x2="330" y2="85" class="s-mute" stroke-width="1.5"/>
  <text x="280" y="88" text-anchor="middle" class="f-ac" font-size="12">○</text>
  <line x1="230" y1="100" x2="330" y2="115" class="s-mute" stroke-width="1.5"/>
  <text x="280" y="122" text-anchor="middle" class="f-mute" font-size="12">×</text>
  <line x1="230" y1="160" x2="330" y2="145" class="s-mute" stroke-width="1.5"/>
  <text x="280" y="148" text-anchor="middle" class="f-ac" font-size="12">○</text>
  <line x1="230" y1="160" x2="330" y2="175" class="s-mute" stroke-width="1.5"/>
  <text x="280" y="182" text-anchor="middle" class="f-mute" font-size="12">×</text>
  <line x1="230" y1="220" x2="330" y2="205" class="s-mute" stroke-width="1.5"/>
  <text x="280" y="208" text-anchor="middle" class="f-ac" font-size="12">○</text>
  <line x1="230" y1="220" x2="330" y2="235" class="s-mute" stroke-width="1.5"/>
  <text x="280" y="242" text-anchor="middle" class="f-mute" font-size="12">×</text>
  <circle cx="30" cy="130" r="3.5" class="f-base"/>
  <circle cx="130" cy="70" r="3.5" class="f-base"/>
  <circle cx="130" cy="190" r="3.5" class="f-base"/>
  <circle cx="230" cy="40" r="3.5" class="f-base"/>
  <circle cx="230" cy="100" r="3.5" class="f-base"/>
  <circle cx="230" cy="160" r="3.5" class="f-base"/>
  <circle cx="230" cy="220" r="3.5" class="f-base"/>
  <circle cx="330" cy="25" r="3.5" class="f-base"/>
  <circle cx="330" cy="55" r="3.5" class="f-base"/>
  <circle cx="330" cy="85" r="3.5" class="f-base"/>
  <circle cx="330" cy="115" r="3.5" class="f-base"/>
  <circle cx="330" cy="145" r="3.5" class="f-base"/>
  <circle cx="330" cy="175" r="3.5" class="f-base"/>
  <circle cx="330" cy="205" r="3.5" class="f-base"/>
  <circle cx="330" cy="235" r="3.5" class="f-base"/>
  <text x="342" y="30" class="f-base" font-size="14">{a, b, c}</text>
  <text x="342" y="60" class="f-base" font-size="14">{a, b}</text>
  <text x="342" y="90" class="f-base" font-size="14">{a, c}</text>
  <text x="342" y="120" class="f-base" font-size="14">{a}</text>
  <text x="342" y="150" class="f-base" font-size="14">{b, c}</text>
  <text x="342" y="180" class="f-base" font-size="14">{b}</text>
  <text x="342" y="210" class="f-base" font-size="14">{c}</text>
  <text x="342" y="240" class="f-base" font-size="14">∅</text>
</svg>
```

모든 원소를 넣지 않는 경우가 $\varnothing$, 모두 넣는 경우가 $A$ 자신이다. 진부분집합은 $A$ 자신 하나를 빼므로 $2^{n} - 1$개다. 특정 원소 $k$개는 선택이 이미 정해져 있으므로 나머지 $n - k$개만 고르면 되어 $2^{n-k}$개다.

**드모르간의 법칙.** 두 집합이 같음은 "원소 $x$가 한쪽에 속하는 것과 다른 쪽에 속하는 것이 동치"임을 보이면 된다.

$$
\begin{aligned}
x \in (A \cup B)^{C} &\iff x \notin A \cup B \\
&\iff x \notin A \text{ 그리고 } x \notin B \\
&\iff x \in A^{C} \text{ 그리고 } x \in B^{C} \\
&\iff x \in A^{C} \cap B^{C}
\end{aligned}
$$

```svg 색칠한 부분은 A에도 B에도 속하지 않는 원소. (A ∪ B)ᶜ과 Aᶜ ∩ Bᶜ은 같은 부분이다
<svg viewBox="0 0 250 175">
  <g transform="translate(5,0)">
  <rect x="10" y="10" width="220" height="130" class="f-soft"/><circle cx="95" cy="75" r="45" class="f-bg"/><circle cx="145" cy="75" r="45" class="f-bg"/>
  <rect x="10" y="10" width="220" height="130" class="s-base" fill="none" stroke-width="1.5"/>
  <circle cx="95" cy="75" r="45" class="s-base" fill="none" stroke-width="1.5"/><circle cx="145" cy="75" r="45" class="s-base" fill="none" stroke-width="1.5"/>
  <text x="22" y="30" class="f-mute" font-size="13" font-style="italic">U</text>
  <text x="52" y="40" class="f-base" font-size="14" font-style="italic">A</text>
  <text x="180" y="40" class="f-base" font-size="14" font-style="italic">B</text>
  <text x="120" y="162" text-anchor="middle" class="f-base" font-size="15">(A ∪ B)ᶜ = Aᶜ ∩ Bᶜ</text>
  </g>
</svg>
```

"$A$ 또는 $B$에 속한다"의 부정은 "$A$에도 속하지 않고 $B$에도 속하지 않는다"이기 때문에 $\cup$가 $\cap$로 바뀐다. 다른 하나도 같은 방식으로 보인다.

**합집합의 원소의 개수.** $A \cup B$는 겹치지 않는 세 부분 $A - B$, $A \cap B$, $B - A$로 나뉜다. $n(A - B) = n(A) - n(A \cap B)$, $n(B - A) = n(B) - n(A \cap B)$이므로

$$n(A \cup B) = \{n(A) - n(A \cap B)\} + n(A \cap B) + \{n(B) - n(A \cap B)\} = n(A) + n(B) - n(A \cap B)$$

이다. $n(A) + n(B)$에서는 겹친 부분이 두 번 세어졌으므로 한 번 빼 주는 것이다.

## 대표 예제

**예제 1 (기본).** $A = \{x \mid x\text{는 }12\text{의 약수}\}$일 때, (1) $A$의 부분집합의 개수 (2) $1$과 $2$는 반드시 원소로 갖고 $3$은 원소로 갖지 않는 $A$의 부분집합의 개수를 구하시오.

풀이 전략: 원소나열법으로 바꿔 $n(A)$를 센 뒤, 이미 정해진 원소는 빼고 나머지 원소만 "넣을까/뺄까"를 고른다.

$A = \{1,\,2,\,3,\,4,\,6,\,12\}$이므로 $n(A) = 6$이다.

(1) $2^{6} = 64$.

(2) $1$, $2$, $3$은 넣을지 말지가 이미 정해졌으므로 나머지 $4$, $6$, $12$만 고른다. $2^{6-3} = 2^{3} = 8$. 확인: $\{1,\,2\}$에 $\{4,\,6,\,12\}$의 부분집합 $8$개를 각각 붙인 것과 같다.

**예제 2 (기본).** $U = \{1,\,2,\,\dots,\,10\}$, $A = \{2,\,4,\,6,\,8,\,10\}$, $B = \{3,\,6,\,9\}$일 때 $A \cup B$, $A - B$, $(A \cup B)^{C}$를 구하고 $n(A \cup B)$를 공식으로 확인하시오.

풀이 전략: 먼저 겹치는 원소 $A \cap B$를 찾아 두면 나머지 연산이 쉬워진다.

1. $A \cap B = \{6\}$.
2. $A \cup B = \{2,\,3,\,4,\,6,\,8,\,9,\,10\}$.
3. $A - B = \{2,\,4,\,8,\,10\}$ ($A$에서 $6$만 뺀다).
4. $(A \cup B)^{C} = \{1,\,5,\,7\}$.

공식: $n(A \cup B) = 5 + 3 - 1 = 7$로 직접 센 개수와 같다. 드모르간으로 다시 확인하면 $A^{C} = \{1,\,3,\,5,\,7,\,9\}$, $B^{C} = \{1,\,2,\,4,\,5,\,7,\,8,\,10\}$이고 $A^{C} \cap B^{C} = \{1,\,5,\,7\}$이 $(A \cup B)^{C}$와 같다.

**예제 3 (표준).** $1$부터 $100$까지의 자연수 중에서 $2$의 배수 또는 $3$의 배수인 수의 개수와, $2$의 배수도 $3$의 배수도 아닌 수의 개수를 구하시오.

풀이 전략: $2$의 배수의 집합 $A$, $3$의 배수의 집합 $B$로 두면 $A \cap B$는 $6$의 배수의 집합이다. 합집합 공식을 쓰고, 나머지는 여집합으로 구한다.

1. $n(A) = 50$ ($100 \div 2$), $n(B) = 33$ ($100 \div 3$의 몫).
2. $A \cap B$는 $6$의 배수이므로 $n(A \cap B) = 16$ ($100 \div 6$의 몫).
3. $n(A \cup B) = 50 + 33 - 16 = 67$.
4. 둘 다 아닌 수는 $n\big((A \cup B)^{C}\big) = 100 - 67 = 33$.

검산: $1$부터 $6$까지 중 $2$, $3$의 배수가 아닌 수는 $1$, $5$의 $2$개다. $96$까지 이런 묶음이 $16$개라 $32$개이고, $97$부터 $100$까지에서 $97$ 하나가 더해져 $33$개다.

**예제 4 (응용).** 학생 $40$명 중 수학을 좋아하는 학생이 $25$명, 영어를 좋아하는 학생이 $18$명이다. (1) 두 과목 모두 좋아하지 않는 학생이 $7$명일 때, 두 과목을 모두 좋아하는 학생 수를 구하시오. (2) (1)의 조건이 없을 때, 두 과목을 모두 좋아하는 학생 수의 최댓값과 최솟값을 구하시오.

풀이 전략: 벤 다이어그램의 네 칸(수학만, 둘 다, 영어만, 둘 다 아님)에 수를 채운다. 최대·최소는 "한 집합이 다른 집합에 다 들어갈 때"와 "합집합이 전체가 될 때"를 생각한다.

수학을 좋아하는 학생의 집합을 $A$, 영어를 $B$라 하자. $n(U) = 40$, $n(A) = 25$, $n(B) = 18$.

(1) $n(A \cup B) = 40 - 7 = 33$이므로 $n(A \cap B) = 25 + 18 - 33 = 10$.

```svg 학생 40명. 수학만 15명, 둘 다 10명, 영어만 8명, 둘 다 좋아하지 않음 7명
<svg viewBox="0 0 360 200">
  <path d="M180,42.55 A70,70 0 0,1 180,157.45 A70,70 0 0,1 180,42.55 Z" class="f-soft"/>
  <rect x="10" y="10" width="340" height="180" class="s-base" fill="none" stroke-width="1.5"/>
  <circle cx="140" cy="100" r="70" class="s-base" fill="none" stroke-width="1.5"/>
  <circle cx="220" cy="100" r="70" class="s-base" fill="none" stroke-width="1.5"/>
  <text x="22" y="182" class="f-mute" font-size="13">U (40명)</text>
  <text x="110" y="25" text-anchor="middle" class="f-base" font-size="13">A: 수학 25명</text>
  <text x="250" y="25" text-anchor="middle" class="f-base" font-size="13">B: 영어 18명</text>
  <text x="105" y="106" text-anchor="middle" class="f-base" font-size="16">15</text>
  <text x="180" y="106" text-anchor="middle" class="f-ac" font-size="16">10</text>
  <text x="255" y="106" text-anchor="middle" class="f-base" font-size="16">8</text>
  <text x="330" y="180" text-anchor="middle" class="f-base" font-size="16">7</text>
</svg>
```

확인: 수학만 $15$명, 영어만 $8$명, 둘 다 $10$명, 둘 다 아님 $7$명으로 합이 $40$이다.

(2) $A \cap B \subset B$이므로 $n(A \cap B) \le 18$이고, $B \subset A$일 때 $18$이 된다. 또 $n(A \cup B) \le 40$이므로 $n(A \cap B) = 43 - n(A \cup B) \ge 3$이고, $A \cup B = U$일 때 $3$이 된다. 최댓값 $18$, 최솟값 $3$. 확인: 최솟값일 때 수학만 $22$, 영어만 $15$, 둘 다 $3$으로 합 $40$이다.

**예제 5 (심화).** 집합 $A = \{1,\,2,\,3,\,4,\,5\}$의 부분집합 $X$ 중에서 $X \cap \{1,\,2\} \ne \varnothing$을 만족하는 것의 개수를 구하시오.

풀이 전략: "적어도 하나는 들어 있다"는 경우가 여러 갈래라 직접 세기 어렵다. 반대 경우(하나도 없음)를 세어 전체에서 뺀다.

1. 전체 부분집합의 개수: $2^{5} = 32$.
2. $X \cap \{1,\,2\} = \varnothing$, 즉 $1$도 $2$도 들어 있지 않은 부분집합은 $\{3,\,4,\,5\}$의 부분집합이므로 $2^{3} = 8$개.
3. 구하는 개수는 $32 - 8 = 24$.

검산(직접 나누어 세기): $1$은 있고 $2$는 없는 것 $2^{3} = 8$개, $2$는 있고 $1$은 없는 것 $8$개, 둘 다 있는 것 $8$개로 합 $24$개다.

### 스스로 확인

1. 집합 $\{a,\,b,\,c,\,d\}$의 진부분집합의 개수를 구하시오.
2. $U = \{1,\,2,\,\dots,\,8\}$, $A = \{1,\,2,\,3,\,4\}$, $B = \{3,\,4,\,5,\,6\}$일 때 $B - A$와 $(A \cap B)^{C}$를 구하시오.
3. $n(U) = 30$, $n(A) = 12$, $n(B) = 15$, $n(A \cap B) = 5$일 때 $n(A^{C} \cap B^{C})$를 구하시오.

<details>
<summary>정답과 풀이</summary>

1. $2^{4} - 1 = 15$.
2. $B - A = \{5,\,6\}$. $A \cap B = \{3,\,4\}$이므로 $(A \cap B)^{C} = \{1,\,2,\,5,\,6,\,7,\,8\}$.
3. 드모르간에 의해 $A^{C} \cap B^{C} = (A \cup B)^{C}$. $n(A \cup B) = 12 + 15 - 5 = 22$이므로 $30 - 22 = 8$.

</details>

## 자주 하는 실수와 오개념

**실수 1. $\varnothing$과 $\{\varnothing\}$, $\{0\}$을 같은 것으로 본다.**

- **왜 틀리는가:** 셋 다 "비어 있다"는 느낌 때문에 $n(\{\varnothing\}) = 0$, $\{0\} = \varnothing$으로 쓴다. 하지만 $\{\varnothing\}$은 원소 $\varnothing$ 하나, $\{0\}$은 원소 $0$ 하나를 가진 집합이다.
- **어떻게 바로잡는가:** 중괄호를 "상자"로 생각한다. $\varnothing$은 빈 상자, $\{\varnothing\}$은 빈 상자가 하나 들어 있는 상자다. 그래서 $n(\varnothing) = 0$, $n(\{\varnothing\}) = n(\{0\}) = 1$이다.

**실수 2. $\in$와 $\subset$를 섞어 쓴다.**

- **왜 틀리는가:** $1 \subset \{1,\,2\}$, $\{1\} \in \{1,\,2\}$처럼 쓴다. $\in$는 원소와 집합 사이, $\subset$는 집합과 집합 사이의 기호다.
- **어떻게 바로잡는가:** 왼쪽이 원소이면 $\in$, 집합이면 $\subset$를 쓴다. 바르게 쓰면 $1 \in \{1,\,2\}$, $\{1\} \subset \{1,\,2\}$이다. 단 $A = \{1,\,\{1\}\}$처럼 집합이 원소인 경우는 $\{1\} \in A$와 $\{1\} \subset A$가 모두 참이 될 수 있으니 원소 목록을 직접 확인한다.

**실수 3. $n(A \cup B) = n(A) + n(B)$로 계산한다.**

- **왜 틀리는가:** 겹친 부분 $A \cap B$를 두 번 세었다. 이 식은 $A$, $B$가 서로소일 때만 맞다.
- **어떻게 바로잡는가:** 벤 다이어그램의 세 부분에 각각 수를 적고 더하는 습관을 들인다. 공식을 쓸 때는 항상 $-\,n(A \cap B)$를 붙이고, 마지막에 각 부분의 합이 전체와 맞는지 확인한다.

**실수 4. 드모르간의 법칙에서 기호를 바꾸지 않는다.**

- **왜 틀리는가:** $(A \cup B)^{C} = A^{C} \cup B^{C}$처럼 여집합만 나누어 붙이고 $\cup$를 그대로 둔다. 차집합도 $A - B = B - A$라고 착각한다.
- **어떻게 바로잡는가:** 여집합을 괄호 안으로 넣으면 $\cup \leftrightarrow \cap$가 반드시 바뀐다. 예제 2처럼 구체적인 집합으로 양변을 직접 구해 보면 차이가 보인다. 차집합은 $A - B = A \cap B^{C}$로 바꾸어 계산하면 순서 실수가 줄어든다.

**실수 5. "적어도 하나"를 경우마다 따로 세다가 겹치게 센다.**

- **왜 틀리는가:** 예제 5에서 "$1$이 들어 있는 것 $16$개 + $2$가 들어 있는 것 $16$개 $= 32$개"로 계산한다. $1$과 $2$가 모두 들어 있는 $8$개를 두 번 센 것이다.
- **어떻게 바로잡는가:** "적어도 하나"는 여집합(하나도 없는 경우)을 세어 전체에서 빼는 것이 가장 안전하다. 직접 셀 때는 $n(A \cup B) = n(A) + n(B) - n(A \cap B)$를 떠올려 $16 + 16 - 8 = 24$로 고친다.

## 앞뒤 학년 연계

공통수학1 「순열과 조합」에서 배운 경우의 수(곱의 법칙)가 부분집합의 개수 $2^{n}$을 설명하는 도구가 되고, 원소의 개수 공식은 중복을 빼는 셈법과 같은 생각이다. 다음 단원 「명제」에서는 조건을 만족하는 원소의 모임인 진리집합의 포함 관계로 참·거짓을 판단하고, 「함수」에서는 정의역·공역·치역을 집합의 언어로 정의한다.
