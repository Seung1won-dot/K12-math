---
id: high-c1-09
title: 행렬과 그 연산
level: 고등학교
grade: 공통수학1
area: 행렬
keywords: ["행렬", "행렬의 덧셈·실수배", "행렬의 곱셈", "단위행렬", "행렬 곱셈 교환법칙 불성립", "행렬 곱셈 왜 행 곱하기 열", "AB와 BA가 다른 이유", "행렬 곱 정의되는 조건", "단위행렬 E", "행렬 성분 aij", "영행렬"]
prerequisites: ["mid-2-1-04"]
next: ["high-c2-02"]
note: 2015 개정 고교 과정에서 빠졌던 행렬이 2022 개정에서 공통수학1에 다시 들어왔다.
status: draft
---

## 핵심 개념

> **한 줄 요약.** 행렬은 수를 직사각형 표로 묶은 것이다. 덧셈·실수배는 같은 자리끼리 하고, 곱셈은 "앞 행렬의 행 × 뒤 행렬의 열"을 곱해 더한다. 그래서 $AB$와 $BA$는 보통 다르다.

행렬은 새로운 "수"라기보다 **표를 한 덩어리로 계산하는 방법**이다. 성적표, 가게별 판매량표, 시간표처럼 우리가 쓰는 표를 괄호로 묶어 하나의 문자 $A$로 부르면, 표 전체를 더하거나 늘리는 계산을 식 한 줄로 쓸 수 있다. 곱셈 규칙이 낯설어 보이지만 "수량 × 가격을 모두 더한 총액"을 계산하는 방식 그대로다.

**생활 속에서.** 사진 편집 앱에서 사진을 돌리거나 늘리는 것, 게임 화면에서 캐릭터가 움직이는 것, 인공지능이 수많은 수를 한꺼번에 계산하는 것은 모두 행렬의 곱으로 처리된다. 가까운 예로 두 매장의 상품별 판매량과 상품 가격을 알면 매장별 매출을 행렬의 곱 하나로 구할 수 있다(대표 예제 3).

**행렬.** 여러 개의 수나 문자를 직사각형 모양으로 배열하고 괄호로 묶은 것을 **행렬**이라 한다. 배열된 각각의 수를 **성분**, 가로줄을 **행**, 세로줄을 **열**이라 부른다. 행이 $m$개, 열이 $n$개인 행렬을 $m \times n$ 행렬이라 하고, 특히 행과 열의 개수가 같은 $n \times n$ 행렬을 $n$차 정사각행렬이라 한다. 행렬 $A$의 제$i$행과 제$j$열이 만나는 자리의 성분을 $a_{ij}$로 나타낸다. 행이 먼저, 열이 나중이다.

```svg 2 × 3 행렬. 가로줄이 행(2개), 세로줄이 열(3개)이고, 제2행과 제3열이 만나는 성분이 a₂₃ = 8
<svg viewBox="0 0 420 200">
  <rect x="128" y="108" width="164" height="40" rx="6" class="f-surf"/>
  <rect x="250" y="52" width="40" height="100" rx="6" class="f-surf"/>
  <text x="150" y="36" text-anchor="middle" class="f-mute" font-size="13">제1열</text>
  <text x="210" y="36" text-anchor="middle" class="f-mute" font-size="13">제2열</text>
  <text x="270" y="36" text-anchor="middle" class="f-base" font-size="13">제3열</text>
  <text x="80" y="85" text-anchor="middle" class="f-mute" font-size="13">제1행</text>
  <text x="80" y="135" text-anchor="middle" class="f-base" font-size="13">제2행</text>
  <path d="M 126,56 Q 110,105 126,154" class="s-base" fill="none" stroke-width="2"/>
  <path d="M 294,56 Q 310,105 294,154" class="s-base" fill="none" stroke-width="2"/>
  <text x="150" y="86" text-anchor="middle" class="f-base" font-size="18">3</text>
  <text x="210" y="86" text-anchor="middle" class="f-base" font-size="18">5</text>
  <text x="270" y="86" text-anchor="middle" class="f-base" font-size="18">7</text>
  <text x="150" y="136" text-anchor="middle" class="f-base" font-size="18">4</text>
  <text x="210" y="136" text-anchor="middle" class="f-base" font-size="18">6</text>
  <circle cx="270" cy="130" r="15" class="s-ac" fill="none" stroke-width="2"/>
  <text x="270" y="136" text-anchor="middle" class="f-ac" font-size="18">8</text>
  <text x="320" y="186" text-anchor="middle" class="f-ac" font-size="14">a₂₃ = 8</text>
  <line x1="300" y1="172" x2="280" y2="148" class="s-ac" stroke-width="1.2"/>
</svg>
```

