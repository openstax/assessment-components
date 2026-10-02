import { TaskStepCard, TaskStepCardProps } from './Card';
import { Default as ExerciseQuestion } from './ExerciseQuestion.stories';

const props: TaskStepCardProps = {
  step: {
    uid: '1234@4',
    id: 1,
    available_points: '1.0',
  },
  questionNumber: 1,
  numberOfQuestions: 1,
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
