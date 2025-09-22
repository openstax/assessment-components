import { CompletionStatus, CompletionStatusProps } from './CompletionStatus';

const props: CompletionStatusProps = {
  numberOfQuestions: 15,
  numberCompleted: 0,
  handleClick: () => {console.log('click')}
};

const unlimitedProps: CompletionStatusProps = {
  numberOfQuestions: 15,
  numberCompleted: 0,
  handleClick: () => {console.log('click')},
  handleRetry: () => {console.log('click')},
  scoreSoFar: '5/10',
  savedScore: '7/10'
} 
export const Default = () => <CompletionStatus {...props} />;
export const PartialComplete = () => <CompletionStatus {...props} numberCompleted={3} />
export const Complete = () => <CompletionStatus {...props} numberCompleted={15} />
export const unlimitedComplete = () => <CompletionStatus {...unlimitedProps} numberCompleted={15}/>;
export const unlimitedPartial = () => <CompletionStatus {...unlimitedProps} numberCompleted={3} handleRetry={() => {console.log('Banana')}} />
export const unlimitedCompletedNoScore = () => <CompletionStatus {...unlimitedProps} scoreSoFar={undefined} savedScore={undefined} numberCompleted={15}/>;

