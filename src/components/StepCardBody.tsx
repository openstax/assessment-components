import styled, { css } from 'styled-components';
import { colors } from '../theme';

/**
 * A full-width band of the card. Its padding and background come from the variables the card
 * sets (see `InnerStepCard`), so it follows the card's breakpoints and compact mode without
 * knowing about either.
 */
export const stepCardSection = css`
  padding: var(--step-card-gutter-top) var(--step-card-gutter) var(--step-card-gutter-bottom);
  background: var(--step-card-surface);
  overflow: auto;
`;

export const StepCardBody = styled.div.attrs<{ divided?: boolean }>(({ className }) => ({
  className: className ? `step-card-body ${className}` : 'step-card-body',
}))<{ divided?: boolean }>`
  ${stepCardSection}

  ${props => props.divided && css`
    border-top: 1px solid ${colors.palette.pale};
  `}
`;
