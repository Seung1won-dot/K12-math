import type { CollectionEntry } from 'astro:content';

export type Unit = CollectionEntry<'units'>;
export type Level = 'elem' | 'mid' | 'high';

export const LEVEL_LABEL: Record<Level, string> = {
  elem: '초등학교',
  mid: '중학교',
  high: '고등학교',
};

export const STATUS_LABEL: Record<Unit['data']['status'], string> = {
  todo: '미작성',
  draft: '초안',
  reviewed: '검토 완료',
  published: '공개',
};

/** 고등 과목 코드 → 과목명 */
export const HIGH_SUBJECT: Record<string, string> = {
  c1: '공통수학1', c2: '공통수학2',
  alg: '대수', cal1: '미적분Ⅰ', stat: '확률과 통계',
  geo: '기하', cal2: '미적분Ⅱ', econ: '경제 수학', ai: '인공지능 수학', job: '직무 수학',
  cul: '수학과 문화', pstat: '실용 통계', inq: '수학과제 탐구',
};

/** `mid-2-2-05` → { level: 'mid', group: '2-2', seq: 5 } / `high-c1-05` → { level: 'high', group: 'c1', seq: 5 } */
export function parseId(id: string) {
  const parts = id.split('-');
  const level = parts[0] as Level;
  const seq = Number(parts[parts.length - 1]);
  const group = parts.slice(1, -1).join('-');
  return { level, group, seq };
}

/** 그룹 코드 → 사람이 읽는 이름. '2-2' → '2학년 2학기', 'c1' → '공통수학1' */
export function groupLabel(level: Level, group: string) {
  if (level === 'high') return HIGH_SUBJECT[group] ?? group;
  const [g, t] = group.split('-');
  return `${g}학년 ${t}학기`;
}

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export const unitUrl = (id: string) => withBase(`/units/${id}/`);
export const levelUrl = (level: Level) => withBase(`/${level}/`);

export function sortUnits(units: Unit[]) {
  return [...units].sort((a, b) => a.data.id.localeCompare(b.data.id, 'en', { numeric: true }));
}

export function progress(units: Unit[]) {
  const total = units.length;
  const done = units.filter((u) => u.data.status === 'reviewed' || u.data.status === 'published').length;
  const draft = units.filter((u) => u.data.status === 'draft').length;
  return { total, done, draft, pct: total ? Math.round((done / total) * 100) : 0 };
}

/** level별 → group별로 묶기 (ID 순 정렬 유지) */
export function groupBy(units: Unit[]) {
  const map = new Map<string, Unit[]>();
  for (const u of sortUnits(units)) {
    const { group } = parseId(u.data.id);
    if (!map.has(group)) map.set(group, []);
    map.get(group)!.push(u);
  }
  return map;
}
