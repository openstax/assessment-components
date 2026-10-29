import React from 'react';
import scrollToElement, { ScrollTween } from 'scroll-to-element';

/** A scroll under way, and the `scrollY` it lands on. */
type Scroll = { tween: ScrollTween; destination: number };

/** The `scrollY` `scrollToElement` lands on for an element at `documentTop`: short of the bottom of the page. */
const scrollDestination = (documentTop: number, offset: number) => {
  const { body, documentElement: html } = document;
  const documentHeight = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight);
  return Math.min(documentTop + offset, documentHeight - html.clientHeight);
};

/**
 * Brings an element's top into view, unless it is already on screen: what it belongs to may be
 * anywhere on the page, so nothing scrolls that need not. A negative `offset` leaves that many
 * pixels above it.
 *
 * The scroll is animated, so another can be asked for while one is under way, as when a section
 * loads in place of its loader. The element is judged by where it will be once that one lands,
 * and when that is off screen the scroll under way is stopped for one to the element instead. A
 * scroll still under way when the component goes is left where it is.
 */
export const useRevealTop = () => {
  const scrolling = React.useRef<Scroll>();
  React.useEffect(() => () => scrolling.current?.tween.stop(), []);

  return React.useCallback((element: HTMLElement, offset = 0) => {
    const documentTop = element.getBoundingClientRect().top + window.scrollY;
    const top = documentTop - (scrolling.current?.destination ?? window.scrollY);
    if (top >= 0 && top <= window.innerHeight) { return; }

    scrolling.current?.tween.stop();
    const tween = scrollToElement(element, { offset });
    scrolling.current = tween && { tween, destination: scrollDestination(documentTop, offset) };
    tween?.on('end', () => {
      if (scrolling.current?.tween === tween) { scrolling.current = undefined; }
    });
  }, []);
};
