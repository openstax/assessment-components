import { useState, useRef, useLayoutEffect } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../theme';
import { FreeResponseGrading, FreeResponseGradingProps } from './FreeResponseGrading';
import { ID } from '../types';

export interface NeedsGradingStudentData {
  name: string;
  userId: ID;
}

export interface NeedsGradingStudentRowProps {
  student: NeedsGradingStudentData;
  freeResponse?: string;
  questionId: ID;
  maxScore: number;
  score?: number;
  comment?: string;
  onSave?: FreeResponseGradingProps['onSave'];
  disabled?: boolean;
  gradingTimestamp?: string | number;
  expanded?: boolean;
  onToggle?: () => void;
}

const COLLAPSED_HEIGHT = 16.8; // rem

const RowWrapper = styled.div`
  border-bottom: 1px solid ${colors.palette.neutralLight};

  &:last-child {
    border-bottom: none;
  }
`;

const RowHeader = styled.button`
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

const StudentName = styled.span`
  font-weight: 600;
  flex: 1;
`;

const PointsLabel = styled.span`
  font-size: calc(1.3rem * var(--content-text-scale));
  color: ${colors.palette.neutralThin};
  white-space: nowrap;

  strong {
    font-weight: 700;
    color: ${colors.palette.neutralDarker};
  }
`;

export const ChevronIcon = styled.span<{ expanded: boolean }>`
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

const RowBody = styled.div`
  display: flex;
  align-items: flex-start;
  border-top: 1px solid ${colors.palette.neutralLighter};
`;

const AnswerColumn = styled.div`
  flex: 1;
  padding: 1.6rem;
  min-width: 0;
`;

const AnswerText = styled.div<{ expanded: boolean; isOverflowing: boolean }>`
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

  ${({ expanded, isOverflowing }) =>
    !expanded && isOverflowing
      ? css`
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `
      : ''}
`;

const UnansweredText = styled.p`
  font-size: calc(1.6rem * var(--content-text-scale));
  color: ${colors.palette.neutralThin};
  margin: 0 0 1rem 0;
`;

const ReadMoreButton = styled.button`
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

const GradeDisplay = styled.div`
  margin-top: 1.6rem;
`;

const ReviewScoreText = styled.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: bold;
  color: ${colors.palette.neutralDarker};
`;

const FeedbackText = styled.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${colors.palette.neutralDarker};
  white-space: pre-wrap;
  margin-top: 0.4rem;

  .feedback-label {
    font-weight: bold;
  }
`;

export const NeedsGradingStudentRow = ({
  student,
  freeResponse,
  questionId,
  maxScore,
  score,
  comment,
  onSave,
  disabled,
  gradingTimestamp,
  expanded: controlledExpanded,
  onToggle,
}: NeedsGradingStudentRowProps) => {
  const isControlled = controlledExpanded !== undefined;
  const isGraded = score !== undefined;
  const [internalExpanded, setInternalExpanded] = useState(!isGraded);

  const [textExpanded, setTextExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const expanded = isControlled ? controlledExpanded : internalExpanded;

  useLayoutEffect(() => {
    if (textRef.current) {
      const overflows = !textExpanded && textRef.current.scrollHeight > COLLAPSED_HEIGHT * 10; // px
      setIsOverflowing(overflows);
    }
  }, [freeResponse, textExpanded, expanded]);

  const handleToggle = () => {
    if (isControlled) {
      onToggle?.();
    } else {
      setInternalExpanded(prev => !prev);
    }
  };

  return (
    <RowWrapper>
      <RowHeader onClick={handleToggle} aria-expanded={expanded}>
        <ChevronIcon expanded={expanded} />
        <StudentName>{student.name}</StudentName>
        <PointsLabel>
          <strong>Points:</strong>{' '}
          {isGraded ? score : '--'} out of {maxScore}
        </PointsLabel>
      </RowHeader>

      {expanded && (
        <RowBody>
          <AnswerColumn>
            {freeResponse
              ? (
                <>
                  <AnswerText
                    ref={textRef}
                    expanded={textExpanded}
                    isOverflowing={isOverflowing}
                  >
                    {freeResponse}
                  </AnswerText>
                  {(isOverflowing || textExpanded) && (
                    <ReadMoreButton onClick={() => setTextExpanded(prev => !prev)}>
                      {textExpanded ? 'read less' : 'read more'}
                    </ReadMoreButton>
                  )}
                </>
              )
              : <UnansweredText>Unanswered</UnansweredText>
            }

            {isGraded && (
              <GradeDisplay>
                <ReviewScoreText>Score: {score}/{maxScore}</ReviewScoreText>
                {comment && (
                  <FeedbackText>
                    <span className="feedback-label">Comment:</span>{' '}{comment}
                  </FeedbackText>
                )}
              </GradeDisplay>
            )}
          </AnswerColumn>

          <FreeResponseGrading
            questionId={questionId}
            maxScore={maxScore}
            score={score}
            comment={comment}
            onSave={onSave}
            disabled={disabled}
            gradingTimestamp={gradingTimestamp}
          />
        </RowBody>
      )}
    </RowWrapper>
  );
};
