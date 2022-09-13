import ProgressBar, { ProgressBarItemVariant, ProgressBarProps } from './ProgressBar';

const variants: ProgressBarItemVariant[] = ['isIncorrect', 'isCorrect', 'isIncorrect', 'isIncorrect', null, null, null, null];

const props: ProgressBarProps = {
  activeIndex: 0,
  // tslint:disable-next-line: no-empty-pattern
  goToStep: (index: number, {}) => console.log(index),
  steps: variants.map((variant) => ({variant})),
}

export const Default = () => <ProgressBar {...props} steps={props.steps.map((step) => Object.assign({}, step, {variant: null}))} />;
export const InProgress = () => <ProgressBar {...props} activeIndex={4} />;
export const Review = () => <ProgressBar {...props} activeIndex={2} />;
