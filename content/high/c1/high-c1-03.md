---
id: high-c1-03
title: 복소수
level: 고등학교
grade: 공통수학1
area: 방정식과 부등식
keywords: ["허수단위 i", "복소수", "켤레복소수", "복소수의 사칙연산", "i의 거듭제곱", "음수의 제곱근 곱셈", "루트 마이너스 곱하면 왜 마이너스", "켤레복소수 곱하면 실수", "복소수 나눗셈 분모 실수화", "i의 거듭제곱 주기 4", "순허수 뜻"]
prerequisites: ["mid-3-1-01"]
next: ["high-c1-04"]
status: draft
note: 2022 개정 공통수학1 기준. 2015 개정 수학(상)의 '복소수와 이차방정식' 앞부분과 같은 내용이다.
---

## 핵심 개념

> **한 줄 요약.** 제곱해서 $-1$이 되는 수 $i$를 새로 만들어, 모든 수를 $a + bi$ 꼴(복소수)로 다룬다. 계산은 $i$를 문자처럼 하다가 $i^2$이 나오면 $-1$로 바꾸면 된다.

수의 범위는 필요할 때마다 넓어져 왔다. $3 - 5$를 계산하려고 음수를 만들었고, $2 \div 3$을 위해 분수를, $x^2 = 2$를 위해 $\sqrt{2}$ 같은 무리수를 만들었다. 같은 이유로 $x^2 = -1$의 답이 될 수를 만든 것이 허수단위 $i$다. 처음에는 "상상 속의 수(imaginary number)"라는 이름이 붙었지만, 계산 규칙이 모순 없이 잘 돌아가서 지금은 수학의 정식 수가 되었다.

**왜 배우는가.** 복소수가 있으면 판별식이 음수인 이차방정식도 근을 가진다. 그래서 "근이 없다"고 멈추지 않고 근과 계수의 관계 같은 성질을 모든 이차방정식에 똑같이 쓸 수 있다. 대학 이후에는 교류 전기 회로, 신호 처리(소리·영상 압축), 양자역학처럼 "회전하고 진동하는 것"을 계산할 때 복소수가 기본 도구로 쓰인다.

**허수단위 $i$.** 실수는 제곱하면 항상 $0$ 이상이므로 $x^2 = -1$을 만족하는 실수는 없다. 그래서 제곱해서 $-1$이 되는 새로운 수를 하나 정하고 $i$라고 쓴다. 즉 $i^2 = -1$이고 $i = \sqrt{-1}$로 나타낸다. 이 $i$를 **허수단위**라고 한다.

**음수의 제곱근.** $a > 0$일 때 $\sqrt{-a} = \sqrt{a}\,i$로 정한다. 예를 들어 $\sqrt{-4} = 2i$이고, $-4$의 제곱근은 $\pm 2i$이다. 실제로 $(2i)^2 = 4i^2 = -4$이다.

**복소수.** 실수 $a,\,b$에 대해 $a + bi$ 꼴의 수를 **복소수**라 하고, $a$를 **실수부분**, $b$를 **허수부분**이라고 한다. $b = 0$이면 실수, $b \ne 0$이면 **허수**다. 허수 중에서 $a = 0$인 $bi$ 꼴을 **순허수**라고 한다. 실수도 $b = 0$인 복소수이므로 복소수는 실수와 허수를 모두 포함한다.

```svg 복소수 a + bi 는 실수(b = 0)와 허수(b ≠ 0)로 나뉘고, 허수 중 a = 0 인 것이 순허수다
<svg viewBox="0 0 420 210">
  <rect x="10" y="10" width="400" height="190" rx="10" class="s-base" fill="none" stroke-width="2"/>
  <text x="24" y="34" class="f-base" font-size="15">복소수 a + bi (a, b는 실수)</text>
  <rect x="28" y="50" width="172" height="134" rx="8" class="s-base f-surf" stroke-width="1.5"/>
  <text x="114" y="76" text-anchor="middle" class="f-base" font-size="15">실수 (b = 0)</text>
  <text x="114" y="122" text-anchor="middle" class="f-mute" font-size="14">3,  −1/2,  √2,  0</text>
  <rect x="220" y="50" width="172" height="134" rx="8" class="s-base" fill="none" stroke-width="1.5"/>
  <text x="306" y="76" text-anchor="middle" class="f-base" font-size="15">허수 (b ≠ 0)</text>
  <text x="306" y="100" text-anchor="middle" class="f-mute" font-size="14">2 + i,  1 − 3i</text>
  <rect x="238" y="112" width="136" height="60" rx="6" class="s-ac f-soft" stroke-width="1.5"/>
  <text x="306" y="136" text-anchor="middle" class="f-ac" font-size="14">순허수 (a = 0)</text>
  <text x="306" y="158" text-anchor="middle" class="f-mute" font-size="14">5i,  −i</text>
</svg>
```

