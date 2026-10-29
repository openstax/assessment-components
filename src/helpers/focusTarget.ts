import React from 'react';
import { css } from 'styled-components';

/**
 * The props that make an element somewhere an `Assessment` moves focus to: its id, and focusable
 * by script but not by tabbing. None without an id, as outside an assessment.
 */
export const focusTargetProps = (id: string | undefined, props?: React.HTMLAttributes<HTMLElement>) =>
  id === undefined ? {} : { id, tabIndex: -1, ...props };

/**
 * For an element an `Assessment` scrolls to by its id: a rem of room left above it, so the window
 * doesn't cut along its top.
 */
export const scrollTargetStyles = css`
  &[id] {
    scroll-margin-top: 1rem;
  }
`;

/**
 * For an element an `Assessment` moves focus to inside the card, whose hidden overflow would clip
 * the browser's own focus ring around it: the ring is drawn just inside instead.
 */
export const focusTargetStyles = css`
  &:focus-visible {
    outline-offset: -2px;
  }
`;
