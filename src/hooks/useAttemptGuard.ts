import React from 'react';

/**
 * Guards the callbacks handed to a host, which it may hold on to across a retry: a callback
 * guarded for one attempt does nothing once `attemptId` has moved on, so a late call made for an
 * earlier attempt cannot reach the current one.
 */
export const useAttemptGuard = (attemptId: string | undefined) => {
  const current = React.useRef(attemptId);
  current.current = attemptId;

  return React.useCallback(<Args extends unknown[]>(callback: (...args: Args) => void) =>
    (...args: Args) => {
      if (current.current === attemptId) { callback(...args); }
    },
  [attemptId]);
};
