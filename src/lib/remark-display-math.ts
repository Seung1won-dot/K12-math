/**
 * 한 줄로 쓴 `$$ ... $$`를 줄 수식(display)으로 바꾸는 remark 플러그인.
 *
 * remark-math는 `$$`가 자기 줄에 혼자 있을 때만 줄 수식으로 읽고, `$$x$$`처럼 한 줄에 닫으면
 * 글 안 수식(inline)으로 읽는다. 그러면 가운데 정렬·가로 스크롤(.katex-display)이 없어
 * 긴 식이 모바일에서 화면 밖으로 넘친다.
 * 그래서 `$$ ... $$`가 **그 줄에 혼자** 있으면(앞뒤 줄에 글이 붙어 있어도) 그 자리에서 문단을 나누고
 * 줄 수식으로 바꾼다. 문장 중간의 `$$x$$`는 그대로 둔다.
 */
type Node = any;

const displayMath = (value: string, position: unknown): Node => ({
  type: 'math',
  meta: null,
  value,
  position,
  data: {
    hName: 'pre',
    hChildren: [{ type: 'element', tagName: 'code', properties: { className: ['language-math', 'math-display'] }, children: [{ type: 'text', value }] }],
  },
});

export default function remarkDisplayMath() {
  return (tree: Node, file: any) => {
    const src = String(file?.value ?? '');

    /** 이 inlineMath가 `$$`로 쓰였고 자기 줄에 혼자 있는가 */
    const aloneOnLine = (n: Node) => {
      const s = n.position?.start?.offset, e = n.position?.end?.offset;
      if (s == null || e == null || !src.startsWith('$$', s)) return false;
      const ls = src.lastIndexOf('\n', s - 1) + 1;
      let le = src.indexOf('\n', e);
      if (le < 0) le = src.length;
      // 목록 들여쓰기·인용 기호(>)는 앞에 와도 된다
      return /^[\s>]*$/.test(src.slice(ls, s)) && src.slice(e, le).trim() === '';
    };

    const splitParagraph = (p: Node): Node[] => {
      if (!p.children.some((k: Node) => k.type === 'inlineMath' && aloneOnLine(k))) return [p];
      const out: Node[] = [];
      let buf: Node[] = [];
      const flush = () => {
        // 나눈 자리의 줄바꿈 공백 정리
        if (buf.length && buf[0].type === 'text') buf[0] = { ...buf[0], value: buf[0].value.replace(/^\s+/, '') };
        const last = buf.length - 1;
        if (last >= 0 && buf[last].type === 'text') buf[last] = { ...buf[last], value: buf[last].value.replace(/\s+$/, '') };
        buf = buf.filter((k) => !(k.type === 'text' && k.value === ''));
        if (buf.length) out.push({ type: 'paragraph', children: buf });
        buf = [];
      };
      for (const k of p.children) {
        if (k.type === 'inlineMath' && aloneOnLine(k)) {
          flush();
          out.push(displayMath(k.value, k.position));
        } else buf.push(k);
      }
      flush();
      return out;
    };

    const walk = (node: Node) => {
      if (!node.children) return;
      node.children = node.children.flatMap((c: Node) => {
        if (c.type === 'paragraph') return splitParagraph(c);
        walk(c);
        return [c];
      });
    };
    walk(tree);
  };
}
