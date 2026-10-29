import React from 'react';

/**
 * Which drawing of the current section is on show, and whether it has reported ready. Every
 * section entered is a drawing of its own, numbered by `mount`, and only the current one's
 * `onReady` counts: a section left and returned to is drawn afresh, and a late report from the
 * drawing that was left must not stand in for the one on show.
 *
 * `ready` is as of the render; `reportedReady` knows of a report as soon as it is made, before
 * the render that shows it.
 */
export const useSectionDrawing = (sectionId: string | undefined) => {
  const [drawn, setDrawn] = React.useState({ sectionId, mount: 0 });
  const isDrawn = drawn.sectionId === sectionId;
  // counted while rendering, so the render that changes section already draws it afresh
  if (!isDrawn) {
    setDrawn({ sectionId, mount: drawn.mount + 1 });
  }
  const mount = isDrawn ? drawn.mount : drawn.mount + 1;

  const [readyMount, setReadyMount] = React.useState<number | undefined>(undefined);
  const reported = React.useRef({ readyMount: -1, mount });
  reported.current.mount = mount;
  // mounts only ever increase, so a late report from a drawing since left never undoes a later one
  const onReady = React.useCallback(() => {
    reported.current.readyMount = Math.max(reported.current.readyMount, mount);
    setReadyMount(current => current !== undefined && current > mount ? current : mount);
  }, [mount]);
  const reportedReady = React.useCallback(() => reported.current.readyMount === reported.current.mount, []);

  return { mount, ready: readyMount === mount, onReady, reportedReady };
};
