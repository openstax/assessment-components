import { ExerciseData, ID, QuestionState, StepBase, StepWithData } from 'src/types';
interface ExerciseBaseProps {
    step: StepBase;
    exercise: ExerciseData;
    numberOfQuestions: number;
    questionNumber: number;
    canAnswer: boolean;
    needsSaved: boolean;
    answer_id_order?: ID[];
    hasMultipleAttempts: boolean;
    onAnswerChange: () => void;
    onAnswerSave: () => void;
    onNextStep: () => void;
    apiIsPending: boolean;
}
export interface ExerciseWithStepDataProps extends ExerciseBaseProps {
    step: StepWithData;
}
export interface ExerciseWithQuestionStatesProps extends ExerciseBaseProps {
    questionStates: {
        [key: ID]: QuestionState;
    };
}
export declare const Exercise: ({ numberOfQuestions, questionNumber, step, exercise, canAnswer, needsSaved, ...props }: ExerciseWithStepDataProps | ExerciseWithQuestionStatesProps) => JSX.Element;
export {};