**서로 같은 행렬.** 두 행렬 $A$, $B$의 꼴(행과 열의 개수)이 같고 대응하는 성분이 모두 같을 때 $A = B$라고 한다. 그래서 행렬의 등식 하나는 성분의 개수만큼의 등식을 한꺼번에 담고 있다.

**덧셈·뺄셈·실수배.** 꼴이 같은 두 행렬은 같은 자리의 성분끼리 더하거나 빼고, 실수 $k$를 곱할 때는 모든 성분에 $k$를 곱한다. 모든 성분이 $0$인 행렬을 **영행렬** $O$라 한다.

**곱셈.** $A$가 $m \times n$, $B$가 $n \times p$ 행렬일 때, 곱 $AB$는 $m \times p$ 행렬이다. $AB$의 $(i,\,j)$ 성분은 $A$의 제$i$행과 $B$의 제$j$열의 성분을 차례로 곱해서 더한 값이다. 그래서 **$A$의 열의 개수와 $B$의 행의 개수가 같을 때만** 곱을 정의할 수 있다.

```svg 곱 AB 가 정의되려면 안쪽 두 수(A의 열 수, B의 행 수)가 같아야 하고, 결과의 꼴은 바깥 두 수로 정해진다. (2 × 3)(3 × 1) 의 결과는 2 × 1
<svg viewBox="0 0 420 150">
  <path d="M 122,46 Q 153,14 184,46" class="s-ac" fill="none" stroke-width="2"/>
  <text x="153" y="16" text-anchor="middle" class="f-ac" font-size="13">같아야 곱할 수 있다</text>
  <text x="62" y="70" text-anchor="middle" class="f-base" font-size="24">(</text>
  <text x="80" y="70" text-anchor="middle" class="f-base" font-size="22">2</text>
  <text x="101" y="70" text-anchor="middle" class="f-base" font-size="20">×</text>
  <text x="122" y="70" text-anchor="middle" class="f-ac" font-size="22">3</text>
  <text x="140" y="70" text-anchor="middle" class="f-base" font-size="24">)</text>
  <text x="166" y="70" text-anchor="middle" class="f-base" font-size="24">(</text>
  <text x="184" y="70" text-anchor="middle" class="f-ac" font-size="22">3</text>
  <text x="205" y="70" text-anchor="middle" class="f-base" font-size="20">×</text>
  <text x="226" y="70" text-anchor="middle" class="f-base" font-size="22">1</text>
  <text x="244" y="70" text-anchor="middle" class="f-base" font-size="24">)</text>
  <text x="275" y="70" text-anchor="middle" class="f-base" font-size="22">→</text>
  <text x="308" y="70" text-anchor="middle" class="f-base" font-size="22">2</text>
  <text x="330" y="70" text-anchor="middle" class="f-base" font-size="20">×</text>
  <text x="352" y="70" text-anchor="middle" class="f-base" font-size="22">1</text>
  <path d="M 80,80 Q 153,124 226,80" class="s-mute" fill="none" stroke-width="1.5"/>
  <text x="153" y="138" text-anchor="middle" class="f-mute" font-size="13">바깥 두 수가 결과의 꼴</text>
</svg>
```

**단위행렬.** 왼쪽 위에서 오른쪽 아래로 가는 대각선의 성분이 모두 $1$이고 나머지가 $0$인 정사각행렬을 **단위행렬** $E$라 한다. 수의 곱셈에서 $1$처럼, 어떤 행렬에 곱해도 그 행렬을 바꾸지 않는다.

## 공식·정리

**덧셈과 실수배** ($A$, $B$, $C$는 같은 꼴의 행렬, $k$, $l$은 실수)

- $A + B = B + A$, $(A + B) + C = A + (B + C)$, $A + O = A$
- $k(A + B) = kA + kB$, $(k + l)A = kA + lA$, $(kl)A = k(lA)$

