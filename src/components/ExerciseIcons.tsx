import styled from 'styled-components';
import { colors, mixins } from '../../src/theme';
import { ExerciseData } from '../../src/types';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ExplanationType = 'multiple-choice' | 'two-step';

const TypeExplanations: { [key in ExplanationType]: string } = {
  'multiple-choice': 'Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts.',
  'two-step': 'In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. \
Recalling the answer to a question from memory helps you to retain things longer.',
}

const ItemWrapper = styled.div`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${colors.palette.mediumBlue};}
    .popover { display: flex; }
  }
`;

const InnerWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Popover = styled.div`
  ${mixins.popover}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.2rem;
  line-height: 1.8rem;
`;

interface PopoverItemProps {
  text: string;
  children: JSX.Element;
  wrapperProps?: {
    as: keyof JSX.IntrinsicElements;
    href?: string;
    target?: string;
  }
}

const PopoverItem = (props: PopoverItemProps) => (
  <ItemWrapper {...props.wrapperProps}>
    <InnerWrapper>
      {props.children}
      <Popover className="popover right">
        <div className="arrow"></div>
        <div className="content">{props.text}</div>
      </Popover>
    </InnerWrapper>
  </ItemWrapper>
);

const PopoverItemsWrapper = styled.div`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${colors.palette.darkGray};
  height: 1em;
`;

export const ExerciseIcons = ({ exercise, topicUrl, errataUrl }:
  { exercise: ExerciseData, topicUrl?: string, errataUrl?: string }) => {
  const items = [];
  const isMultipleChoice = exercise.questions.every((q) => q.answers.length > 0);
  let typeExplanation;

  if (isMultipleChoice && exercise.questions.find((q) => q.formats.includes('free-response'))) {
    typeExplanation = TypeExplanations['two-step'];
  } else if (isMultipleChoice) {
    typeExplanation = TypeExplanations['multiple-choice'];
  }

  if (topicUrl) {
    items.push(
      <PopoverItem key='topic' text='View topic in textbook' wrapperProps={{ as: 'a', href: topicUrl, target: '_blank' }}>
        <StyledFontAwesomeIcon icon={faBookOpen}></StyledFontAwesomeIcon>
      </PopoverItem>
    );
  }

  if (errataUrl) {
    items.push(
      <PopoverItem key='errata' text='Suggest a correction' wrapperProps={{ as: 'a', href: errataUrl, target: '_blank' }}>
        <StyledFontAwesomeIcon icon={faTriangleExclamation}></StyledFontAwesomeIcon>
      </PopoverItem>
    )
  }

  if (typeExplanation) {
    items.push(
      <PopoverItem key='type' text={typeExplanation}>
        <StyledFontAwesomeIcon icon={faCircleInfo} height='16px' width='16px'></StyledFontAwesomeIcon>
      </PopoverItem>
    )
  }

  return (
    <PopoverItemsWrapper>
      {items}
    </PopoverItemsWrapper>
  );
};
