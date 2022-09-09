import ProgressBar, { ProgressBarProps } from './ProgressBar';

const props: ProgressBarProps = {
  activeIndex: 0,
  goToStep: (index: number) => console.log(index),
  steps: [
    {
      variant: 'isIncorrect',
    },
    {
      variant: 'isCorrect',
    },
    {
      variant: 'isIncorrect',
    },
    {
      variant: 'isIncorrect',
    },
    {
      variant: null,
    },
    {
      variant: null,
    },
    {
      variant: null,
    },
    {
      variant: null,
    }
  ],
}

export const Default = () => <ProgressBar {...props} steps={props.steps.map((step) => step = {variant: null})} />;
export const InProgress = () => <ProgressBar {...props} activeIndex={4} />;
export const NavigatedBack = () => <ProgressBar {...props} activeIndex={2} />;
