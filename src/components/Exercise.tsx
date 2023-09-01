import React from 'react';
import scrollToElement from 'scroll-to-element';
import styled from 'styled-components';
import { Answer, ExerciseData, ID, QuestionState, StepBase, StepWithData } from '../../src/types';
import { TaskStepCard } from './Card';
import { Content } from './Content';
import { ExerciseIcons } from './ExerciseIcons';
import { ExerciseQuestion } from './ExerciseQuestion';
import { typesetMath } from '../helpers/mathjax';
import { TypesetMathContext } from '../hooks/useTypesetMath';

const StyledTaskStepCard = styled(TaskStepCard)`
  font-size: 1.8rem;
  line-height: 2.8rem;
`;

const Preamble = ({ exercise }: { exercise: ExerciseData }) => {
  return (
    <>
      {exercise.context &&
        <Content className="step-card-body exercise-context"
          block html={exercise.context} />}

      {exercise.stimulus_html &&
        <Content className="step-card-body exercise-stimulus"
          block html={exercise.stimulus_html} />}
    </>
  );
};

export interface ExerciseBaseProps {
  /** An object containing a Step ID and Exercise UID */
  step: StepBase;
  /** An exercise object from the Exercises API */
  exercise: ExerciseData;
  numberOfQuestions: number;
  /** The current question index. For multipart questions this is the first question number.  */
  questionNumber: number;
  /** A boolean that enables showing the amount of attempts remaining. */
  hasMultipleAttempts: boolean;
  /** A callback with the question_id when the Submit/Re-submit button is clicked. */
  onAnswerSave: (question_id: number) => void;
  /** A callback with the current question index when the Next/Continue button is clicked. */
  onNextStep: (currentIndex: number) => void;
  /** A boolean that enables always showing every answer feedback_html field. */
  show_all_feedback?: boolean;
  /** The question number to scroll into view when the component renders. */
  scrollToQuestion?: number;
  /** A boolean that enables showing exercise icons in the card header:
   * - An info icon describing the exercise type (multiple-choice, two-step, etc.)
   * - A topic icon linking to the relevant textbook location
   * - An errata icon linking to the errata/feedback form
   */
  showExerciseIcons?: boolean;
  /** A URL for textbook content relevant to the exercise. */
  topicUrl?: string;
  /** A URL for the errata form. */
  errataUrl?: string;
}

export interface ExerciseWithStepDataProps extends ExerciseBaseProps {
  /** A Tutor Step object */
  step: StepWithData;
  canAnswer: boolean;
  needsSaved: boolean;
  apiIsPending: boolean;
  onAnswerChange: (answer: Answer) => void;
  canUpdateCurrentStep: boolean;
  answer_id_order?: ID[];
}

export interface ExerciseWithQuestionStatesProps extends ExerciseBaseProps {
  questionStates: { [key: ID]: QuestionState };
  /** A callback with the IDs of the answer and question */
  onAnswerChange: (answer: Omit<Answer, 'id'> & { id: number, question_id: number }) => void;
}

export const Exercise = ({
  numberOfQuestions, questionNumber, step, exercise, show_all_feedback, scrollToQuestion, ...props
}: ExerciseWithStepDataProps | ExerciseWithQuestionStatesProps) => {
  const legacyStepRender = 'feedback_html' in step;
  const questionsRef = React.useRef<Array<HTMLDivElement>>([]);
  const container = React.useRef<HTMLDivElement>(null);

  const typesetExercise = React.useCallback(() => {
    if (container.current) {
      typesetMath(container.current);
    }
  }, []);

  React.useEffect(() => {
    const el = scrollToQuestion && questionsRef.current[scrollToQuestion];
    if (el) {
      scrollToElement(el);
    }
  }, [scrollToQuestion, exercise]);

  return <TypesetMathContext.Provider value={typesetExercise}>
    <StyledTaskStepCard
    step={step}
    questionNumber={questionNumber}
    numberOfQuestions={legacyStepRender ? numberOfQuestions : exercise.questions.length}
    rightHeaderChildren={props.showExerciseIcons ?
      <ExerciseIcons exercise={exercise} topicUrl={props.topicUrl} errataUrl={props.errataUrl} /> : null}
    showTotalQuestions={legacyStepRender}
  >
    <div ref={container}>
      <Preamble exercise={exercise} />

      {exercise.questions.map((q, i) => {
        const state = { ...(legacyStepRender ? step : props['questionStates'][q.id]) };
        return (
          <ExerciseQuestion
            {...props}
            {...{...state, available_points: undefined}}
            ref={(el: HTMLDivElement) => questionsRef.current[questionNumber + i] = el}
            exercise_uid={exercise.uid}
            key={q.id}
            question={q}
            questionNumber={questionNumber + i}
            choicesEnabled={state.canAnswer}
            displaySolution={true}
            detailedSolution={state.solution?.content_html}
            show_all_feedback={show_all_feedback}
            tableFeedbackEnabled={show_all_feedback && !legacyStepRender}
            canUpdateCurrentStep={
              // misleading prop name, we want to show a continue button for completed questions
              // that aren't the last question, which requires this prop to be true
              'canUpdateCurrentStep' in props ?
                props.canUpdateCurrentStep : !(i + 1 === exercise.questions.length)
            }
          />
        )
      }
      )}
    </div>
    </StyledTaskStepCard>
  </TypesetMathContext.Provider>;
};