**곱셈** ($2 \times 2$일 때, 성분은 실수)

$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} p & q \\ r & s \end{pmatrix} = \begin{pmatrix} ap + br & aq + bs \\ cp + dr & cq + ds \end{pmatrix}
$$

- 크기 조건: $(m \times n)(n \times p) = (m \times p)$. 가운데 두 수가 같아야 한다.
- 결합법칙 $(AB)C = A(BC)$, 분배법칙 $A(B + C) = AB + AC$, $(A + B)C = AC + BC$가 성립한다(곱이 정의될 때).
- **교환법칙은 일반적으로 성립하지 않는다**: $AB \ne BA$일 수 있다.
- $AE = EA = A$ ($A$는 $E$와 같은 차수의 정사각행렬), $A^2 = AA$, $A^{n+1} = A^nA$.
- $(A + B)^2 = A^2 + AB + BA + B^2$. $AB = BA$일 때에만 $A^2 + 2AB + B^2$과 같다.
- 실수배와 곱셈: $(kA)B = A(kB) = k(AB)$ ($k$는 실수).

## 왜 성립하는가

**곱셈을 "행 × 열"로 정하는 이유.** 학생 두 명이 연필과 공책을 산다. 갑은 연필 $2$자루와 공책 $3$권, 을은 연필 $1$자루와 공책 $4$권을 사고, 연필은 $500$원, 공책은 $1000$원이다. 표로 정리하면 다음과 같다.

| | 연필(자루) | 공책(권) |
| --- | --- | --- |
| 갑 | $2$ | $3$ |
| 을 | $1$ | $4$ |

각자 낸 돈은 "구매 수량(행) × 가격(열)"을 차례로 곱해 더한 값이다.

$$
\begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix}\begin{pmatrix} 500 \\ 1000 \end{pmatrix} = \begin{pmatrix} 2 \cdot 500 + 3 \cdot 1000 \\ 1 \cdot 500 + 4 \cdot 1000 \end{pmatrix} = \begin{pmatrix} 4000 \\ 4500 \end{pmatrix}
$$

수량 행렬의 각 행에는 물건 종류 수만큼 수가 있고, 가격 행렬의 열에도 물건 종류 수만큼 수가 있어야 짝이 맞는다. 이것이 "앞 행렬의 열 수 = 뒤 행렬의 행 수"라는 크기 조건의 의미다. 연립일차방정식 $2x + 3y = 4000$, $x + 4y = 4500$도 같은 모양으로 쓸 수 있다.

**$AB \ne BA$인 예.** $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$이라 하면

$$
AB = \begin{pmatrix} 1 \cdot 0 + 0 \cdot 0 & 1 \cdot 1 + 0 \cdot 0 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \qquad BA = \begin{pmatrix} 0 \cdot 1 + 1 \cdot 0 & 0 \cdot 0 + 1 \cdot 0 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}
$$

이다. 반례가 하나만 있어도 "항상 $AB = BA$"는 거짓이다. 게다가 이 예에서 $B \ne O$, $A \ne O$인데 $BA = O$이므로, 수와 달리 "곱이 $0$이면 둘 중 하나는 $0$"도 성립하지 않는다.

**$AE = A$.** $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$에 대하여

$$
AE = \begin{pmatrix} a \cdot 1 + b \cdot 0 & a \cdot 0 + b \cdot 1 \\ c \cdot 1 + d \cdot 0 & c \cdot 0 + d \cdot 1 \end{pmatrix} = \begin{pmatrix} a & b \\ c & d \end{pmatrix} = A
$$

이고, $EA$도 같은 방법으로 $A$가 된다.

**$(A+B)^2$ 전개.** 분배법칙으로 $(A + B)(A + B) = A(A + B) + B(A + B) = A^2 + AB + BA + B^2$이다. $AB$와 $BA$를 합쳐 $2AB$로 쓰려면 둘이 같아야 하므로, 교환법칙이 성립할 때만 중학교 곱셈 공식과 같은 꼴이 된다.

## 대표 예제

**예제 1 (기본).** (1) $2 \times 3$ 행렬 $A$의 $(i,\,j)$ 성분이 $a_{ij} = i + 2j$일 때 $A$를 구하시오. (2) $P = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $Q = \begin{pmatrix} 2 & 0 \\ -1 & 1 \end{pmatrix}$일 때 $2P - Q$를 구하시오.

