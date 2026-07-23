import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { colors } from '../theme';
import Button from './Button';
import { formatTimestamp } from '../utils';
let instanceCounter = 0;
const GradingContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  border-left: 1px solid ${colors.palette.neutralLighter};
  min-width: 300px;
`;
const FieldGroup = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const Label = styled.label `
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: 600;
  color: ${colors.palette.neutralDarker};
`;
const ScoreRow = styled.div `
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: calc(1.6rem * var(--content-text-scale));
`;
const ScoreInput = styled.input `
  width: 6rem;
  padding: 0.8rem;
  font-size: calc(1.6rem * var(--content-text-scale));
  border: 1px solid ${colors.palette.neutral};
  border-radius: 4px;
  text-align: center;

  &::placeholder {
    color: #6F6F6F;
    text-align: center;
    line-height: normal;
  }

  &:focus {
    outline: none;
    border-color: ${colors.palette.blue};
  }

  &:disabled {
    background-color: ${colors.palette.neutralLighter};
    cursor: not-allowed;
  }
`;
const CommentTextarea = styled.textarea `
  width: 100%;
  min-height: 12rem;
  padding: 1rem;
  font-size: calc(1.4rem * var(--content-text-scale));
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
const ButtonContainer = styled.div `
  display: flex;
`;
const SubmissionInfoText = styled.span `
  font-size: calc(1.2rem * var(--content-text-scale));
  color: ${colors.palette.neutralThin};
`;
export const FreeResponseGrading = ({ questionId, maxScore, score: initialScore, comment: initialComment, onChange, onSave, disabled = false, gradingTimestamp, }) => {
    const id = useRef(null);
    if (id.current === null) {
        id.current = `frg-${instanceCounter++}`;
    }
    const scoreInputId = `${id.current}-score`;
    const commentInputId = `${id.current}-comment`;
    const [score, setScore] = useState((initialScore === null || initialScore === void 0 ? void 0 : initialScore.toString()) || '');
    const [comment, setComment] = useState(initialComment || '');
    const [hasChanges, setHasChanges] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    // Check if initial score and comment exist (meaning it's already been graded)
    const hasExistingGrade = initialScore !== undefined;
    useEffect(() => {
        const scoreNum = parseFloat(score);
        const scoreChanged = !isNaN(scoreNum) && scoreNum !== initialScore;
        const commentChanged = comment !== (initialComment || '');
        setHasChanges(scoreChanged || commentChanged);
    }, [score, comment, initialScore, initialComment]);
    useEffect(() => {
        setScore((initialScore === null || initialScore === void 0 ? void 0 : initialScore.toString()) || '');
        setComment(initialComment || '');
    }, [initialScore, initialComment]);
    useEffect(() => {
        if (onChange && !isNaN(parseFloat(score))) {
            onChange({ score: parseFloat(score), comment });
        }
    }, [score, comment, onChange]);
    const handleScoreChange = (e) => {
        const value = e.target.value;
        setScore(value);
    };
    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };
    const handleSave = async () => {
        const scoreNum = parseFloat(score);
        if (!isNaN(scoreNum) && scoreNum >= 0 && scoreNum <= maxScore && onSave) {
            setIsSaving(true);
            try {
                await onSave(questionId, { score: scoreNum, max: maxScore, comment });
            }
            finally {
                setIsSaving(false);
            }
        }
    };
    const scoreNum = parseFloat(score);
    const isScoreValid = !isNaN(scoreNum) && scoreNum >= 0 && scoreNum <= maxScore;
    const canSave = hasChanges && isScoreValid && !disabled && !isSaving;
    return (_jsxs(GradingContainer, { children: [_jsx(FieldGroup, { children: _jsxs(ScoreRow, { children: [_jsx(Label, { htmlFor: scoreInputId, children: "Points" }), _jsx(ScoreInput, { id: scoreInputId, type: "number", value: score, onChange: handleScoreChange, disabled: disabled || isSaving, min: 0, max: maxScore, step: 1, placeholder: "--", "aria-label": "Score" }), _jsxs("span", { children: ["out of ", maxScore] })] }) }), _jsxs(FieldGroup, { children: [_jsx(Label, { htmlFor: commentInputId, children: "Comment" }), _jsx(CommentTextarea, { id: commentInputId, value: comment, onChange: handleCommentChange, disabled: disabled || isSaving, placeholder: "Enter feedback for the student...", "aria-label": "Comment" })] }), _jsx(ButtonContainer, { children: _jsx(Button, { onClick: handleSave, disabled: !canSave, children: hasExistingGrade ? 'Update' : 'Save' }) }), gradingTimestamp && (_jsxs(SubmissionInfoText, { children: ["Last graded on ", formatTimestamp(gradingTimestamp)] }))] }));
};
//# sourceMappingURL=FreeResponseGrading.js.map