import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import { typesetMath } from '../helpers/mathjax';
import { TypesetMathContext } from '../hooks/useTypesetMath';
import { NeedsGradingQuestion } from './NeedsGradingQuestion';
const QueueWrapper = styled.div `
  display: flex;
  flex-direction: column;
`;
const EmptyState = styled.div `
  padding: 4rem 0;
  text-align: center;
  font-size: calc(1.6rem * var(--content-text-scale));
  color: ${colors.palette.neutralThin};
`;
const StyledGradingNotice = styled.div `
  background-color: ${colors.notice.background};
  border: 1px solid ${colors.notice.border};
  color: ${colors.notice.text};
  padding: 1rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  font-size: calc(1.4rem * var(--content-text-scale));
`;
export const GradingNotice = () => (_jsxs(StyledGradingNotice, { role: "note", "aria-label": "Grading note", "data-test-id": "grading-notice", children: [_jsx("strong", { children: "NOTE:" }), ' ', "Once an item is manually graded, the student can no longer update their answers. We ", _jsx("strong", { children: "strongly recommend" }), " waiting until the due date has passed before grading submissions."] }));
export const NeedsGradingQueue = ({ questions, }) => {
    const container = React.useRef(null);
    const typesetQueue = React.useCallback(() => {
        if (container.current)
            typesetMath(container.current);
    }, []);
    return (_jsx(TypesetMathContext.Provider, { value: typesetQueue, children: _jsx(QueueWrapper, { ref: container, children: questions.length === 0
                ? _jsx(EmptyState, { children: "All responses have been graded." })
                : _jsxs(_Fragment, { children: [_jsx(GradingNotice, {}), questions.map((questionProps, i) => (_jsx(NeedsGradingQuestion, { ...questionProps }, i)))] }) }) }));
};
//# sourceMappingURL=NeedsGradingQueue.js.map