import React from 'react';

/** Whether a control can be used: neither disabled nor marked unavailable. */
const isAvailable = (button: HTMLButtonElement) =>
  !button.disabled && button.getAttribute('aria-disabled') !== 'true';

/**
 * Moves focus on from a save the learner pressed, once it lands, so it is never left on nothing.
 * A save keeps focus while it is pending; when it lands, the control they pressed may be gone, as
 * Submit replaced by Next, or no longer usable, as Update with nothing left to save. Focus then
 * moves to the footer's last control that can be used, its main action, or to the footer itself
 * when none can, which says so. Nothing here knows which controls the footer has.
 *
 * The footer can take more than one render to settle after a save, as the body reports that
 * nothing is left to save, so focus follows it until it is on the footer's last control. A
 * learner who moves focus elsewhere in the meantime is left where they are.
 *
 * `controlsRef` goes on the footer's controls, which are made focusable by script, and named by
 * the caller for whether any can be used.
 */
export const useFocusAfterSave = ({ apiIsPending, onAnswerSave }: {
  apiIsPending: boolean;
  onAnswerSave: () => void;
}) => {
  const owesFocus = React.useRef(false);
  const controlsRef = React.useRef<HTMLDivElement>(null);

  const save = () => {
    owesFocus.current = true;
    onAnswerSave();
  };

  /*
   * A learner who moves focus out of the footer has let go of the save, and is left where they are
   * when it lands: on another question's controls, say, or on nothing, having clicked off a
   * control that is still there, as after a save that did not land. The control they pressed
   * going away or becoming unavailable also moves focus to nothing, and does not count; whether it
   * did is known once the render doing it is done. Nor does the window losing focus, which leaves
   * the control focused for when it comes back.
   */
  const onControlsBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const { relatedTarget, target } = event;
    if (relatedTarget instanceof Node) {
      if (!event.currentTarget.contains(relatedTarget)) { owesFocus.current = false; }
      return;
    }
    queueMicrotask(() => {
      if (target.isConnected && document.activeElement !== target
        && !(target instanceof HTMLButtonElement && target.disabled)) {
        owesFocus.current = false;
      }
    });
  };

  // after every render: any of them can be the one the footer settles in
  React.useEffect(() => {
    const controls = controlsRef.current;
    if (!owesFocus.current || apiIsPending || !controls) { return; }

    const active = document.activeElement;
    // on nothing, or on a control of the footer that can no longer be used
    const lost = !active || active === document.body
      || (active instanceof HTMLButtonElement && controls.contains(active) && !isAvailable(active));

    if (lost) {
      const buttons = Array.from(controls.querySelectorAll('button'));
      const main = buttons.filter(isAvailable).pop();
      (main ?? controls).focus();
      owesFocus.current = main !== undefined && main !== buttons[buttons.length - 1];
    } else if (!controls.contains(active)) {
      owesFocus.current = false;
    }
  });

  return { controlsRef, save, onControlsBlur };
};
