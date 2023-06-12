import { CompletionStatus, CompletionStatusProps } from './CompletionStatus';

const props: CompletionStatusProps = {
  numberOfQuestions: 15,
  numberCompleted: 0,
  handleClick: () => {console.log('click')}
};

export const Default = () => <CompletionStatus {...props} />;
export const PartialComplete = () => <CompletionStatus {...props} numberCompleted={3} />
export const Complete = () => <CompletionStatus {...props} numberCompleted={15} />

