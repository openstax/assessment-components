import React from 'react';
import { useRevealTop } from './useRevealTop';

/**
 * How long a destination has to become ready before focus waits somewhere else instead. A host
 * whose section is ready as soon as it is drawn reports so from its mount effect, which runs
 * before this is up, so its learner never sees focus visit the loader; this is only long enough
 * to be sure of that.
 */
const LOADING_DELAY = 10;

/** Room left above what is scrolled to, in rem, so the window does not cut along its border. */
const SCROLL_MARGIN = 1;

const remToPixels = (rem: number) => rem * (parseFloat(getComputedStyle(document.documentElement).fontSize) || 16);

/** Somewhere focus moves to, by DOM id. */
export interface FocusTarget {
  id: string;
  /** What is scrolled into view for it, where that is more than the element itself. */
  scrollTargetId?: string;
  /** Leaves a rem of room above it when it is scrolled to. */
  margin?: boolean;
  /** How to draw what carries the id, for the warning when nothing does. */
  hint: string;
}

/**
 * Moves focus to where the learner has been moved, so a keyboard or screen reader user follows
 * them there. Every move is a request, even to where they already are; focus is never moved for
 * the moves made before the first render.
 *
 * A destination not ready shortly after the move has focus wait on `waitOn` in the meantime, and
 * move on when it is. Where focus goes is scrolled to only when its top is off screen.
 */
export const useFocusHandoff = ({ moves, destination, ready, waitOn }: {
  /** Counts the learner's moves. */
  moves: number;
  /** Where focus goes, or undefined while there is nowhere yet: it goes once there is. */
  destination: FocusTarget | undefined;
  /** Whether the destination is drawn and can take focus. */
  ready: boolean;
  /** Where focus waits while the destination is not ready. */
  waitOn: FocusTarget;
}) => {
  const handled = React.useRef(moves);
  const reveal = useRevealTop();
  // read by the effect, which runs for a move and not for every new target
  const latest = React.useRef({ destination, waitOn });
  latest.current = { destination, waitOn };
  const hasDestination = destination !== undefined;

  React.useEffect(() => {
    const { destination, waitOn } = latest.current;
    if (handled.current === moves || destination === undefined) { return; }

    const focus = (target: FocusTarget) => {
      const element = document.getElementById(target.id);
      if (!element) {
        console.warn(`Assessment: no element with id "${target.id}" to move focus to. ${target.hint}`);
        return;
      }
      const scrollTarget = (target.scrollTargetId && document.getElementById(target.scrollTargetId)) || element;
      reveal(scrollTarget, target.margin ? -remToPixels(SCROLL_MARGIN) : 0);
      element.focus({ preventScroll: true });
    };

    if (ready) {
      handled.current = moves;
      focus(destination);
      return;
    }

    const waiting = window.setTimeout(() => focus(waitOn), LOADING_DELAY);
    return () => window.clearTimeout(waiting);
  }, [hasDestination, moves, ready, reveal]);
};
