import { Answer, ExerciseData, ID, QuestionState, StepBase, StepWithData } from '../../src/types';
export interface ExerciseBaseProps {
    /** An object containing a Step ID and Exercise UID */
    step: StepBase;
    /** An exercise object from the Exercises API */
    exercise: ExerciseData;
    numberOfQuestions: number;
    /** The current question index. For multipart questions this is the first question number.  */
    questionNumber: number;
    /** A boolean that enables showing the amount of attempts remaining. */
    hasMultipleAttempts: boolean;
    /** A callback with the question_id when the Submit/Re-submit button is clicked. */
    onAnswerSave: (question_id: number) => void;
    /** A callback with the current question index when the Next/Continue button is clicked. */
    onNextStep: (currentIndex: number) => void;
    /** A boolean that enables always showing every answer feedback_html field. */
    show_all_feedback?: boolean;
    /** The question number to scroll into view when the component renders. */
    scrollToQuestion?: number;
    /** A boolean that enables showing exercise icons in the card header:
     * - An info icon describing the exercise type (multiple-choice, two-step, etc.)
     * - A topic icon linking to the relevant textbook location
     * - An errata icon linking to the errata/feedback form
     */
    showExerciseIcons?: boolean;
    /** A URL for textbook content relevant to the exercise. */
    topicUrl?: string;
    /** A URL for the errata form. */
    errataUrl?: string;
}
export interface ExerciseWithStepDataProps extends ExerciseBaseProps {
    /** A Tutor Step object */
    step: StepWithData;
    canAnswer: boolean;
    needsSaved: boolean;
    apiIsPending: boolean;
    onAnswerChange: (answer: Answer) => void;
    canUpdateCurrentStep: boolean;
    answer_id_order?: ID[];
}
export interface ExerciseWithQuestionStatesProps extends ExerciseBaseProps {
    questionStates: {
        [key: ID]: QuestionState;
    };
    /** A callback with the IDs of the answer and question */
    onAnswerChange: (answer: Omit<Answer, 'id'> & {
        id: number;
        question_id: number;
    }) => void;
}
export declare const Exercise: ({ numberOfQuestions, questionNumber, step, exercise, show_all_feedback, scrollToQuestion, ...props }: ExerciseWithStepDataProps | ExerciseWithQuestionStatesProps) => JSX.Element;