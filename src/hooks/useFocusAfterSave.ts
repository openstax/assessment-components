import React from 'react';

/**
 * Moves focus on from a save the learner pressed, once it lands. A save keeps focus while it is
 * pending; when it lands, the button they pressed may be gone (Submit, replaced by Next) or
 * unavailable (Update, with nothing left to save), so focus moves on to the first of `moveTo`
 * that is available, which announces itself.
 *
 * The footer can take more than one render to settle after a save, as the body reports that
 * nothing is left to save, so a later one of `moveTo` stands in for the first until it is
 * available. This is done once focus is on the first, or a learner has moved it elsewhere, who is
 * left where they are.
 */
export const useFocusAfterSave = ({ apiIsPending, onAnswerSave, moveTo }: {
  apiIsPending: boolean;
  onAnswerSave: () => void;
  /** Where focus moves on to, in order of preference. */
  moveTo: Array<React.RefObject<HTMLButtonElement>>;
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
    if (!owesFocus.current || apiIsPending) { return; }

    const active = document.activeElement;
    const lost = !active || active === document.body
      || (active instanceof HTMLButtonElement && active.disabled && !!controlsRef.current?.contains(active));

    if (lost) {
      const target = moveTo.map(ref => ref.current).find(button => button !== null && !button.disabled);
      target?.focus();
      owesFocus.current = target !== undefined && target !== moveTo[0].current;
    } else if (!controlsRef.current?.contains(active)) {
      owesFocus.current = false;
    }
  });

  return { controlsRef, save, onControlsBlur };
};