**켤레복소수.** $z = a + bi$에서 허수부분의 부호만 바꾼 $a - bi$를 $z$의 **켤레복소수**라 하고 $\overline{z}$로 쓴다. $z$와 $\overline{z}$를 더하거나 곱하면 $i$가 사라져 실수가 된다. 그래서 분모에 $i$가 있는 나눗셈을 할 때 분모·분자에 켤레복소수를 곱해 분모를 실수로 만든다.

**참고: 복소수를 점으로 보기.** 복소수 $a + bi$는 가로축을 실수부분, 세로축을 허수부분으로 하는 평면 위의 점 $(a,\,b)$로 생각할 수 있다(이 평면은 고등 교육과정 밖의 내용이라 그림으로만 소개한다). 켤레복소수 $a - bi$는 점 $(a,\,-b)$로, 가로축에 대해 대칭인 위치에 있다. 실수는 가로축 위에, 순허수는 세로축 위에 놓인다.

```plot
title: 3 + 2i 와 켤레복소수 3 − 2i 는 가로축(실수축)에 대해 대칭인 점이다
x: [-1.5, 5]
y: [-3, 3]
equal: true
width: 420
xlabel: 실수축
ylabel: 허수축
draw:
  - seg: [[3, 2], [3, -2]]
    dash: true
    color: mute
  - point: [3, 2]
    label: 3 + 2i
    pos: e
  - point: [3, -2]
    color: base
    label: 3 − 2i
    pos: e
  - point: [0, 1]
    color: base
    label: i
    pos: e
  - point: [4, 0]
    color: base
    label: 실수 4
    pos: n
```

허수는 이렇게 한 줄(수직선)이 아닌 평면 위의 점이므로 실수처럼 크고 작음을 정할 수 없다. 그래서 허수끼리는 크기를 비교하지 않는다.

## 공식·정리

**복소수가 서로 같을 조건** ($a,\,b,\,c,\,d$는 반드시 실수)

- $a + bi = c + di \iff a = c$ 그리고 $b = d$
- $a + bi = 0 \iff a = 0$ 그리고 $b = 0$

**사칙연산** ($a,\,b,\,c,\,d$는 실수, $i^2 = -1$)

- $(a + bi) \pm (c + di) = (a \pm c) + (b \pm d)i$
- $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$
- $\dfrac{a + bi}{c + di} = \dfrac{(a+bi)(c-di)}{(c+di)(c-di)} = \dfrac{ac + bd}{c^2 + d^2} + \dfrac{bc - ad}{c^2 + d^2}\,i$ $\quad (c + di \ne 0)$

**켤레복소수의 성질** ($z = a + bi$, $a,\,b$는 실수)

- $z + \overline{z} = 2a$, $\;z\,\overline{z} = a^2 + b^2$ (둘 다 실수)
- $\overline{z_1 \pm z_2} = \overline{z_1} \pm \overline{z_2}$, $\;\overline{z_1 z_2} = \overline{z_1}\;\overline{z_2}$, $\;\overline{\left(\dfrac{z_1}{z_2}\right)} = \dfrac{\overline{z_1}}{\overline{z_2}}$ $(z_2 \ne 0)$
- $z$가 실수 $\iff z = \overline{z}$, $\;z$가 순허수 $\iff z = -\overline{z}$ 이고 $z \ne 0$

**$i$의 거듭제곱** ($n$은 $0$ 이상의 정수, $i^0 = 1$로 약속): $i^{4n} = 1$, $i^{4n+1} = i$, $i^{4n+2} = -1$, $i^{4n+3} = -i$

