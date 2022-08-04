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
  },
};

export const Default = () => <FreeResponseInput {...props} />;
export const OverWordLimit = () => <FreeResponseInput {...props} defaultValue='response goes over the word limit' />;
export const HasLeftComponent = () => <FreeResponseInput {...props} leftInfoComponent={leftInfoComponent} />;
