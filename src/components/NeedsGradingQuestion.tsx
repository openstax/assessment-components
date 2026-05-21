import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import { NeedsGradingStudentRow, NeedsGradingStudentRowProps } from './NeedsGradingStudentRow';

export interface NeedsGradingQuestionProps {
  questionNumber: number;
  questionStemHtml: string;
  students: NeedsGradingStudentRowProps[];
  /** Optional exercise UID displayed next to the question number (e.g. "3065081") */
  questionId?: string;
}

const QuestionCard = styled.div`
  border: 1px solid ${colors.palette.neutralLight};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  background-color: #DBF3F8;
`;

const QuestionHeaderLeft = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-align: left;
`;

const QuestionTitle = styled.h3`
  font-size: calc(1.6rem * var(--content-text-scale));
  font-weight: 600;
  color: ${colors.palette.neutralDarker};
  margin: 0;
`;

const GradedCount = styled.span`
  font-size: calc(1.3rem * var(--content-text-scale));
  font-weight: 600;
  color: ${colors.palette.white};
  background-color: #757575;
  border-radius: 5px;
  padding: 0.2rem 0.8rem;
`;

const ChevronIcon = styled.span<{ expanded: boolean }>`
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
    `
  }
`;

const ExpandToggleButton = styled.button`
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

const QuestionStemRow = styled.div`
  padding: 1.6rem 1.6rem 0;
  background-color: ${colors.card.body.background};
`;

const QuestionStemText = styled.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${colors.palette.neutralDarker};
`;

const ExpandToggleRow = styled.div`
  padding: 0.8rem 1.6rem 1.2rem;
  border-bottom: 1px solid ${colors.palette.neutralLight};
  background-color: ${colors.card.body.background};
`;

const StudentList = styled.div`
  background-color: ${colors.card.body.background};
`;

const initExpandedSet = (students: NeedsGradingStudentRowProps[]): Set<string> => {
  const ids = new Set<string>();
  students.forEach(s => {
    if (s.score === undefined) {
      ids.add(String(s.student.userId));
    }
  });
  return ids;
};

export const NeedsGradingQuestion: React.FC<NeedsGradingQuestionProps> = ({
  questionNumber,
  questionStemHtml,
  students,
  questionId,
}) => {
  const [cardExpanded, setCardExpanded] = useState(true);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => initExpandedSet(students));

  const gradedCount = students.filter(s => s.score !== undefined).length;
  const allExpanded = students.every(s => expandedIds.has(String(s.student.userId)));

  const handleExpandToggleAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (allExpanded) {
      setExpandedIds(new Set());
    } else {
      setExpandedIds(new Set(students.map(s => String(s.student.userId))));
    }
  };

  const handleStudentToggle = (userId: string) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(userId)) {
        next.delete(userId);
      } else {
        next.add(userId);
      }
      return next;
    });
  };

  return (
    <QuestionCard>
      <QuestionHeader>
        <QuestionHeaderLeft
          onClick={() => setCardExpanded(prev => !prev)}
          aria-expanded={cardExpanded}
        >
          <ChevronIcon expanded={cardExpanded} />
          <QuestionTitle>
            Question {questionNumber}
            {questionId && (
              <>
                <span style={{ fontWeight: 'normal', margin: '0 0.4rem' }}>|</span>
                <span style={{ fontWeight: 'normal', fontSize: 'calc(1.4rem * var(--content-text-scale))' }}>
                  ID: {questionId}
                </span>
              </>
            )}
          </QuestionTitle>
        </QuestionHeaderLeft>
        <GradedCount>{gradedCount}/{students.length} Graded</GradedCount>
      </QuestionHeader>

      {cardExpanded && (
        <>
          <QuestionStemRow>
            <QuestionStemText dangerouslySetInnerHTML={{ __html: questionStemHtml }} />
          </QuestionStemRow>
          <ExpandToggleRow>
            <ExpandToggleButton onClick={handleExpandToggleAll}>
              {allExpanded ? 'Collapse all answers' : 'Expand all answers'}
            </ExpandToggleButton>
          </ExpandToggleRow>
          <StudentList>
            {students.map((studentProps) => {
              const uid = String(studentProps.student.userId);
              return (
                <NeedsGradingStudentRow
                  key={uid}
                  {...studentProps}
                  expanded={expandedIds.has(uid)}
                  onToggle={() => handleStudentToggle(uid)}
                />
              );
            })}
          </StudentList>
        </>
      )}
    </QuestionCard>
  );
};
