import { ReactNode } from 'react';
import { Answer as AnswerType, ID } from '../types';
export interface AnswerProps {
    answer: AnswerType;
    iter: number;
    qid: ID;
    type: 'teacher-review' | 'teacher-preview' | 'student' | 'student-mpp';
    hasCorrectAnswer?: boolean;
    onChangeAnswer?: (answer: AnswerType) => void;
    disabled: boolean;
    answerId?: ID;
    correctAnswerId?: ID | null;
    incorrectAnswerId?: ID;
    onKeyPress?: () => void;
    answered_count?: number;
    correctIncorrectIcon?: ReactNode;
    radioBox?: ReactNode;
    contentRenderer?: JSX.Element;
    show_all_feedback?: boolean;
    tableFeedbackEnabled?: boolean;
}
export declare const Answer: {
    (props: AnswerProps): JSX.Element;
    displayName: string;
};
