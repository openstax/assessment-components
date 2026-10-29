declare module 'scroll-to-element' {

  interface Options {
    align?: 'top' | 'middle' | 'bottom';
    offset?: number;
  }

  /** The animation of a scroll under way. Stopping it ends it where it is. */
  export interface ScrollTween {
    stop(): void;
    on(event: 'end' | 'stop', listener: () => void): void;
  }

  export default function scrolltoElement(e: Element, options?: Options): ScrollTween | undefined;
}
