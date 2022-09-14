export interface ExercisePersonData {
    user_id: ID;
    name: string;
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
    formats: ExerciseFormat[];
    collaborator_solutions?: CollaboratorSolution[];
}
export interface ExerciseData {
    tags: string[];
    uuid: string;
    group_uuid: string;
    number: ID;
    version: number;
    uid: ExerciseUid;
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
    correctness?: string | null | undefined;
    isCorrect?: boolean;
    content_html: string;
    selected_count?: number;
    feedback_html?: string;
};
export declare type Step = {
    type: 'exercise';
    task: Task;
    uid: ExerciseUid;
    id: number;
    available_points: AvailablePoints;
    preview: string;
    is_completed: boolean;
    answer_id?: ID;
    answer_id_order: ID[];
    free_response: '';
    feedback_html: '';
    correct_answer_id: ID;
    correct_answer_feedback_html: string;
    last_completed_at: Date;
    response_validation?: any;
    external_url: '';
    formats?: ExerciseFormat[];
    can_be_updated: boolean;
    is_feedback_available: boolean;
    exercise_id: ID;
    attempts_remaining: number;
    attempt_number: number;
    solution?: Solution;
    incorrectAnswerId: ID;
};
interface Solution {
    content_html: string;
    solution_type: string;
}
export declare type Task = {
    is_deleted: boolean;
    type?: 'homework';
};
declare type CollaboratorSolution = {
    content_html: string;
};
export declare type AnswerDisplayType = 'teacher-review' | 'teacher-preview' | 'student' | 'student-mpp';
export declare type ChosenAnswer = (ID | undefined)[];
export declare type ID = string | number;
declare type ExerciseUid = `${number}@${number}`;
declare type ExerciseFormat = 'multiple-choice' | 'free-response' | 'true-false';
export declare type AvailablePoints = `${number}.${number}`;
export {};
