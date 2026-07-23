import { jsx as _jsx } from "react/jsx-runtime";
import { Exercise } from "./Exercise";
import styled from "styled-components";
const StyledExercise = styled(Exercise) `
  .step-card-footer {
    display: none;
  }
  ${({ showCorrectAnswer }) => !showCorrectAnswer && `
    .answer-answer {
      font-weight: normal;
    }
  `}
`;
export const ExercisePreview = ({ exercise, selected, showAllFeedback = false, showChosenAnswer = false, showCorrectAnswer = false, labelAnswers = false, showScoring = false, overlayChildren, questionStates, onGradingSave, }) => {
    const hideAnswerFeedback = (exercise) => {
        exercise.questions.map(question => question.answers.map(a => {
            a.feedback_html = '';
            a.correctness = showCorrectAnswer ? a.correctness : undefined;
        }));
        return exercise;
    };
    const exercisePreviewProps = (exercise) => {
        const formatAnswerData = (questions) => questions.map((q) => {
            var _a, _b, _c, _d, _e;
            // Note: will only work as long as both ExerciseData and QuestionState use the same type for the IDs
            const questionState = (questionStates !== null && questionStates !== void 0 ? questionStates : {})[q.id];
            return {
                id: q.id,
                answer_id: (_b = (_a = (showChosenAnswer ? questionState : undefined)) === null || _a === void 0 ? void 0 : _a.answer_id) !== null && _b !== void 0 ? _b : '',
                correct_answer_id: (((_c = q.answers.find((a) => a.correctness === '1.0')) === null || _c === void 0 ? void 0 : _c.id) || ''),
                content_html: showAllFeedback &&
                    ((_e = (_d = q.collaborator_solutions) === null || _d === void 0 ? void 0 : _d.find(solution => solution.solution_type === 'detailed')) === null || _e === void 0 ? void 0 : _e.content_html),
            };
        });
        const questionStateFields = formatAnswerData(exercise.questions).reduce((acc, answer) => {
            const { id, answer_id, correct_answer_id, content_html } = answer;
            const questionState = (questionStates !== null && questionStates !== void 0 ? questionStates : {})[id];
            return {
                ...acc,
                [id]: {
                    answer_id,
                    correct_answer_id,
                    is_completed: showCorrectAnswer,
                    canAnswer: !showCorrectAnswer,
                    solution: {
                        content_html,
                    },
                    score: questionState === null || questionState === void 0 ? void 0 : questionState.score,
                    free_response: (questionState === null || questionState === void 0 ? void 0 : questionState.free_response) || '',
                    feedback_html: (questionState === null || questionState === void 0 ? void 0 : questionState.feedback_html) || '',
                    gradingTimestamp: questionState === null || questionState === void 0 ? void 0 : questionState.gradingTimestamp,
                }
            };
        }, {});
        const step = {
            id: 1,
            uid: exercise.uid,
            available_points: '1.0',
        };
        return {
            canAnswer: true,
            needsSaved: true,
            hasMultipleAttempts: false,
            hasUnlimitedAttempts: false,
            onAnswerChange: () => undefined,
            onAnswerSave: () => undefined,
            onNextStep: () => undefined,
            apiIsPending: false,
            canUpdateCurrentStep: false,
            step: step,
            questionNumber: exercise.number,
            numberOfQuestions: exercise.questions.length,
            questionStates: questionStateFields,
            labelAnswers,
            show_all_feedback: showAllFeedback,
        };
    };
    return (_jsx(StyledExercise, { exercise: showAllFeedback ? exercise : hideAnswerFeedback(exercise), className: `preview-card ${selected ? 'is-selected' : ''}`, previewMode: true, showScoring: showScoring, overlayChildren: overlayChildren, ...exercisePreviewProps(exercise), onGradingSave: onGradingSave }));
};
//# sourceMappingURL=ExercisePreview.js.map