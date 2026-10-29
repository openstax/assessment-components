import React from 'react';

/**
 * Moves focus on from a save the learner pressed, once it lands. A save keeps focus while it is
 * pending; when it lands, the button they pressed may be gone (Submit, replaced by Next) or
 * unavailable (Update, with nothing left to save), so focus moves on to the control the footer
 * now offers, which announces itself.
 *
 * The footer can take more than one render to settle after a save, as the body reports that
 * nothing is left to save, so this stays ready while focus is still in the footer. It is done
 * once focus has moved, here or by a learner who moved elsewhere, who is left where they are.
 */
export const useFocusAfterSave = ({ apiIsPending, onAnswerSave }: {
  apiIsPending: boolean;
  onAnswerSave: () => void;
}) => {
  const saving = React.useRef(false);
  const controlsRef = React.useRef<HTMLDivElement>(null);
  const nextRef = React.useRef<HTMLButtonElement>(null);
  const updateRef = React.useRef<HTMLButtonElement>(null);

  const save = () => {
    saving.current = true;
    onAnswerSave();
  };

  /*
   * A learner who moves focus out of the footer has let go of the save, and is left where they are
   * when it lands: on another question's controls, say, or on nothing, having clicked off a
   * control that is still there, as after a save that did not land. The control they pressed
   * going away or becoming unavailable also moves focus to nothing, and does not count; whether it
   * did is known once the render doing it is done.
   */
  const onControlsBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const { relatedTarget, target } = event;
    if (relatedTarget instanceof Node) {
      if (!event.currentTarget.contains(relatedTarget)) { saving.current = false; }
      return;
    }
    queueMicrotask(() => {
      if (target.isConnected && !(target instanceof HTMLButtonElement && target.disabled)) {
        saving.current = false;
      }
    });
  };

  // after every render: any of them can be the one the footer settles in
  React.useEffect(() => {
    if (!saving.current || apiIsPending) { return; }

    const active = document.activeElement;
    const lost = !active || active === document.body
      || (active instanceof HTMLButtonElement && active.disabled && !!controlsRef.current?.contains(active));

    if (lost) {
      // Next while the footer settles may still be unavailable, so Update stands in until it is
      const target = [nextRef.current, updateRef.current].find(button => button !== null && !button.disabled);
      target?.focus();
      saving.current = target !== undefined && target === updateRef.current;
    } else if (!controlsRef.current?.contains(active)) {
      saving.current = false;
    }
  });

  return { controlsRef, nextRef, updateRef, save, onControlsBlur };
};
