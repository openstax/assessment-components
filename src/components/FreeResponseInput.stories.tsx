import { FreeResponseInput, FreeResponseProps } from './FreeResponseInput';

const updateValue = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  props.defaultValue = event.target.value
};

const props: FreeResponseProps = {
  isErrored: false,
  readOnly: false,
  isDisplayingNudge: false,
  lastSubmitted: '',
  wordLimit: 5,
  submittedComponent: <span className="last-submitted">Last submitted on July 26 at 4:00 pm</span>,
  defaultValue: '',
  onChange: updateValue,
};

export const Default = () => <FreeResponseInput {...props} />;
