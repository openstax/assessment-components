import { TaskStepCard, TaskStepCardProps } from './Card';
import { Default as ExerciseQuestion } from './ExerciseQuestion.stories';

const props: TaskStepCardProps = {
  step: {
    type: 'exercise' as const,
    task: {
      is_deleted: false,
      type: 'homework' as const
    },
    uid: '1234@4',
    id: 1,
    available_points: '1.0',
    preview: 'Preview content',
    is_completed: false,
    answer_id_order: ['1', '2'],
    answer_id: '1',
    free_response: '',
    last_completed_at: new Date(),
    feedback_html: '',
    correct_answer_id: '',
    correct_answer_feedback_html: '',
    external_url: '',
    can_be_updated: false,
    is_feedback_available: true,
    exercise_id: '1',
    attempts_remaining: 0,
    attempt_number: 1,
    incorrectAnswerId: 0
  },
  questionNumber: 1,
  numberOfQuestions: 1
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
