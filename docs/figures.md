# 그림 작성법

단원 Markdown 안에 코드 블록으로 그림을 적으면 빌드할 때 SVG로 바뀐다(`src/figures/`). 색은 테마(다크·라이트)를 자동으로 따르므로 **색 값을 직접 쓰지 않는다.** `npm run validate`가 모든 그림을 미리 그려 보고 오류를 줄 번호와 함께 알려 준다.

| 블록 | 용도 |
| --- | --- |
| ` ```plot ` | 좌표평면 그래프, 좌표 위의 도형. `axes: false`면 축 없는 도형 그림 |
| ` ```numberline ` | 수직선: 점, 구간, 부등식, 덧셈·뺄셈 이동 |
| ` ```svg 캡션 ` | 위 둘로 안 되는 그림(모형, 배열, 분수 막대, 그림그래프 등)을 직접 그린 SVG |

모든 그림에는 **무엇을 보면 되는지 알려 주는 설명 한 줄**이 필요하다. plot·numberline은 `title:`, svg는 ` ```svg ` 바로 뒤에 쓴다. 그림 아래 캡션과 화면 낭독기용 설명으로 쓰인다.

## plot

```plot
title: y = (x−2)² − 3 의 그래프. 꼭짓점은 (2, −3)
x: [-1, 6]          # x 범위 [작은 값, 큰 값]
y: [-4, 7]
draw:
  - fn: (x-2)^2 - 3
  - point: [2, -3]
    label: 꼭짓점 (2, −3)
    pos: se
```

전체 설정

| 키 | 기본값 | 뜻 |
| --- | --- | --- |
| `title` | (필수) | 캡션 |
| `x`, `y` | `[-5, 5]` | 보이는 범위. 값에 `pi/2`, `sqrt(2)` 같은 식도 가능 |
| `axes` | `true` | `false`면 축·눈금·격자 없이 도형만 |
| `equal` | `axes`가 `false`면 `true` | `true`면 x, y 한 칸 길이가 같다(원, 도형은 켤 것) |
| `width` / `height` | 520 / 340 | 그림 크기(px). `equal: true`면 height는 자동 |
| `step`, `xstep`, `ystep` | 자동 | 눈금 간격 |
| `grid`, `ticks` | `true` | 격자, 눈금 숫자 |
| `xlabel`, `ylabel` | `x`, `y` | 축 이름 |
| `caption` | `true` | `false`면 그림 아래 캡션 숨김(설명은 낭독기용으로 남는다) |

`draw` 항목 (위에서부터 차례로 그린다)

| 항목 | 예 | 추가 키 |
| --- | --- | --- |
| 함수 그래프 | `fn: 2x + 1` | `domain: [0, 3]`, `label`, `labelAt`(라벨 둘 x값), `pos` |
| 매개변수 곡선 | `param: [2cos(t), sin(t)]` | `t: [0, 2pi]` |
| 두 그래프 사이 칠하기 | `shade: x^2` | `to: 0`(아래 경계 식), `domain` |
| 세로·가로 점선 | `vline: 1`, `hline: 2` | `label`, `dash: false`면 실선 |
| 선분 / 화살표 | `seg: [[0,0],[3,4]]`, `arrow: [...]` | `label`(가운데), `pos` |
| 다각형 | `poly: [[0,0],[4,0],[0,3]]` | `labels: [C, B, A]`(꼭짓점 이름), `sides: [a, c, b]`(k번째 꼭짓점→다음 꼭짓점 변), `fill: true \| accent`, `closed: false` |
| 원 | `circle: [[0,0], 2]` | `fill` |
| 직각 표시 | `right: [꼭짓점, 한쪽 점, 다른 쪽 점]` | |
| 각 표시 | `angle: [꼭짓점, 한쪽 점, 다른 쪽 점]` | `label: θ`, `r`(반지름 px) |
| 점 | `point: [2, -3]` | `label`, `pos`, `open: true`(빈 점), `guide: true`(축까지 점선) |
| 글자 | `text: "6 m"` + `at: [3, 0]` | `pos`, `size` |

공통 키: `color: accent | base | mute`(강조 주황 / 기본 글자색 / 흐린 색), `dash: true`, `width`(선 굵기).
`pos`는 라벨을 기준점의 어느 쪽에 둘지: `n s e w ne nw se sw c`(북·남·동·서…, `c`는 가운데).

**식 쓰는 법.** `+ - * / ^`, 괄호, `2x`·`3(x+1)` 같은 곱셈 생략, `sqrt abs sin cos tan ln log exp`, 상수 `pi e`. 분수 지수 `x^(1/3)`은 음수에서도 실수 세제곱근이 된다. 점근선 근처에서 그래프가 크게 튀면 자동으로 끊는다.

## numberline

```numberline
title: 부등식 x > 2 의 해
range: [-3, 5]
draw:
  - ray: 2
    open: true
    label: x > 2
```

| 키 | 뜻 |
| --- | --- |
| `range`, `step` | 범위, 눈금 간격(기본 1) |
| `tickLabels` | 특정 눈금 이름 바꾸기. 예: `{0.5: "1/2"}` |
| `point: 3` | 점. `open: true`면 빈 점, `label` |
| `ray: 2` | 반직선. `dir: left`(기본 오른쪽), `open: true`면 끝점 미포함 |
| `interval: [-1, 3]` | 구간. `open: [false, true]`로 양 끝 포함 여부 |
| `jump: [-2, 3]` | 위로 휘는 화살표(덧셈·뺄셈 이동). `label: "+5"` |
| `text` + `at` | 글자 |

## svg

모형, 바둑돌 배열, 분수 막대, 시계, 그림그래프처럼 좌표로 표현하기 어려운 그림은 직접 그린다.

````markdown
```svg 바둑돌 7개를 3개와 4개로 가르기
<svg viewBox="0 0 300 120">
  <circle cx="30" cy="30" r="10" class="f-ac"/>
  <text x="150" y="110" text-anchor="middle" class="f-base" font-size="14">3과 4</text>
</svg>
```
````

- `viewBox`가 반드시 있어야 하고, 그 너비가 최대 표시 폭이 된다(240~520 권장).
- **색은 클래스로만**: 선 `s-base s-mute s-ac`, 채우기 `f-base f-mute f-ac f-soft`(연한 주황) `f-surf`(회색 면) `f-bg`(배경색, 빈 점). `fill="none"`만 직접 쓸 수 있다. `#fff`, `red` 같은 색 값은 오류.
- 화살표 머리: `marker-end="url(#ah)"`(기본색), `url(#ah-ac)`(주황).
- `<script>`, `onclick` 같은 속성, 외부 링크는 오류.
- 글자는 `font-size` 12~16. 변수 한 글자는 `font-style="italic"`.

## 그림 원칙

1. **설명을 대신하지 않고 돕는다.** 그림만 보고 알 수 있게 하되, 본문에도 같은 내용이 있어야 한다.
2. **강조는 하나.** 주황(`accent`)은 지금 봐야 할 것 한 가지에만. 나머지는 `base`, `mute`.
3. **숫자는 정확히.** 그래프의 점·교점·꼭짓점 좌표는 본문 계산과 일치해야 한다. 라벨 좌표를 쓰기 전에 직접 계산해 확인한다.
4. **장식 그림 금지.** 이해에 필요하지 않은 그림은 넣지 않는다.
