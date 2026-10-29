const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** The room an element scrolled within keeps clear at its top, as for a sticky header, by its `scroll-padding-top`. */
const scrollPaddingTop = (scroller: Element) => parseFloat(getComputedStyle(scroller).scrollPaddingTop) || 0;

/** Every ancestor an element scrolls within, short of the page itself, nearest first. */
const scrollingAncestors = (element: HTMLElement) => {
  const found: HTMLElement[] = [];
  for (let parent = element.parentElement; parent && parent !== document.body; parent = parent.parentElement) {
    const { overflowY } = getComputedStyle(parent);
    if ((overflowY === 'auto' || overflowY === 'scroll') && parent.scrollHeight > parent.clientHeight) {
      found.push(parent);
    }
  }
  return found;
};

/**
 * Where the element can be seen, top to bottom on screen: the part of the window that every
 * ancestor it scrolls within shows, less the room each keeps clear at its top. Empty, with its
 * top at or below its bottom, when one of them has scrolled it out of sight.
 */
const visibleArea = (element: HTMLElement) => scrollingAncestors(element).reduce((area, scroller) => {
  const { top, bottom } = scroller.getBoundingClientRect();
  return { top: Math.max(area.top, top + scrollPaddingTop(scroller)), bottom: Math.min(area.bottom, bottom) };
}, { top: scrollPaddingTop(document.documentElement), bottom: window.innerHeight });

/**
 * Brings an element's top into view, unless it is already where the learner is looking: what it
 * belongs to may be anywhere on the page, so nothing scrolls that need not. Its top is where they
 * are looking when it is in the top half of what they can see of it, through every panel it
 * scrolls within, so a top near the bottom, with little of the element shown under it, is
 * scrolled to. A top under the `scroll-padding-top` of the page or a panel, as behind a sticky
 * header, is scrolled to as well.
 *
 * The scroll is the browser's own, smooth unless the learner prefers reduced motion, whatever the
 * page's own `scroll-behavior`. It lands by the element's `scroll-margin-top` and the
 * `scroll-padding-top` of what it scrolls within, and gives way to the learner scrolling themselves. One
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
