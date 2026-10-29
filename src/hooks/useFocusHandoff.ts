import React from 'react';
import { revealTop } from '../helpers/revealTop';

/**
 * How long a destination has to become ready before focus waits somewhere else instead. A
 * destination that reports ready as soon as it is drawn, as from a mount effect, is known to be
 * by `reportedReady` when this runs out, even before the render that shows it, so its learner
 * never sees focus visit where it would wait.
 */
const LOADING_DELAY = 10;

/** Somewhere focus moves to, by DOM id. */
export interface FocusTarget {
  id: string;
  /** What is scrolled into view for it, where that is more than the element itself. */
  scrollTargetId?: string;
}

/**
 * A request to move focus, numbered by `seq` so each is told apart from the last, even to where
 * focus already is. `takeFrom` says whose focus it may take: `'active'` takes it from wherever it
 * was when the request was made, and `'nowhere'` only when nothing has it, so that a request the
 * learner did not make never takes focus from them.
 */
export interface FocusRequest {
  seq: number;
  takeFrom: 'active' | 'nowhere';
}

/** A request being handled: where focus was when it was made, and where it has waited since. */
interface Handling {
  seq: number;
  from: Element | null;
  waitedOn: Element | null;
  /** Whether waiting scrolled, in which case that scroll may still be under way. */
  scrolled: boolean;
  /** Whether focus has reached the destination, or been left where the learner put it. */
  done: boolean;
}

/**
 * Moves focus to the destination for every new request. None is handled until there is one.
 *
 * A destination not ready shortly after the request has focus wait on `waitOn` in the meantime,
 * and move on when it is. A learner who takes focus elsewhere before then is left there: focus
 * moves only from where `takeFrom` allows, from where it waited, or from nowhere. Where focus goes
 * is scrolled to only when its top is off screen, or when waiting scrolled to where it waited, as
 * that scroll may not have landed.
 */
export const useFocusHandoff = <Target extends FocusTarget>({
  request, destination, ready, reportedReady, waitOn, onMissing,
}: {
  request: FocusRequest | undefined;
  /** Where focus goes, or undefined while there is nowhere yet: it goes once there is. */
  destination: Target | undefined;
  /** Whether the destination is drawn and can take focus. */
  ready: boolean;
  /** Whether the destination has said it is ready, which may be before a render shows it. */
  reportedReady: () => boolean;
  /** Where focus waits while the destination is not ready. */
  waitOn: Target;
  /** Called for a target nothing on the page carries the id of. */
  onMissing: (target: Target) => void;
}) => {
  const handling = React.useRef<Handling>();
  // read by the effect, which runs for a request and not for every new target
  const latest = React.useRef({ request, destination, reportedReady, waitOn, onMissing });
  latest.current = { request, destination, reportedReady, waitOn, onMissing };
  const hasDestination = destination !== undefined;

  React.useEffect(() => {
    const { request, destination, reportedReady, waitOn, onMissing } = latest.current;
    if (request === undefined || destination === undefined) { return; }

    if (handling.current?.seq !== request.seq) {
      handling.current = {
        seq: request.seq,
        from: request.takeFrom === 'active' ? document.activeElement : null,
        waitedOn: null,
        scrolled: false,
        done: false,
      };
    }
    const current = handling.current;
    if (current.done) { return; }

    const unclaimed = () => {
      const active = document.activeElement;
      return !active || active === document.body || active === current.from || active === current.waitedOn;
    };

    const focus = (target: Target) => {
      const element = document.getElementById(target.id);
      if (!element) {
        onMissing(target);
        return null;
      }
      // a scroll to where focus waited may still be under way, and is not to land there
      const scrolled = revealTop(
        (target.scrollTargetId && document.getElementById(target.scrollTargetId)) || element,
        { always: current.scrolled }
      );
      current.scrolled = current.scrolled || scrolled;
      element.focus({ preventScroll: true });
      return element;
    };

    if (ready) {
      current.done = true;
      if (unclaimed()) { focus(destination); }
      return;
    }

    const waiting = window.setTimeout(() => {
      if (unclaimed() && !reportedReady()) { current.waitedOn = focus(waitOn); }
    }, LOADING_DELAY);
    return () => window.clearTimeout(waiting);
  }, [hasDestination, request?.seq, ready]);
};
