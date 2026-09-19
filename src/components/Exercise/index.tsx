import React from 'react';
import cn from 'classnames';
import scrollToElement from 'scroll-to-element';
import { Answer, ExerciseData, ID, QuestionState, StepBase } from '../../types';
import { CompactDisplayProps } from '../compactDisplay';
import { ExerciseBody } from '../ExerciseBody';
import { ExerciseWrapper } from '../ExerciseWrapper';
import { isFreeResponseQuestion, QuestionBody } from '../QuestionBody';
import { QuestionLevelFeedback } from '../QuestionLevelFeedback';
import { QuestionWrapper } from '../QuestionWrapper';
import { numberfyId } from '../../utils';
import type { ExerciseIcons } from '../ExerciseHeaderIcons';

export type { ExerciseIcon, ExerciseIcons, ExerciseType } from '../ExerciseHeaderIcons';

export interface ExerciseBaseProps {
  /**
   * An object containing a Step ID and Exercise UID.
   * @deprecated Pass `questionId` instead; nothing else on a step is read.
   */
  step?: StepBase;
  /** The exercise UID rendered in the header as `ID: …`. Falls back to `step.uid`. */
  questionId?: string;
  /** An exercise object from the Exercises API */
  exercise: ExerciseData;
  /**
   * @deprecated The count comes from `exercise.questions.length`; this value is ignored.
   */
  numberOfQuestions: number;
  /** The current question index. For multipart questions this is the first question number.  */
  questionNumber: number;
  /** A boolean that enables showing the amount of attempts remaining. */
  hasMultipleAttempts: boolean;
  /** A boolean that enables labeling for unlimited attempts. */
  hasUnlimitedAttempts: boolean;
  /** A callback with the question_id when the Submit/Re-submit button is clicked. */
  onAnswerSave: (question_id: number) => void;
  /** A callback with the current question index when the Next/Continue button is clicked. */
  onNextStep: (currentIndex: number) => void;
  /** A boolean that enables labeling the correct answer and the selected incorrect answer */
  labelAnswers?: boolean;
  /** A boolean that enables always showing every answer feedback_html field. */
  show_all_feedback?: boolean;
  /** Whether the detailed solution from the exercise definition is rendered. Defaults to true. */
  displaySolution?: boolean;
  /** The question number to scroll into view when the component renders. */
  scrollToQuestion?: number;
  /** An object containing data for how to render the following icons:
   * - An errata icon linking to the errata/feedback form
   * - An info icon describing the exercise type (multiple-choice, two-step, etc.)
   * - A topic icon linking to the relevant textbook location
   */
  exerciseIcons?: ExerciseIcons;
  /**
   * @deprecated Navigation belongs to the host: advance when your own response POST completes.
   * While this is passed, `false` keeps the old behaviour — the button reads
   * "Submit & continue" and the exercise advances by itself once the response lands.
   */
  hasFeedback?: boolean;
}

export interface ExerciseWithQuestionStatesProps extends ExerciseBaseProps {
  questionStates: { [key: ID]: QuestionState };
  /** A callback with the IDs of the answer and question */
  onAnswerChange: (answer: Omit<Answer, 'id'> & { id: number, question_id: number }) => void;
  /**
   * Whether a completed question's Next button reads "Continue". Defaults to true for every
   * question but the last.
   */
  canUpdateCurrentStep?: boolean;
  /** @deprecated Shadowed by `QuestionState.apiIsPending`, which is what takes effect. */
  apiIsPending?: boolean;
  /** @deprecated Shadowed by `QuestionState.canAnswer`, which is what takes effect. */
  canAnswer?: boolean;
  /** @deprecated Shadowed by `QuestionState.needsSaved`, which is what takes effect. */
  needsSaved?: boolean;
}

export interface OverlayProps {
  overlayChildren?: React.ReactNode;
}

type QuestionStatus = { canSubmit?: boolean; dirty?: boolean };

/**
 * An exercise as the assessment system renders it: the card, its questions and their controls.
 *
 * Composed from `ExerciseWrapper`, `ExerciseBody`, `QuestionWrapper` and `QuestionBody`, which
 * are exported individually for a host that wants its own chrome around this content.
 */
