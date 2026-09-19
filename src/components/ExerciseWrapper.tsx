import React from 'react';
import styled, { css } from 'styled-components';
import { AvailablePoints, ExerciseScoringData } from '../types';
import { InnerStepCard, OuterStepCard, StepCard, StepCardProps } from './Card';
import { CompactDisplayProps, useCompactDisplay } from './compactDisplay';
import { ExerciseHeaderIcons, ExerciseIcons } from './ExerciseHeaderIcons';
import { ExerciseToolbar, StyledToolbar } from './ExerciseToolbar';
import { breakpoints } from '../theme';

const StyledStepCard = styled(StepCard)`
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(2.8rem * var(--content-text-scale));
`;

const ToolbarWrapper = styled.div<{
  desktopToolbarEnabled: boolean;
  mobileToolbarEnabled: boolean;
}>`
  ${props => props.desktopToolbarEnabled && css`
    ${breakpoints.desktop`
      ${StyledStepCard} {
        margin-left: 6.8rem;
      }
    `}
    ${breakpoints.tablet`
      ${StyledStepCard} {
        margin-left: 4.8rem;
      }
    `}
    ${breakpoints.mobile`
      ${StyledStepCard} {
        margin-left: 0;
      }
    `}
  `}

  ${props => props.mobileToolbarEnabled && css`
    ${breakpoints.mobile`
      ${StyledToolbar} + ${OuterStepCard} ${InnerStepCard} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `}
  `}
`;

export interface ExerciseWrapperProps extends CompactDisplayProps {
  /** The current question index. For multipart questions this is the first question number. */
  questionNumber: number;
  numberOfQuestions: number;
  /** rendered in the header as `ID: …` */
  questionId?: string;
  availablePoints?: AvailablePoints;
  showScoring?: boolean;
  isGraded?: boolean;
  totalScoring?: ExerciseScoringData;
  exerciseIcons?: ExerciseIcons;
  overlayChildren?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

/**
 * The chrome around an exercise: the card, its header and the toolbar. Takes no exercise and
 * no step, so a host can render it around question content of any format.
 */
export const ExerciseWrapper = ({
  exerciseIcons,
  compactDisplay,
  children,
  ...props
}: ExerciseWrapperProps) => {
  const compact = useCompactDisplay(compactDisplay);

  const desktopToolbarEnabled = Object.values(exerciseIcons || {}).some(({ location }) => location?.toolbar?.desktop);
  const mobileToolbarEnabled = Object.values(exerciseIcons || {}).some(({ location }) => location?.toolbar?.mobile);

  const cardProps: StepCardProps = {
    ...props,
    compactDisplay: compact,
    rightHeaderChildren: exerciseIcons ? <ExerciseHeaderIcons icons={exerciseIcons} /> : null,
  };

  return (
    <ToolbarWrapper
      desktopToolbarEnabled={desktopToolbarEnabled}
      mobileToolbarEnabled={mobileToolbarEnabled}
    >
      <ExerciseToolbar icons={exerciseIcons} />
      <StyledStepCard {...cardProps}>
        {children}
      </StyledStepCard>
    </ToolbarWrapper>
  );
};

ExerciseWrapper.displayName = 'OSExerciseWrapper';
