import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import { NeedsGradingQuestion, NeedsGradingQuestionProps } from './NeedsGradingQuestion';

export interface NeedsGradingQueueProps {
  questions: NeedsGradingQuestionProps[];
}

const QueueWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;


const EmptyState = styled.div`
  padding: 4rem 0;
  text-align: center;
  font-size: calc(1.6rem * var(--content-text-scale));
  color: ${colors.palette.neutralThin};
`;

export const NeedsGradingQueue: React.FC<NeedsGradingQueueProps> = ({
  questions,
}) => {
  return (
    <QueueWrapper>
      {questions.length === 0
        ? <EmptyState>All responses have been graded.</EmptyState>
        : questions.map((questionProps, i) => (
          <NeedsGradingQuestion key={i} {...questionProps} />
        ))
      }
    </QueueWrapper>
  );
};
