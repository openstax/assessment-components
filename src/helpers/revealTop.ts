const prefersReducedMotion = () =>
  typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
 * ancestor it scrolls within shows. Empty, with its top at or below its bottom, when one of them
 * has scrolled it out of sight.
 */
const visibleArea = (element: HTMLElement) => scrollingAncestors(element).reduce((area, scroller) => {
  const { top, bottom } = scroller.getBoundingClientRect();
  return { top: Math.max(area.top, top), bottom: Math.min(area.bottom, bottom) };
}, { top: 0, bottom: window.innerHeight });

/**
 * Whether what is drawn just inside the element's top edge is the element, rather than something
 * over it, as a sticky header, or nothing, as where it is off screen. Asked of the browser, as it
 * is what the learner sees, whatever the page's CSS. Taken to be when the browser cannot say.
 */
const topIsShown = (element: HTMLElement, { top, left, right }: DOMRect) => {
  if (typeof document.elementFromPoint !== 'function') { return true; }
  const x = (Math.max(left, 0) + Math.min(right, window.innerWidth)) / 2;
  const found = document.elementFromPoint(x, top + 1);
  return found !== null && element.contains(found);
};

/**
 * Brings an element's top into view, unless it is already where the learner is looking: what it
 * belongs to may be anywhere on the page, so nothing scrolls that need not. Its top is where they
 * are looking when nothing covers it and it is in the top half of what they can see of it, through
 * every panel it scrolls within. A top behind a sticky header is scrolled to, and so is one near
 * the bottom, with little of the element shown under it.
 *
 * The scroll is the browser's own, smooth unless the learner prefers reduced motion, whatever the
 * page's own `scroll-behavior`. It lands by the element's `scroll-margin-top` and the
 * `scroll-padding-top` of what it scrolls within, and gives way to the learner scrolling
 * themselves. One asked for while another is under way takes its place.
 *
 * `always` scrolls even to an element on screen, for one judged while a scroll is under way: where
 * it is then is not where it will be. Returns whether it scrolled.
 */
export const revealTop = (element: HTMLElement, { always = false } = {}) => {
  if (!always) {
    const rect = element.getBoundingClientRect();
    if (topIsShown(element, rect)) {
      const visible = visibleArea(element);
      if (rect.top >= visible.top && rect.top < (visible.top + visible.bottom) / 2) { return false; }
    }
  }

  // 'instant', not 'auto', which follows the page's `scroll-behavior`; it is newer than these DOM types
  const behavior = (prefersReducedMotion() ? 'instant' : 'smooth') as ScrollBehavior;
  element.scrollIntoView({ block: 'start', behavior });
  return true;
};
