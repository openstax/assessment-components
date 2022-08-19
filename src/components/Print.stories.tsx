import { Question } from '../../src/types';
import { TaskStepCard, TaskStepCardProps } from './Card';
import { ExerciseQuestion } from './ExerciseQuestion';
import data from '../../exercises.json';
import styled from 'styled-components';

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

const StyledTaskStepCard = styled(TaskStepCard)`
  .step-card-footer {
    display: none;
  }
  break-inside: avoid;

  .separator {
    display: inherit;
  }
`;

const ExerciseWrapper = styled.div`
  break-inside: avoid;
`;

const ExerciseHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: normal;
`;

type ApiQuestion = Optional<Question, 'collaborator_solutions' | 'id' | 'stimulus_html' | 'is_answer_order_important'>;

const getQuestionProps = (question: ApiQuestion) => {
  return {
    question: {
      id: question['uid'],
      collaborator_solutions: [],
      stimulus_html: '',
      is_answer_order_important: false,
      type: 'teacher-preview',
      ...question
    },
    task: {
      is_deleted: false,
      type: 'homework' as const
    },
    correct_answer_id: '1',
    incorrectAnswerId: '',
    hideAnswers: false,
    hidePreambles: false,
    exercise_uid: '',
    displayFormats: false,
    className: '',
    questionNumber: 1,
    displaySolution: true,
    context: '',
    feedback_html: '',
    correct_answer_feedback_html: '',
    onChange: () => null,
    choicesEnabled: true,
    hasMultipleAttempts: false,
    onAnswerChange: () => null,
    onAnswerSave: () => null,
    onNextStep: () => null,
    is_completed: true,
    multiPartGroup: null,
    answerId: '',
    available_points: '1.0' as const,
    attempts_remaining: 2,
    published_comments: '',
    detailedSolution: '',
    canAnswer: false,
    needsSaved: false,
    canUpdateCurrentStep: false,
    attempt_number: 0,
    apiIsPending: false
  }
};

const cardProps: TaskStepCardProps = {
  step: {
    type: 'exercise' as const,
    task: {
      is_deleted: false,
      type: 'homework' as const
    },
    uid: '1234@4',
    id: 1,
    available_points: '1.0',
  },
  questionNumber: 1,
  numberOfQuestions: 1
};

export const Default = () =>
  data.map((exercise, i) => {
    const allProps = exercise.questions.map((question: ApiQuestion) => getQuestionProps(question));
    return (
    <ExerciseWrapper>
      <ExerciseHeading className="exercise-id" key={i}>Exercise ID: {exercise.uid}</ExerciseHeading>
      {allProps.map((questionProps, i) => (
        <StyledTaskStepCard
          {...cardProps}
          questionNumber={i + 1}
          numberOfQuestions={allProps.length}
          step={{...cardProps.step, uid: questionProps.question.id}}
        >
          <ExerciseQuestion {...questionProps} />
        </StyledTaskStepCard>
      ))}
    </ExerciseWrapper>
  )});
