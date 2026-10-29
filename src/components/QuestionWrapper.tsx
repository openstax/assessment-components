import React from 'react';
import styled from 'styled-components';
import { focusTargetProps } from '../helpers/focusTarget';
import { useAssessmentSection } from '../hooks/useAssessmentSection';
import { useFocusAfterSave } from '../hooks/useFocusAfterSave';
import { colors } from '../theme';
import { ID } from '../types';
import Button from './Button';
import { CompactDisplayProps } from './compactDisplay';
import { StepCardBody } from './StepCardBody';
import { StepCardFooter } from './StepCardFooter';

/**
 * `disabled` makes it unavailable rather than natively disabled: it stays focusable, so a screen
 * reader user can find it and hear that it is unavailable, and keeps the focus of whoever pressed it.
 */
export const SaveButton = ({ disabled, ...props }: {
  disabled: boolean, isWaiting: boolean, attempt_number?: number, willContinue: boolean
} & React.ComponentPropsWithoutRef<'button'>) => (
  <Button
    {...props}
    aria-disabled={disabled || props['aria-disabled']}
    waitingText="Saving…"
    isWaiting={props.isWaiting}
    data-test-id="submit-answer-btn"
  >
    {props.willContinue
      ? 'Submit & continue'
      : ((props.attempt_number ?? 0) === 0 ? 'Submit' : 'Re-submit')}
  </Button>
);

export const NextButton = React.forwardRef<HTMLButtonElement, {
  canUpdateCurrentStep: boolean,
} & React.ComponentPropsWithoutRef<'button'>>(({ canUpdateCurrentStep, ...props }, ref) => (
  <Button {...props} ref={ref} data-test-id="continue-btn">
    {canUpdateCurrentStep ? 'Continue' : 'Next'}
  </Button>
));

NextButton.displayName = 'OSNextButton';

