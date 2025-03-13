import { TaskStepCard, TaskStepCardProps } from './Card';
import { Default as ExerciseQuestion } from './ExerciseQuestion.stories';

const props: TaskStepCardProps = {
  step: {
    uid: '1234@4',
    id: 1,
    available_points: '1.0',
    is_completed: false,
    answer_id_order: ['1', '2'],
    answer_id: '1',
    free_response: '',
    feedback_html: '',
    correct_answer_id: '',
    correct_answer_feedback_html: '',
    is_feedback_available: true,
    attempts_remaining: 0,
    attempt_number: 1,
    incorrectAnswerId: 0
  },
  questionNumber: 1,
  numberOfQuestions: 1,
  showTotalQuestions: false,
};

export const Default = () => <TaskStepCard {...props}><ExerciseQuestion /></TaskStepCard>;
export const CustomComponents = () =>
  <TaskStepCard
    {...props}
    leftHeaderChildren={<button>◀</button>}
    rightHeaderChildren={<>Two-step ℹ️ <button>▶</button></>}
    headerTitleChildren="🔒"
  >
    <ExerciseQuestion />
  </TaskStepCard>;
