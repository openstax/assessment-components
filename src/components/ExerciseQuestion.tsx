import React from "react";
import { Answer as AnswerType, ExerciseQuestionData, ID } from "../types";
import { CompactDisplayProps } from "./compactDisplay";
import { ExerciseBaseProps } from "./Exercise";
import { QuestionBody, QuestionBodyProps } from "./QuestionBody";
import { QuestionLevelFeedback } from "./QuestionLevelFeedback";
import { QuestionWrapper } from "./QuestionWrapper";
import { numberfyId } from "../utils";

export { NextButton, SaveButton } from "./QuestionWrapper";

export interface ExerciseQuestionProps extends CompactDisplayProps {
  question: ExerciseQuestionData;
  questionNumber: number;
  choicesEnabled: boolean;
  hasMultipleAttempts: boolean;
  hasUnlimitedAttempts: boolean;
  onAnswerChange: (answer: AnswerType) => void;
  onAnswerSave: ExerciseBaseProps['onAnswerSave'];
  onNextStep: ExerciseBaseProps['onNextStep'];
  feedback_html: string;
  correct_answer_feedback_html: string;
  is_completed: boolean;
  correct_answer_id: ID;
  incorrectAnswerId: ID;
  answer_id?: ID;
  attempts_remaining: number;
  detailedSolution?: string;
  canAnswer: boolean;
  needsSaved: boolean;
  canUpdateCurrentStep: boolean;
  attempt_number: number;
  apiIsPending: boolean;
  /**
   * @deprecated The detailed solution is composed in rather than rendered from the question.
   */
  displaySolution?: boolean;
  exercise_uid: string;
  free_response?: string;
  labelAnswers?: boolean;
  show_all_feedback?: boolean;
  hasFeedback?: ExerciseBaseProps['hasFeedback'];
  previewMode?: boolean;
}

/**
 * A question and the controls around it — the composition `Exercise` used to render inline.
 * New consumers compose `QuestionBody` and `QuestionWrapper` themselves.
 */
export const ExerciseQuestion = React.forwardRef((
  props: ExerciseQuestionProps, ref: React.ForwardedRef<HTMLDivElement>
) => {
  const {
    question, onAnswerChange, feedback_html, correct_answer_feedback_html, choicesEnabled,
    is_completed, correct_answer_id, incorrectAnswerId, questionNumber,
    answer_id, hasMultipleAttempts, hasUnlimitedAttempts, attempts_remaining, detailedSolution,
    canAnswer, attempt_number, apiIsPending, onAnswerSave, onNextStep, canUpdateCurrentStep,
    free_response, labelAnswers, show_all_feedback, hasFeedback, previewMode, compactDisplay,
  } = props;

  const state = {
    is_completed,
    // this component's `choicesEnabled` is what enables the inputs; `canAnswer` drives the footer
    canAnswer: choicesEnabled,
    answer_id,
    correct_answer_id,
    incorrectAnswerId,
    feedback_html,
    correct_answer_feedback_html,
    free_response,
  };

  const body = (
    <QuestionBody
      ref={ref}
      question={question}
      state={state}
      questionNumber={questionNumber}
      apiIsPending={apiIsPending}
      onAnswerChange={onAnswerChange as QuestionBodyProps['onAnswerChange']}
      labelAnswers={labelAnswers}
      show_all_feedback={show_all_feedback}
      previewMode={previewMode}
      compactDisplay={compactDisplay}
    />
  );

  const footerChildren = detailedSolution
    ? <QuestionLevelFeedback detailedSolution={detailedSolution} />
    : undefined;

  return (
    <div data-test-id="student-exercise-question">
      {(previewMode && detailedSolution) || !previewMode ?
        <QuestionWrapper
          question_id={question.id}
          questionIndex={questionNumber - 1}
          is_completed={is_completed}
          canAnswer={canAnswer}
          canSubmit={!!answer_id}
          apiIsPending={apiIsPending}
          canUpdateCurrentStep={canUpdateCurrentStep}
          attempt_number={attempt_number}
          attemptsRemaining={hasMultipleAttempts ? attempts_remaining : undefined}
          hasUnlimitedAttempts={hasUnlimitedAttempts}
          hasFeedback={hasFeedback ?? false}
          onAnswerSave={() => onAnswerSave(numberfyId(question.id))}
          onNextStep={() => onNextStep(questionNumber - 1)}
          footerChildren={footerChildren}
          compactDisplay={compactDisplay}
        >
          {body}
        </QuestionWrapper>
        : body}
    </div>
  );
})

ExerciseQuestion.displayName = 'OSExerciseQuestion';
