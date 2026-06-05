import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import { typesetMath } from '../helpers/mathjax';
import { TypesetMathContext } from '../hooks/useTypesetMath';
import { NeedsGradingQuestion, NeedsGradingQuestionProps } from './NeedsGradingQuestion';

export interface NeedsGradingQueueProps {
  questions: NeedsGradingQuestionProps[];
}

const QueueWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmptyState = styled.div`
  padding: 4rem 0;
  text-align: center;
  font-size: calc(1.6rem * var(--content-text-scale));
  color: ${colors.palette.neutralThin};
`;

export const NeedsGradingQueue = ({
  questions,
}: NeedsGradingQueueProps) => {
  const container = React.useRef<HTMLDivElement>(null);
  const typesetQueue = React.useCallback(() => {
    if (container.current) typesetMath(container.current);
  }, []);

  return (
    <TypesetMathContext.Provider value={typesetQueue}>
      <QueueWrapper ref={container}>
        {questions.length === 0
          ? <EmptyState>All responses have been graded.</EmptyState>
          : questions.map((questionProps, i) => (
            <NeedsGradingQuestion key={i} {...questionProps} />
          ))
        }
      </QueueWrapper>
    </TypesetMathContext.Provider>
  );
};
