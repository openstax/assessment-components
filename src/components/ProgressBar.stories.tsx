import ProgressBar, { ProgressBarItemVariant, ProgressBarProps } from './ProgressBar';

const variants: ProgressBarItemVariant[] = ['isIncorrect', 'isCorrect', 'isIncorrect', 'isIncorrect', null, null, null, null];

const props: ProgressBarProps = {
  activeIndex: 0,
  goToStep: (index: number) => console.log(index),
  steps: variants.map((variant) => ({variant})),
}

export const Default = () => <ProgressBar {...props} steps={props.steps.map((step) => step = {variant: null})} />;
export const InProgress = () => <ProgressBar {...props} activeIndex={4} />;
export const NavigatedBack = () => <ProgressBar {...props} activeIndex={2} />;