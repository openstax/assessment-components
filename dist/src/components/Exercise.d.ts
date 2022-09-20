import { Answer, ExerciseData, ID, QuestionState, StepBase, StepWithData } from '../../src/types';
interface ExerciseBaseProps {
    step: StepBase;
    exercise: ExerciseData;
    numberOfQuestions: number;
    questionNumber: number;
    answer_id_order?: ID[];
    hasMultipleAttempts: boolean;
    onAnswerSave: () => void;
    onNextStep: () => void;
    apiIsPending: boolean;
    show_all_feedback?: boolean;
    canUpdateCurrentStep: boolean;
}
export interface ExerciseWithStepDataProps extends ExerciseBaseProps {
    step: StepWithData;
    canAnswer: boolean;
    needsSaved: boolean;
    onAnswerChange: (answer: Answer) => void;
}
export interface ExerciseWithQuestionStatesProps extends ExerciseBaseProps {
    questionStates: {
        [key: ID]: QuestionState;
    };
    onAnswerChange: (answer: Omit<Answer, 'id'> & {
        id: number;
        question_id: number;
    }) => void;
}
export declare const Exercise: ({ numberOfQuestions, questionNumber, step, exercise, show_all_feedback, ...props }: ExerciseWithStepDataProps | ExerciseWithQuestionStatesProps) => JSX.Element;
export {};