**음수의 제곱근의 계산** ($a > 0$, $b > 0$)

$$
\sqrt{-a}\,\sqrt{-b} = -\sqrt{ab}, \qquad \frac{\sqrt{a}}{\sqrt{-b}} = -\sqrt{-\frac{a}{b}}
$$

이 두 식은 근호 안이 **둘 다 음수**(첫째 식)이거나 **분자는 양수, 분모는 음수**(둘째 식)일 때만 부호가 바뀐다. 그 밖의 경우(두 수 중 하나라도 양수이거나 $0$, 또는 분자가 음수)에는 $\sqrt{x}\sqrt{y} = \sqrt{xy}$, $\dfrac{\sqrt{x}}{\sqrt{y}} = \sqrt{\dfrac{x}{y}}$가 그대로 성립한다.

## 왜 성립하는가

**$a + bi = 0$이면 $a = b = 0$ ($a,\,b$ 실수).** 만약 $b \ne 0$이라면 $i = -\dfrac{a}{b}$가 되어 $i$가 실수여야 한다. 그런데 실수의 제곱은 $0$ 이상이므로 $i^2 = -1$과 모순이다. 따라서 $b = 0$이고, 그러면 $a = 0$이다. 두 복소수가 같을 조건은 $(a - c) + (b - d)i = 0$에 이 결과를 쓰면 얻는다.

**켤레복소수의 곱이 실수인 이유.** 합차 공식과 $i^2 = -1$을 쓴다.

$$
(a + bi)(a - bi) = a^2 - (bi)^2 = a^2 - b^2 i^2 = a^2 + b^2
$$

곱셈의 성질 $\overline{z_1 z_2} = \overline{z_1}\;\overline{z_2}$는 $z_1 = a + bi$, $z_2 = c + di$로 놓고 양쪽을 계산하면 둘 다 $(ac - bd) - (ad + bc)i$가 되어 확인된다.

**$i^n$의 주기.** $i^1 = i$, $i^2 = -1$, $i^3 = i^2 \cdot i = -i$, $i^4 = (i^2)^2 = 1$이다. $i^4 = 1$이므로 그다음부터는 $i^5 = i^4 \cdot i = i$처럼 같은 네 값이 반복된다. 따라서 지수를 $4$로 나눈 나머지만 보면 된다. 연속한 네 항의 합은 $i - 1 - i + 1 = 0$이다.

```svg i 를 계속 곱하면 i → −1 → −i → 1 → i 로 네 값이 돌아가며 반복된다
<svg viewBox="-50 0 440 285">
  <circle cx="170" cy="48" r="30" class="s-ac f-soft" stroke-width="2"/>
  <text x="170" y="54" text-anchor="middle" class="f-ac" font-size="16">i</text>
  <text x="170" y="12" text-anchor="middle" class="f-mute" font-size="13">i¹, i⁵, i⁹, …</text>
  <circle cx="282" cy="140" r="30" class="s-base f-surf" stroke-width="1.5"/>
  <text x="282" y="146" text-anchor="middle" class="f-base" font-size="16">−1</text>
  <text x="320" y="145" class="f-mute" font-size="13">i², i⁶, …</text>
  <circle cx="170" cy="232" r="30" class="s-base f-surf" stroke-width="1.5"/>
  <text x="170" y="238" text-anchor="middle" class="f-base" font-size="16">−i</text>
  <text x="170" y="276" text-anchor="middle" class="f-mute" font-size="13">i³, i⁷, …</text>
  <circle cx="58" cy="140" r="30" class="s-base f-surf" stroke-width="1.5"/>
  <text x="58" y="146" text-anchor="middle" class="f-base" font-size="16">1</text>
  <text x="20" y="145" text-anchor="end" class="f-mute" font-size="13">i⁴, i⁸, …</text>
  <path d="M 198,60 Q 250,72 266,112" class="s-base" fill="none" stroke-width="1.5" marker-end="url(#ah)"/>
  <path d="M 268,166 Q 252,212 200,224" class="s-base" fill="none" stroke-width="1.5" marker-end="url(#ah)"/>
  <path d="M 142,222 Q 90,210 74,168" class="s-base" fill="none" stroke-width="1.5" marker-end="url(#ah)"/>
  <path d="M 72,114 Q 90,70 140,56" class="s-base" fill="none" stroke-width="1.5" marker-end="url(#ah)"/>
  <text x="250" y="78" class="f-base" font-size="14">× i</text>
  <text x="250" y="216" class="f-base" font-size="14">× i</text>
  <text x="70" y="216" class="f-base" font-size="14">× i</text>
  <text x="70" y="78" class="f-base" font-size="14">× i</text>
</svg>
```

