import { CompletionStatus, CompletionStatusProps } from './CompletionStatus';

const props: CompletionStatusProps = {
  numberOfQuestions: 15,
  numberCompleted: 0,
  handleNext: () => {console.log('next')},
  handleContinue: () => {console.log('continue')},
};

const unlimitedProps: CompletionStatusProps = {
  numberOfQuestions: 15,
  numberCompleted: 0,
  handleNext: () => {console.log('next')},
  handleContinue: () => {console.log('continue')},
  handleRetry: () => {console.log('retry')},
  score: {
    current: '5/15',
    saved: '10/15'
  }
} 
export const Default = () => <CompletionStatus {...props} />;
export const PartialComplete = () => <CompletionStatus {...props} numberCompleted={3} />
export const Complete = () => <CompletionStatus {...props} numberCompleted={15} />
export const unlimitedComplete = () => <CompletionStatus {...unlimitedProps} numberCompleted={15}/>;
export const unlimitedPartial = () => <CompletionStatus {...unlimitedProps} numberCompleted={5} />
export const unlimitedCompletedNoScore = () => <CompletionStatus {...unlimitedProps} score={undefined} numberCompleted={15}/>;
export const unlimitedPartialNoProgress = () => <CompletionStatus {...unlimitedProps} score={{ current: '0/15', saved: '0/15' }} numberCompleted={0}/>;
export const unlimitedCompleteRetrying = () => <CompletionStatus {...unlimitedProps} score={{ current: '4/15', saved: '4/15' }} numberCompleted={15} isRetrying={true}/>
