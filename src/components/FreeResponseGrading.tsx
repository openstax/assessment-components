import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import Button from './Button';
import { ID } from 'src/types';
import { formatTimestamp } from '../utils';

const GradingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-left: 1px solid ${colors.palette.neutralLighter};
  min-width: 300px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${colors.palette.neutralDarker};
`;

const ScoreRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.6rem;
`;

const ScoreInput = styled.input`
  width: 6rem;
  padding: 0.8rem;
  font-size: 1.6rem;
  border: 1px solid ${colors.palette.neutral};
  border-radius: 4px;
  text-align: center;

  &:focus {
    outline: none;
    border-color: ${colors.palette.blue};
  }

  &:disabled {
    background-color: ${colors.palette.neutralLighter};
    cursor: not-allowed;
  }

  /* Remove spinner arrows for a cleaner look if desired */
  /* Uncomment to hide arrows:
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }
  */
`;

const CommentTextarea = styled.textarea`
  width: 100%;
  min-height: 12rem;
  padding: 1rem;
  font-size: 1.4rem;
  font-family: inherit;
  border: 1px solid ${colors.palette.neutral};
  border-radius: 4px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${colors.palette.blue};
  }

  &:disabled {
    background-color: ${colors.palette.neutralLighter};
    cursor: not-allowed;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

export interface FreeResponseGradingProps {
  questionId: ID;
  maxScore: number;
  score?: number;
  comment?: string;
  onChange?: (data: { score: number; comment: string }) => void;
  onSave?: (questionId: ID, data: { score: number; max: number; comment: string }) => void;
  disabled?: boolean;
  gradingTimestamp?: string | number;
}

const SubmissionInfoText = styled.span`
  font-size: 1.2rem;
  color: ${colors.palette.neutralThin};
`;

export const FreeResponseGrading: React.FC<FreeResponseGradingProps> = ({
  questionId,
  maxScore,
  score: initialScore,
  comment: initialComment,
  onChange,
  onSave,
  disabled = false,
  gradingTimestamp,
}) => {
  const [score, setScore] = useState<string>(initialScore?.toString() || '');
  const [comment, setComment] = useState<string>(initialComment || '');
  const [hasChanges, setHasChanges] = useState(false);

  // Check if initial score and comment exist (meaning it's already been graded)
  const hasExistingGrade = initialScore !== undefined;

  useEffect(() => {
    const scoreNum = parseFloat(score);
    const scoreChanged = !isNaN(scoreNum) && scoreNum !== initialScore;
    const commentChanged = comment !== (initialComment || '');
    setHasChanges(scoreChanged || commentChanged);
  }, [score, comment, initialScore, initialComment]);

  useEffect(() => {
    if (onChange && !isNaN(parseFloat(score))) {
      onChange({ score: parseFloat(score), comment });
    }
  }, [score, comment, onChange]);

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setScore(value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSave = () => {
    const scoreNum = parseFloat(score);
    if (!isNaN(scoreNum) && scoreNum >= 0 && scoreNum <= maxScore && onSave) {
      onSave(questionId, { score: scoreNum, max: maxScore, comment });
    }
  };

  const scoreNum = parseFloat(score);
  const isScoreValid = !isNaN(scoreNum) && scoreNum >= 0 && scoreNum <= maxScore;
  const canSave = hasChanges && isScoreValid && !disabled;

  return (
    <GradingContainer>
      <FieldGroup>
        <ScoreRow>
        <Label htmlFor="score-input">Points</Label>
          <ScoreInput
            id="score-input"
            type="number"
            value={score}
            onChange={handleScoreChange}
            disabled={disabled}
            min={0}
            max={maxScore}
            step={1}
            placeholder="0"
            aria-label="Score"
          />
          <span>out of {maxScore}</span>
        </ScoreRow>
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="comment-input">Comment</Label>
        <CommentTextarea
          id="comment-input"
          value={comment}
          onChange={handleCommentChange}
          disabled={disabled}
          placeholder="Enter feedback for the student..."
          aria-label="Comment"
        />
      </FieldGroup>

      <ButtonContainer>
        <Button
          onClick={handleSave}
          disabled={!canSave}
        >
          {hasExistingGrade ? 'Update' : 'Save'}
        </Button>
      </ButtonContainer>
      {gradingTimestamp && (
        <SubmissionInfoText>Last graded on {formatTimestamp(gradingTimestamp)}</SubmissionInfoText>
      )}
    </GradingContainer>
  );
};
