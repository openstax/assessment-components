export interface ExercisePersonData {
    user_id: ID;
    name: string;
}
export interface ExerciseScoringData {
    score?: number;
    maxScore?: number;
}
export interface ExerciseAnswerData {
    id: ID;
    content_html: string;
    correctness?: string;
    feedback_html?: string;
    isCorrect?: boolean;
}
export interface ExerciseTagData {
    id: ID;
    type: string;
    is_visible: boolean;
    data: string;
}
export interface ExerciseQuestionData {
    id: ID;
    is_answer_order_important: boolean;
    stimulus_html: string;
    stem_html: string;
    answers: ExerciseAnswerData[];
    hints?: string[];
    formats: string[];
    combo_choices?: any[];
    collaborator_solutions?: Solution[];
    community_solutions?: Solution[];
}
export interface ExerciseQueryData {
    title?: string;
    exercises: ExerciseData[];
}
export interface ExerciseData {
    tags: string[];
    uuid: string;
    group_uuid: string;
    number: ID;
    version: number;
    uid: string;
    published_at: string;
    authors: ExercisePersonData[];
    copyright_holders: ExercisePersonData[];
    derived_from: any[];
    is_vocab: boolean;
    context?: string;
    stimulus_html: string;
    questions: ExerciseQuestionData[];
    versions: number[];
    solutions_are_public: boolean;
}
export declare type Answer = {
    id: ID;
    question_id: number;
    correctness?: string | null | undefined;
    isCorrect?: boolean;
    content_html: string;
    selected_count?: number;
    feedback_html?: string;
};
export declare type StepBase = {
    /** A Step ID from Tutor or the index from Assessments */
    id: number;
    /** An exercise UID (number@version) */
    uid: string;
    /** The number of available points to display in the header that wraps the exercise question(s). */
    available_points?: AvailablePoints;
};
export declare type StepWithData = StepBase & {
    type?: 'exercise';
    task?: Task;
    preview?: string;
    is_completed: boolean;
    answer_id?: ID;
    answer_id_order?: ID[];
    free_response: string;
    feedback_html: string;
    correct_answer_id: ID;
    correct_answer_feedback_html: string;
    last_completed_at?: Date;
    response_validation?: any;
    external_url?: '';
    formats?: string[];
    can_be_updated?: boolean;
    is_feedback_available?: boolean;
    exercise_id?: ID;
    attempts_remaining?: number;
    attempt_number?: number;
    solution?: Solution;
    incorrectAnswerId?: ID;
    scoring?: ExerciseScoringData;
};
export declare type QuestionState = {
    /** The number of available points to display in the footer for the question. */
    available_points: AvailablePoints;
    /** A boolean that will display the Continue/Next button when true and canAnswer is false */
    is_completed: boolean;
    /** A number ID of the user's selected Answer */
    answer_id?: ID;
    /** An array of Answer IDs that specify the order to display them when hasMultipleAttempts is true. */
    answer_id_order: ID[];
    /** A string of the user's written response, used in two-step/WRM */
    free_response: string;
    /** A string of HTML to display below the incorrect answer */
    feedback_html: string;
    /** An ID of the answer to mark as correct. is_complete must also be true for this to display. */
    correct_answer_id: ID;
    /** A string of HTML to display below the correct answer */
    correct_answer_feedback_html: string;
    response_validation?: any;
    /** A number of the attempts remaining to display when hasMultipleAttempts is true. */
    attempts_remaining: number;
    /** A number of the current attempt. Determines the button text - "Submit" when 0, otherwise "Re-submit". */
    attempt_number: number;
    /** A Solution object that renders the content_html in the footer as "Detailed solution" */
    solution?: Solution;
    /** An ID of the answer to mark as incorrect. Will always display regardless of correct_answer_id and is_completed. */
    incorrectAnswerId: ID;
    /** A boolean that will disable the input controls and turn the Submit/Re-Submit button into Next/Continue when false. */
    canAnswer: boolean;
    /** A boolean that  will enable the Submit/Re-Submit button when this and canAnswer are true. */
    needsSaved: boolean;
    /** A boolean that will change the Submit/Re-Submit button to a disabled "Saving..." button when true */
    apiIsPending: boolean;
    /** An object that contains the current score and maxScore of an answered question */
    scoring?: ExerciseScoringData;
};
export interface Solution {
    images?: any[];
    content_html: string;
    solution_type: string;
}
export declare type Task = {
    is_deleted: boolean;
    type?: 'homework';
};
export declare type AnswerDisplayType = 'teacher-review' | 'teacher-preview' | 'student' | 'student-mpp';
export declare type ID = string | number;
export declare type AvailablePoints = `${number}.${number}`;
