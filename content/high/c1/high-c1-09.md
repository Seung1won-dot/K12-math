---
id: high-c1-09
title: 행렬과 그 연산
level: 고등학교
grade: 공통수학1
area: 행렬
keywords: ["행렬", "행렬의 덧셈·실수배", "행렬의 곱셈", "단위행렬", "행렬 곱셈 교환법칙 불성립", "행렬 곱셈 왜 행 곱하기 열", "AB와 BA가 다른 이유"]
prerequisites: ["mid-2-1-04"]
next: ["high-c2-02"]
note: 2015 개정 고교 과정에서 빠졌던 행렬이 2022 개정에서 공통수학1에 다시 들어왔다.
status: draft
---

## 핵심 개념

**행렬.** 여러 개의 수나 문자를 직사각형 모양으로 배열하고 괄호로 묶은 것을 **행렬**이라 한다. 배열된 각각의 수를 **성분**, 가로줄을 **행**, 세로줄을 **열**이라 부른다. 행이 $m$개, 열이 $n$개인 행렬을 $m \times n$ 행렬이라 하고, 특히 행과 열의 개수가 같은 $n \times n$ 행렬을 $n$차 정사각행렬이라 한다. 행렬 $A$의 제$i$행과 제$j$열이 만나는 자리의 성분을 $a_{ij}$로 나타낸다.

**서로 같은 행렬.** 두 행렬 $A$, $B$의 꼴(행과 열의 개수)이 같고 대응하는 성분이 모두 같을 때 $A = B$라고 한다. 그래서 행렬의 등식 하나는 성분의 개수만큼의 등식을 한꺼번에 담고 있다.

**덧셈·뺄셈·실수배.** 꼴이 같은 두 행렬은 같은 자리의 성분끼리 더하거나 빼고, 실수 $k$를 곱할 때는 모든 성분에 $k$를 곱한다. 모든 성분이 $0$인 행렬을 **영행렬** $O$라 한다.

**곱셈.** $A$가 $m \times n$, $B$가 $n \times p$ 행렬일 때, 곱 $AB$는 $m \times p$ 행렬이다. $AB$의 $(i,\,j)$ 성분은 $A$의 제$i$행과 $B$의 제$j$열의 성분을 차례로 곱해서 더한 값이다. 그래서 **$A$의 열의 개수와 $B$의 행의 개수가 같을 때만** 곱을 정의할 수 있다.

**단위행렬.** 왼쪽 위에서 오른쪽 아래로 가는 대각선의 성분이 모두 $1$이고 나머지가 $0$인 정사각행렬을 **단위행렬** $E$라 한다. 수의 곱셈에서 $1$처럼, 어떤 행렬에 곱해도 그 행렬을 바꾸지 않는다.

## 공식·정리

**덧셈과 실수배** ($A$, $B$, $C$는 같은 꼴의 행렬, $k$, $l$은 실수)

- $A + B = B + A$, $(A + B) + C = A + (B + C)$, $A + O = A$
- $k(A + B) = kA + kB$, $(k + l)A = kA + lA$, $(kl)A = k(lA)$

**곱셈** ($2 \times 2$일 때)
$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} p & q \\ r & s \end{pmatrix} = \begin{pmatrix} ap + br & aq + bs \\ cp + dr & cq + ds \end{pmatrix}
$$

- 크기 조건: $(m \times n)(n \times p) = (m \times p)$. 가운데 두 수가 같아야 한다.
- 결합법칙 $(AB)C = A(BC)$, 분배법칙 $A(B + C) = AB + AC$, $(A + B)C = AC + BC$가 성립한다(곱이 정의될 때).
- **교환법칙은 일반적으로 성립하지 않는다**: $AB \ne BA$일 수 있다.
- $AE = EA = A$ ($A$는 $E$와 같은 차수의 정사각행렬), $A^2 = AA$, $A^{n+1} = A^nA$.
- $(A + B)^2 = A^2 + AB + BA + B^2$. $AB = BA$일 때에만 $A^2 + 2AB + B^2$과 같다.

## 왜 성립하는가

**곱셈을 "행 × 열"로 정하는 이유.** 학생 두 명이 연필과 공책을 산다. 갑은 연필 $2$자루와 공책 $3$권, 을은 연필 $1$자루와 공책 $4$권을 사고, 연필은 $500$원, 공책은 $1000$원이다. 각자 낸 돈은 "구매 수량(행) × 가격(열)"을 차례로 곱해 더한 값이다.
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

**예제 1 (교과서 수준).** (1) $2 \times 3$ 행렬 $A$의 $(i,\,j)$ 성분이 $a_{ij} = i + 2j$일 때 $A$를 구하시오. (2) $P = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $Q = \begin{pmatrix} 2 & 0 \\ -1 & 1 \end{pmatrix}$일 때 $2P - Q$를 구하시오.

(1) $a_{11} = 3$, $a_{12} = 5$, $a_{13} = 7$, $a_{21} = 4$, $a_{22} = 6$, $a_{23} = 8$이므로 $A = \begin{pmatrix} 3 & 5 & 7 \\ 4 & 6 & 8 \end{pmatrix}$.

