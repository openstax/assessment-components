import React, { MouseEventHandler } from 'react';
import { Answer, ExerciseQuestionData, ID } from '../types';
import { CompactDisplayProps } from './compactDisplay';
import { QuestionBody } from './QuestionBody';
import { QuestionLevelFeedback } from './QuestionLevelFeedback';
import { QuestionWrapper } from './QuestionWrapper';
import { numberfyId } from '../utils';

export { FreeResponseTextArea, StyledFreeResponse } from './QuestionBody';

export interface FreeResponseProps extends CompactDisplayProps {
  is_completed: boolean;
  canAnswer: boolean;
  needsSaved: boolean;
  apiIsPending: boolean;
  free_response: string;
  onAnswerChange: (answer: Omit<Answer, 'id'> & { id: number, question_id: number }) => void;
  onAnswerSave: (question_id: number) => void;
  onNextStep: (currentIndex: number) => void;

  // Question data
  questionNumber: number;
  question: ExerciseQuestionData;

  // Specific to free response
  /** @deprecated Pass the semantic `responseSize`; the word count behind it lives in this library. */
  wordLimit?: number;
  responseSize?: 'short' | 'medium' | 'long';
  score?: { raw?: number; max?: number };
  feedback_html?: string;
  submissionTimestamp?: string | number;
  cancelHandler?: MouseEventHandler<HTMLButtonElement>;
  previewMode?: boolean;
  canUpdateCurrentStep?: boolean;
  hasUnlimitedAttempts?: boolean;
  hasFeedback?: boolean;

  // Grading callbacks (for preview mode)
  onGradingSave?: (questionId: ID, data: { score: number; max: number; comment: string }) => Promise<void> | void;
  gradingTimestamp?: string | number;
}

/**
 * A free-response question and the controls around it — the composition `Exercise` used to
 * render inline. New consumers compose `QuestionBody` and `QuestionWrapper` themselves.
 */
export const FreeResponseInput = (props: FreeResponseProps) => {
  const {
    is_completed, canAnswer, needsSaved, apiIsPending, free_response, onAnswerChange,
    onAnswerSave, onNextStep, questionNumber, question, responseSize, score, feedback_html,
    submissionTimestamp, cancelHandler, previewMode = false, onGradingSave, gradingTimestamp, wordLimit,
    canUpdateCurrentStep = false, hasUnlimitedAttempts, hasFeedback, compactDisplay,
  } = props;

  const [status, setStatus] = React.useState<{ canSubmit?: boolean; dirty?: boolean }>({});
  const cancelHandle = React.useRef<() => void>();

  const state = {
    is_completed,
    canAnswer,
    free_response,
    score,
    feedback_html,
    submissionTimestamp,
    gradingTimestamp,
  };

  const isPostReview = is_completed && !canAnswer;
  const feedback = previewMode && isPostReview && !onGradingSave
    ? <QuestionLevelFeedback score={score} gradingComments={feedback_html} />
    : undefined;
  const footerChildren = !previewMode && isPostReview && (score || feedback_html)
    ? <QuestionLevelFeedback score={score} gradingComments={feedback_html} />
    : undefined;

  const body = (
    <QuestionBody
      question={question}
      state={state}
      questionNumber={questionNumber}
      apiIsPending={apiIsPending}
      needsSaved={needsSaved}
      responseSize={responseSize}
      wordLimit={wordLimit}
      previewMode={previewMode}
      onGradingSave={previewMode ? onGradingSave : undefined}
      onAnswerChange={onAnswerChange}
      onStatusChange={(next) => setStatus(
        (current) => current.canSubmit === next.canSubmit && current.dirty === next.dirty ? current : next
      )}
      registerCancel={(cancel) => { cancelHandle.current = cancel; }}
      feedback={feedback}
      compactDisplay={compactDisplay}
    />
  );

  if (previewMode) {
    return body;
  }

  return (
    <QuestionWrapper
      question_id={question.id}
      questionIndex={questionNumber - 1}
      is_completed={is_completed}
      canAnswer={canAnswer}
      canSubmit={status.canSubmit}
      dirty={status.dirty}
      apiIsPending={apiIsPending}
      canUpdateCurrentStep={canUpdateCurrentStep}
      hasUnlimitedAttempts={hasUnlimitedAttempts}
      hasFeedback={hasFeedback}
      onAnswerSave={() => onAnswerSave(numberfyId(question.id))}
      onNextStep={() => onNextStep(questionNumber - 1)}
      onCancel={() => {
        cancelHandle.current?.();
        cancelHandler?.(undefined as unknown as React.MouseEvent<HTMLButtonElement>);
      }}
      footerChildren={footerChildren}
      compactDisplay={compactDisplay}
    >
      {body}
    </QuestionWrapper>
  );
};

FreeResponseInput.displayName = 'OSFreeResponse';
