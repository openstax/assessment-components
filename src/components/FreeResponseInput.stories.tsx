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
};

export const Default = () => <FreeResponseInput {...props} />;
export const OverWordLimit = () => <FreeResponseInput {...props} defaultValue={'response goes over the word limit'} />;
export const Submitted = () => <FreeResponseInput {...props} leftInfoComponent={leftInfoComponent} />;