풀이 전략: (1) $i$는 행 번호($1,\,2$), $j$는 열 번호($1,\,2,\,3$)를 넣어 성분을 하나씩 계산한다. (2) 실수배를 먼저 하고, 같은 자리끼리 뺀다.

(1) $a_{11} = 1 + 2 = 3$, $a_{12} = 1 + 4 = 5$, $a_{13} = 1 + 6 = 7$, $a_{21} = 2 + 2 = 4$, $a_{22} = 2 + 4 = 6$, $a_{23} = 2 + 6 = 8$이므로 $A = \begin{pmatrix} 3 & 5 & 7 \\ 4 & 6 & 8 \end{pmatrix}$. (핵심 개념의 첫 그림이 이 행렬이다.)

(2) $2P = \begin{pmatrix} 2 & 4 \\ 6 & 8 \end{pmatrix}$이므로 $2P - Q = \begin{pmatrix} 2 - 2 & 4 - 0 \\ 6 - (-1) & 8 - 1 \end{pmatrix} = \begin{pmatrix} 0 & 4 \\ 7 & 7 \end{pmatrix}$.

확인: $(2P - Q) + Q = \begin{pmatrix} 2 & 4 \\ 6 & 8 \end{pmatrix} = 2P$.

**예제 2 (표준).** 예제 1의 $P$, $Q$에 대하여 (1) $PQ$와 $QP$를 구하시오. (2) $C = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 3 & 1 \end{pmatrix}$, $D = \begin{pmatrix} 3 \\ 1 \\ 2 \end{pmatrix}$일 때 $CD$를 구하고, $DC$가 정의되는지 말하시오.

풀이 전략: 곱하기 전에 꼴을 나란히 써서 정의되는지, 결과가 몇 행 몇 열인지 먼저 정한다. 그다음 성분마다 "앞의 행 × 뒤의 열"을 계산한다.

(1)

$$
PQ = \begin{pmatrix} 1 \cdot 2 + 2 \cdot (-1) & 1 \cdot 0 + 2 \cdot 1 \\ 3 \cdot 2 + 4 \cdot (-1) & 3 \cdot 0 + 4 \cdot 1 \end{pmatrix} = \begin{pmatrix} 0 & 2 \\ 2 & 4 \end{pmatrix}, \qquad QP = \begin{pmatrix} 2 \cdot 1 + 0 \cdot 3 & 2 \cdot 2 + 0 \cdot 4 \\ -1 \cdot 1 + 1 \cdot 3 & -1 \cdot 2 + 1 \cdot 4 \end{pmatrix} = \begin{pmatrix} 2 & 4 \\ 2 & 2 \end{pmatrix}
$$

이므로 $PQ \ne QP$이다.