그림처럼 $i$를 한 번 곱할 때마다 한 칸씩 돌고, 네 번 곱하면 제자리로 온다. 그래서 $i^{50}$은 $50 = 4 \times 12 + 2$에서 나머지 $2$를 보고 $i^2 = -1$로 바로 답한다.

**$\sqrt{-a}\sqrt{-b} = -\sqrt{ab}$인 이유.** 정의에 따라 각각을 $i$로 바꾼 다음 곱한다.

$$
\sqrt{-a}\,\sqrt{-b} = \sqrt{a}\,i \cdot \sqrt{b}\,i = \sqrt{ab}\;i^2 = -\sqrt{ab}
$$

실수에서 쓰던 $\sqrt{x}\sqrt{y} = \sqrt{xy}$는 $x \ge 0$, $y \ge 0$일 때 증명된 규칙이라 두 수가 모두 음수일 때는 쓸 수 없다. 만약 쓸 수 있다면 $-1 = i \cdot i = \sqrt{-1}\sqrt{-1} = \sqrt{1} = 1$이라는 모순이 생긴다.

## 대표 예제

**예제 1 (기본).** 다음을 $a + bi$ 꼴로 나타내시오. (1) $(2 + 3i)(1 - 2i)$ (2) $\dfrac{3 + i}{1 - i}$

풀이 전략: 곱셈은 다항식처럼 전개한 뒤 $i^2 = -1$로 바꾼다. 나눗셈은 분모의 켤레복소수를 분모·분자에 곱해 분모를 실수로 만든다.

(1) $2 - 4i + 3i - 6i^2 = 2 - i + 6 = 8 - i$.

확인: 공식 $(ac - bd) + (ad + bc)i$에 $a = 2$, $b = 3$, $c = 1$, $d = -2$를 넣으면 $(2 + 6) + (-4 + 3)i = 8 - i$.

(2) 분모의 켤레복소수 $1 + i$를 분모와 분자에 곱한다.

$$
\frac{(3 + i)(1 + i)}{(1 - i)(1 + i)} = \frac{3 + 3i + i + i^2}{1 + 1} = \frac{2 + 4i}{2} = 1 + 2i
$$

확인: $(1 + 2i)(1 - i) = 1 - i + 2i - 2i^2 = 3 + i$.

**예제 2 (기본).** 실수 $x,\,y$에 대하여 $(x + 2y) + (x - y)i = 5 + 2i$일 때 $x,\,y$의 값을 구하시오.

풀이 전략: $x,\,y$가 실수이므로 괄호 안이 각각 실수부분·허수부분이다. 양쪽을 따로 같게 놓는다.

1. 실수부분 비교: $x + 2y = 5$. 허수부분 비교: $x - y = 2$.
2. 첫 식에서 둘째 식을 빼면 $3y = 3$, $y = 1$.
3. $x - 1 = 2$에서 $x = 3$.

확인: $3 + 2 = 5$, $3 - 1 = 2$.

**예제 3 (표준).** (1) $i + i^2 + i^3 + \cdots + i^{50}$의 값을 구하시오. (2) $\left(\dfrac{1 + i}{1 - i}\right)^{2026}$의 값을 구하시오.

풀이 전략: $i$의 거듭제곱은 네 개씩 반복되고, 연속한 네 개의 합은 $0$이다. 지수를 $4$로 나눈 나머지만 본다.

(1) $50 = 4 \times 12 + 2$이므로 앞의 $48$개 항은 네 개씩 $12$묶음이 되어 합이 $0$이다. 남는 것은 $i^{49} + i^{50} = i + (-1) = -1 + i$.

