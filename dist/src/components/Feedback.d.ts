interface FeedbackProps {
    position?: 'top' | 'bottom' | 'left' | 'right';
    children: string;
    className?: string;
    contentRenderer?: JSX.Element;
}
declare const SimpleFeedback: (props: Pick<FeedbackProps, 'children' | 'className' | 'contentRenderer'>) => JSX.Element;
declare const Feedback: (props: FeedbackProps) => JSX.Element;
export { Feedback, SimpleFeedback };
