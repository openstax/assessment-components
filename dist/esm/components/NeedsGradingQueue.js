import { jsx as _jsx } from "react/jsx-runtime";
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
export const NeedsGradingQueue = ({ questions, }) => {
    const container = React.useRef(null);
    const typesetQueue = React.useCallback(() => {
        if (container.current)
            typesetMath(container.current);
    }, []);
    return (_jsx(TypesetMathContext.Provider, { value: typesetQueue, children: _jsx(QueueWrapper, { ref: container, children: questions.length === 0
                ? _jsx(EmptyState, { children: "All responses have been graded." })
                : questions.map((questionProps, i) => (_jsx(NeedsGradingQuestion, { ...questionProps }, i))) }) }));
};
//# sourceMappingURL=NeedsGradingQueue.js.map