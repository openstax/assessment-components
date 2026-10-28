import React from 'react';
import styled from 'styled-components';
import { useAssessmentSection } from '../hooks/useAssessmentSection';
import { colors } from '../theme';
import { ID } from '../types';
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

  /*
   * A save the learner pressed keeps focus while it is pending. When it lands, the button they
   * pressed may be gone (Submit, replaced by Next) or unavailable (Update, with nothing left to
   * save), so focus moves on to the control the footer now offers, which announces itself.
   *
   * The footer can take more than one render to settle after a save, as the body reports that
   * nothing is left to save, so this stays ready while focus is still in the footer. It is done
   * once focus has moved, here or by a learner who moved elsewhere, who is left where they are.
   */
  const saving = React.useRef(false);
  const controlsRef = React.useRef<HTMLDivElement>(null);
  const nextRef = React.useRef<HTMLButtonElement>(null);
  const updateRef = React.useRef<HTMLButtonElement>(null);
  const save = () => {
    saving.current = true;
    onAnswerSave();
  };

  React.useEffect(() => {
    if (!saving.current || apiIsPending) { return; }

    const active = document.activeElement;
    const lost = !active || active === document.body
      || (active instanceof HTMLButtonElement && active.disabled && !!controlsRef.current?.contains(active));

    if (lost) {
      // Next while the footer settles may still be unavailable, so Update stands in until it is
      const target = [nextRef.current, updateRef.current].find(button => button !== null && !button.disabled);
      target?.focus();
      saving.current = target !== undefined && target === updateRef.current;
    } else if (!controlsRef.current?.contains(active)) {
      saving.current = false;
    }
  }, [apiIsPending, is_completed, canAnswer, canSubmit, dirty]);

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
            save();
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
            ref={updateRef}
            data-test-id="update-answer-btn"
            disabled={dirty === false || apiIsPending || canSubmit === false}
            isWaiting={apiIsPending}
            waitingText="Saving…"
            onClick={save}
          >
            Update
          </Button>
          {onNextStep && <NextButton
            ref={nextRef}
            disabled={apiIsPending || dirty === true}
            onClick={onNextStep}
            canUpdateCurrentStep={false}
          />}
        </>
      );
    }

    // the same element as the Submit it follows, unavailable but still holding the focus it had
    if (!onNextStep) {
      return <SaveButton
        disabled={false}
        aria-disabled
        isWaiting={false}
        attempt_number={attempt_number}
        willContinue={false}
      />;
    }

    return <NextButton ref={nextRef} onClick={onNextStep} canUpdateCurrentStep={canUpdateCurrentStep} />;
  };

  const leftRegion = attempts || footerChildren;
  const number = itemId !== undefined ? section?.itemNumber(itemId) : undefined;
  const focusTarget = section !== undefined && itemId !== undefined && number !== undefined
    ? { id: section.itemDomId(itemId), tabIndex: -1, role: 'group', 'aria-label': `Question ${number}` }
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
            {showControls ? <div className="controls" ref={controlsRef}>{controls()}</div> : null}
          </div>
        </StepCardFooter>
      ) : null}
    </>
  );
};

QuestionWrapper.displayName = 'OSQuestionWrapper';
