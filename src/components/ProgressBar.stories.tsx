import ProgressBar, { ProgressBarItemVariant } from './ProgressBar';

const goToStep = (index: number) => {
  console.log(index);
}

const steps: {variant: ProgressBarItemVariant}[] = [
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
]; 

export const Default = () => <ProgressBar steps={steps.map((i) => i = {variant: null})} activeIndex={0} goToStep={goToStep} />;
export const InProgress = () => <ProgressBar steps={steps} activeIndex={4} goToStep={goToStep} />;
