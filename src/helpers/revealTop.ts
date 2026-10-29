const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** The room an element scrolled within keeps clear at its top, as for a sticky header, by its `scroll-padding-top`. */
const scrollPaddingTop = (scroller: Element) => parseFloat(getComputedStyle(scroller).scrollPaddingTop) || 0;

/** The nearest ancestor an element scrolls within, short of the page itself. */
const scrollingAncestor = (element: HTMLElement) => {
  for (let parent = element.parentElement; parent && parent !== document.body; parent = parent.parentElement) {
    const { overflowY } = getComputedStyle(parent);
    if ((overflowY === 'auto' || overflowY === 'scroll') && parent.scrollHeight > parent.clientHeight) {
      return parent;
    }
  }
  return undefined;
};

/**
 * Where the element can be seen, top to bottom on screen: the part of its scrolling ancestor on
 * screen, or else the window, less the room either keeps clear at its top.
 */
const visibleArea = (element: HTMLElement) => {
  const scroller = scrollingAncestor(element);
  if (!scroller) {
    return { top: scrollPaddingTop(document.documentElement), bottom: window.innerHeight };
  }
  const { top, bottom } = scroller.getBoundingClientRect();
  return { top: Math.max(top, 0) + scrollPaddingTop(scroller), bottom: Math.min(bottom, window.innerHeight) };
};

/**
 * Brings an element's top into view, unless it is already where the learner is looking: what it
 * belongs to may be anywhere on the page, so nothing scrolls that need not. Its top is where they
 * are looking when it is in the top half of what they can see of where it scrolls, so a top near
 * the bottom, with little of the element shown under it, is scrolled to. A top under the
 * `scroll-padding-top` of where it scrolls, as behind a sticky header, is scrolled to as well.
 *
 * The scroll is the browser's own, smooth unless the learner prefers reduced motion, whatever the
 * page's own `scroll-behavior`. It lands by the element's `scroll-margin-top` and the
 * `scroll-padding-top` of where it scrolls, and gives way to the learner scrolling themselves. One
 * asked for while another is under way takes its place.
 *
 * `always` scrolls even to an element on screen, for one judged while a scroll is under way: where
 * it is then is not where it will be. Returns whether it scrolled.
 */
export const revealTop = (element: HTMLElement, { always = false } = {}) => {
  const { top } = element.getBoundingClientRect();
  const visible = visibleArea(element);
  const inTopHalf = top >= visible.top && top < (visible.top + visible.bottom) / 2;
  if (!always && inTopHalf) { return false; }

  // 'instant', not 'auto', which follows the page's `scroll-behavior`; it is newer than these DOM types
  const behavior = (prefersReducedMotion() ? 'instant' : 'smooth') as ScrollBehavior;
  element.scrollIntoView({ block: 'start', behavior });
  return true;
};
