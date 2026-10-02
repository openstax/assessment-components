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

const StyledGradingNotice = styled.div`
  background-color: ${colors.notice.background};
  border: 1px solid ${colors.notice.border};
  color: ${colors.notice.text};
  padding: 1rem;
  margin-bottom: 2rem;
  line-height: 1.5;
  font-size: calc(1.4rem * var(--content-text-scale));
`;

export const GradingNotice = () => (
  <StyledGradingNotice role="note" aria-label="Grading note" data-test-id="grading-notice">
    <strong>NOTE:</strong>{' '}
    Once an item is manually graded, the student can no longer update their answers.
    We <strong>strongly recommend</strong> waiting
    until the due date has passed before grading submissions.
  </StyledGradingNotice>
);

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
          : <>
            <GradingNotice />
            {questions.map((questionProps, i) => (
              <NeedsGradingQuestion key={i} {...questionProps} />
            ))}
          </>
        }
      </QueueWrapper>
    </TypesetMathContext.Provider>
  );
};