```svg PQ 의 (2, 2) 성분은 P 의 제2행 (3, 4) 와 Q 의 제2열 (0, 1) 을 차례로 곱해 더한 값 3 × 0 + 4 × 1 = 4
<svg viewBox="0 0 460 190">
  <path d="M 40,48 Q 28,92 40,136" class="s-base" fill="none" stroke-width="2"/>
  <path d="M 120,48 Q 132,92 120,136" class="s-base" fill="none" stroke-width="2"/>
  <text x="60" y="76" text-anchor="middle" class="f-mute" font-size="18">1</text>
  <text x="100" y="76" text-anchor="middle" class="f-mute" font-size="18">2</text>
  <text x="60" y="121" text-anchor="middle" class="f-base" font-size="18">3</text>
  <text x="100" y="121" text-anchor="middle" class="f-base" font-size="18">4</text>
  <rect x="42" y="98" width="76" height="32" rx="6" class="s-ac" fill="none" stroke-width="2"/>
  <path d="M 180,48 Q 168,92 180,136" class="s-base" fill="none" stroke-width="2"/>
  <path d="M 262,48 Q 274,92 262,136" class="s-base" fill="none" stroke-width="2"/>
  <text x="200" y="76" text-anchor="middle" class="f-mute" font-size="18">2</text>
  <text x="242" y="76" text-anchor="middle" class="f-base" font-size="18">0</text>
  <text x="200" y="121" text-anchor="middle" class="f-mute" font-size="18">−1</text>
  <text x="242" y="121" text-anchor="middle" class="f-base" font-size="18">1</text>
  <rect x="226" y="52" width="32" height="80" rx="6" class="s-ac" fill="none" stroke-width="2"/>
  <text x="300" y="100" text-anchor="middle" class="f-base" font-size="20">=</text>
  <path d="M 330,48 Q 318,92 330,136" class="s-base" fill="none" stroke-width="2"/>
  <path d="M 412,48 Q 424,92 412,136" class="s-base" fill="none" stroke-width="2"/>
  <text x="350" y="76" text-anchor="middle" class="f-mute" font-size="18">0</text>
  <text x="392" y="76" text-anchor="middle" class="f-mute" font-size="18">2</text>
  <text x="350" y="121" text-anchor="middle" class="f-mute" font-size="18">2</text>
  <circle cx="392" cy="115" r="15" class="s-ac f-soft" stroke-width="2"/>
  <text x="392" y="121" text-anchor="middle" class="f-ac" font-size="18">4</text>
  <text x="80" y="30" text-anchor="middle" class="f-base" font-size="15" font-style="italic">P</text>
  <text x="221" y="30" text-anchor="middle" class="f-base" font-size="15" font-style="italic">Q</text>
  <text x="371" y="30" text-anchor="middle" class="f-base" font-size="15" font-style="italic">PQ</text>
  <text x="230" y="174" text-anchor="middle" class="f-ac" font-size="14">(2, 2) 성분 = 3 × 0 + 4 × 1 = 4</text>
</svg>
```

(2) $C$는 $2 \times 3$, $D$는 $3 \times 1$이므로 $CD$는 $2 \times 1$ 행렬이다. $CD = \begin{pmatrix} 1 \cdot 3 + 0 \cdot 1 + 2 \cdot 2 \\ -1 \cdot 3 + 3 \cdot 1 + 1 \cdot 2 \end{pmatrix} = \begin{pmatrix} 7 \\ 2 \end{pmatrix}$. $DC$는 $(3 \times 1)(2 \times 3)$으로 가운데 수 $1$과 $2$가 다르므로 정의되지 않는다.

확인: $QP$의 $(1,\,2)$ 성분은 $Q$의 제$1$행 $(2,\ 0)$과 $P$의 제$2$열 $(2,\ 4)$에서 $4 + 0 = 4$.

**예제 3 (응용).** 두 매장 A, B의 하루 판매량과 상품 한 개당 가격·원가가 다음과 같다.

| 판매량 | 주스(개) | 빵(개) |
| --- | --- | --- |
| 매장 A | $30$ | $20$ |
| 매장 B | $25$ | $40$ |

| (원) | 가격 | 원가 |
| --- | --- | --- |
| 주스 | $1500$ | $900$ |
| 빵 | $2000$ | $1200$ |

두 표를 행렬 $S = \begin{pmatrix} 30 & 20 \\ 25 & 40 \end{pmatrix}$, $M = \begin{pmatrix} 1500 & 900 \\ 2000 & 1200 \end{pmatrix}$로 나타낼 때, $SM$을 구하고 각 성분의 뜻과 매장별 이익을 말하시오.

풀이 전략: $S$의 행은 매장, 열은 상품이고 $M$의 행은 상품, 열은 가격·원가이다. 안쪽 "상품"이 맞물리므로 $SM$이 정의되고, 결과의 행은 매장, 열은 가격·원가가 된다.

1. $(1,\,1)$ 성분: $30 \times 1500 + 20 \times 2000 = 45000 + 40000 = 85000$.
2. $(1,\,2)$ 성분: $30 \times 900 + 20 \times 1200 = 27000 + 24000 = 51000$.
3. $(2,\,1)$ 성분: $25 \times 1500 + 40 \times 2000 = 37500 + 80000 = 117500$.
4. $(2,\,2)$ 성분: $25 \times 900 + 40 \times 1200 = 22500 + 48000 = 70500$.

$$
SM = \begin{pmatrix} 85000 & 51000 \\ 117500 & 70500 \end{pmatrix}
$$

