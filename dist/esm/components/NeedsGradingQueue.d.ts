/// <reference types="react" />
import { NeedsGradingQuestionProps } from './NeedsGradingQuestion';
export interface NeedsGradingQueueProps {
    questions: NeedsGradingQuestionProps[];
}
export declare const GradingNotice: () => JSX.Element;
export declare const NeedsGradingQueue: ({ questions, }: NeedsGradingQueueProps) => JSX.Element;