(2) 괄호 안부터 간단히 한다. $\dfrac{1 + i}{1 - i} = \dfrac{(1 + i)^2}{(1 - i)(1 + i)} = \dfrac{1 + 2i + i^2}{2} = \dfrac{2i}{2} = i$. $2026 = 4 \times 506 + 2$이므로 $i^{2026} = i^2 = -1$.

확인: $(1 - i) \cdot i = i - i^2 = 1 + i$이므로 $\dfrac{1+i}{1-i} = i$가 맞다.

**예제 4 (응용).** 전기공학에서는 교류 회로 부품이 전류를 방해하는 정도(임피던스)를 복소수로 나타낸다. (전류 기호 $i$와 헷갈리지 않도록 허수단위를 $j$로 쓰기도 하지만 여기서는 $i$로 쓴다.) 직렬로 연결하면 임피던스를 더한다. 두 부품의 임피던스가 $Z_1 = 3 + 4i$, $Z_2 = 1 - i$(단위 $\Omega$)일 때, 합성 임피던스 $Z = Z_1 + Z_2$와 $Z\overline{Z}$의 값을 구하시오. (실제로는 $\sqrt{Z\overline{Z}}$가 임피던스의 크기다.)

풀이 전략: 덧셈은 실수부분끼리, 허수부분끼리 더한다. $Z\overline{Z} = a^2 + b^2$ 공식을 쓴다.

1. $Z = (3 + 1) + (4 - 1)i = 4 + 3i$.
2. $\overline{Z} = 4 - 3i$이므로 $Z\overline{Z} = 4^2 + 3^2 = 16 + 9 = 25$.
3. 크기는 $\sqrt{25} = 5\,\Omega$이다.

확인: 직접 곱하면 $(4 + 3i)(4 - 3i) = 16 - 12i + 12i - 9i^2 = 16 + 9 = 25$로 $i$가 사라진다.

**예제 5 (심화).** (1) $\sqrt{-2}\,\sqrt{-8} + \dfrac{\sqrt{12}}{\sqrt{-3}}$를 계산하시오. (2) 복소수 $z$가 $z + 2\overline{z} = 6 - i$를 만족할 때 $z$를 구하시오.

풀이 전략: (1) 근호 안이 음수면 계산 전에 먼저 $i$로 바꾼다. (2) $z = a + bi$($a,\,b$ 실수)로 놓고 복소수가 같을 조건을 쓴다.

(1) $\sqrt{-2}\,\sqrt{-8} = \sqrt{2}\,i \cdot 2\sqrt{2}\,i = 4i^2 = -4$. $\dfrac{\sqrt{12}}{\sqrt{-3}} = \dfrac{2\sqrt{3}}{\sqrt{3}\,i} = \dfrac{2}{i} = \dfrac{2i}{i^2} = -2i$. 따라서 답은 $-4 - 2i$.

확인: 공식으로 $\sqrt{-2}\sqrt{-8} = -\sqrt{16} = -4$, $\dfrac{\sqrt{12}}{\sqrt{-3}} = -\sqrt{-4} = -2i$로 같다.

(2) $z = a + bi$이면 $\overline{z} = a - bi$이므로

$$
z + 2\overline{z} = (a + bi) + (2a - 2bi) = 3a - bi = 6 - i
$$

실수부분 $3a = 6$에서 $a = 2$, 허수부분 $-b = -1$에서 $b = 1$. 따라서 $z = 2 + i$.

확인: $(2 + i) + 2(2 - i) = 2 + i + 4 - 2i = 6 - i$.

### 스스로 확인

1. $(3 - i)^2$을 $a + bi$ 꼴로 나타내시오.
2. $\dfrac{1}{2 + i}$를 $a + bi$ 꼴로 나타내시오.
3. $i^{100} + i^{101} + i^{102}$의 값을 구하시오.

<details>
<summary>정답과 풀이</summary>

1. $9 - 6i + i^2 = 9 - 6i - 1 = 8 - 6i$.
2. 분모·분자에 $2 - i$를 곱하면 $\dfrac{2 - i}{(2 + i)(2 - i)} = \dfrac{2 - i}{4 + 1} = \dfrac{2}{5} - \dfrac{1}{5}i$. (확인: $\left(\dfrac{2}{5} - \dfrac{1}{5}i\right)(2 + i) = \dfrac{4}{5} + \dfrac{2}{5}i - \dfrac{2}{5}i - \dfrac{1}{5}i^2 = \dfrac{4}{5} + \dfrac{1}{5} = 1$.)
3. $100$은 $4$의 배수이므로 $i^{100} = 1$, $i^{101} = i$, $i^{102} = -1$. 합은 $1 + i - 1 = i$.

