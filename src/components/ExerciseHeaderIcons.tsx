import styled, { css } from 'styled-components';
import { breakpoints, colors, mixins } from '../theme';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ExerciseIconLocation {
  desktop: boolean;
  mobile: boolean;
}

export interface ExerciseIcon {
  location?: {
    /**
     * @default {
     *   desktop: true,
     *   mobile: false
     * }
     **/
    header?: ExerciseIconLocation;
    /**
     * @default {
     *   desktop: false,
     *   mobile: true
     * }
     **/
    toolbar?: ExerciseIconLocation;
  }
}

/**
 * The kind of exercise the info icon explains. New types can be added as they are needed;
 * `free-response` renders no icon, since there is no explanation behind it.
 */
export type ExerciseType = 'multiple-choice' | 'two-step' | 'free-response';

export interface ExerciseIcons {
  /** An object containing a URL for the errata form for this exercise and settings for rendering the icon. */
  errata?: ExerciseIcon & { url: string };
  /** An object containing a URL for textbook content relevant to the exercise and settings for rendering the icon. */
  topic?: ExerciseIcon & { url: string };
  /**
   * Settings for the info icon that describes the exercise type. The explanation copy lives in
   * this library; the caller states which type it is.
   */
  info?: ExerciseIcon & { type?: ExerciseType };
}

const TypeExplanations: { [key in Exclude<ExerciseType, 'free-response'>]: string } = {
  'multiple-choice': 'Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts.',
  'two-step': 'In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. \
Recalling the answer to a question from memory helps you to retain things longer.',
}

const ItemWrapper = styled.div<{ mobile: boolean; desktop: boolean }>`
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${colors.palette.mediumBlue};}
    .popover { display: flex; }
  }
  ${props => !props.desktop && css`
    ${breakpoints.desktop`
      display: none;
    `}
    ${breakpoints.tablet`
      display: none;
    `}
  `}
  ${props => !props.mobile && breakpoints.mobile`
    display: none;
  `}
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
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

interface PopoverItemProps {
  text: string;
  children: JSX.Element;
  wrapperProps?: {
    as: keyof JSX.IntrinsicElements;
    href?: string;
    target?: string;
  },
  mobile: boolean;
  desktop: boolean;
}

const PopoverItem = (props: PopoverItemProps) => (
  <ItemWrapper
    {...props.wrapperProps}
    mobile={props.mobile}
    desktop={props.desktop}
    aria-label={props.text}
  >
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

export const ExerciseHeaderIcons = ({ icons }: { icons: ExerciseIcons }) => {
  const defaultHeaderLocation = { desktop: true, mobile: false };
  const items = [];

  // 'free-response' renders no icon: there is no explanation behind it. It is in the union so a
  // caller can state the type without knowing which types happen to have copy attached.
  const type = icons.info?.type;
  const typeExplanation = type && type !== 'free-response' ? TypeExplanations[type] : undefined;

  if (icons.topic) {
    items.push(
      <PopoverItem
        key='topic'
        text='View topic in textbook'
        wrapperProps={{ as: 'a', href: icons.topic.url, target: '_blank' }}
        {...icons.topic.location?.header || defaultHeaderLocation}
      >
        <StyledFontAwesomeIcon icon={faBookOpen}></StyledFontAwesomeIcon>
      </PopoverItem>
    );
  }

  if (icons.errata) {
    items.push(
      <PopoverItem
        key='errata'
        text='Suggest a correction'
        wrapperProps={{ as: 'a', href: icons.errata.url, target: '_blank' }}
        {...icons.errata.location?.header || defaultHeaderLocation}
      >
        <StyledFontAwesomeIcon icon={faTriangleExclamation}></StyledFontAwesomeIcon>
      </PopoverItem>
    )
  }

  if (icons.info && typeExplanation) {
    items.push(
      <PopoverItem
        key='type'
        text={typeExplanation}
        {...icons.info.location?.header || defaultHeaderLocation}
      >
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
