import classnames from 'classnames';
import styled from 'styled-components';
import { mixins } from '../theme';
import { Content } from './Content';

interface FeedbackProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: string;
  className?: string;
  contentRenderer?: JSX.Element;
  id: string;
}

// aria-label is ignored on the generic `.arrow` div, so the label lives in real
// hidden text instead; it identifies the feedback when it is announced or read.
const HiddenLabel = styled.span`
  ${mixins.visuallyHidden()}
`;

const SimpleFeedback = (props: Pick<FeedbackProps, 'children' | 'className' | 'contentRenderer'>) => (
  <aside>
    <Content
      component={props.contentRenderer}
      className={classnames('question-feedback-content', 'has-html', props.className)}
      html={props.children}
      block={true} />
  </aside>
);

const Feedback = ({ id, ...props }: FeedbackProps) => {
  const position = props.position || 'bottom';
  const wrapperClasses = classnames('question-feedback', position);

  return (
    <aside id={id} className={wrapperClasses}>
      <div className="arrow" aria-hidden="true" />
      <HiddenLabel>Answer feedback:</HiddenLabel>
      <SimpleFeedback {...props}>
        {props.children}
      </SimpleFeedback>
    </aside>
  );
};

export { Feedback, SimpleFeedback };
