import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { countWords, formatTimestamp, numberfyId } from '../utils';
import styled, { css } from 'styled-components';
import { colors, mixins } from '../theme';
import { QuestionHtml } from './Question';
import Button from './Button';
import { StepCardFooter } from './StepCardFooter';
import { FreeResponseGrading } from './FreeResponseGrading';
import ExclamationCircle from '../assets/exclamation-circle';
const StyledFreeResponse = styled.div `
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${mixins.stepCardPadding()}
    padding-bottom: 1rem;
  }
`;
const StyledQuestionStem = styled.div `
  font-size: calc(2rem * var(--content-text-scale));
  line-height: 1.68em;
  position: relative;
`;
const InfoRow = styled.div `
  margin: 8px 0;
  display: flex;
  justify-content: ${props => props.hasChildren ? 'space-between' : 'flex-end'};
  line-height: 1.6rem;

  .word-limit-error-info {
    color: ${colors.palette.danger};
  }

  div > span {
    font-size: calc(1.4rem * var(--content-text-scale));
    line-height: 16px;

    + span {
      margin-left: 1rem;
    }
  }

  .last-submitted + * {
    margin-top: 0.8rem;
  }

  color: ${colors.palette.neutralThin};
`;
export const FreeResponseTextArea = styled.textarea `
  display: block;
  font-family: inherit;
  font-size: calc(1.8rem * var(--content-text-scale));
  width: 100%;
  min-height: 10.5em;
  line-height: 1.5em;
  margin: 2.5rem 0 0 0;
  padding: 0.5em;
  border: 1px solid ${colors.palette.neutral};
  color: ${colors.palette.neutralDarker};
`;
FreeResponseTextArea.displayName = 'OSFreeResponseTextArea';
const COLLAPSED_HEIGHT = 16.8; // rem
const ReviewAnswerLabel = styled.div `
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: 600;
  color: ${colors.palette.neutralThin};
  margin: 2.5rem 0 1rem 0;
`;
const ReviewAnswerText = styled.div `
  border-left: 16px solid ${colors.palette.neutralLighter};
  padding-left: 1.6rem;
  margin: 1rem 0 1rem 1rem;
  max-height: ${({ expanded }) => (expanded ? 'none' : `${COLLAPSED_HEIGHT}rem`)};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: calc(1.8rem * var(--content-text-scale));
  color: ${colors.palette.neutralDark};
  white-space: pre-wrap;

  ${({ expanded, isOverflowing }) => !expanded && isOverflowing
    ? css `
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `
    : ''}
`;
const ReadMoreButton = styled.button `
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
const ReviewScoreText = styled.div `
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: bold;
  color: ${colors.palette.neutralDarker};
`;
const FeedbackText = styled.div `
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${colors.palette.neutralDarker};
  white-space: pre-wrap;

  .feedback-label {
    color: ${colors.palette.neutralDarker};
    font-weight: bold;
  }
`;
const ResponseGradingLayout = styled.div `
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  margin-top: 2.5rem;
`;
const ResponseColumn = styled.div `
  flex: 1;
`;
const UnansweredText = styled.p `
  font-size: calc(1.8rem * var(--content-text-scale));
  color: ${colors.palette.neutralThin};
  margin: 0;
`;
const EditableNotice = styled.div `
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #FFF5E0;
  padding-left: 1rem;
  font-size: calc(1.4rem * var(--content-text-scale));
`;
const CancelButton = styled(Button) `
  background-color: ${colors.palette.darkGray};

  &:hover:not(:disabled) {
    background-color: ${colors.palette.neutral};
  }

  &:active:not(:disabled) {
    background-color: ${colors.palette.neutralDark};
  }
