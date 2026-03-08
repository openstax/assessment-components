import { MouseEventHandler } from 'react';
import { ExerciseQuestionData, Answer, ID } from 'src/types';
export interface FreeResponseProps {
    is_completed: boolean;
    canAnswer: boolean;
    apiIsPending: boolean;
    free_response: string;
    onAnswerChange: (answer: Omit<Answer, 'id'> & {
        id: number;
        question_id: number;
    }) => void;
    onAnswerSave: (question_id: number) => void;
    onNextStep: (currentIndex: number) => void;
    questionNumber: number;
    question: ExerciseQuestionData;
    wordLimit: number;
    score?: {
        raw?: number;
        max?: number;
    };
    feedback_html?: string;
    submissionTimestamp?: string | number;
    cancelHandler: MouseEventHandler<HTMLButtonElement>;
    previewMode?: boolean;
    onGradingSave?: (questionId: ID, data: {
        score: number;
        max: number;
        comment: string;
    }) => Promise<void> | void;
    gradingTimestamp?: string | number;
}
export declare const FreeResponseTextArea: import("styled-components").StyledComponent<"textarea", any, {}, never>;
export declare const FreeResponseInput: {
    (props: FreeResponseProps): JSX.Element;
    displayName: string;
};
