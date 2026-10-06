import React from 'react';
import styled, { css } from 'styled-components';
import { ID } from '../types';
import { colors } from '../theme';
import Button from './Button';
import { CompactDisplayProps } from './compactDisplay';
import { StepCardBody } from './StepCardBody';
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

/*
 * The space below a question's content belongs to the frame, not the content: every format
 * ends flush, and this adds the same room above the footer whatever was rendered inside.
 */
const QuestionBodySection = styled(StepCardBody)<CompactDisplayProps>`
  ${props => !props.compactDisplay && css`
    padding-bottom: calc(var(--step-card-gutter-bottom) + 2rem);
  `}
`;

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
   * Pass `false` to keep the old behaviour — the button reads "Submit & continue" and the
   * footer advances by itself once the response lands. Omitting it means the host navigates.
   */
  hasFeedback?: boolean;
  /** `false` renders the footer without its buttons, e.g. for a read-only preview. */
  showControls?: boolean;

  onAnswerSave: () => void;
  onNextStep: () => void;
  /** receives the Cancel button's own click event */
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Compat slot: where `Exercise` keeps its feedback block so its footer DOM is unchanged.
   * New consumers render feedback in the body instead and omit this.
   */
  footerChildren?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * The frame around a question: the padded, divided body section its content sits in, and the
 * footer with its buttons and the attempts notice. The footer is left out when it would be
 * empty. Which of the three arrangements of buttons applies follows from `canAnswer` and
 * `is_completed` alone, so this knows nothing about the format of the question it wraps.
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
  showControls = true,
  onAnswerSave,
  onNextStep,
  onCancel,
  footerChildren,
  compactDisplay,
  children,
}: QuestionWrapperProps) => {
  // holds Submit in its waiting state after a click until the response lands, then advances.
  // Deprecated along with `hasFeedback`: a host that omits it drives navigation itself.
  const [shouldContinue, setShouldContinue] = React.useState(false);
  // only an explicit `false` opts into the deprecated auto-advance; omitting it leaves
  // navigation to the host, which is what a new consumer gets
  const willContinue = hasFeedback === false;

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
      <QuestionBodySection className="step-card-question" divided compactDisplay={compactDisplay}>
        {children}
      </QuestionBodySection>
      {leftRegion || showControls ? (
        <StepCardFooter className="step-card-footer" compactDisplay={compactDisplay}>
          <div className="step-card-footer-inner">
            {leftRegion ? <div className="points">{attempts}{footerChildren}</div> : null}
            {showControls ? <div className="controls">{controls()}</div> : null}
          </div>
        </StepCardFooter>
      ) : null}
    </>
  );
};

QuestionWrapper.displayName = 'OSQuestionWrapper';
