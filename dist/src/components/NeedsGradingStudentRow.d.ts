import { FreeResponseGradingProps } from './FreeResponseGrading';
import { ID } from '../types';
export interface NeedsGradingStudentData {
    name: string;
    userId: ID;
}
export interface NeedsGradingStudentRowProps {
    student: NeedsGradingStudentData;
    freeResponse?: string;
    questionId: ID;
    maxScore: number;
    score?: number;
    comment?: string;
    onSave?: FreeResponseGradingProps['onSave'];
    disabled?: boolean;
    gradingTimestamp?: string | number;
    expanded?: boolean;
    onToggle?: () => void;
}
export declare const ChevronIcon: import("styled-components").StyledComponent<"span", any, {
    expanded: boolean;
}, never>;
export declare const NeedsGradingStudentRow: ({ student, freeResponse, questionId, maxScore, score, comment, onSave, disabled, gradingTimestamp, expanded: controlledExpanded, onToggle, }: NeedsGradingStudentRowProps) => JSX.Element;