제$1$열은 매장별 매출, 제$2$열은 매장별 원가 합계다. 이익은 매장 A가 $85000 - 51000 = 34000$원, 매장 B가 $117500 - 70500 = 47000$원이다.

확인: 이익만 바로 구하려면 한 개당 이익 $\begin{pmatrix} 600 \\ 800 \end{pmatrix}$을 곱하면 된다. $S\begin{pmatrix} 600 \\ 800 \end{pmatrix} = \begin{pmatrix} 18000 + 16000 \\ 15000 + 32000 \end{pmatrix} = \begin{pmatrix} 34000 \\ 47000 \end{pmatrix}$으로 같다. 반대로 $MS$는 계산은 되지만 "가격 × 매장"을 섞은 값이라 뜻이 없다. 곱의 순서가 의미를 정한다.

**예제 4 (심화).** $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$일 때 $A^{10}$의 모든 성분의 합을 구하시오.

풀이 전략: $A^2$, $A^3$을 직접 계산해 규칙을 찾고, 그 규칙이 다음 거듭제곱에서도 유지되는지 확인한다.

1. $A^2 = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, $A^3 = A^2A = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}$.
2. $A^k = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}$이면 $A^{k+1} = A^kA = \begin{pmatrix} 1 & k + 1 \\ 0 & 1 \end{pmatrix}$이므로 규칙이 계속 유지된다.
3. $A^{10} = \begin{pmatrix} 1 & 10 \\ 0 & 1 \end{pmatrix}$. 성분의 합은 $1 + 10 + 0 + 1 = 12$.

**예제 5 (심화).** 예제 4의 $A$와 $B = \begin{pmatrix} 2 & x \\ 0 & y \end{pmatrix}$에 대하여 $(A + B)^2 = A^2 + 2AB + B^2$이 성립하도록 하는 $y$의 값을 구하시오.

풀이 전략: $(A + B)^2 = A^2 + AB + BA + B^2$이므로 주어진 식은 $AB = BA$와 같다. $AB$, $BA$를 계산해 성분을 비교한다.

$$
AB = \begin{pmatrix} 2 & x + y \\ 0 & y \end{pmatrix}, \qquad BA = \begin{pmatrix} 2 & 2 + x \\ 0 & y \end{pmatrix}
$$

$(1,\,2)$ 성분을 비교하면 $x + y = 2 + x$, 따라서 $y = 2$ ($x$는 아무 실수나 된다).

확인: $x = 1$, $y = 2$로 직접 계산한다. $A + B = \begin{pmatrix} 3 & 2 \\ 0 & 3 \end{pmatrix}$이므로 $(A+B)^2 = \begin{pmatrix} 9 & 12 \\ 0 & 9 \end{pmatrix}$. 한편 $A^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, $2AB = \begin{pmatrix} 4 & 6 \\ 0 & 4 \end{pmatrix}$, $B^2 = \begin{pmatrix} 4 & 4 \\ 0 & 4 \end{pmatrix}$의 합도 $\begin{pmatrix} 9 & 12 \\ 0 & 9 \end{pmatrix}$로 같다.

### 스스로 확인

1. $\begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} 3 \\ 1 \end{pmatrix}$을 계산하시오.
2. $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$일 때 $A - 2E$를 구하시오.
3. 행렬 $X$가 $X + 2\begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} 3 & 1 \\ 4 & 5 \end{pmatrix}$를 만족할 때 $X$를 구하시오.

<details>
<summary>정답과 풀이</summary>

1. $(2 \times 2)(2 \times 1)$이므로 결과는 $2 \times 1$. $\begin{pmatrix} 1 \cdot 3 + 2 \cdot 1 \\ 0 \cdot 3 + (-1) \cdot 1 \end{pmatrix} = \begin{pmatrix} 5 \\ -1 \end{pmatrix}$.
2. $2E = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$이므로 $A - 2E = \begin{pmatrix} -1 & 2 \\ 3 & 2 \end{pmatrix}$.
3. $X = \begin{pmatrix} 3 & 1 \\ 4 & 5 \end{pmatrix} - \begin{pmatrix} 2 & 0 \\ 4 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 0 & 3 \end{pmatrix}$. (확인: $\begin{pmatrix} 1 & 1 \\ 0 & 3 \end{pmatrix} + \begin{pmatrix} 2 & 0 \\ 4 & 2 \end{pmatrix} = \begin{pmatrix} 3 & 1 \\ 4 & 5 \end{pmatrix}$.)

