import { ReactNode } from "react";
import { AvailablePoints, Step } from "../types";
export declare const InnerStepCard: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const OuterStepCard: import("styled-components").StyledComponent<"div", any, {}, never>;
interface SharedProps {
    questionNumber: number;
    numberOfQuestions: number;
    leftHeaderChildren?: ReactNode;
    rightHeaderChildren?: ReactNode;
    headerTitleChildren?: ReactNode;
}
export interface StepCardProps extends SharedProps {
    unpadded: boolean;
    className?: string;
    children?: ReactNode;
    stepType: Step['type'];
    availablePoints: AvailablePoints;
    questionId?: string;
    multipartBadge?: ReactNode;
    isHomework: boolean;
}
declare const StepCard: {
    ({ questionNumber, numberOfQuestions, stepType, isHomework, availablePoints, unpadded, className, children, questionId, multipartBadge, leftHeaderChildren, rightHeaderChildren, headerTitleChildren, ...otherProps }: StepCardProps): JSX.Element;
    displayName: string;
};
export interface TaskStepCardProps extends SharedProps {
    className?: string;
    children?: ReactNode;
    step: Step;
    questionNumber: number;
    numberOfQuestions: number;
}
declare const TaskStepCard: {
    ({ step, questionNumber, numberOfQuestions, children, className, ...otherProps }: TaskStepCardProps): JSX.Element;
    displayName: string;
};
export { StepCard, TaskStepCard };
