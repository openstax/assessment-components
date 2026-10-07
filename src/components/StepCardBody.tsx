import styled, { css } from 'styled-components';
import { colors } from '../theme';

/**
 * A full-width band of the card. Its padding comes from the variables the card sets (see
 * `InnerStepCard`), so it follows the card's breakpoints and compact mode without knowing about
 * either. It paints no background: the card's surface shows through.
 */
export const stepCardSection = css`
  padding: var(--step-card-gutter-top) var(--step-card-gutter) var(--step-card-gutter-bottom);
  overflow: auto;
`;

export const StepCardBody = styled.div.attrs({ className: 'step-card-body' as string })<{ divided?: boolean }>`
  ${stepCardSection}

  ${props => props.divided && css`
    border-top: var(--step-card-rule-width) solid ${colors.palette.pale};
  `}
`;