</details>

## 자주 하는 실수와 오개념

**실수 1. 크기 조건을 확인하지 않고 곱하거나, 결과 행렬의 꼴을 틀린다.**

- **왜 틀리는가:** $(3 \times 1)(2 \times 3)$처럼 정의되지 않는 곱을 억지로 계산하거나, $(2 \times 3)(3 \times 1)$의 결과를 $3 \times 3$으로 쓴다. 꼴이 다른 두 행렬을 더하는 것도 같은 실수다.
- **어떻게 바로잡는가:** 곱하기 전에 $(m \times \underline{n})(\underline{n} \times p)$처럼 꼴을 나란히 써서 가운데가 같은지 보고, 결과는 바깥 두 수 $m \times p$로 정한다. 덧셈·뺄셈은 꼴이 완전히 같을 때만 한다.

**실수 2. 행렬의 곱을 같은 자리 성분끼리의 곱으로 계산한다.**

- **왜 틀리는가:** 덧셈이 성분끼리였으니 곱셈도 그럴 것이라 생각해 $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 2 & 0 \\ -1 & 1 \end{pmatrix}$을 $\begin{pmatrix} 2 & 0 \\ -3 & 4 \end{pmatrix}$로 쓴다.
- **어떻게 바로잡는가:** $(i,\,j)$ 성분은 "앞 행렬의 $i$행과 뒤 행렬의 $j$열"을 짝지어 곱하고 더한 값임을 손가락으로 행과 열을 짚으며 계산한다. 바른 답은 $\begin{pmatrix} 0 & 2 \\ 2 & 4 \end{pmatrix}$이다.

**실수 3. 수의 곱셈 공식을 행렬에 그대로 쓴다.**

- **왜 틀리는가:** $(A + B)^2 = A^2 + 2AB + B^2$, $(A + B)(A - B) = A^2 - B^2$은 $AB = BA$를 몰래 가정한 식이다. 일반적인 행렬에서는 $AB$와 $BA$가 달라 틀린 결과가 나온다.
- **어떻게 바로잡는가:** 분배법칙으로 직접 전개해 $A^2 + AB + BA + B^2$, $A^2 - AB + BA - B^2$처럼 순서를 지켜 쓴다. 곱의 순서를 바꾸는 것은 $AB = BA$가 확인되었을 때만 한다.

**실수 4. $AB = O$이면 $A = O$ 또는 $B = O$라고 생각한다.**

- **왜 틀리는가:** 수에서는 $ab = 0$이면 $a = 0$ 또는 $b = 0$이지만, 행렬에서는 위의 예처럼 $A \ne O$, $B \ne O$인데 $BA = O$가 될 수 있다.
- **어떻게 바로잡는가:** 행렬 방정식에서 양변을 "나누거나" 인수를 $0$으로 놓아 푸는 대신, 성분을 문자로 놓고 성분별 등식을 세워 푼다.

**실수 5. $A^2$을 성분마다 제곱해서 구한다.**

- **왜 틀리는가:** $A^2$은 $A \times A$, 즉 행렬의 곱이다. $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$의 성분을 제곱하면 $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이 되지만, 실제 $A^2$은 $\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$이다.
- **어떻게 바로잡는가:** 거듭제곱은 항상 $A^2 = AA$로 풀어 쓰고 행렬의 곱 규칙으로 계산한다. $A^3$도 $A^2A$처럼 한 번씩 곱해 나간다.

## 앞뒤 학년 연계

중2 「연립일차방정식」의 계수만 모아 표로 쓰면 행렬이 되고, $2x + 3y = 4000$, $x + 4y = 4500$ 같은 연립방정식을 행렬의 곱 하나로 나타낼 수 있다. 다음 공통수학2 「직선의 방정식」에서는 일차방정식 $ax + by + c = 0$을 좌표평면 위의 직선으로 보는데, 연립일차방정식의 해가 두 직선의 교점이라는 관점이 행렬로 연립방정식을 다루는 생각과 이어진다. 대학에서는 선형대수학으로 확장되어 컴퓨터 그래픽과 인공지능 계산의 기본 언어가 된다.
