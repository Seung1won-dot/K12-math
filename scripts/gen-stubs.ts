/**
 * data/units.json 의 단원 중 content/ 에 파일이 없는 것을 status: todo 스텁으로 생성한다.
 * 이미 있는 파일은 건드리지 않는다.   사용: npm run stubs
 */
import fs from 'node:fs';
import path from 'node:path';
import { readUnitsJson, unitPath, SECTIONS, OPTIONAL_SECTION, UNIT_ID } from './lib.ts';

const yamlList = (xs: string[] = []) => (xs.length ? `[${xs.map((x) => JSON.stringify(x)).join(', ')}]` : '[]');

let created = 0;
for (const u of readUnitsJson()) {
  if (!UNIT_ID.test(u.id)) { console.error(`✗ ID 규칙 위반: ${u.id}`); process.exitCode = 1; continue; }
  const file = unitPath(u.id);
  if (fs.existsSync(file)) continue;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const fm = [
    '---',
    `id: ${u.id}`,
    `title: ${u.title}`,
    `level: ${u.level}`,
    `grade: ${u.grade}`,
    u.term ? `term: ${u.term}` : null,
    `area: ${u.area}`,
    `keywords: ${yamlList(u.keywords)}`,
    `prerequisites: ${yamlList(u.prerequisites)}`,
    `next: ${yamlList(u.next)}`,
    'status: todo',
    '---',
  ].filter(Boolean).join('\n');
  const body = [...SECTIONS, OPTIONAL_SECTION].map((s) => `## ${s}\n`).join('\n');
  fs.writeFileSync(file, `${fm}\n\n${body}`);
  created++;
  console.log(`+ ${path.relative(process.cwd(), file)}`);
}
console.log(`생성 ${created}개`);