const StyledCancelButton = styled(Button)`
  background-color: ${colors.button.secondary.background};

  &:hover:not(:disabled) {
    background-color: ${colors.button.secondary.backgroundHover};
  }

  &:active:not(:disabled) {
    background-color: ${colors.button.secondary.backgroundActive};
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
  /**
   * Omit for a host that navigates on its own: no Next button is rendered, and once the
   * question can no longer be answered its place is held by a disabled Submit.
   */
  onNextStep?: () => void;
  /** receives the Cancel button's own click event */
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Compat slot: where `Exercise` keeps its feedback block so its footer DOM is unchanged.
   * New consumers render feedback in the body instead and omit this.
   */
  footerChildren?: React.ReactNode;
  /**
   * The item this frames, as an `Assessment` knows it. Drawn in an assessment's section, the
   * question's body is then where focus goes when the learner moves to it, named by its number.
   */
  itemId?: ID;
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
  itemId,
  compactDisplay,
  children,
}: QuestionWrapperProps) => {
  const section = useAssessmentSection();
  // holds Submit in its waiting state after a click until the response lands, then advances.
  // Deprecated along with `hasFeedback`: a host that omits it drives navigation itself.
  const [shouldContinue, setShouldContinue] = React.useState(false);
  // only an explicit `false` opts into the deprecated auto-advance; omitting it leaves
  // navigation to the host, which is what a new consumer gets
  // with no `onNextStep` there is nowhere to continue to, so the deprecated mode stays off
  const willContinue = hasFeedback === false && onNextStep !== undefined;

  React.useEffect(() => {
    if (shouldContinue && is_completed && !apiIsPending) {
      setShouldContinue(false);
      onNextStep?.();
    }
  }, [shouldContinue, is_completed, apiIsPending, onNextStep]);

  const { controlsRef, save, onControlsBlur } = useFocusAfterSave({ apiIsPending, onAnswerSave });

  const attempts = (attemptsRemaining !== undefined && attemptsRemaining > 0) || hasUnlimitedAttempts
    ? <span className="attempts-left" role="status">
        {attemptsRemaining !== undefined && attemptsRemaining > 0 &&
          <AttemptsRemaining count={attemptsRemaining} />}
        {hasUnlimitedAttempts ? <UnlimitedAttempts /> : null}
      </span>
    : null;

  /** The footer's controls, for the arrangement that applies, and whether any of them can be used. */
  const controls = (): { buttons: React.ReactNode; anyAvailable: boolean } => {
    if ((canAnswer && !is_completed) || shouldContinue) {
      const submitUnavailable = apiIsPending || canSubmit === false || shouldContinue;
      return {
        anyAvailable: !submitUnavailable,
        buttons: <SaveButton
          disabled={submitUnavailable}
          isWaiting={apiIsPending || shouldContinue}
          attempt_number={attempt_number}
          onClick={() => {
            // continuing moves the learner on, and focus with them, so nothing is left here to move
            if (willContinue) {
              onAnswerSave();
              setShouldContinue(true);
            } else {
              save();
            }
          }}
          willContinue={willContinue}
        />,
      };
    }

    if (canAnswer && is_completed) {
      const cancelUnavailable = dirty === false || apiIsPending;
      const updateUnavailable = dirty === false || apiIsPending || canSubmit === false;
      const nextUnavailable = onNextStep === undefined || apiIsPending || dirty === true;
      return {
        anyAvailable: !cancelUnavailable || !updateUnavailable || !nextUnavailable,
        buttons: <>
          <CancelButton disabled={cancelUnavailable} onClick={onCancel} />
          <Button
            data-test-id="update-answer-btn"
            // unavailable rather than disabled, as Submit is, so it stays where a learner can find it
            aria-disabled={updateUnavailable}
            isWaiting={apiIsPending}
            waitingText="Saving…"
            onClick={save}
          >
            Update
          </Button>
          {onNextStep && <NextButton
            disabled={nextUnavailable}
            onClick={onNextStep}
            canUpdateCurrentStep={false}
          />}
        </>,
      };
    }

    // holds the place of Next, for a host that navigates on its own
    if (!onNextStep) {
      return {
        anyAvailable: false,
        buttons: <SaveButton
          disabled
          isWaiting={false}
          attempt_number={attempt_number}
          willContinue={false}
        />,
      };
    }

    return {
      anyAvailable: true,
      buttons: <NextButton onClick={onNextStep} canUpdateCurrentStep={canUpdateCurrentStep} />,
    };
  };

  const leftRegion = attempts || footerChildren;
  const number = itemId !== undefined ? section?.itemNumber(itemId) : undefined;
  const { buttons, anyAvailable } = controls();
  // named for what it offers, as focus lands on it after a save when none of its controls can be used
  const controlsLabel = anyAvailable
    ? (number === undefined ? 'Question actions' : `Question ${number} actions`)
    : (number === undefined ? 'No actions available' : `Question ${number}, no actions available`);
  const focusTarget = section !== undefined && itemId !== undefined && number !== undefined
    ? focusTargetProps(section.itemDomId(itemId), { role: 'group', 'aria-label': `Question ${number}` })
    : {};

  return (
    <>
      <StepCardBody
        className="step-card-question"
        divided
        {...focusTarget}
      >
        {children}
      </StepCardBody>
      {leftRegion || showControls ? (
        <StepCardFooter className="step-card-footer" compactDisplay={compactDisplay}>
          <div className="step-card-footer-inner">
            {leftRegion ? <div className="points">{attempts}{footerChildren}</div> : null}
            {showControls ? <div
              className="controls"
              ref={controlsRef}
              onBlur={onControlsBlur}
              role="group"
              aria-label={controlsLabel}
              tabIndex={-1}
            >{buttons}</div> : null}
          </div>
        </StepCardFooter>
      ) : null}
    </>
  );
};

QuestionWrapper.displayName = 'OSQuestionWrapper';
