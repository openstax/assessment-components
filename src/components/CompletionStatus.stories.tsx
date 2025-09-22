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
  handleRetry: () => {console.log('retry')},
  scoreSoFar: '5/15',
  savedScore: '10/15'
} 
export const Default = () => <CompletionStatus {...props} />;
export const PartialComplete = () => <CompletionStatus {...props} numberCompleted={3} />
export const Complete = () => <CompletionStatus {...props} numberCompleted={15} />
export const unlimitedComplete = () => <CompletionStatus {...unlimitedProps} numberCompleted={15}/>;
export const unlimitedPartial = () => <CompletionStatus {...unlimitedProps} numberCompleted={5} />
export const unlimitedCompletedNoScore = () => <CompletionStatus {...unlimitedProps} scoreSoFar={undefined} savedScore={undefined} numberCompleted={15}/>;
export const unlimitedPartialNoProgress = () => <CompletionStatus {...unlimitedProps} savedScore='0/15'  scoreSoFar='0/15' numberCompleted={0}/>;