</details>

## 자주 하는 실수와 오개념

**실수 1. $\sqrt{-2}\,\sqrt{-3} = \sqrt{6}$이라고 쓴다.**

- **왜 틀리는가:** $\sqrt{x}\sqrt{y} = \sqrt{xy}$는 $x,\,y$가 $0$ 이상일 때의 규칙이다. 두 수가 모두 음수이면 $\sqrt{2}\,i \cdot \sqrt{3}\,i = \sqrt{6}\,i^2 = -\sqrt{6}$이 맞다.
- **어떻게 바로잡는가:** 근호 안이 음수면 계산하기 전에 먼저 $\sqrt{-a} = \sqrt{a}\,i$로 바꾸고, 그다음에 곱하거나 나눈다. 이 순서만 지키면 공식을 외우지 않아도 부호가 틀리지 않는다.

**실수 2. $a,\,b$가 실수라는 조건 없이 $a + bi = 0$에서 $a = b = 0$이라고 한다.**

- **왜 틀리는가:** 이 성질은 $a,\,b$가 실수일 때만 성립한다. 예를 들어 $a = i$, $b = -1$이면 $a + bi = i - i = 0$이지만 $a \ne 0$이다.
- **어떻게 바로잡는가:** 복소수의 상등을 쓰기 전에 실수부분·허수부분으로 놓은 식이 정말 실수인지 확인한다. 문제에 "실수 $x,\,y$"라는 조건이 있는지 반드시 본다.

**실수 3. 허수끼리 크기를 비교한다.**

- **왜 틀리는가:** $2i > i$처럼 쓰면 안 된다. 허수에는 크기 순서가 정의되지 않는다. 만약 $i > 0$이라 하면 양변에 $i$를 곱해 $-1 > 0$, $i < 0$이라 하면 $-i > 0$에서 $(-i)^2 = -1 > 0$으로 어느 쪽이든 모순이다.
- **어떻게 바로잡는가:** 부등호는 실수 사이에서만 쓴다. "$z$가 양수"라는 조건이 나오면 $z$가 실수라는 뜻까지 포함되어 있다고 읽는다.

**실수 4. 분모를 실수화할 때 분모에만 켤레복소수를 곱한다.**

- **왜 틀리는가:** $\dfrac{3 + i}{1 - i}$에서 분모만 $(1 - i)(1 + i) = 2$로 바꾸고 분자는 $3 + i$로 두면 값이 달라진다. 분모·분자에 같은 수를 곱해야 원래 값이 유지된다.
- **어떻게 바로잡는가:** 항상 $\dfrac{1 + i}{1 + i}$처럼 "$1$과 같은 분수"를 곱한다고 생각한다. 마지막에 답과 분모를 곱해 분자가 나오는지 검산한다.

**실수 5. $(1 + i)^2 = 1 + i^2 = 0$이라고 계산한다.**

- **왜 틀리는가:** 실수에서 하던 $(a+b)^2 = a^2 + b^2$ 실수를 복소수에서도 한다. 가운데 항 $2 \cdot 1 \cdot i = 2i$가 빠졌다.
- **어떻게 바로잡는가:** 복소수도 곱셈 공식은 그대로 쓴다. $(1 + i)^2 = 1 + 2i + i^2 = 2i$이다. 마지막 단계에서만 $i^2$을 $-1$로 바꾼다고 기억한다.

## 앞뒤 학년 연계

중3 「제곱근과 실수」에서 "음수의 제곱근은 실수 범위에 없다"고 배운 것을 이 단원에서 허수단위 $i$로 넓힌다. 다음 단원 「이차방정식」에서는 $b^2 - 4ac < 0$일 때도 근의 공식으로 허근을 구하고, 계수가 실수인 이차방정식의 두 허근이 서로 켤레복소수라는 사실을 배운다. 이 단원의 켤레복소수 계산이 그대로 근과 계수의 관계 계산에 쓰인다.
