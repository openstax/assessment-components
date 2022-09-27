import React from "react";
import { numberfyId } from "../../src/utils";
import { AvailablePoints, ID, ExerciseQuestionData, Task } from "../types";
import Button from "./Button";
import { Content } from "./Content";
import { ExerciseBaseProps } from "./Exercise";
import { Question } from './Question';
import { StepCardFooter } from "./StepCardFooter";

export interface ExerciseQuestionProps {
  task?: Task;
  question: ExerciseQuestionData;
  answer_id_order?: ID[];
  questionNumber: number;
  choicesEnabled: boolean;
  hasMultipleAttempts: boolean;
  onAnswerChange: () => void;
  onAnswerSave: ExerciseBaseProps['onAnswerSave'];
  onNextStep: ExerciseBaseProps['onNextStep'];
  feedback_html: string;
  correct_answer_feedback_html: string;
  is_completed: boolean;
  correct_answer_id: ID;
  incorrectAnswerId: ID;
  answer_id?: ID;
  attempts_remaining: number;
  published_comments?: string;
  detailedSolution?: string;
  canAnswer: boolean;
  needsSaved: boolean;
  canUpdateCurrentStep: boolean;
  attempt_number: number;
  apiIsPending: boolean;
  displaySolution: boolean;
  available_points: AvailablePoints;
  exercise_uid: string;
  free_response?: string;
  show_all_feedback?: boolean;
  tableFeedbackEnabled?: boolean;
}

const AttemptsRemaining = ({ count }: { count: number }) => {
  return (
    <div>{count} attempt{count === 1 ? '' : 's'} left</div>
  );
}

const PublishedComments = ({ published_comments }: { published_comments?: string }) => {
  if (!published_comments) { return null; }

  return (
    <div>
      <strong>Feedback:</strong> {published_comments}
    </div>
  );
}

export const SaveButton = (props: {
  disabled: boolean, isWaiting: boolean, attempt_number: number
} & React.ComponentPropsWithoutRef<'button'>) => (
  <Button
    {...props}
    waitingText="Saving…"
    isWaiting={props.isWaiting}
    data-test-id="submit-answer-btn"
  >
    {props.attempt_number == 0 ? 'Submit' : 'Re-submit'}
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

const FreeResponseReview = ({ free_response }: Pick<ExerciseQuestionProps, "free_response">) => {
  if (!free_response) { return null; }
  return (
    <>
      <div className="free-response">{free_response}</div>
    </>
  );
}

export const ExerciseQuestion = React.forwardRef((props: ExerciseQuestionProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const {
    question, task, answer_id_order, onAnswerChange, feedback_html, correct_answer_feedback_html,
    is_completed, correct_answer_id, incorrectAnswerId, choicesEnabled, questionNumber,
    answer_id, hasMultipleAttempts, attempts_remaining, published_comments, detailedSolution,
    canAnswer, needsSaved, attempt_number, apiIsPending, onAnswerSave, onNextStep, canUpdateCurrentStep,
    displaySolution, available_points, free_response, show_all_feedback, tableFeedbackEnabled
  } = props;

  return (
    <div data-test-id="student-exercise-question">
      <Question
        ref={ref}
        task={task}
        question={question}
        answerIdOrder={answer_id_order}
        choicesEnabled={choicesEnabled}
        answer_id={answer_id}
        questionNumber={questionNumber}
        onChange={onAnswerChange}
        feedback_html={feedback_html}
        correct_answer_feedback_html={correct_answer_feedback_html}
        correct_answer_id={is_completed ? correct_answer_id : null}
        incorrectAnswerId={incorrectAnswerId}
        className="step-card-body"
        hideAnswers={false}
        displayFormats={false}
        displaySolution={displaySolution}
        show_all_feedback={show_all_feedback}
        tableFeedbackEnabled={tableFeedbackEnabled}
      >
        <FreeResponseReview free_response={free_response} />
      </Question>
      <StepCardFooter className="step-card-footer">
        <div className="step-card-footer-inner">
          <div className="points">
            <strong>Points: {available_points}</strong>
            <span className="attempts-left">
              {hasMultipleAttempts &&
                attempts_remaining > 0 &&
                <AttemptsRemaining count={attempts_remaining} />}
            </span>
            <PublishedComments published_comments={published_comments} />
            {detailedSolution && (<div><strong>Detailed solution:</strong> <Content html={detailedSolution} /></div>)}
          </div>
          <div className="controls">
            {canAnswer && needsSaved ?
              <SaveButton
                disabled={apiIsPending || !answer_id}
                isWaiting={apiIsPending}
                attempt_number={attempt_number}
                onClick={() => onAnswerSave(numberfyId(question.id))}
              /> :
              <NextButton onClick={() => onNextStep(questionNumber - 1)} canUpdateCurrentStep={canUpdateCurrentStep} />}
          </div>
        </div>
      </StepCardFooter>
    </div>
  );
})