(2) $2P = \begin{pmatrix} 2 & 4 \\ 6 & 8 \end{pmatrix}$이므로 $2P - Q = \begin{pmatrix} 2 - 2 & 4 - 0 \\ 6 - (-1) & 8 - 1 \end{pmatrix} = \begin{pmatrix} 0 & 4 \\ 7 & 7 \end{pmatrix}$.

확인: $(2P - Q) + Q = \begin{pmatrix} 2 & 4 \\ 6 & 8 \end{pmatrix} = 2P$.

**예제 2 (교과서 수준).** 예제 1의 $P$, $Q$에 대하여 (1) $PQ$와 $QP$를 구하시오. (2) $C = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 3 & 1 \end{pmatrix}$, $D = \begin{pmatrix} 3 \\ 1 \\ 2 \end{pmatrix}$일 때 $CD$를 구하고, $DC$가 정의되는지 말하시오.

(1)
$$
PQ = \begin{pmatrix} 1 \cdot 2 + 2 \cdot (-1) & 1 \cdot 0 + 2 \cdot 1 \\ 3 \cdot 2 + 4 \cdot (-1) & 3 \cdot 0 + 4 \cdot 1 \end{pmatrix} = \begin{pmatrix} 0 & 2 \\ 2 & 4 \end{pmatrix}, \qquad QP = \begin{pmatrix} 2 \cdot 1 + 0 \cdot 3 & 2 \cdot 2 + 0 \cdot 4 \\ -1 \cdot 1 + 1 \cdot 3 & -1 \cdot 2 + 1 \cdot 4 \end{pmatrix} = \begin{pmatrix} 2 & 4 \\ 2 & 2 \end{pmatrix}
$$
이므로 $PQ \ne QP$이다.

(2) $C$는 $2 \times 3$, $D$는 $3 \times 1$이므로 $CD$는 $2 \times 1$ 행렬이다. $CD = \begin{pmatrix} 3 + 0 + 4 \\ -3 + 3 + 2 \end{pmatrix} = \begin{pmatrix} 7 \\ 2 \end{pmatrix}$. $DC$는 $(3 \times 1)(2 \times 3)$으로 가운데 수 $1$과 $2$가 다르므로 정의되지 않는다.

확인: $PQ$의 $(2,\,2)$ 성분은 $P$의 제$2$행 $(3,\ 4)$와 $Q$의 제$2$열 $(0,\ 1)$에서 $0 + 4 = 4$. $QP$의 $(1,\,2)$ 성분은 $(2,\ 0)$과 $(2,\ 4)$에서 $4 + 0 = 4$.

**예제 3 (심화).** $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이다. (1) $A^{10}$의 모든 성분의 합을 구하시오. (2) $B = \begin{pmatrix} 2 & x \\ 0 & y \end{pmatrix}$에 대하여 $(A + B)^2 = A^2 + 2AB + B^2$이 성립하도록 하는 $y$의 값을 구하시오.

(1) $A^2 = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, $A^3 = A^2A = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}$. 일반적으로 $A^k = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}$이면 $A^{k+1} = A^kA = \begin{pmatrix} 1 & k + 1 \\ 0 & 1 \end{pmatrix}$이므로 $A^{10} = \begin{pmatrix} 1 & 10 \\ 0 & 1 \end{pmatrix}$. 성분의 합은 $1 + 10 + 0 + 1 = 12$.

(2) 성립할 조건은 $AB = BA$이다.
$$
AB = \begin{pmatrix} 2 & x + y \\ 0 & y \end{pmatrix}, \qquad BA = \begin{pmatrix} 2 & 2 + x \\ 0 & y \end{pmatrix}
$$
$(1,\,2)$ 성분을 비교하면 $x + y = 2 + x$, 따라서 $y = 2$ ($x$는 아무 실수나 된다).

확인: $x = 1$, $y = 2$로 직접 계산한다. $A + B = \begin{pmatrix} 3 & 2 \\ 0 & 3 \end{pmatrix}$이므로 $(A+B)^2 = \begin{pmatrix} 9 & 12 \\ 0 & 9 \end{pmatrix}$. 한편 $A^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, $2AB = \begin{pmatrix} 4 & 6 \\ 0 & 4 \end{pmatrix}$, $B^2 = \begin{pmatrix} 4 & 4 \\ 0 & 4 \end{pmatrix}$의 합도 $\begin{pmatrix} 9 & 12 \\ 0 & 9 \end{pmatrix}$로 같다.

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

## 앞뒤 학년 연계

중2에서 배운 연립일차방정식을 수의 표로 간단히 정리해 다루는 도구가 행렬이다. 행렬의 곱으로 연립일차방정식과 좌표의 변환을 하나의 식으로 쓸 수 있으며, 대학의 선형대수학과 컴퓨터 그래픽·인공지능 계산의 기본 언어가 된다.
