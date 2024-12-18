import { MouseEventHandler, ReactNode } from 'react';
import { AvailablePoints, ExerciseQuestionData } from 'src/types';
export interface FreeResponseProps {
    readOnly: boolean;
    wordLimit: number;
    infoRowChildren?: ReactNode;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    cancelHandler: MouseEventHandler<HTMLButtonElement>;
    saveHandler: MouseEventHandler<HTMLButtonElement>;
    defaultValue: string;
    isSubmitDisabled: boolean;
    questionNumber: number;
    question: ExerciseQuestionData;
    availablePoints?: AvailablePoints;
    textHasChanged: boolean;
    submitBtnLabel: string;
}
export declare const FreeResponseTextArea: import("styled-components").StyledComponent<"textarea", any, {
    isOverWordLimit: boolean;
} & FreeResponseProps, never>;
export declare const FreeResponseInput: {
    (props: FreeResponseProps): JSX.Element;
    displayName: string;
};
