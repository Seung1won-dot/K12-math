// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import pagefind from 'astro-pagefind';

// GitHub Pages: https://seung1won-dot.github.io/K12-math/
export default defineConfig({
  site: 'https://seung1won-dot.github.io',
  base: '/K12-math',
  trailingSlash: 'always',
  integrations: [pagefind()],
  markdown: {
    // Astro 7 기본 처리기(Sätteri) 대신 remark/rehype 파이프라인 사용 — 수식(KaTeX) 때문
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { strict: 'ignore', output: 'html' }]],
    }),
  },
});
