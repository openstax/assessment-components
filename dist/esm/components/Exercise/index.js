import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import scrollToElement from 'scroll-to-element';
import styled, { createGlobalStyle, css } from 'styled-components';
import { InnerStepCard, OuterStepCard, TaskStepCard } from '../Card';
import { Content } from '../Content';
import { ExerciseQuestion } from '../ExerciseQuestion';
import { FreeResponseInput } from '../FreeResponseInput';
import { typesetMath } from '../../helpers/mathjax';
import { ExerciseToolbar, StyledToolbar } from '../ExerciseToolbar';
import { breakpoints } from '../../theme';
import { ExerciseHeaderIcons } from '../ExerciseHeaderIcons';
import { TypesetMathContext } from '../../hooks/useTypesetMath';
import { exerciseStyles } from './styles';
const StyledTaskStepCard = styled(TaskStepCard) `
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(2.8rem * var(--content-text-scale));
`;
const GlobalStyle = createGlobalStyle `
  :root {
    --content-text-scale: 1;
  }
`;
const ToolbarWrapper = styled.div `
  ${props => props.desktopToolbarEnabled && css `
    ${breakpoints.desktop `
      ${StyledTaskStepCard} {
        margin-left: 6.8rem;
      }
    `}
    ${breakpoints.tablet `
      ${StyledTaskStepCard} {
        margin-left: 4.8rem;
      }
    `}
    ${breakpoints.mobile `
      ${StyledTaskStepCard} {
        margin-left: 0;
      }
    `}
  `}

  ${props => props.mobileToolbarEnabled && css `
    ${breakpoints.mobile `
      ${StyledToolbar} + ${OuterStepCard} ${InnerStepCard} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `}
  `}
`;
const TaskStepCardWithToolbar = (props) => (_jsxs(ToolbarWrapper, { desktopToolbarEnabled: props.desktopToolbarEnabled, mobileToolbarEnabled: props.mobileToolbarEnabled, children: [_jsx(ExerciseToolbar, { icons: props.exerciseIcons }), _jsx(StyledTaskStepCard, { overlayChildren: props.overlayChildren, ...props })] }));
const Preamble = ({ exercise }) => {
    return (_jsxs(_Fragment, { children: [exercise.context &&
                _jsx(Content, { className: "step-card-body exercise-context", block: true, html: exercise.context }), exercise.stimulus_html &&
                _jsx(Content, { className: "step-card-body exercise-stimulus", block: true, html: exercise.stimulus_html })] }));
};
export const Exercise = styled(({ numberOfQuestions, questionNumber, step, exercise, show_all_feedback, scrollToQuestion, exerciseIcons, overlayChildren, labelAnswers = true, previewMode = false, showScoring = false, onGradingSave, ...props }) => {
    const legacyStepRender = 'feedback_html' in step;
    const questionsRef = React.useRef([]);
    const container = React.useRef(null);
    const [questionStates, setQuestionStates] = React.useState('questionStates' in props ? props['questionStates'] : {});
    const typesetExercise = React.useCallback(() => {
        if (container.current) {
            typesetMath(container.current);
        }
    }, []);
    React.useEffect(() => {
        const el = scrollToQuestion && questionsRef.current[scrollToQuestion];
        if (el) {
            scrollToElement(el);
        }
    }, [scrollToQuestion, exercise]);
    const desktopToolbarEnabled = Object.values(exerciseIcons || {}).some(({ location }) => { var _a; return (_a = location === null || location === void 0 ? void 0 : location.toolbar) === null || _a === void 0 ? void 0 : _a.desktop; });
    const mobileToolbarEnabled = Object.values(exerciseIcons || {}).some(({ location }) => { var _a; return (_a = location === null || location === void 0 ? void 0 : location.toolbar) === null || _a === void 0 ? void 0 : _a.mobile; });
    const propsQuestionStates = 'questionStates' in props ? props['questionStates'] : undefined;
    React.useEffect(() => {
        if (propsQuestionStates) {
            setQuestionStates(propsQuestionStates);
        }
    }, [propsQuestionStates]);
    const { totalScoring, isGraded } = React.useMemo(() => {
        var _a;
        const totalScoring = { score: 0, maxScore: 0 };
        let isGraded = true;
        for (const q of exercise.questions) {
            const score = (_a = questionStates[q.id]) === null || _a === void 0 ? void 0 : _a.score;
            if ((score === null || score === void 0 ? void 0 : score.raw) === undefined || !(score === null || score === void 0 ? void 0 : score.max)) {
                isGraded = false;
                break;
            }
            else {
                totalScoring.score += score.raw;
                totalScoring.maxScore += score.max;
            }
        }
        return { totalScoring, isGraded };
    }, [exercise.questions, questionStates]);
    return _jsxs(TypesetMathContext.Provider, { value: typesetExercise, children: [_jsx(GlobalStyle, {}), _jsx(TaskStepCardWithToolbar, { step: step, questionNumber: questionNumber, numberOfQuestions: legacyStepRender ? numberOfQuestions : exercise.questions.length, rightHeaderChildren: exerciseIcons ? _jsx(ExerciseHeaderIcons, { exercise: exercise, icons: exerciseIcons }) : null, showTotalQuestions: legacyStepRender, desktopToolbarEnabled: desktopToolbarEnabled, mobileToolbarEnabled: mobileToolbarEnabled, ...(exerciseIcons ? { exerciseIcons: exerciseIcons } : null), className: props.className, showScoring: showScoring, isGraded: isGraded, totalScoring: legacyStepRender && 'scoring' in step ? step.scoring : totalScoring, overlayChildren: overlayChildren, children: _jsxs("div", { ref: container, children: [_jsx(Preamble, { exercise: exercise }), exercise.questions.map((q, i) => {
                            var _a, _b, _c;
                            const state = { ...(legacyStepRender ? step : props['questionStates'][q.id]) };
                            // Check if this is a free response question (not combined with multiple-choice)
                            const isFreeResponse = q.formats.length === 1 && q.formats.includes('free-response');
                            if (isFreeResponse) {
                                const responseSizeMap = { short: 30, medium: 100, long: 1000 };
                                const responseSize = (_b = (_a = exercise.tags) === null || _a === void 0 ? void 0 : _a.find(t => t.startsWith('response-size:'))) === null || _b === void 0 ? void 0 : _b.split(':')[1];
                                const wordLimit = (responseSize && responseSizeMap[responseSize]) || 100;
                                return (_createElement(FreeResponseInput, { ...props, ...state, available_points: undefined, ref: (el) => questionsRef.current[questionNumber + i] = el, key: q.id, question: q, questionNumber: questionNumber + i, wordLimit: wordLimit, cancelHandler: () => undefined, previewMode: previewMode, onGradingSave: previewMode ? onGradingSave : undefined }));
                            }
                            return (_createElement(ExerciseQuestion, { ...props, ...state, available_points: undefined, ref: (el) => questionsRef.current[questionNumber + i] = el, exercise_uid: exercise.uid, key: q.id, question: q, questionNumber: questionNumber + i, choicesEnabled: state.canAnswer, displaySolution: true, detailedSolution: (_c = state.solution) === null || _c === void 0 ? void 0 : _c.content_html, show_all_feedback: show_all_feedback, labelAnswers: labelAnswers, tableFeedbackEnabled: show_all_feedback && !legacyStepRender, canUpdateCurrentStep: 
                                // misleading prop name, we want to show a continue button for completed questions
                                // that aren't the last question, which requires this prop to be true
                                'canUpdateCurrentStep' in props ?
                                    props.canUpdateCurrentStep : !(i + 1 === exercise.questions.length), previewMode: previewMode }));
                        })] }) })] });
}) `
  ${exerciseStyles}
`;
//# sourceMappingURL=index.js.map