import { TaskStepCard, TaskStepCardProps } from './Card';
import { Default as ExerciseQuestion } from './ExerciseQuestion.stories';

const props: TaskStepCardProps = {
  step: {
    type: 'exercise' as const,
    task: {
      is_deleted: false,
      type: 'homework' as const
    },
    uid: '1234@1',
    id: '1',
    available_points: '1.0',
  },
  questionNumber: 1,
  numberOfQuestions: 1
};

export const Default = () => <TaskStepCard {...props}><ExerciseQuestion /></TaskStepCard>;
