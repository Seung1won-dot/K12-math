/**
 * content/ 의 모든 단원 파일을 검사한다.   사용: npm run validate
 *  - frontmatter 필수 필드, ID 규칙, 파일 경로와 ID 일치, 중복 ID
 *  - 본문 5개 고정 항목이 순서대로 있는지 (todo 가 아니면 각 항목이 비어 있지 않은지)
 *  - prerequisites / next 가 실제 존재하는 ID인지, 자기 자신을 가리키지 않는지
 *  - reviewed 이상은 prerequisites·next 각 1개 이상 (계획서 성공 기준 '연결성')
 *  - data/units.json 에는 있는데 파일이 없는 단원 (경고)
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { listContentFiles, readUnitsJson, unitPath, parseId, SECTIONS, OPTIONAL_SECTION, UNIT_ID, STATUSES } from './lib.ts';

const errors: string[] = [];
const warns: string[] = [];
const rel = (p: string) => path.relative(process.cwd(), p);

const files = listContentFiles();
const docs = files.map((file) => ({ file, ...matter(fs.readFileSync(file, 'utf8')) }));
const ids = new Map<string, string>();

for (const { file, data } of docs) {
  if (ids.has(data.id)) errors.push(`${rel(file)}: 중복 ID ${data.id} (이미 ${rel(ids.get(data.id)!)})`);
  ids.set(data.id, file);
}

for (const { file, data, content } of docs) {
  const where = rel(file);
  const err = (m: string) => errors.push(`${where}: ${m}`);
  const warn = (m: string) => warns.push(`${where}: ${m}`);

  for (const k of ['id', 'title', 'level', 'grade', 'area']) if (!data[k]) err(`frontmatter '${k}' 없음`);
  if (!data.id) continue;
  if (!UNIT_ID.test(data.id)) err(`ID 규칙 위반: ${data.id}`);
  else if (path.resolve(file) !== unitPath(data.id)) err(`파일 위치가 ID와 다름 → ${rel(unitPath(data.id))} 이어야 함`);
  const status = data.status ?? 'todo';
  if (!STATUSES.includes(status)) err(`status 값 오류: ${status}`);
  if (!Array.isArray(data.keywords) || data.keywords.length === 0) warn('keywords 비어 있음 (검색에 안 걸림)');

  // 본문 항목 순서·내용
  const headings = [...content.matchAll(/^## (.+?)\s*$/gm)].map((m) => m[1].trim());
  const required = headings.filter((h) => h !== OPTIONAL_SECTION);
  if (required.join('|') !== SECTIONS.join('|')) err(`본문 항목이 순서대로 있어야 함: ${SECTIONS.join(' / ')} (현재: ${headings.join(' / ') || '없음'})`);
  if (status !== 'todo') {
    const parts = content.split(/^## .+$/m).slice(1);
    headings.forEach((h, i) => {
      if (h !== OPTIONAL_SECTION && !(parts[i] ?? '').trim()) err(`'${h}' 항목이 비어 있음 (status가 ${status})`);
    });
    const mis = parts[headings.indexOf('자주 하는 실수와 오개념')] ?? '';
    if (mis && !/바로잡|고치|교정|지도/.test(mis)) warn(`오개념 항목에 '어떻게 바로잡는가'가 없는 것 같음`);
  }

  // 연계 링크
  for (const key of ['prerequisites', 'next'] as const) {
    const list: string[] = data[key] ?? [];
    for (const target of list) {
      if (target === data.id) err(`${key}가 자기 자신을 가리킴`);
      else if (!ids.has(target)) err(`${key}의 ${target} 단원 파일이 없음`);
    }
    if ((status === 'reviewed' || status === 'published') && list.length === 0) err(`${key} 비어 있음 (reviewed 이상은 1개 이상 필요)`);
    const firstTerm = key === 'prerequisites' && parseId(data.id).level === 'elem' && parseId(data.id).group === '1-1';
    if (status === 'draft' && list.length === 0 && !firstTerm) warn(`${key} 비어 있음`);
  }
  // 학년 역행 검사: prerequisites는 ID 순서상 앞에 있어야 함 (고등 과목 코드는 제외)
  for (const target of (data.prerequisites ?? []) as string[]) {
    const a = parseId(target), b = parseId(data.id);
    if (a.level === b.level && /^\d/.test(a.group) && /^\d/.test(b.group) && a.group > b.group) warn(`선수 단원 ${target}이 현재 단원보다 뒤 학년`);
  }
}

// units.json ↔ content 대조
const inJson = new Set(readUnitsJson().map((u) => u.id));
for (const id of inJson) if (!ids.has(id)) warns.push(`data/units.json의 ${id}: 파일 없음 (npm run stubs)`);
for (const id of ids.keys()) if (!inJson.has(id)) warns.push(`${id}: data/units.json에 없음`);

// 진행률 요약
const counts: Record<string, number> = {};
for (const { data } of docs) counts[data.status ?? 'todo'] = (counts[data.status ?? 'todo'] ?? 0) + 1;

for (const w of warns) console.warn(`⚠ ${w}`);
for (const e of errors) console.error(`✗ ${e}`);
console.log(`\n단원 ${docs.length}개 · ${Object.entries(counts).map(([k, v]) => `${k} ${v}`).join(', ')} · 오류 ${errors.length} · 경고 ${warns.length}`);
if (errors.length) process.exit(1);
