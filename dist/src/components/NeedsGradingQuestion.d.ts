import { NeedsGradingStudentRowProps } from './NeedsGradingStudentRow';
export interface NeedsGradingQuestionProps {
    questionNumber: number;
    questionStemHtml: string;
    students: Array<Omit<NeedsGradingStudentRowProps, 'expanded' | 'onToggle'>>;
    questionId?: string;
}
export declare const NeedsGradingQuestion: ({ questionNumber, questionStemHtml, students, questionId, }: NeedsGradingQuestionProps) => JSX.Element;
