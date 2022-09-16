import { AvailablePoints, ID, ExerciseQuestionData, Task } from "../types";
export interface ExerciseQuestionProps {
    task?: Task;
    question: ExerciseQuestionData;
    answer_id_order?: ID[];
    questionNumber: number;
    choicesEnabled: boolean;
    hasMultipleAttempts: boolean;
    onAnswerChange: () => void;
    onAnswerSave: () => void;
    onNextStep: () => void;
    feedback_html: string;
    correct_answer_feedback_html: string;
    is_completed: boolean;
    correct_answer_id: ID;
    incorrectAnswerId: ID;
    answer_id?: ID;
    attempts_remaining: number;
    published_comments?: string;
    detailedSolution?: string;
    canAnswer: boolean;
    needsSaved: boolean;
    canUpdateCurrentStep: boolean;
    attempt_number: number;
    apiIsPending: boolean;
    displaySolution: boolean;
    available_points: AvailablePoints;
    exercise_uid: string;
    free_response?: string;
}
export declare const ExerciseQuestion: (props: ExerciseQuestionProps) => JSX.Element;
