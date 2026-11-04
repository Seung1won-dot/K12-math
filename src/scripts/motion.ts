/**
 * 카드·목록용 움직임 (Motion vanilla API). 홈과 학교급 페이지에서만 import한다. 단원 페이지에는 싣지 않는다.
 * - 크기를 줄이려고 animate는 'motion/mini'(WAAPI 기반, 스프링 지원)를 쓰고, inView·hover·press·stagger·spring만 'motion'에서 가져온다.
 *   그래서 transform 대신 독립 속성 translate·scale을 움직인다(서로 덮어쓰지 않는다).
 * - 숨겼다 보여 주기는 <html class="motion-ok">일 때만(Base.astro 머리 스크립트가 JS 실행 + 움직임 허용을 확인해 붙인다).
 *   대상 요소에는 data-reveal을 달아 둔다. CSS가 그 동안만 가리고, 여기서 인라인 opacity로 넘겨받은 뒤 data-reveal="on"으로 바꾼다.
 */
import { animate } from 'motion/mini';
import { hover, inView, press, spring, stagger } from 'motion';

export const motionOk = () => document.documentElement.classList.contains('motion-ok');

export const SNAPPY = { type: spring, stiffness: 420, damping: 32 } as const;
const SOFT = { type: spring, stiffness: 260, damping: 30 } as const;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/** 화면에 들어올 때 한 번, 아래에서 살짝 떠오르며 나타난다. 그룹 안 자식은 순서대로. */
export function revealOnView(groups: Iterable<Element>, childSelector?: string) {
  if (!motionOk()) return;
  for (const group of groups) {
    const targets = childSelector ? [...group.querySelectorAll<HTMLElement>(childSelector)] : [group as HTMLElement];
    if (!targets.length) continue;
    // 넘겨받기: 인라인으로 숨긴 다음 CSS 숨김(과 3초 안전장치)을 푼다
    for (const t of targets) t.style.opacity = '0';
    (group as HTMLElement).dataset.reveal = 'on';
    for (const t of targets) if (t.hasAttribute('data-reveal')) t.dataset.reveal = 'on';
    inView(
      group,
      () => {
        animate(targets, { opacity: [0, 1], translate: ['0 14px', '0 0'] }, { duration: 0.5, ease: EASE_OUT, delay: stagger(Math.min(0.06, 0.6 / targets.length)) });
      },
      { amount: 0.15, margin: '0px 0px -8% 0px' },
    );
  }
}

/** 카드 피드백: 올리면 3px 뜨고 화살표가 밀리며, 누르면 살짝 눌린다(스프링). */
export function cardFeedback(cards: Iterable<Element>, arrowSelector = '.card__arrow') {
  if (!motionOk()) return;
  for (const card of cards) {
    const arrow = card.querySelector(arrowSelector);
    hover(card, () => {
      animate(card, { translate: '0 -3px' }, SOFT);
      if (arrow) animate(arrow, { translate: '3px -3px' }, SNAPPY);
      return () => {
        animate(card, { translate: '0 0' }, SOFT);
        if (arrow) animate(arrow, { translate: '0 0' }, SNAPPY);
      };
    });
    press(card, () => {
      animate(card, { scale: 0.975 }, SNAPPY);
      return () => animate(card, { scale: 1 }, SNAPPY);
    });
  }
}

export { animate, inView, press, stagger };
