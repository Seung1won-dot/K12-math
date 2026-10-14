/**
 * 단원 Markdown의 그림 블록을 SVG로 바꾼다. 색은 전부 CSS 클래스(global.css의 .fig 규칙)로만 정해서
 * 다크·라이트 테마를 그대로 따른다.
 *
 *   ```plot        좌표평면 그래프·도형 (YAML)
 *   ```numberline  수직선 (YAML)
 *   ```svg 캡션    직접 그린 SVG. 색은 클래스만 사용 (s-base s-mute s-ac / f-base f-mute f-ac f-soft f-surf)
 *
 * 문법 설명은 docs/figures.md.
 */
import yaml from 'js-yaml';
import { compile, num } from './expr.ts';

type Pt = [number, number];
type Color = 'accent' | 'base' | 'mute';
const W_DEFAULT = 520;
const PAD = 30;

/** 같은 페이지에 그림이 여러 개여도 clipPath id가 겹치지 않게 */
function hash(s: string) { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
const esc = (s: unknown) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const f = (v: number) => (Math.round(v * 10) / 10).toString();
const stroke = (c: Color | undefined, d: Color) => `s-${{ accent: 'ac', base: 'base', mute: 'mute' }[c ?? d]}`;
const fill = (c: Color | undefined, d: Color) => `f-${{ accent: 'ac', base: 'base', mute: 'mute' }[c ?? d]}`;

function load(src: string, kind: string): Record<string, any> {
  let spec: unknown;
  try { spec = yaml.load(src); } catch (e) { throw new Error(`${kind} 블록 YAML 오류: ${(e as Error).message.split('\n')[0]}`); }
  if (!spec || typeof spec !== 'object') throw new Error(`${kind} 블록이 비어 있음`);
  const s = spec as Record<string, any>;
  if (!s.title || typeof s.title !== 'string') throw new Error(`${kind} 블록에 title(그림 설명 한 줄)이 없음`);
  return s;
}

function figure(svgBody: string, w: number, h: number, title: string, caption = true) {
  return `<figure class="fig"><svg viewBox="0 0 ${f(w)} ${f(h)}" width="${f(w)}" style="max-width:${f(w)}px" role="img" aria-label="${esc(title)}" xmlns="http://www.w3.org/2000/svg">${svgBody}</svg>${caption ? `<figcaption>${esc(title)}</figcaption>` : ''}</figure>`;
}

/** 글자 위치: 기준점에서 pos 방향으로 밀어 놓는다 */
const POS: Record<string, [number, number, string, number]> = {
  n: [0, -9, 'middle', 0], s: [0, 9, 'middle', 1], e: [9, 0, 'start', 0.5], w: [-9, 0, 'end', 0.5],
  ne: [7, -7, 'start', 0], nw: [-7, -7, 'end', 0], se: [7, 7, 'start', 1], sw: [-7, 7, 'end', 1], c: [0, 0, 'middle', 0.5],
};
function label(x: number, y: number, text: unknown, pos = 'ne', cls = 'f-base', size = 14) {
  const [dx, dy, anchor, base] = POS[pos] ?? POS.ne;
  const t = String(text);
  const it = /^[a-zA-Z]('|′)?$/.test(t) ? ' font-style="italic"' : '';
  // base: 0 → 글자 아래쪽을 기준점에, 1 → 위쪽을, 0.5 → 가운데를
  const yy = y + dy + size * (base === 1 ? 0.8 : base === 0.5 ? 0.35 : -0.1);
  return `<text x="${f(x + dx)}" y="${f(yy)}" text-anchor="${anchor}" class="${cls}" font-size="${size}"${it}>${esc(t)}</text>`;
}

const ARROW_DEFS = `<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" class="s-base" fill="none" stroke-width="1.6"/></marker><marker id="ah-ac" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L9,5 L0,9" class="s-ac" fill="none" stroke-width="1.6"/></marker></defs>`;

function niceStep(range: number) {
  const raw = range / 10;
  const p = 10 ** Math.floor(Math.log10(raw));
  return [1, 2, 5, 10].map((m) => m * p).find((s) => s >= raw)!;
}

/* ------------------------------------------------------------------ plot */

export function renderPlot(src: string): string {
  const s = load(src, 'plot');
  const axes = s.axes !== false;
  const [x0, x1] = (s.x ?? [-5, 5]).map((v: unknown) => num(v, 'plot.x'));
  const [y0, y1] = (s.y ?? [-5, 5]).map((v: unknown) => num(v, 'plot.y'));
  if (!(x1 > x0 && y1 > y0)) throw new Error('plot: x, y 범위는 [작은 값, 큰 값]');
  const W = Number(s.width ?? W_DEFAULT);
  const sx = W / (x1 - x0);
  const equal = s.equal ?? !axes;
  const H = equal ? (y1 - y0) * sx : Number(s.height ?? 340);
  const sy = H / (y1 - y0);
  const X = (x: number) => PAD + (x - x0) * sx;
  const Y = (y: number) => PAD + (y1 - y) * sy;
  const P = (p: unknown, where: string): Pt => {
    if (!Array.isArray(p) || p.length !== 2) throw new Error(`${where}: 점은 [x, y] 형식`);
    return [num(p[0], where), num(p[1], where)];
  };
  const cid = 'clip-' + hash(src);
  const out: string[] = [ARROW_DEFS, `<clipPath id="${cid}"><rect x="${f(PAD)}" y="${f(PAD)}" width="${f(W)}" height="${f(H)}"/></clipPath>`];

  if (axes) {
    const xs = Number(s.xstep ?? s.step ?? niceStep(x1 - x0));
    const ys = Number(s.ystep ?? s.step ?? niceStep(y1 - y0));
    const grid: string[] = [];
    const ticks: string[] = [];
    const ax = Math.min(Math.max(0, x0), x1), ay = Math.min(Math.max(0, y0), y1);
    for (let v = Math.ceil(x0 / xs) * xs; v <= x1 + 1e-9; v += xs) {
      const vv = Math.round(v / xs) * xs;
      if (s.grid !== false) grid.push(`M${f(X(vv))},${f(PAD)}V${f(PAD + H)}`);
      if (Math.abs(vv) > 1e-9 && s.ticks !== false && vv < x1 - 1e-9) ticks.push(label(X(vv), Y(ay), String(+vv.toFixed(6)).replace('-', '−'), 's', 'f-mute', 11));
    }
    for (let v = Math.ceil(y0 / ys) * ys; v <= y1 + 1e-9; v += ys) {
      const vv = Math.round(v / ys) * ys;
      if (s.grid !== false) grid.push(`M${f(PAD)},${f(Y(vv))}H${f(PAD + W)}`);
      if (Math.abs(vv) > 1e-9 && s.ticks !== false && vv < y1 - 1e-9) ticks.push(label(X(ax), Y(vv), String(+vv.toFixed(6)).replace('-', '−'), 'w', 'f-mute', 11));
    }
    if (grid.length) out.push(`<path d="${grid.join('')}" class="s-grid" stroke-width="1" fill="none"/>`);
    out.push(`<path d="M${f(PAD)},${f(Y(ay))}H${f(PAD + W + 10)}" class="s-base" stroke-width="1.2" marker-end="url(#ah)" fill="none"/>`);
    out.push(`<path d="M${f(X(ax))},${f(PAD + H)}V${f(PAD - 10)}" class="s-base" stroke-width="1.2" marker-end="url(#ah)" fill="none"/>`);
    out.push(label(PAD + W + 10, Y(ay), s.xlabel ?? 'x', 'se', 'f-base', 13));
    out.push(label(X(ax), PAD - 10, s.ylabel ?? 'y', 'e', 'f-base', 13));
    if (x0 <= 0 && 0 <= x1 && y0 <= 0 && 0 <= y1) out.push(label(X(0), Y(0), 'O', 'sw', 'f-mute', 12));
    out.push(...ticks);
  }

  const labels: string[] = [];
  const shapes: string[] = [];
  const draw: any[] = s.draw ?? [];
  if (!Array.isArray(draw)) throw new Error('plot.draw는 목록이어야 함');

  const curve = (fx: (t: number) => Pt, t0: number, t1: number, n = 600) => {
    const segs: string[] = [];
    let cur: string[] = [];
    let prev: Pt | null = null;
    const lim = (y1 - y0) * 4;
    for (let i = 0; i <= n; i++) {
      const t = t0 + ((t1 - t0) * i) / n;
      const p = fx(t);
      const ok = Number.isFinite(p[0]) && Number.isFinite(p[1]) && Math.abs(p[1] - (y0 + y1) / 2) < lim;
      // 점근선 근처에서 부호가 뒤집히며 크게 뛰면 선을 끊는다
      const jump = prev && ok && Math.abs(p[1] - prev[1]) > (y1 - y0) * 1.5;
      if (!ok || jump) { if (cur.length > 1) segs.push(cur.join('')); cur = []; }
      if (ok) cur.push(`${cur.length ? 'L' : 'M'}${f(X(p[0]))},${f(Y(p[1]))}`);
      prev = ok ? p : null;
    }
    if (cur.length > 1) segs.push(cur.join(''));
    return segs.join('');
  };

  draw.forEach((d, i) => {
    const where = `plot.draw[${i}]`;
    if (!d || typeof d !== 'object') throw new Error(`${where}: 항목 형식 오류`);
    const dash = d.dash ? ' stroke-dasharray="6 5"' : '';
    const sw = d.width ?? 2;
    if ('fn' in d) {
      const fx = compile(d.fn);
      const [a, b] = (d.domain ?? [x0, x1]).map((v: unknown) => num(v, where));
      const path = curve((t) => [t, fx(t)], Math.max(a, x0), Math.min(b, x1));
      shapes.push(`<path d="${path}" class="${stroke(d.color, 'accent')}" stroke-width="${sw}" fill="none" clip-path="url(#${cid})"${dash}/>`);
      if (d.label) {
        const lx = num(d.labelAt ?? Math.min(b, x1) - (x1 - x0) * 0.04, where);
        labels.push(label(X(lx), Y(Math.min(Math.max(fx(lx), y0), y1)), d.label, d.pos ?? 'nw', fill(d.color, 'accent')));
      }
    } else if ('param' in d) {
      const [ex, ey] = d.param.map((e: string) => compile(e, ['t']));
      const [a, b] = (d.t ?? [0, 2 * Math.PI]).map((v: unknown) => num(v, where));
      shapes.push(`<path d="${curve((t) => [ex(t), ey(t)], a, b)}" class="${stroke(d.color, 'accent')}" stroke-width="${sw}" fill="none" clip-path="url(#${cid})"${dash}/>`);
    } else if ('shade' in d) {
      const top = compile(d.shade), bot = compile(d.to ?? 0);
      const [a, b] = (d.domain ?? [x0, x1]).map((v: unknown) => num(v, where));
      const n = 200, up: string[] = [], dn: string[] = [];
      for (let k = 0; k <= n; k++) { const t = a + ((b - a) * k) / n; up.push(`${f(X(t))},${f(Y(top(t)))}`); dn.unshift(`${f(X(t))},${f(Y(bot(t)))}`); }
      out.push(`<polygon points="${[...up, ...dn].join(' ')}" class="f-soft" clip-path="url(#${cid})"/>`);
    } else if ('vline' in d || 'hline' in d) {
      const v = num(d.vline ?? d.hline, where);
      const path = 'vline' in d ? `M${f(X(v))},${f(PAD)}V${f(PAD + H)}` : `M${f(PAD)},${f(Y(v))}H${f(PAD + W)}`;
      shapes.push(`<path d="${path}" class="${stroke(d.color, 'mute')}" stroke-width="${d.width ?? 1.5}" fill="none"${d.dash === false ? '' : ' stroke-dasharray="6 5"'}/>`);
      if (d.label) labels.push('vline' in d ? label(X(v), PAD, d.label, d.pos ?? 'se', fill(d.color, 'mute'), 13) : label(PAD + W, Y(v), d.label, d.pos ?? 'nw', fill(d.color, 'mute'), 13));
    } else if ('seg' in d || 'arrow' in d) {
      const [p, q] = (d.seg ?? d.arrow).map((v: unknown) => P(v, where));
      const mk = 'arrow' in d ? ` marker-end="url(#${d.color === 'accent' ? 'ah-ac' : 'ah'})"` : '';
      shapes.push(`<path d="M${f(X(p[0]))},${f(Y(p[1]))}L${f(X(q[0]))},${f(Y(q[1]))}" class="${stroke(d.color, 'base')}" stroke-width="${d.width ?? 1.8}" fill="none"${dash}${mk}/>`);
      if (d.label) labels.push(label((X(p[0]) + X(q[0])) / 2, (Y(p[1]) + Y(q[1])) / 2, d.label, d.pos ?? 'n', fill(d.color, 'base')));
    } else if ('poly' in d) {
      const pts: Pt[] = d.poly.map((v: unknown) => P(v, where));
      const tag = d.closed === false ? 'polyline' : 'polygon';
      const fl = d.fill ? (d.fill === 'accent' ? 'f-soft' : 'f-surf') : '';
      shapes.push(`<${tag} points="${pts.map((p) => `${f(X(p[0]))},${f(Y(p[1]))}`).join(' ')}" class="${stroke(d.color, 'base')} ${fl}" stroke-width="${d.width ?? 1.8}" stroke-linejoin="round"${fl ? '' : ' fill="none"'}${dash}/>`);
      // labels: 꼭짓점 이름. 도형 중심에서 바깥쪽으로 밀어 놓는다
      if (Array.isArray(d.labels)) {
        const cx = pts.reduce((a, p) => a + p[0], 0) / pts.length, cy = pts.reduce((a, p) => a + p[1], 0) / pts.length;
        d.labels.forEach((t: string, k: number) => {
          if (!t || !pts[k]) return;
          const dx = pts[k][0] - cx, dy = pts[k][1] - cy;
          const pos = (dy > Math.abs(dx) * 0.4 ? 'n' : dy < -Math.abs(dx) * 0.4 ? 's' : '') + (dx > Math.abs(dy) * 0.4 ? 'e' : dx < -Math.abs(dy) * 0.4 ? 'w' : '');
          labels.push(label(X(pts[k][0]), Y(pts[k][1]), t, pos || 'n'));
        });
      }
      // sides: 변의 길이 등. k번째 글자는 k번째 꼭짓점과 다음 꼭짓점 사이 변의 바깥쪽에
      if (Array.isArray(d.sides)) {
        const cx = pts.reduce((a, p) => a + X(p[0]), 0) / pts.length, cy = pts.reduce((a, p) => a + Y(p[1]), 0) / pts.length;
        d.sides.forEach((t: string, k: number) => {
          if (!t) return;
          const a = pts[k], b = pts[(k + 1) % pts.length];
          const mx = (X(a[0]) + X(b[0])) / 2, my = (Y(a[1]) + Y(b[1])) / 2;
          let nx = -(Y(b[1]) - Y(a[1])), ny = X(b[0]) - X(a[0]);
          const len = Math.hypot(nx, ny) || 1; nx /= len; ny /= len;
          if (nx * (mx - cx) + ny * (my - cy) < 0) { nx = -nx; ny = -ny; }
          labels.push(`<text x="${f(mx + nx * 14)}" y="${f(my + ny * 14 + 5)}" text-anchor="middle" class="f-base" font-size="14"${/^[a-zA-Z]$/.test(t) ? ' font-style="italic"' : ''}>${esc(t)}</text>`);
        });
      }
    } else if ('circle' in d) {
      const [c, r] = d.circle;
      const [cx, cy] = P(c, where);
      const fl = d.fill ? (d.fill === 'accent' ? 'f-soft' : 'f-surf') : '';
      shapes.push(`<ellipse cx="${f(X(cx))}" cy="${f(Y(cy))}" rx="${f(num(r, where) * sx)}" ry="${f(num(r, where) * sy)}" class="${stroke(d.color, 'accent')} ${fl}" stroke-width="${sw}"${fl ? '' : ' fill="none"'}${dash} clip-path="url(#${cid})"/>`);
    } else if ('right' in d || 'angle' in d) {
      const [v, a, b] = (d.right ?? d.angle).map((p: unknown) => P(p, where));
      const sv: Pt = [X(v[0]), Y(v[1])];
      const u = (p: Pt): Pt => { const dx = X(p[0]) - sv[0], dy = Y(p[1]) - sv[1], l = Math.hypot(dx, dy); return [dx / l, dy / l]; };
      const ua = u(a), ub = u(b);
      const cls = stroke(d.color, 'base');
      if ('right' in d) {
        const k = 11;
        shapes.push(`<path d="M${f(sv[0] + ua[0] * k)},${f(sv[1] + ua[1] * k)}L${f(sv[0] + (ua[0] + ub[0]) * k)},${f(sv[1] + (ua[1] + ub[1]) * k)}L${f(sv[0] + ub[0] * k)},${f(sv[1] + ub[1] * k)}" class="${cls}" stroke-width="1.3" fill="none"/>`);
      } else {
        const r = d.r ?? 22;
        const cross = ua[0] * ub[1] - ua[1] * ub[0];
        shapes.push(`<path d="M${f(sv[0] + ua[0] * r)},${f(sv[1] + ua[1] * r)}A${r},${r} 0 0 ${cross > 0 ? 1 : 0} ${f(sv[0] + ub[0] * r)},${f(sv[1] + ub[1] * r)}" class="${stroke(d.color, 'accent')}" stroke-width="1.5" fill="none"/>`);
        if (d.label) {
          const mx = ua[0] + ub[0], my = ua[1] + ub[1], l = Math.hypot(mx, my) || 1;
          labels.push(`<text x="${f(sv[0] + (mx / l) * (r + 12))}" y="${f(sv[1] + (my / l) * (r + 12) + 5)}" text-anchor="middle" class="${fill(d.color, 'accent')}" font-size="14">${esc(d.label)}</text>`);
        }
      }
    } else if ('point' in d) {
      const [px, py] = P(d.point, where);
      shapes.push(`<circle cx="${f(X(px))}" cy="${f(Y(py))}" r="4" class="${stroke(d.color, 'accent')} ${d.open ? 'f-bg' : fill(d.color, 'accent')}" stroke-width="1.8"/>`);
      if (d.label) labels.push(label(X(px), Y(py), d.label, d.pos ?? 'ne'));
      if (d.guide) shapes.push(`<path d="M${f(X(px))},${f(Y(py))}V${f(Y(Math.min(Math.max(0, y0), y1)))}M${f(X(px))},${f(Y(py))}H${f(X(Math.min(Math.max(0, x0), x1)))}" class="s-mute" stroke-width="1" stroke-dasharray="4 4" fill="none"/>`);
    } else if ('text' in d) {
      const [px, py] = P(d.at, where);
      labels.push(label(X(px), Y(py), d.text, d.pos ?? 'c', fill(d.color, 'base'), d.size ?? 14));
    } else {
      throw new Error(`${where}: 알 수 없는 항목 (${Object.keys(d).join(', ')}). fn param shade vline hline seg arrow poly circle right angle point text 중 하나`);
    }
  });

  out.push(...shapes, ...labels);
  return figure(out.join(''), W + PAD * 2, H + PAD * 2, s.title, s.caption !== false);
}

/* ------------------------------------------------------------ numberline */

export function renderNumberline(src: string): string {
  const s = load(src, 'numberline');
  const [a, b] = (s.range ?? [-5, 5]).map((v: unknown) => num(v, 'numberline.range'));
  const W = Number(s.width ?? W_DEFAULT);
  const step = num(s.step ?? 1, 'numberline.step');
  const draw: any[] = s.draw ?? [];
  const hasJump = draw.some((d) => d && 'jump' in d);
  const top = hasJump ? 58 : 34;
  const X = (v: number) => PAD + ((v - a) / (b - a)) * W;
  const Y = top;
  const out: string[] = [ARROW_DEFS];
  const under: string[] = [];
  out.push(`<path d="M${f(PAD - 14)},${Y}H${f(PAD + W + 14)}" class="s-base" stroke-width="1.4" marker-start="url(#ah)" marker-end="url(#ah)" fill="none"/>`);
  const names: Record<string, string> = s.tickLabels ?? {};
  for (let v = Math.ceil(a / step - 1e-9) * step; v <= b + 1e-9; v += step) {
    const vv = +(Math.round(v / step) * step).toFixed(6);
    out.push(`<path d="M${f(X(vv))},${Y - 5}V${Y + 5}" class="s-base" stroke-width="1.2"/>`);
    if (s.ticks !== false) under.push(label(X(vv), Y + 4, names[String(vv)] ?? String(vv).replace('-', '−'), 's', 'f-mute', 12));
  }
  let rows = 0;
  draw.forEach((d, i) => {
    const where = `numberline.draw[${i}]`;
    if ('point' in d) {
      const v = num(d.point, where);
      out.push(`<circle cx="${f(X(v))}" cy="${Y}" r="5" class="s-ac ${d.open ? 'f-bg' : 'f-ac'}" stroke-width="2"/>`);
      if (d.label) out.push(label(X(v), Y - 4, d.label, 'n', 'f-ac'));
    } else if ('interval' in d || 'ray' in d) {
      let lo: number, hi: number, openLo = false, openHi = false, arrowLo = false, arrowHi = false;
      if ('ray' in d) {
        const v = num(d.ray, where);
        if (d.dir === 'left') { lo = a; hi = v; arrowLo = true; openHi = !!d.open; } else { lo = v; hi = b; arrowHi = true; openLo = !!d.open; }
      } else {
        [lo, hi] = d.interval.map((v: unknown) => num(v, where));
        const o = d.open ?? [false, false];
        [openLo, openHi] = Array.isArray(o) ? o : [o, o];
      }
      const yy = Y - 14 - rows * 12;
      rows++;
      const x0 = arrowLo ? PAD - 10 : X(lo), x1 = arrowHi ? PAD + W + 10 : X(hi);
      out.push(`<path d="M${f(x0)},${yy}H${f(x1)}" class="s-ac" stroke-width="3" fill="none"${arrowLo ? ' marker-start="url(#ah-ac)"' : ''}${arrowHi ? ' marker-end="url(#ah-ac)"' : ''}/>`);
      for (const [v, open, isArrow] of [[lo, openLo, arrowLo], [hi, openHi, arrowHi]] as [number, boolean, boolean][]) {
        if (isArrow) continue;
        out.push(`<path d="M${f(X(v))},${yy}V${Y}" class="s-ac" stroke-width="1" stroke-dasharray="2 3"/>`);
        out.push(`<circle cx="${f(X(v))}" cy="${yy}" r="4.5" class="s-ac ${open ? 'f-bg' : 'f-ac'}" stroke-width="2"/>`);
      }
      if (d.label) out.push(label((x0 + x1) / 2, yy - 2, d.label, 'n', 'f-ac', 13));
    } else if ('jump' in d) {
      const [p, q] = d.jump.map((v: unknown) => num(v, where));
      const mx = (X(p) + X(q)) / 2, h = Math.min(30, Math.abs(X(q) - X(p)) * 0.45 + 8);
      out.push(`<path d="M${f(X(p))},${Y - 6}Q${f(mx)},${f(Y - 6 - h * 2)} ${f(X(q))},${Y - 6}" class="${stroke(d.color, 'accent')}" stroke-width="1.8" fill="none" marker-end="url(#${d.color === 'base' ? 'ah' : 'ah-ac'})"/>`);
      if (d.label) out.push(label(mx, Y - 6 - h, d.label, 'n', fill(d.color, 'accent'), 13));
    } else if ('text' in d) {
      out.push(label(X(num(d.at, where)), Y, d.text, d.pos ?? 'n', 'f-base', 13));
    } else {
      throw new Error(`${where}: 알 수 없는 항목. point interval ray jump text 중 하나`);
    }
  });
  return figure([...out, ...under].join(''), W + PAD * 2, Y + 30, s.title, s.caption !== false);
}

/* ------------------------------------------------------------------- svg */

export function renderSvg(src: string, title: string): string {
  if (!title.trim()) throw new Error('svg 블록은 ```svg 바로 뒤에 그림 설명 한 줄이 필요함');
  const m = src.trim().match(/^<svg\b([^>]*)>([\s\S]*)<\/svg>$/);
  if (!m) throw new Error('svg 블록은 <svg ...> ... </svg> 하나여야 함');
  const vb = m[1].match(/viewBox="([\d.\s-]+)"/);
  if (!vb) throw new Error('svg 블록에 viewBox가 없음');
  if (/<script|on\w+=|href=["']?(?!#)/i.test(m[2])) throw new Error('svg 블록에 스크립트·이벤트·외부 링크 금지');
  if (/(fill|stroke|color)\s*[=:]\s*["']?\s*(#|rgb|hsl|[a-z]+\b(?<!none|currentColor))/i.test(m[2].replace(/(fill|stroke)="none"/g, '')))
    throw new Error('svg 블록에서 색은 클래스(s-base s-mute s-ac f-base f-mute f-ac f-soft f-surf f-bg)로만 지정');
  const [, , w] = vb[1].trim().split(/\s+/).map(Number);
  return `<figure class="fig"><svg viewBox="${vb[1]}" width="${w}" style="max-width:${w}px" role="img" aria-label="${esc(title)}" xmlns="http://www.w3.org/2000/svg">${ARROW_DEFS}${m[2]}</svg><figcaption>${esc(title)}</figcaption></figure>`;
}

export function renderBlock(lang: string, meta: string, value: string): string | null {
  if (lang === 'plot') return renderPlot(value);
  if (lang === 'numberline') return renderNumberline(value);
  if (lang === 'svg') return renderSvg(value, meta ?? '');
  return null;
}
