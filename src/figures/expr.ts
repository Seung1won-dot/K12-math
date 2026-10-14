/**
 * 그래프용 작은 수식 해석기. 단원 파일의 `y: (x-2)^2 - 3` 같은 식을 함수로 바꾼다.
 * eval을 쓰지 않는다. 지원: + - * / ^, 괄호, 암묵적 곱(2x, 3(x+1), x(x-1)), 단항 마이너스,
 * 상수 pi e, 함수 sqrt cbrt abs sin cos tan ln log exp floor sign.
 */
type Node =
  | { k: 'num'; v: number }
  | { k: 'var'; name: string }
  | { k: 'neg'; a: Node }
  | { k: 'bin'; op: string; a: Node; b: Node }
  | { k: 'call'; fn: string; a: Node };

const FUNCS: Record<string, (v: number) => number> = {
  sqrt: Math.sqrt, cbrt: Math.cbrt, abs: Math.abs, sin: Math.sin, cos: Math.cos, tan: Math.tan,
  ln: Math.log, log: Math.log10, exp: Math.exp, floor: Math.floor, sign: Math.sign,
};
const CONSTS: Record<string, number> = { pi: Math.PI, e: Math.E };

function tokenize(src: string): string[] {
  const out: string[] = [];
  const re = /\s*(\d+\.?\d*|\.\d+|[a-zA-Z]+|π|[-+*/^()])/y;
  let i = 0;
  const s = src.replace(/·|×/g, '*').replace(/−/g, '-').trim();
  while (i < s.length) {
    re.lastIndex = i;
    const m = re.exec(s);
    if (!m) throw new Error(`수식을 읽을 수 없음: "${src}" (${i}번째 글자 근처)`);
    let t = m[1];
    if (t === 'π') t = 'pi';
    // 'xx', '2pix' 같은 붙여 쓴 이름을 알려진 이름 단위로 쪼갠다
    if (/^[a-zA-Z]+$/.test(t) && !(t in FUNCS) && !(t in CONSTS)) {
      const parts = t.match(/sqrt|cbrt|abs|sin|cos|tan|ln|log|exp|floor|sign|pi|[a-zA-Z]/g)!;
      out.push(...parts);
    } else out.push(t);
    i = re.lastIndex;
  }
  return out;
}

function parse(src: string, vars: string[]): Node {
  const toks = tokenize(src);
  let p = 0;
  const peek = () => toks[p];
  const startsAtom = (t: string | undefined) =>
    t !== undefined && (t === '(' || /^[\d.]/.test(t) || /^[a-zA-Z]+$/.test(t));

  function expr(): Node {
    let a = term();
    while (peek() === '+' || peek() === '-') { const op = toks[p++]; a = { k: 'bin', op, a, b: term() }; }
    return a;
  }
  function term(): Node {
    let a = unary();
    for (;;) {
      if (peek() === '*' || peek() === '/') { const op = toks[p++]; a = { k: 'bin', op, a, b: unary() }; }
      else if (startsAtom(peek())) a = { k: 'bin', op: '*', a, b: power() }; // 암묵적 곱
      else return a;
    }
  }
  function unary(): Node {
    if (peek() === '-') { p++; return { k: 'neg', a: unary() }; }
    if (peek() === '+') { p++; return unary(); }
    return power();
  }
  function power(): Node {
    const a = atom();
    if (peek() === '^') { p++; return { k: 'bin', op: '^', a, b: unary() }; }
    return a;
  }
  function atom(): Node {
    const t = toks[p++];
    if (t === undefined) throw new Error(`수식이 중간에 끝남: "${src}"`);
    if (t === '(') { const a = expr(); if (toks[p++] !== ')') throw new Error(`괄호가 닫히지 않음: "${src}"`); return a; }
    if (/^[\d.]/.test(t)) return { k: 'num', v: Number(t) };
    if (t in FUNCS) {
      // sqrt x 처럼 괄호 없이 쓰면 바로 뒤 원자 하나만 인자로 받는다
      return { k: 'call', fn: t, a: peek() === '(' ? atom() : power() };
    }
    if (t in CONSTS) return { k: 'num', v: CONSTS[t] };
    if (vars.includes(t)) return { k: 'var', name: t };
    throw new Error(`모르는 이름 "${t}": "${src}" (변수는 ${vars.join(', ')}만 가능)`);
  }
  const n = expr();
  if (p < toks.length) throw new Error(`해석하지 못한 부분 "${toks.slice(p).join('')}": "${src}"`);
  return n;
}

function ev(n: Node, env: Record<string, number>): number {
  switch (n.k) {
    case 'num': return n.v;
    case 'var': return env[n.name];
    case 'neg': return -ev(n.a, env);
    case 'call': return FUNCS[n.fn](ev(n.a, env));
    case 'bin': {
      const a = ev(n.a, env), b = ev(n.b, env);
      if (n.op === '+') return a + b;
      if (n.op === '-') return a - b;
      if (n.op === '*') return a * b;
      if (n.op === '/') return a / b;
      // 음수의 홀수 분모 거듭제곱(x^(1/3))은 실수 세제곱근으로
      if (a < 0 && !Number.isInteger(b)) {
        const inv = 1 / b;
        if (Number.isInteger(Math.round(inv)) && Math.abs(inv - Math.round(inv)) < 1e-9 && Math.round(inv) % 2 !== 0) return -Math.pow(-a, b);
      }
      return Math.pow(a, b);
    }
  }
}

export function compile(src: string | number, vars = ['x']): (...v: number[]) => number {
  if (typeof src === 'number') return () => src;
  const n = parse(String(src), vars);
  return (...vals) => ev(n, Object.fromEntries(vars.map((v, i) => [v, vals[i]])));
}

/** 좌표 값: 숫자 또는 "pi/2", "sqrt(2)" 같은 상수식 */
export function num(v: unknown, where: string): number {
  if (typeof v === 'number') return v;
  if (typeof v === 'string') {
    const r = compile(v, [])();
    if (Number.isFinite(r)) return r;
  }
  throw new Error(`${where}: 숫자가 아님 (${JSON.stringify(v)})`);
}
