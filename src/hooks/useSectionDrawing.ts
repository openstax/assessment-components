import React from 'react';

/**
 * Which drawing of the current section is on show, and whether it has reported ready. Every
 * section entered, and every new attempt, is a drawing of its own, numbered by `mount`, and only
 * the current one's `onReady` counts: a section left and returned to is drawn afresh, and a late
 * report from the drawing that was left must not stand in for the one on show.
 */
export const useSectionDrawing = (sectionId: string | undefined, attemptId: string | undefined) => {
  const [drawn, setDrawn] = React.useState({ sectionId, attemptId, mount: 0 });
  const isDrawn = drawn.sectionId === sectionId && drawn.attemptId === attemptId;
  if (!isDrawn) {
    setDrawn({ sectionId, attemptId, mount: drawn.mount + 1 });
  }
  const mount = isDrawn ? drawn.mount : drawn.mount + 1;

  const [readyMount, setReadyMount] = React.useState<number | undefined>(undefined);
  // mounts only ever increase, so a late report from a drawing since left never undoes a later one
  const onReady = React.useCallback(
    () => setReadyMount(current => current !== undefined && current > mount ? current : mount),
    [mount]
  );

  return { mount, ready: readyMount === mount, onReady };
};