export const Exercise = ({
  numberOfQuestions, // eslint-disable-line @typescript-eslint/no-unused-vars
  questionNumber,
  step,
  questionId,
  exercise,
  show_all_feedback,
  scrollToQuestion,
  exerciseIcons,
  overlayChildren,
  labelAnswers = true,
  displaySolution = true,
  previewMode = false,
  showScoring = false,
  compactDisplay,
  onGradingSave,
  className,
  ...props
}: {
  className?: string,
  previewMode?: boolean,
  showScoring?: boolean,
  onGradingSave?: (questionId: ID, data: { score: number; max: number; comment: string }) => Promise<void> | void,
} & CompactDisplayProps & ExerciseWithQuestionStatesProps & OverlayProps) => {
  const questionsRef = React.useRef<Array<HTMLDivElement>>([]);
  const [questionStates, setQuestionStates] =
    React.useState<{ [key: ID]: QuestionState }>(props.questionStates);
  const [statuses, setStatuses] = React.useState<{ [key: ID]: QuestionStatus }>({});
  const cancelHandles = React.useRef<{ [key: ID]: () => void }>({});

  React.useEffect(() => {
    const el = scrollToQuestion && questionsRef.current[scrollToQuestion];
    if (el) {
      scrollToElement(el);
    }
  }, [scrollToQuestion, exercise]);

  const propsQuestionStates = props.questionStates;
  React.useEffect(() => {
    if (propsQuestionStates) {
      setQuestionStates(propsQuestionStates);
    }
  }, [propsQuestionStates]);

  const { totalScoring, isGraded } = React.useMemo(() => {
    const totalScoring = { score: 0, maxScore: 0 };
    let isGraded = true;

    for (const q of exercise.questions) {
      const score = questionStates[q.id]?.score;

      if (score?.raw === undefined || !score?.max) {
        isGraded = false;
        break;
      } else {
        totalScoring.score += score.raw;
        totalScoring.maxScore += score.max;
      }
    }
    return { totalScoring, isGraded };
  }, [exercise.questions, questionStates]);

  const responseSize = exercise.tags?.find(t => t.startsWith('response-size:'))?.split(':')[1] as
    'short' | 'medium' | 'long' | undefined;

  const onStatusChange = React.useCallback((id: ID, next: QuestionStatus) => setStatuses(
    (current) => current[id] && current[id].canSubmit === next.canSubmit && current[id].dirty === next.dirty
      ? current
      : { ...current, [id]: next }
  ), []);

  return (
    <ExerciseWrapper
      questionNumber={questionNumber}
      numberOfQuestions={exercise.questions.length}
      questionId={questionId ?? step?.uid}
      exerciseIcons={exerciseIcons}
      className={cn('exercise-step', className)}
      showScoring={showScoring}
      isGraded={isGraded}
      totalScoring={totalScoring}
      overlayChildren={overlayChildren}
      compactDisplay={compactDisplay}
    >
      <ExerciseBody context={exercise.context} stimulus_html={exercise.stimulus_html}>
        {exercise.questions.map((q, i) => {
          const state = { ...props.questionStates[q.id] };
          const status = statuses[q.id] || {};
          const isFreeResponse = isFreeResponseQuestion(q);
          const isPostReview = state.is_completed && !state.canAnswer;

          // The detailed solution reaches the body from the exercise definition and the footer
          // from the question's state — two routes for the same content through the server, and
          // each renders where it renders today.
          const definitionSolution = displaySolution && !isFreeResponse
            && q.collaborator_solutions?.find(s => s['content_html'] !== undefined)
            ? q.collaborator_solutions.map(s => s['content_html']).join('')
            : undefined;

          const bodyFeedback = isFreeResponse
            ? (previewMode && isPostReview && !onGradingSave
              ? <QuestionLevelFeedback score={state.score} gradingComments={state.feedback_html} />
              : undefined)
            : (definitionSolution
              ? <QuestionLevelFeedback detailedSolution={definitionSolution} />
              : undefined);

          const footerFeedback = isFreeResponse
            ? (!previewMode && isPostReview && (state.score || state.feedback_html)
              ? <QuestionLevelFeedback score={state.score} gradingComments={state.feedback_html} />
              : undefined)
            // the multiple choice footer shows no score today, so only the solution crosses
            : (state.solution?.content_html
              ? <QuestionLevelFeedback detailedSolution={state.solution.content_html} />
              : undefined);

          const body = (
            <QuestionBody
              ref={(el: HTMLDivElement) => questionsRef.current[questionNumber + i] = el}
              question={q}
              state={state}
              apiIsPending={state.apiIsPending}
              needsSaved={state.needsSaved}
              questionNumber={questionNumber + i}
              responseSize={responseSize}
              previewMode={previewMode}
              show_all_feedback={show_all_feedback}
              labelAnswers={labelAnswers}
              onGradingSave={previewMode ? onGradingSave : undefined}
              onAnswerChange={props.onAnswerChange}
              onStatusChange={(next) => onStatusChange(q.id, next)}
              registerCancel={(cancel) => { cancelHandles.current[q.id] = cancel; }}
              feedback={bodyFeedback}
            />
          );

          // preview renders no controls, so the footer only survives when it carries feedback
          const wrapped = previewMode && !footerFeedback
            ? body
            : (
              <QuestionWrapper
                question_id={q.id}
                questionIndex={questionNumber + i - 1}
                is_completed={state.is_completed}
                canAnswer={state.canAnswer}
                canSubmit={status.canSubmit}
                dirty={status.dirty}
                apiIsPending={state.apiIsPending}
                canUpdateCurrentStep={
                  // misleading prop name, we want to show a continue button for completed questions
                  // that aren't the last question, which requires this prop to be true
                  props.canUpdateCurrentStep !== undefined
                    ? props.canUpdateCurrentStep : !(i + 1 === exercise.questions.length)
                }
                attempt_number={isFreeResponse ? undefined : state.attempt_number}
                attemptsRemaining={props.hasMultipleAttempts && !isFreeResponse ? state.attempts_remaining : undefined}
                hasUnlimitedAttempts={props.hasUnlimitedAttempts}
                hasFeedback={props.hasFeedback}
                onAnswerSave={() => props.onAnswerSave(numberfyId(q.id))}
                onNextStep={() => props.onNextStep(questionNumber + i - 1)}
                onCancel={() => cancelHandles.current[q.id] && cancelHandles.current[q.id]()}
                footerChildren={footerFeedback}
              >
                {body}
              </QuestionWrapper>
            );

          return isFreeResponse
            ? <React.Fragment key={q.id}>{wrapped}</React.Fragment>
            : <div key={q.id} data-test-id="student-exercise-question">{wrapped}</div>;
        })}
      </ExerciseBody>
    </ExerciseWrapper>
  );
};

Exercise.displayName = 'OSExercise';
