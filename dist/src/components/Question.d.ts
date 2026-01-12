import { ID, ExerciseQuestionData, Task } from 'src/types';
import React, { ReactNode } from 'react';
export interface QuestionProps {
    question: ExerciseQuestionData;
    answer_id?: ID;
    task?: Task | null;
    correct_answer_id: ID | null;
    incorrectAnswerId: ID;
    hideAnswers: boolean;
    hidePreambles?: boolean;
    exercise_uid?: string;
    displayFormats: boolean;
    className: string;
    questionNumber: number;
    displaySolution: boolean;
    context?: string;
    correct_answer_feedback_html?: string;
    contentRenderer?: JSX.Element;
    feedback_html: string;
    onChange: () => void;
    labelAnswers?: boolean;
    show_all_feedback?: boolean;
    tableFeedbackEnabled?: boolean;
    children?: ReactNode;
    answerIdOrder?: ID[];
    choicesEnabled?: boolean;
    previewMode?: boolean;
    rightSideSlot?: React.ReactNode;
}
export declare const Question: React.ForwardRefExoticComponent<QuestionProps & React.RefAttributes<HTMLDivElement>>;
interface QuestionHtmlProps {
    html?: string;
    type: string;
    hidden: QuestionProps['hidePreambles'];
    questionNumber?: QuestionProps['questionNumber'];
}
export declare const QuestionHtml: (props: QuestionHtmlProps) => JSX.Element | null;
export {};
