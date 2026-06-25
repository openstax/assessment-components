import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled, { css } from 'styled-components';
import { breakpoints, colors, mixins } from '../theme';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons/faBookOpen';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons/faTriangleExclamation';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons/faCircleInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const TypeExplanations = {
    'multiple-choice': 'Select the best answer from the given list of distractors. Your instructor may or may not allow multiple attempts.',
    'two-step': 'In a two-step question, OpenStax asks for your own answer first, then gives multiple-choice options to help you assess your learnings. \
Recalling the answer to a question from memory helps you to retain things longer.',
};
const ItemWrapper = styled.div `
  padding: 0.6rem 0.9rem;
  .popover { display: none; }
  &:hover {
    svg path { fill: ${colors.palette.mediumBlue};}
    .popover { display: flex; }
  }
  ${props => !props.desktop && css `
    ${breakpoints.desktop `
      display: none;
    `}
    ${breakpoints.tablet `
      display: none;
    `}
  `}
  ${props => !props.mobile && breakpoints.mobile `
    display: none;
  `}
`;
const InnerWrapper = styled.div `
  position: relative;
  display: flex;
`;
const Popover = styled.div `
  ${mixins.popover}
  top: 3rem;
  width: 20rem;
  position: absolute;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;
const PopoverItem = (props) => (_jsx(ItemWrapper, { ...props.wrapperProps, mobile: props.mobile, desktop: props.desktop, "aria-label": props.text, children: _jsxs(InnerWrapper, { children: [props.children, _jsxs(Popover, { className: "popover right", children: [_jsx("div", { className: "arrow" }), _jsx("div", { className: "content", children: props.text })] })] }) }));
const PopoverItemsWrapper = styled.div `
  max-width: 200px;
  display: flex;
  justify-content: space-between;
`;
const StyledFontAwesomeIcon = styled(FontAwesomeIcon) `
  color: ${colors.palette.darkGray};
  height: 1em;
`;
export const ExerciseHeaderIcons = ({ exercise, icons }) => {
    var _a, _b, _c;
    const defaultHeaderLocation = { desktop: true, mobile: false };
    const items = [];
    const isMultipleChoice = exercise.questions.every((q) => q.answers.length > 0);
    let typeExplanation;
    if (isMultipleChoice && exercise.questions.find((q) => q.formats.includes('free-response'))) {
        typeExplanation = TypeExplanations['two-step'];
    }
    else if (isMultipleChoice) {
        typeExplanation = TypeExplanations['multiple-choice'];
    }
    if (icons.topic) {
        items.push(_jsx(PopoverItem, { text: 'View topic in textbook', wrapperProps: { as: 'a', href: icons.topic.url, target: '_blank' }, ...((_a = icons.topic.location) === null || _a === void 0 ? void 0 : _a.header) || defaultHeaderLocation, children: _jsx(StyledFontAwesomeIcon, { icon: faBookOpen }) }, 'topic'));
    }
    if (icons.errata) {
        items.push(_jsx(PopoverItem, { text: 'Suggest a correction', wrapperProps: { as: 'a', href: icons.errata.url, target: '_blank' }, ...((_b = icons.errata.location) === null || _b === void 0 ? void 0 : _b.header) || defaultHeaderLocation, children: _jsx(StyledFontAwesomeIcon, { icon: faTriangleExclamation }) }, 'errata'));
    }
    if (icons.info && typeExplanation) {
        items.push(_jsx(PopoverItem, { text: typeExplanation, ...((_c = icons.info.location) === null || _c === void 0 ? void 0 : _c.header) || defaultHeaderLocation, children: _jsx(StyledFontAwesomeIcon, { icon: faCircleInfo, height: '16px', width: '16px' }) }, 'type'));
    }
    return (_jsx(PopoverItemsWrapper, { children: items }));
};
//# sourceMappingURL=ExerciseHeaderIcons.js.map