`;
const RevertButton = (props) => (_jsx(CancelButton, { ...props, children: "Cancel" }));
export const FreeResponseInput = (props) => {
    const { is_completed, canAnswer, needsSaved, apiIsPending, free_response, onAnswerChange, onAnswerSave, onNextStep, questionNumber, question, wordLimit, score, feedback_html, submissionTimestamp, cancelHandler, previewMode = false, onGradingSave, gradingTimestamp, } = props;
    // Format score for display
    const scoreDisplay = typeof (score === null || score === void 0 ? void 0 : score.raw) === 'number' && typeof (score === null || score === void 0 ? void 0 : score.max) === 'number'
        ? `${score.raw}/${score.max}`
        : undefined;
    const [expanded, setExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const textRef = useRef(null);
    const [originalSubmittedValue, setOriginalSubmittedValue] = useState(free_response || '');
    // Derive three render states from QuestionState
    const isUpdateMode = is_completed && canAnswer;
    const isPostReview = is_completed && !canAnswer;
    const editableNotice = !previewMode ? (_jsxs(EditableNotice, { children: [_jsx(ExclamationCircle, {}), "You can come back and edit your response until it has been graded."] })) : null;
    // Sync baseline to current free_response whenever there are no unsaved changes
    useLayoutEffect(() => {
        if (isUpdateMode && !needsSaved) {
            setOriginalSubmittedValue(free_response || '');
        }
    }, [needsSaved, isUpdateMode, free_response]);
    const textHasChanged = needsSaved && (free_response || '') !== originalSubmittedValue;
    const wordCount = countWords(free_response || '');
    const isOverWordLimit = wordCount > wordLimit;
    // Check if the review answer text is overflowing
    useLayoutEffect(() => {
        const checkOverflow = () => {
            if (isPostReview && textRef.current) {
                const isTextOverflowing = !expanded && textRef.current.scrollHeight > COLLAPSED_HEIGHT * 10;
                setIsOverflowing(isTextOverflowing);
            }
        };
        checkOverflow();
        // Re-check on window resize
        window.addEventListener('resize', checkOverflow);
        return () => window.removeEventListener('resize', checkOverflow);
    }, [free_response, isPostReview, expanded]);
    const handleChange = (e) => {
        const raw = e.target.value;
        const trimmed = raw.trim();
        let limitedValue = raw;
        if (trimmed) {
            const words = trimmed.split(/\s+/);
            if (words.length > wordLimit) {
                limitedValue = words.slice(0, wordLimit).join(' ');
                e.target.value = limitedValue;
            }
        }
        // Call parent's onAnswerChange with Answer structure
        onAnswerChange({
            id: numberfyId(question.id),
            question_id: numberfyId(question.id),
            type: 'free-response',
            content_html: limitedValue,
            free_response: limitedValue,
            correctness: undefined,
        });
    };
    const [shouldContinue, setShouldContinue] = useState(false);
    useEffect(() => {
        if (shouldContinue && is_completed && !apiIsPending) {
            setShouldContinue(false);
            onNextStep(questionNumber - 1);
        }
    }, [shouldContinue, is_completed, apiIsPending, onNextStep, questionNumber]);
    const handleSave = () => {
        onAnswerSave(numberfyId(question.id));
    };
    const handleSubmit = () => {
        onAnswerSave(numberfyId(question.id));
        setShouldContinue(true);
    };
    const handleNext = () => {
        onNextStep(questionNumber - 1);
    };
    const handleCancel = (e) => {
        onAnswerChange({
            id: numberfyId(question.id),
            question_id: numberfyId(question.id),
            type: 'free-response',
            content_html: originalSubmittedValue,
            free_response: originalSubmittedValue,
            correctness: undefined,
        });
        cancelHandler(e);
    };
    // Post-review state (read-only with "Your answer" and Next button)
    if (isPostReview) {
        return (_jsxs(StyledFreeResponse, { "data-test-id": "student-free-response", children: [_jsxs("div", { className: "step-card-body", children: [_jsx(StyledQuestionStem, { children: question.stem_html &&
                                _jsx(QuestionHtml, { type: "stem", html: question.stem_html, hidden: false }) }), !previewMode && _jsx(ReviewAnswerLabel, { children: "Your answer" }), previewMode && onGradingSave ? (_jsxs(ResponseGradingLayout, { children: [_jsxs(ResponseColumn, { children: [_jsx(ReviewAnswerText, { ref: textRef, expanded: expanded, isOverflowing: isOverflowing, children: free_response || '' }), (isOverflowing || expanded) && (_jsx(ReadMoreButton, { onClick: () => setExpanded(!expanded), children: expanded ? 'read less' : 'read more' })), previewMode && (_jsxs("div", { style: { marginTop: '1.6rem' }, children: [scoreDisplay && _jsxs(ReviewScoreText, { role: "status", children: ["Score: ", scoreDisplay] }), feedback_html && (_jsxs(FeedbackText, { children: [_jsx("span", { className: "feedback-label", children: "Feedback:" }), ' ', _jsx(QuestionHtml, { type: "stem", html: feedback_html, hidden: false })] }))] }))] }), previewMode &&
                                    _jsx(FreeResponseGrading, { questionId: question.id, maxScore: (score === null || score === void 0 ? void 0 : score.max) || 1, score: score === null || score === void 0 ? void 0 : score.raw, comment: feedback_html, onSave: onGradingSave, gradingTimestamp: gradingTimestamp })] })) : (_jsxs(_Fragment, { children: [_jsx(ReviewAnswerText, { ref: textRef, expanded: expanded, isOverflowing: isOverflowing, children: free_response || '' }), (isOverflowing || expanded) && (_jsx(ReadMoreButton, { onClick: () => setExpanded(!expanded), children: expanded ? 'read less' : 'read more' })), previewMode && (_jsxs("div", { style: { marginTop: '1.6rem' }, children: [scoreDisplay && _jsxs(ReviewScoreText, { role: "status", children: ["Score: ", scoreDisplay] }), feedback_html && (_jsxs(FeedbackText, { children: [_jsx("span", { className: "feedback-label", children: "Feedback:" }), ' ', _jsx(QuestionHtml, { type: "stem", html: feedback_html, hidden: false })] }))] }))] }))] }), !previewMode && (_jsx(StepCardFooter, { children: _jsxs("div", { className: 'step-card-footer-inner', children: [_jsxs("div", { children: [scoreDisplay && _jsxs(ReviewScoreText, { role: "status", children: ["Score: ", scoreDisplay] }), feedback_html && (_jsxs(FeedbackText, { children: [_jsx("span", { className: "feedback-label", children: "Feedback:" }), ' ', _jsx(QuestionHtml, { type: "stem", html: feedback_html, hidden: false })] }))] }), _jsx("div", { className: "controls", children: _jsx(Button, { "data-test-id": "next-btn", onClick: handleNext, children: "Next" }) })] }) }))] }));
    }
    // Update mode (user has submitted and can editing)
    if (isUpdateMode) {
        return (_jsxs(StyledFreeResponse, { "data-test-id": "student-free-response", children: [_jsxs("div", { className: "step-card-body", children: [editableNotice, _jsx(StyledQuestionStem, { children: question.stem_html &&
                                _jsx(QuestionHtml, { type: "stem", html: question.stem_html, hidden: false }) }), _jsx(FreeResponseTextArea, { value: free_response || '', onChange: handleChange, "data-test-id": "free-response-box", placeholder: "Enter your response...", "aria-label": "question response text box", disabled: previewMode || apiIsPending }), !previewMode && (_jsxs(InfoRow, { hasChildren: !!submissionTimestamp, children: [submissionTimestamp && _jsx("div", { children: _jsxs("span", { className: "last-submitted", children: ["Last submitted on ", formatTimestamp(submissionTimestamp)] }) }), _jsxs("div", { children: [wordCount >= wordLimit && _jsx("span", { className: "word-limit-error-info", children: "Word limit reached" }), _jsxs("span", { children: [" Remaining words: ", wordLimit - wordCount] })] })] }))] }), !previewMode && (_jsx(StepCardFooter, { className: "step-card-footer", children: _jsxs("div", { className: 'step-card-footer-inner', children: [_jsx("div", {}), _jsxs("div", { className: "controls", children: [_jsx(RevertButton, { disabled: !textHasChanged || apiIsPending, onClick: handleCancel }), _jsx(Button, { "data-test-id": "update-answer-btn", disabled: !textHasChanged || apiIsPending || isOverWordLimit || (free_response || '').trim().length === 0, isWaiting: apiIsPending, waitingText: "Saving...", onClick: handleSave, children: "Update" }), _jsx(Button, { "data-test-id": "next-btn", disabled: apiIsPending || textHasChanged, onClick: handleNext, children: "Next" })] })] }) }))] }));
    }
    // Initial state, not submitted yet
    return (_jsxs(StyledFreeResponse, { "data-test-id": "student-free-response", children: [_jsxs("div", { className: "step-card-body", children: [editableNotice, _jsx(StyledQuestionStem, { children: question.stem_html &&
                            _jsx(QuestionHtml, { type: "stem", html: question.stem_html, hidden: false }) }), previewMode ? (onGradingSave ? (_jsxs(ResponseGradingLayout, { children: [_jsx(ResponseColumn, { children: _jsx(UnansweredText, { children: "Unanswered" }) }), _jsx(FreeResponseGrading, { questionId: question.id, maxScore: (score === null || score === void 0 ? void 0 : score.max) || 1, score: score === null || score === void 0 ? void 0 : score.raw, comment: feedback_html, onSave: onGradingSave, gradingTimestamp: gradingTimestamp })] })) : (_jsx(UnansweredText, { children: "Unanswered" }))) : (_jsx(FreeResponseTextArea, { value: free_response || '', onChange: handleChange, "data-test-id": "free-response-box", placeholder: "Enter your response...", "aria-label": "question response text box", disabled: previewMode || apiIsPending })), !previewMode && (_jsxs(InfoRow, { hasChildren: !!submissionTimestamp, children: [submissionTimestamp && _jsx("div", { children: _jsxs("span", { className: "last-submitted", children: ["Last submitted on ", formatTimestamp(submissionTimestamp)] }) }), _jsxs("div", { children: [wordCount >= wordLimit && _jsx("span", { className: "word-limit-error-info", children: "Word limit reached" }), _jsxs("span", { children: [" Remaining words: ", wordLimit - wordCount] })] })] }))] }), !previewMode && (_jsx(StepCardFooter, { className: "step-card-footer", children: _jsxs("div", { className: 'step-card-footer-inner', children: [_jsx("div", {}), _jsx("div", { className: "controls", children: _jsx(Button, { "data-test-id": "submit-answer-btn", disabled: apiIsPending || shouldContinue || isOverWordLimit || (free_response || '').trim().length === 0, isWaiting: apiIsPending || shouldContinue, waitingText: "Saving...", onClick: handleSubmit, children: "Submit" }) })] }) }))] }));
};
FreeResponseInput.displayName = 'OSFreeResponse';
//# sourceMappingURL=FreeResponseInput.js.map