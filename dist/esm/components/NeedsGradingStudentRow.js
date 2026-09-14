import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef, useLayoutEffect } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../theme';
import { FreeResponseGrading } from './FreeResponseGrading';
const COLLAPSED_HEIGHT = 16.8; // rem
const RowWrapper = styled.div `
  border-bottom: 1px solid ${colors.palette.neutralLight};

  &:last-child {
    border-bottom: none;
  }
`;
const RowHeader = styled.button `
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.2rem 1.6rem;
  background: none;
  border: none;
  cursor: pointer;
  gap: 1rem;
  text-align: left;
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${colors.palette.neutralDarker};

  &:hover {
    background-color: ${colors.palette.neutralLightest};
  }
`;
const StudentName = styled.span `
  font-weight: 600;
  flex: 1;
`;
const PointsLabel = styled.span `
  font-size: calc(1.3rem * var(--content-text-scale));
  color: ${colors.palette.neutralThin};
  white-space: nowrap;

  strong {
    font-weight: 700;
    color: ${colors.palette.neutralDarker};
  }
`;
export const ChevronIcon = styled.span `
  display: inline-block;
  width: 0;
  height: 0;
  flex-shrink: 0;
  ${({ expanded }) => expanded
    ? `
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 6px solid ${colors.palette.neutralDark};
    `
    : `
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 6px solid ${colors.palette.neutralDark};
    `}
`;
const RowBody = styled.div `
  display: flex;
  align-items: flex-start;
  border-top: 1px solid ${colors.palette.neutralLighter};
`;
const AnswerColumn = styled.div `
  flex: 1;
  padding: 1.6rem;
  min-width: 0;
`;
const AnswerText = styled.div `
  border-left: 16px solid ${colors.palette.neutralLighter};
  padding-left: 1.6rem;
  margin: 0 0 1rem 1rem;
  max-height: ${({ expanded }) => (expanded ? 'none' : `${COLLAPSED_HEIGHT}rem`)};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: calc(1.6rem * var(--content-text-scale));
  color: ${colors.palette.neutralDark};
  white-space: pre-wrap;

  ${({ expanded, isOverflowing }) => !expanded && isOverflowing
    ? css `
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `
    : ''}
`;
const UnansweredText = styled.p `
  font-size: calc(1.6rem * var(--content-text-scale));
  color: ${colors.palette.neutralThin};
  margin: 0 0 1rem 0;
`;
const ReadMoreButton = styled.button `
  display: inline;
  background: none;
  border: none;
  color: ${colors.palette.blue};
  padding: 0;
  margin: 0 0 0 1rem;
  cursor: pointer;
  font-size: calc(1.3rem * var(--content-text-scale));
  text-decoration: underline;
  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
`;
const GradeDisplay = styled.div `
  margin-top: 1.6rem;
`;
const ReviewScoreText = styled.div `
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: bold;
  color: ${colors.palette.neutralDarker};
`;
const FeedbackText = styled.div `
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${colors.palette.neutralDarker};
  white-space: pre-wrap;
  margin-top: 0.4rem;

  .feedback-label {
    font-weight: bold;
  }
`;
export const NeedsGradingStudentRow = ({ student, freeResponse, questionId, maxScore, score, comment, onSave, disabled, gradingTimestamp, expanded: controlledExpanded, onToggle, }) => {
    const isControlled = controlledExpanded !== undefined;
    const isGraded = score !== undefined;
    const [internalExpanded, setInternalExpanded] = useState(!isGraded);
    const [textExpanded, setTextExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const textRef = useRef(null);
    const expanded = isControlled ? controlledExpanded : internalExpanded;
    useLayoutEffect(() => {
        if (textRef.current) {
            const overflows = !textExpanded && textRef.current.scrollHeight > COLLAPSED_HEIGHT * 10; // px
            setIsOverflowing(overflows);
        }
    }, [freeResponse, textExpanded, expanded]);
    const handleToggle = () => {
        if (isControlled) {
            onToggle === null || onToggle === void 0 ? void 0 : onToggle();
        }
        else {
            setInternalExpanded(prev => !prev);
        }
    };
    return (_jsxs(RowWrapper, { children: [_jsxs(RowHeader, { type: "button", onClick: handleToggle, "aria-expanded": expanded, children: [_jsx(ChevronIcon, { expanded: expanded }), _jsx(StudentName, { children: student.name }), _jsxs(PointsLabel, { children: [_jsx("strong", { children: "Points:" }), ' ', isGraded ? score : '--', " out of ", maxScore] })] }), _jsxs(RowBody, { style: { display: expanded ? undefined : 'none' }, children: [_jsxs(AnswerColumn, { children: [freeResponse
                                ? (_jsxs(_Fragment, { children: [_jsx(AnswerText, { ref: textRef, expanded: textExpanded, isOverflowing: isOverflowing, children: freeResponse }), (isOverflowing || textExpanded) && (_jsx(ReadMoreButton, { type: "button", onClick: () => setTextExpanded(prev => !prev), children: textExpanded ? 'read less' : 'read more' }))] }))
                                : _jsx(UnansweredText, { children: "Unanswered" }), isGraded && (_jsxs(GradeDisplay, { children: [_jsxs(ReviewScoreText, { children: ["Score: ", score, "/", maxScore] }), comment && (_jsxs(FeedbackText, { children: [_jsx("span", { className: "feedback-label", children: "Comment:" }), ' ', comment] }))] }))] }), _jsx(FreeResponseGrading, { questionId: questionId, maxScore: maxScore, score: score, comment: comment, onSave: onSave, disabled: disabled, gradingTimestamp: gradingTimestamp })] })] }));
};
//# sourceMappingURL=NeedsGradingStudentRow.js.map