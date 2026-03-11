export declare const StyledItem: import("styled-components").StyledComponent<"button", any, {
    variant: ProgressBarItemVariant;
    isActive: boolean;
}, never>;
export interface ProgressBarProps<S extends {
    variant: ProgressBarItemVariant;
    hasFeedback?: boolean;
}> {
    steps: S[];
    activeIndex: number | null;
    goToStep: (index: number, step: S) => void;
}
export interface ProgressBarItemProps<S> {
    index: number;
    isActive: boolean;
    step: S;
    goToStep: (index: number, step: S) => void;
}
export declare type ProgressBarItemVariant = 'isCorrect' | 'isIncorrect' | 'isStatus' | 'isIncomplete' | 'isPartialCredit' | null;
export declare const ProgressBarItem: <S extends {
    variant: ProgressBarItemVariant;
    hasFeedback?: boolean | undefined;
}>({ index, isActive, step, goToStep }: ProgressBarItemProps<S>) => JSX.Element;
export declare const ProgressBar: <S extends {
    variant: ProgressBarItemVariant;
    hasFeedback?: boolean | undefined;
}>({ steps, activeIndex, goToStep }: ProgressBarProps<S>) => JSX.Element;
