import { AvailablePoints, ExerciseData, ID, Step } from 'src/types';
export interface ExerciseProps {
    exercise: ExerciseData;
    step: Step;
    numberOfQuestions: number;
    questionNumber: number;
    canAnswer: boolean;
    needsSaved: boolean;
    answer_id_order?: ID[];
    hasMultipleAttempts: boolean;
    onAnswerChange: () => void;
    onAnswerSave: () => void;
    onNextStep: () => void;
    canUpdateCurrentStep: boolean;
    attempt_number: number;
    apiIsPending: boolean;
    available_points: AvailablePoints;
}
export declare const Exercise: ({ numberOfQuestions, questionNumber, step, exercise, canAnswer, needsSaved, ...props }: ExerciseProps) => JSX.Element;
