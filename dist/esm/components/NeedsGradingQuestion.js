import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import { NeedsGradingStudentRow, ChevronIcon } from './NeedsGradingStudentRow';
import { Content } from './Content';
const QuestionCard = styled.div `
  border: 1px solid ${colors.palette.neutralLight};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 2rem;
`;
const QuestionHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  background-color: ${colors.card.header.background};
`;
const QuestionHeaderLeft = styled.button `
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-align: left;
`;
const QuestionTitle = styled.span `
  font-size: calc(1.6rem * var(--content-text-scale));
  font-weight: 600;
  color: ${colors.palette.neutralDarker};
  margin: 0;
`;
const GradedCount = styled.span `
  font-size: calc(1.3rem * var(--content-text-scale));
  font-weight: 600;
  color: ${colors.palette.white};
  background-color: ${colors.palette.darkGray};
  border-radius: 5px;
  padding: 0.2rem 0.8rem;
`;
const QuestionIdSeparator = styled.span `
  font-weight: normal;
  margin: 0 0.4rem;
`;
const QuestionIdText = styled.span `
  font-weight: normal;
  font-size: calc(1.4rem * var(--content-text-scale));
`;
const ExpandToggleButton = styled.button `
  background: none;
  border: none;
  cursor: pointer;
  font-size: calc(1.2rem * var(--content-text-scale));
  color: ${colors.palette.blue};
  padding: 0;
  text-decoration: underline;

  &:hover {
    color: ${colors.palette.mediumBlue};
  }
`;
const QuestionStemRow = styled.div `
  padding: 1.6rem 1.6rem 0;
  background-color: ${colors.card.body.background};
`;
const QuestionStemText = styled.div `
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${colors.palette.neutralDarker};
`;
const ExpandToggleRow = styled.div `
  padding: 0.8rem 1.6rem 1.2rem;
  border-bottom: 1px solid ${colors.palette.neutralLight};
  background-color: ${colors.card.body.background};
`;
const StudentList = styled.div `
  background-color: ${colors.card.body.background};
`;
const initExpandedSet = (students) => {
    const ids = new Set();
    students.forEach(s => {
        if (s.score === undefined) {
            ids.add(String(s.student.userId));
        }
    });
    return ids;
};
export const NeedsGradingQuestion = ({ questionNumber, questionStemHtml, students, questionId, }) => {
    const [cardExpanded, setCardExpanded] = useState(true);
    const [expandedIds, setExpandedIds] = useState(() => initExpandedSet(students));
    const gradedCount = students.filter(s => s.score !== undefined).length;
    const allExpanded = students.every(s => expandedIds.has(String(s.student.userId)));
    const handleExpandToggleAll = (e) => {
        e.stopPropagation();
        if (allExpanded) {
            setExpandedIds(new Set());
        }
        else {
            setExpandedIds(new Set(students.map(s => String(s.student.userId))));
        }
    };
    const handleStudentToggle = (userId) => {
        setExpandedIds(prev => {
            const next = new Set(prev);
            if (next.has(userId)) {
                next.delete(userId);
            }
            else {
                next.add(userId);
            }
            return next;
        });
    };
    return (_jsxs(QuestionCard, { children: [_jsxs(QuestionHeader, { children: [_jsxs(QuestionHeaderLeft, { type: "button", onClick: () => setCardExpanded(prev => !prev), "aria-expanded": cardExpanded, children: [_jsx(ChevronIcon, { expanded: cardExpanded }), _jsxs(QuestionTitle, { children: ["Question ", questionNumber, questionId && (_jsxs(_Fragment, { children: [_jsx(QuestionIdSeparator, { children: "|" }), _jsxs(QuestionIdText, { children: ["ID: ", questionId] })] }))] })] }), _jsxs(GradedCount, { children: [gradedCount, "/", students.length, " Graded"] })] }), _jsxs("div", { style: { display: cardExpanded ? undefined : 'none' }, children: [_jsx(QuestionStemRow, { children: _jsx(QuestionStemText, { children: _jsx(Content, { html: questionStemHtml, block: true }) }) }), _jsx(ExpandToggleRow, { children: _jsx(ExpandToggleButton, { type: "button", onClick: handleExpandToggleAll, children: allExpanded ? 'Collapse all answers' : 'Expand all answers' }) }), _jsx(StudentList, { children: students.map((studentProps) => {
                            const uid = String(studentProps.student.userId);
                            return (_jsx(NeedsGradingStudentRow, { ...studentProps, expanded: expandedIds.has(uid), onToggle: () => handleStudentToggle(uid) }, uid));
                        }) })] })] }));
};
//# sourceMappingURL=NeedsGradingQuestion.js.map