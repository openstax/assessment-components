import { Answer, ExerciseData, ID, QuestionState, StepBase, StepWithData } from '../../src/types';
export interface ExerciseBaseProps {
    step: StepBase;
    exercise: ExerciseData;
    numberOfQuestions: number;
    questionNumber: number;
    answer_id_order?: ID[];
    hasMultipleAttempts: boolean;
    onAnswerSave: (question_id: number) => void;
    onNextStep: () => void;
    show_all_feedback?: boolean;
    scrollToQuestion?: number;
}
export interface ExerciseWithStepDataProps extends ExerciseBaseProps {
    step: StepWithData;
    canAnswer: boolean;
    needsSaved: boolean;
    apiIsPending: boolean;
    onAnswerChange: (answer: Answer) => void;
    canUpdateCurrentStep: boolean;
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
export declare const Exercise: ({ numberOfQuestions, questionNumber, step, exercise, show_all_feedback, scrollToQuestion, ...props }: ExerciseWithStepDataProps | ExerciseWithQuestionStatesProps) => JSX.Element;
