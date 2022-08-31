import { FreeResponseInput, FreeResponseProps } from './FreeResponseInput';

const updateValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  props.defaultValue = event.target.value
};

const leftInfoComponent = (
  <div>
      <span className="last-submitted">Last submitted on July 26 at 4:00 pm</span>
  </div>
  );

const props: FreeResponseProps = {
  readOnly: false,
  wordLimit: 5,
  defaultValue: '',
  cancelHandler: () => null,
  saveHandler: () => null,
  onChange: updateValue,
  questionNumber: 1,
  question: {
    id: '1',
    stem_html: 'Is this a question?',
    collaborator_solutions: [],
    formats: [],
    stimulus_html: '',
    answers: [{
      id: '1',
      correctness: undefined,
      content_html: 'True',
    }, {
      id: '2',
      correctness: undefined,
      content_html: 'False',
    }],
    is_answer_order_important: false,
  },
  availablePoints: '1.0' as const,
  pointsChildren: <></>,
  isSubmitDisabled: false,
  textHasChanged: true,
  canRevert: true,
  submitBtnLabel: 'Next',
};

export const Default = () => <FreeResponseInput {...props} />;
export const OverWordLimit = () => <FreeResponseInput {...props} textHasChanged={true}  defaultValue='response goes over the word limit' />;
export const SubmittedDate = () => <FreeResponseInput {...props} infoRowChildren={leftInfoComponent} />;

