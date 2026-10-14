import { renderBlock } from './render.ts';

/** ```plot / ```numberline / ```svg 코드 블록을 그림(SVG)으로 바꾸는 remark 플러그인 */
export default function remarkFigures() {
  return (tree: any, file: any) => {
    const walk = (node: any) => {
      if (!node.children) return;
      node.children = node.children.map((c: any) => {
        if (c.type === 'code' && (c.lang === 'plot' || c.lang === 'numberline' || c.lang === 'svg')) {
          try {
            return { type: 'html', value: renderBlock(c.lang, c.meta ?? '', c.value) };
          } catch (e) {
            throw new Error(`${file?.path ?? ''} ${c.position?.start.line ?? '?'}번째 줄 그림: ${(e as Error).message}`);
          }
        }
        walk(c);
        return c;
      });
    };
    walk(tree);
  };
}
