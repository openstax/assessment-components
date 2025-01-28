import React, { useCallback } from "react";
import { ExerciseData, ExerciseQuestionData, StepBase } from "src/types";
import { IncludeRemoveQuestion } from "./IncludeRemoveQuestion";
import { Exercise } from "./Exercise";

export interface ExercisePreviewProps {
    exercise: ExerciseData;
    selectedQuestions: string[];
    setSelectedQuestions?: React.Dispatch<React.SetStateAction<string[]>>;
    enableOverlay?: boolean;
}

/** 
 * An Exercise version with less interaction with card and grants an Overlay with Include/Remove component
 */ 
export const ExercisePreview = (
    {
        exercise,
        selectedQuestions,
        setSelectedQuestions,
        enableOverlay = false,
    }: ExercisePreviewProps) => {

    const exercisePreviewProps = (exercise: ExerciseData) => {
        const formatAnswerData = (questions: ExerciseQuestionData[]) => questions.map((q) => (
            { id: q.id, correct_answer_id: (q.answers.find((a) => a.correctness === '1.0')?.id || '') }));

        const questionStateFields = {
            available_points: '1.0',
            is_completed: true,
            answer_id: '1',
            free_response: '',
            feedback_html: '',
            correct_answer_feedback_html: '',
            attempts_remaining: 0,
            attempt_number: 1,
            incorrectAnswerId: 0
        }

        const questionStates = formatAnswerData(exercise.questions).reduce((acc, answer) => {
            const { id, correct_answer_id } = answer;
            return { ...acc, [id]: { ...questionStateFields, correct_answer_id } };
        }, {});

        const step: StepBase = {
            id: 1,
            uid: exercise.uid,
            available_points: '1.0',
        };

        return {
            canAnswer: true,
            needsSaved: true,
            hasMultipleAttempts: false,
            onAnswerChange: () => undefined,
            onAnswerSave: () => undefined,
            onNextStep: () => undefined,
            apiIsPending: false,
            canUpdateCurrentStep: false,
            step: step,
            questionNumber: exercise.number as number,
            numberOfQuestions: exercise.questions.length,
            questionStates: questionStates,
            show_all_feedback: false, // Hide all feedback
        };
    };

    const includeQuestionHandler = React.useCallback(() => {
        setSelectedQuestions?.(previous => previous.concat(exercise.uid));
    }, [exercise, setSelectedQuestions]);

    const removeQuestionHandler = useCallback(() => {
        setSelectedQuestions?.(previous => previous.filter((id) => id !== exercise.uid));
    }, [exercise, setSelectedQuestions]);

    const includeRemoveQuestionComponent = React.useMemo(() =>
        <IncludeRemoveQuestion
            buttonVariant={selectedQuestions.includes(exercise.uid) ? 'remove' : 'include'}
            onIncludeHandler={includeQuestionHandler}
            onRemoveHandler={removeQuestionHandler}
        />
        , [selectedQuestions, exercise, includeQuestionHandler, removeQuestionHandler]);

    return (
        <Exercise
            exercise={exercise}
            className={selectedQuestions.includes(exercise.uid) ? 'preview-card included-card' : 'preview-card'}
            {
            ...(enableOverlay
                ? {
                    overlayChildren: includeRemoveQuestionComponent,
                }
                : {})
            }
            {...exercisePreviewProps(exercise)}
        />
    );
};