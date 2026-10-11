import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** 단원 ID 규칙: 학교급-학년(과목)-학기-순번. 예) elem-3-1-02, mid-2-2-05, high-c1-05, high-alg-03 */
export const UNIT_ID = /^(elem|mid|high)-([1-6]-[12]|c[12]|alg|cal1|cal2|stat|geo|econ|ai|job|cul|pstat|inq)-\d{2}$/;

export const STATUS = ['todo', 'draft', 'reviewed', 'published'] as const;
export const AREAS = [
  '수와 연산', '변화와 관계', '도형과 측정', '자료와 가능성', // 초·중 4영역
  '고등', // 고등은 과목별 대단원명을 area에 자유 기입하되 기본값은 '고등'
] as const;

const units = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content' }),
  schema: z.object({
    id: z.string().regex(UNIT_ID, '단원 ID 규칙 위반'),
    title: z.string().min(1),
    level: z.enum(['초등학교', '중학교', '고등학교']),
    grade: z.string().min(1), // '2학년' 또는 '공통수학1' 같은 과목명
    term: z.string().optional(), // '1학기' | '2학기' (고등은 생략 가능)
    area: z.string().min(1),
    keywords: z.array(z.string()).default([]),
    prerequisites: z.array(z.string().regex(UNIT_ID)).default([]),
    next: z.array(z.string().regex(UNIT_ID)).default([]),
    status: z.enum(STATUS).default('todo'),
    reviewedAt: z.coerce.date().optional(),
    note: z.string().optional(), // 교과서별 차이, 2015 개정 대비 이동 사항 등 비고
  }),
});

export const collections = { units };
