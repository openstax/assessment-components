import React from 'react';
import scrollToElement from 'scroll-to-element';
import styled, { css } from 'styled-components';
import { Answer, ExerciseData, ID, QuestionState, StepBase, StepWithData } from '../../src/types';
import { InnerStepCard, OuterStepCard, TaskStepCard, TaskStepCardProps } from './Card';
import { Content } from './Content';
import { ExerciseQuestion } from './ExerciseQuestion';
import { typesetMath } from '../helpers/mathjax';
import { ExerciseToolbar, StyledToolbar } from './ExerciseToolbar';
import { breakpoints } from '../theme';
import { ExerciseHeaderIcons } from './ExerciseHeaderIcons';
import { TypesetMathContext } from '../hooks/useTypesetMath';

const StyledTaskStepCard = styled(TaskStepCard)`
  font-size: 1.8rem;
  line-height: 2.8rem;
`;

const ToolbarWrapper = styled.div<{
  desktopToolbarEnabled: boolean;
  mobileToolbarEnabled: boolean;
}>`
  ${props => props.desktopToolbarEnabled && css`
    ${breakpoints.desktop`
      ${StyledTaskStepCard} {
        margin-left: 6.8rem;
      }
    `}
    ${breakpoints.tablet`
      ${StyledTaskStepCard} {
        margin-left: 4.8rem;
      }
    `}
    ${breakpoints.mobile`
      ${StyledTaskStepCard} {
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

const TaskStepCardWithToolbar = (props: React.PropsWithChildren<TaskStepCardProps> &
  Pick<ExerciseBaseProps, 'exerciseIcons'> & {
    desktopToolbarEnabled: boolean;
    mobileToolbarEnabled: boolean;
  }
) => <ToolbarWrapper
       desktopToolbarEnabled={props.desktopToolbarEnabled}
       mobileToolbarEnabled={props.mobileToolbarEnabled}
     >
        <ExerciseToolbar icons={props.exerciseIcons} />
    <StyledTaskStepCard {...props} />
  </ToolbarWrapper>;

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

interface ExerciseIconLocation {
  desktop: boolean;
  mobile: boolean;
}

interface ExerciseIcon {
  location?: {
    /**
     * @default {
     *   desktop: true,
     *   mobile: false
     * }
     **/
    header?: ExerciseIconLocation;
    /**
     * @default {
     *   desktop: false,
     *   mobile: true
     * }
     **/
    toolbar?: ExerciseIconLocation;
  }
}

export interface ExerciseIcons {
  /** An object containing a URL for the errata form for this exercise and settings for rendering the icon. */
  errata?: ExerciseIcon & { url: string };
  /** An object containing a URL for textbook content relevant to the exercise and settings for rendering the icon. */
  topic?: ExerciseIcon & { url: string };
  /** An object of settings for rendering the info icon that describes the exercise type (multiple-choice, two-step, etc.) */
  info?: ExerciseIcon;
}

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
  /** An object containing data for how to render the following icons:
   * - An errata icon linking to the errata/feedback form
   * - An info icon describing the exercise type (multiple-choice, two-step, etc.)
   * - A topic icon linking to the relevant textbook location
   */
  exerciseIcons?: ExerciseIcons;
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
  numberOfQuestions, questionNumber, step, exercise, show_all_feedback, scrollToQuestion, exerciseIcons, ...props
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

  const desktopToolbarEnabled = Object.values(exerciseIcons || {}).some(({ location }) => location?.toolbar?.desktop);
  const mobileToolbarEnabled = Object.values(exerciseIcons || {}).some(({ location }) => location?.toolbar?.mobile);

  return <TypesetMathContext.Provider value={typesetExercise}>
    <TaskStepCardWithToolbar
    step={step}
    questionNumber={questionNumber}
    numberOfQuestions={legacyStepRender ? numberOfQuestions : exercise.questions.length}
    rightHeaderChildren={exerciseIcons ? <ExerciseHeaderIcons exercise={exercise} icons={exerciseIcons} /> : null}
    showTotalQuestions={legacyStepRender}
    desktopToolbarEnabled={desktopToolbarEnabled}
    mobileToolbarEnabled={mobileToolbarEnabled}
    {...(exerciseIcons ? { exerciseIcons: exerciseIcons } : null)}
  >
    <div ref={container}>
      <Preamble exercise={exercise} />

      {exercise.questions.map((q, i) => {
        const state = { ...(legacyStepRender ? step : props['questionStates'][q.id]) };
        return (
          <ExerciseQuestion
            {...props}
            {...state}
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
  </TaskStepCardWithToolbar>;
  </TypesetMathContext.Provider>;
};
