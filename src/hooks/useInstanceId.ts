import React from 'react';

let instances = 0;
const useFallbackId = () => React.useState(() => `${++instances}`)[0];

/**
 * An id for this instance of a component, unique on the page. `React.useId` where the host's
 * React has it, which keeps it the same across server and client renders.
 *
 * Without `useId`, as before React 18, it counts instances, so ids are not stable across server
 * and client renders: a server-rendered host would hydrate with different ones.
 */
export const useInstanceId: () => string = (React as { useId?: () => string }).useId ?? useFallbackId;
