import { Question } from '../../src/types';
import { TaskStepCard, TaskStepCardProps } from './Card';
import { ExerciseQuestion } from './ExerciseQuestion';
import data from '../../fixtures/questions.json';

type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

const getQuestionProps = (question: Optional<Question, 'collaborator_solutions' | 'id' | 'stimulus_html' | 'is_answer_order_important'>) => {
  return {
    question: {
      id: question['uid'],
      collaborator_solutions: [],
      stimulus_html: '',
      is_answer_order_important: false,
      ...question
    },
    task: {
      is_deleted: false,
      type: 'homework' as const
    },
    correct_answer_id: '',
    incorrectAnswerId: '',
    hideAnswers: false,
    hidePreambles: false,
    exercise_uid: '',
    displayFormats: false,
    className: '',
    questionNumber: 1,
    displaySolution: false,
    context: '',
    feedback_html: '',
    correct_answer_feedback_html: '',
    onChange: () => null,
    choicesEnabled: true,
    hasMultipleAttempts: false,
    onAnswerChange: () => null,
    onAnswerSave: () => null,
    onNextStep: () => null,
    is_completed: false,
    multiPartGroup: null,
    answerId: '',
    available_points: '1.0' as const,
    attempts_remaining: 2,
    published_comments: '',
    detailedSolution: '',
    canAnswer: true,
    needsSaved: true,
    canUpdateCurrentStep: true,
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

const props = data.map((question) => getQuestionProps(question));

export const Default = () => props.map((questionProps, i) => (
  <TaskStepCard {...cardProps} questionNumber={i + 1} step={{...cardProps.step, uid: questionProps.question.id}}>
    <ExerciseQuestion {...questionProps} />
    </TaskStepCard>
))
