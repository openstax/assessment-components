"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise = void 0;
const react_1 = require("react");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_2 = __importDefault(require("react"));
const scroll_to_element_1 = __importDefault(require("scroll-to-element"));
const styled_components_1 = __importStar(require("styled-components"));
const Card_1 = require("../Card");
const Content_1 = require("../Content");
const ExerciseQuestion_1 = require("../ExerciseQuestion");
const FreeResponseInput_1 = require("../FreeResponseInput");
const mathjax_1 = require("../../helpers/mathjax");
const ExerciseToolbar_1 = require("../ExerciseToolbar");
const theme_1 = require("../../theme");
const ExerciseHeaderIcons_1 = require("../ExerciseHeaderIcons");
const useTypesetMath_1 = require("../../hooks/useTypesetMath");
const styles_1 = require("./styles");
const StyledTaskStepCard = (0, styled_components_1.default)(Card_1.TaskStepCard) `
  font-size: calc(1.8rem * var(--content-text-scale));
  line-height: calc(2.8rem * var(--content-text-scale));
`;
const GlobalStyle = (0, styled_components_1.createGlobalStyle) `
  :root {
    --content-text-scale: 1;
  }
`;
const ToolbarWrapper = styled_components_1.default.div `
  ${props => props.desktopToolbarEnabled && (0, styled_components_1.css) `
    ${theme_1.breakpoints.desktop `
      ${StyledTaskStepCard} {
        margin-left: 6.8rem;
      }
    `}
    ${theme_1.breakpoints.tablet `
      ${StyledTaskStepCard} {
        margin-left: 4.8rem;
      }
    `}
    ${theme_1.breakpoints.mobile `
      ${StyledTaskStepCard} {
        margin-left: 0;
      }
    `}
  `}

  ${props => props.mobileToolbarEnabled && (0, styled_components_1.css) `
    ${theme_1.breakpoints.mobile `
      ${ExerciseToolbar_1.StyledToolbar} + ${Card_1.OuterStepCard} ${Card_1.InnerStepCard} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `}
  `}
`;
const TaskStepCardWithToolbar = (props) => ((0, jsx_runtime_1.jsxs)(ToolbarWrapper, { desktopToolbarEnabled: props.desktopToolbarEnabled, mobileToolbarEnabled: props.mobileToolbarEnabled, children: [(0, jsx_runtime_1.jsx)(ExerciseToolbar_1.ExerciseToolbar, { icons: props.exerciseIcons }), (0, jsx_runtime_1.jsx)(StyledTaskStepCard, { overlayChildren: props.overlayChildren, ...props })] }));
const Preamble = ({ exercise }) => {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [exercise.context &&
                (0, jsx_runtime_1.jsx)(Content_1.Content, { className: "step-card-body exercise-context", block: true, html: exercise.context }), exercise.stimulus_html &&
                (0, jsx_runtime_1.jsx)(Content_1.Content, { className: "step-card-body exercise-stimulus", block: true, html: exercise.stimulus_html })] }));
};
exports.Exercise = (0, styled_components_1.default)(({ numberOfQuestions, questionNumber, step, exercise, show_all_feedback, scrollToQuestion, exerciseIcons, overlayChildren, labelAnswers = true, previewMode = false, showScoring = false, onGradingSave, ...props }) => {
    const legacyStepRender = 'feedback_html' in step;
    const questionsRef = react_2.default.useRef([]);
    const container = react_2.default.useRef(null);
    const [questionStates, setQuestionStates] = react_2.default.useState('questionStates' in props ? props['questionStates'] : {});
    const typesetExercise = react_2.default.useCallback(() => {
        if (container.current) {
            (0, mathjax_1.typesetMath)(container.current);
        }
    }, []);
    react_2.default.useEffect(() => {
        const el = scrollToQuestion && questionsRef.current[scrollToQuestion];
        if (el) {
            (0, scroll_to_element_1.default)(el);
        }
    }, [scrollToQuestion, exercise]);
    const desktopToolbarEnabled = Object.values(exerciseIcons || {}).some(({ location }) => { var _a; return (_a = location === null || location === void 0 ? void 0 : location.toolbar) === null || _a === void 0 ? void 0 : _a.desktop; });
    const mobileToolbarEnabled = Object.values(exerciseIcons || {}).some(({ location }) => { var _a; return (_a = location === null || location === void 0 ? void 0 : location.toolbar) === null || _a === void 0 ? void 0 : _a.mobile; });
    const propsQuestionStates = 'questionStates' in props ? props['questionStates'] : undefined;
    react_2.default.useEffect(() => {
        if (propsQuestionStates) {
            setQuestionStates(propsQuestionStates);
        }
    }, [propsQuestionStates]);
    const { totalScoring, isGraded } = react_2.default.useMemo(() => {
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
    return (0, jsx_runtime_1.jsxs)(useTypesetMath_1.TypesetMathContext.Provider, { value: typesetExercise, children: [(0, jsx_runtime_1.jsx)(GlobalStyle, {}), (0, jsx_runtime_1.jsx)(TaskStepCardWithToolbar, { step: step, questionNumber: questionNumber, numberOfQuestions: legacyStepRender ? numberOfQuestions : exercise.questions.length, rightHeaderChildren: exerciseIcons ? (0, jsx_runtime_1.jsx)(ExerciseHeaderIcons_1.ExerciseHeaderIcons, { exercise: exercise, icons: exerciseIcons }) : null, showTotalQuestions: legacyStepRender, desktopToolbarEnabled: desktopToolbarEnabled, mobileToolbarEnabled: mobileToolbarEnabled, ...(exerciseIcons ? { exerciseIcons: exerciseIcons } : null), className: props.className, showScoring: showScoring, isGraded: isGraded, totalScoring: legacyStepRender && 'scoring' in step ? step.scoring : totalScoring, overlayChildren: overlayChildren, children: (0, jsx_runtime_1.jsxs)("div", { ref: container, children: [(0, jsx_runtime_1.jsx)(Preamble, { exercise: exercise }), exercise.questions.map((q, i) => {
                            var _a, _b, _c;
                            const state = { ...(legacyStepRender ? step : props['questionStates'][q.id]) };
                            // Check if this is a free response question (not combined with multiple-choice)
                            const isFreeResponse = q.formats.length === 1 && q.formats.includes('free-response');
                            if (isFreeResponse) {
                                const responseSizeMap = { short: 30, medium: 100, long: 1000 };
                                const responseSize = (_b = (_a = exercise.tags) === null || _a === void 0 ? void 0 : _a.find(t => t.startsWith('response-size:'))) === null || _b === void 0 ? void 0 : _b.split(':')[1];
                                const wordLimit = (responseSize && responseSizeMap[responseSize]) || 100;
                                return ((0, react_1.createElement)(FreeResponseInput_1.FreeResponseInput, { ...props, ...state, available_points: undefined, ref: (el) => questionsRef.current[questionNumber + i] = el, key: q.id, question: q, questionNumber: questionNumber + i, wordLimit: wordLimit, cancelHandler: () => undefined, previewMode: previewMode, onGradingSave: previewMode ? onGradingSave : undefined }));
                            }
                            return ((0, react_1.createElement)(ExerciseQuestion_1.ExerciseQuestion, { ...props, ...state, available_points: undefined, ref: (el) => questionsRef.current[questionNumber + i] = el, exercise_uid: exercise.uid, key: q.id, question: q, questionNumber: questionNumber + i, choicesEnabled: state.canAnswer, displaySolution: true, detailedSolution: (_c = state.solution) === null || _c === void 0 ? void 0 : _c.content_html, show_all_feedback: show_all_feedback, labelAnswers: labelAnswers, tableFeedbackEnabled: show_all_feedback && !legacyStepRender, canUpdateCurrentStep: 
                                // misleading prop name, we want to show a continue button for completed questions
                                // that aren't the last question, which requires this prop to be true
                                'canUpdateCurrentStep' in props ?
                                    props.canUpdateCurrentStep : !(i + 1 === exercise.questions.length), previewMode: previewMode }));
                        })] }) })] });
}) `
  ${styles_1.exerciseStyles}
`;
//# sourceMappingURL=index.js.map