import { Answer, ExerciseData, ID, QuestionState, StepBase, StepWithData } from '../../src/types';
interface ExerciseBaseProps {
    step: StepBase;
    exercise: ExerciseData;
    numberOfQuestions: number;
    questionNumber: number;
    answer_id_order?: ID[];
    hasMultipleAttempts: boolean;
    onAnswerChange: (answer: Answer & {
        question_id: ID;
    }) => void;
    onAnswerSave: () => void;
    onNextStep: () => void;
    apiIsPending: boolean;
    show_all_feedback?: boolean;
}
export interface ExerciseWithStepDataProps extends ExerciseBaseProps {
    step: StepWithData;
    canAnswer: boolean;
    needsSaved: boolean;
}
export interface ExerciseWithQuestionStatesProps extends ExerciseBaseProps {
    questionStates: {
        [key: ID]: QuestionState;
    };
}
export declare const Exercise: ({ numberOfQuestions, questionNumber, step, exercise, show_all_feedback, ...props }: ExerciseWithStepDataProps | ExerciseWithQuestionStatesProps) => JSX.Element;
export {};
