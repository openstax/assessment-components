import React from 'react';
import styled from 'styled-components';
import { ID } from '../types';
import { colors } from '../theme';
import Button from './Button';
import { CompactDisplayProps, useCompactDisplay } from './compactDisplay';
import { StepCardFooter } from './StepCardFooter';

export const SaveButton = (props: {
  disabled: boolean, isWaiting: boolean, attempt_number?: number, willContinue: boolean
} & React.ComponentPropsWithoutRef<'button'>) => (
  <Button
    {...props}
    waitingText="Saving…"
    isWaiting={props.isWaiting}
    data-test-id="submit-answer-btn"
  >
    {props.willContinue
      ? 'Submit & continue'
      : ((props.attempt_number ?? 0) === 0 ? 'Submit' : 'Re-submit')}
  </Button>
);

export const NextButton = (props: {
  canUpdateCurrentStep: boolean,
} & React.ComponentPropsWithoutRef<'button'>) => {
  return (
    <Button {...props} data-test-id="continue-btn">
      {props.canUpdateCurrentStep ? 'Continue' : 'Next'}
    </Button>
  );
}

const StyledCancelButton = styled(Button)`
  background-color: ${colors.palette.darkGray};

  &:hover:not(:disabled) {
    background-color: ${colors.palette.neutral};
  }

  &:active:not(:disabled) {
    background-color: ${colors.palette.neutralDark};
  }
`;

const CancelButton = (props: {
  disabled: boolean
} & React.ComponentPropsWithoutRef<'button'>) => (
  <StyledCancelButton {...props}>
    Cancel
  </StyledCancelButton>
);

const AttemptsRemaining = ({ count }: { count: number }) => {
  return (
    <div>{count} attempt{count === 1 ? '' : 's'} left</div>
  );
}

const UnlimitedAttempts = () => {
  return (
    <div>Unlimited quiz attempts left</div>
  );
}

export interface QuestionWrapperProps extends CompactDisplayProps {
  question_id: ID;
  questionIndex: number;

  // lifecycle, from the item
  is_completed: boolean;
  canAnswer: boolean;

  /** from the body. Absent means the control is enabled. */
  canSubmit?: boolean;
  /** from the body: whether the response differs from the one last submitted. */
  dirty?: boolean;

  // from the host
  apiIsPending: boolean;
  canUpdateCurrentStep: boolean;
  /** 0 or absent → "Submit"; otherwise "Re-submit". Omit for formats that don't count attempts. */
  attempt_number?: number;
  /** per-question attempts left. Rendered when > 0. */
  attemptsRemaining?: number;
  /** assessment-level quiz-retry notice. Applies to every format. */
  hasUnlimitedAttempts?: boolean;
  /**
   * @deprecated Navigation belongs to the host: advance when your response POST completes.
   * While this is passed, `false` keeps the old behaviour — the button reads
   * "Submit & continue" and the footer advances by itself once the response lands.
   */
  hasFeedback?: boolean;

  onAnswerSave: () => void;
  onNextStep: () => void;
  onCancel?: () => void;

  /**
   * Compat slot: where `Exercise` keeps its feedback block so its footer DOM is unchanged.
   * New consumers render feedback in the body instead and omit this.
   */
  footerChildren?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * The controls around a question: the footer, its buttons and the attempts notice. Which of
 * the three arrangements applies follows from `canAnswer` and `is_completed` alone, so this
 * knows nothing about the format of the question it wraps.
 */
export const QuestionWrapper = ({
  is_completed,
  canAnswer,
  canSubmit,
  dirty,
  apiIsPending,
  canUpdateCurrentStep,
  attempt_number,
  attemptsRemaining,
  hasUnlimitedAttempts,
  hasFeedback,
  onAnswerSave,
  onNextStep,
  onCancel,
  footerChildren,
  compactDisplay,
  children,
}: QuestionWrapperProps) => {
  const compact = useCompactDisplay(compactDisplay);

  // holds Submit in its waiting state after a click until the response lands, then advances.
  // Deprecated along with `hasFeedback`: a host that omits it drives navigation itself.
  const [shouldContinue, setShouldContinue] = React.useState(false);
  const willContinue = !hasFeedback;

  React.useEffect(() => {
    if (shouldContinue && is_completed && !apiIsPending) {
      setShouldContinue(false);
      onNextStep();
    }
  }, [shouldContinue, is_completed, apiIsPending, onNextStep]);

  const attempts = (attemptsRemaining !== undefined && attemptsRemaining > 0) || hasUnlimitedAttempts
    ? <span className="attempts-left" role="status">
        {attemptsRemaining !== undefined && attemptsRemaining > 0 &&
          <AttemptsRemaining count={attemptsRemaining} />}
        {hasUnlimitedAttempts ? <UnlimitedAttempts /> : null}
      </span>
    : null;

  const controls = () => {
    if ((canAnswer && !is_completed) || shouldContinue) {
      return (
        <SaveButton
          disabled={apiIsPending || canSubmit === false || shouldContinue}
          isWaiting={apiIsPending || shouldContinue}
          attempt_number={attempt_number}
          onClick={() => {
            onAnswerSave();
            if (willContinue) {
              setShouldContinue(true);
            }
          }}
          willContinue={willContinue}
        />
      );
    }

    if (canAnswer && is_completed) {
      return (
        <>
          <CancelButton disabled={dirty === false || apiIsPending} onClick={onCancel} />
          <Button
            data-test-id="update-answer-btn"
            disabled={dirty === false || apiIsPending || canSubmit === false}
            isWaiting={apiIsPending}
            waitingText="Saving…"
            onClick={onAnswerSave}
          >
            Update
          </Button>
          <NextButton
            disabled={apiIsPending || dirty === true}
            onClick={onNextStep}
            canUpdateCurrentStep={false}
          />
        </>
      );
    }

    return <NextButton onClick={onNextStep} canUpdateCurrentStep={canUpdateCurrentStep} />;
  };

  const leftRegion = attempts || footerChildren;

  return (
    <>
      {children}
      <StepCardFooter className="step-card-footer" compactDisplay={compact}>
        <div className="step-card-footer-inner">
          {leftRegion ? <div className="points">{attempts}{footerChildren}</div> : null}
          <div className="controls">
            {controls()}
          </div>
        </div>
      </StepCardFooter>
    </>
  );
};

QuestionWrapper.displayName = 'OSQuestionWrapper';
