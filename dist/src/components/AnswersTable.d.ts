import { AnswerDisplayType, ID, ExerciseQuestionData } from "src/types";
export interface AnswersTableProps {
    question: ExerciseQuestionData;
    type?: AnswerDisplayType;
    answer_id?: ID;
    correct_answer_id?: ID | null;
    incorrectAnswerId?: ID;
    answerIdOrder?: ID[];
    feedback_html: string;
    correct_answer_feedback_html?: string;
    answered_count?: number;
    show_all_feedback?: boolean;
    tableFeedbackEnabled?: boolean;
    onChangeAnswer: () => void;
    hideAnswers: boolean;
    hasCorrectAnswer?: boolean;
    onChangeAttempt?: () => void;
    choicesEnabled?: boolean;
    onKeyPress?: () => void;
    contentRenderer?: JSX.Element;
    instructions?: JSX.Element;
}
export declare const AnswersTable: (props: AnswersTableProps) => JSX.Element | null;
