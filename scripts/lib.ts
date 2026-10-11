import fs from 'node:fs';
import path from 'node:path';

export const ROOT = path.resolve(import.meta.dirname, '..');
export const CONTENT_DIR = path.join(ROOT, 'content');
export const DATA_FILE = path.join(ROOT, 'data', 'units.json');

export const UNIT_ID = /^(elem|mid|high)-([1-6]-[12]|c[12]|alg|cal1|cal2|stat|geo|econ|ai|job|cul|pstat|inq)-\d{2}$/;
export const STATUSES = ['todo', 'draft', 'reviewed', 'published'];

/** 본문에 반드시 이 순서로 있어야 하는 항목. ⑥ 앞뒤 학년 연계는 frontmatter(prerequisites/next)로 관리하므로 본문 항목은 선택. */
export const SECTIONS = ['핵심 개념', '공식·정리', '왜 성립하는가', '대표 예제', '자주 하는 실수와 오개념'];
export const OPTIONAL_SECTION = '앞뒤 학년 연계';

export interface UnitMeta {
  id: string; title: string; level: string; grade: string; term?: string;
  area: string; keywords?: string[]; prerequisites?: string[]; next?: string[];
}

export function parseId(id: string) {
  const parts = id.split('-');
  return { level: parts[0], group: parts.slice(1, -1).join('-'), seq: Number(parts.at(-1)) };
}

/** mid-2-2-05 → content/mid/2-2/mid-2-2-05.md */
export function unitPath(id: string) {
  const { level, group } = parseId(id);
  return path.join(CONTENT_DIR, level, group, `${id}.md`);
}

export function listContentFiles(dir = CONTENT_DIR): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? listContentFiles(p) : e.name.endsWith('.md') ? [p] : [];
  });
}

export function readUnitsJson(): UnitMeta[] {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')).units;
}
