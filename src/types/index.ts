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

export interface ExerciseAnswerState {
  correct_answer_id: ID;
  is_completed: boolean;
  attempts_remaining: number;
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
  uid: ExerciseUid;
  published_at: string;
  authors: ExercisePersonData[];
  copyright_holders: ExercisePersonData[];
  derived_from: any[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  is_vocab: boolean;
  context?: string;
  stimulus_html: string;
  questions: ExerciseQuestionData[];
  versions: number[];
  solutions_are_public: boolean;
}

export type Answer = {
  id: ID;
  correctness?: string | null | undefined;
  isCorrect?: boolean;
  content_html: string;
  selected_count?: number;
  feedback_html?: string;
};

export type StepBase = {
  id: number; // could be id from tutor backend, could be index from assessments?
  uid: ExerciseUid;
  available_points?: AvailablePoints;
};

export type StepWithData = StepBase & {
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
  response_validation?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  external_url?: '';
  formats?: ExerciseFormat[];
  can_be_updated?: boolean;
  is_feedback_available?: boolean;
  exercise_id?: ID;
  attempts_remaining?: number;
  attempt_number?: number;
  solution?: Solution;
  incorrectAnswerId?: ID;
};

export type QuestionState = {
  available_points: AvailablePoints;
  is_completed: boolean;
  answer_id?: ID;
  answer_id_order: ID[];
  free_response: string;
  feedback_html: string; // Really only incorrect answer
  correct_answer_id: ID;
  correct_answer_feedback_html: string;
  response_validation?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  formats?: ExerciseFormat[];
  attempts_remaining: number;
  attempt_number: number;
  solution?: Solution;
  incorrectAnswerId: ID;
};

export interface Solution {
  content_html: string;
  solution_type: 'detailed';
}

export type Task = {
  is_deleted: boolean;
  type?: 'homework';
};

type CollaboratorSolution = {
  content_html: string;
};

export type AnswerDisplayType = 'teacher-review' | 'teacher-preview' | 'student' | 'student-mpp';
export type ChosenAnswer = (ID | undefined)[];

export type ID = string | number;

type ExerciseUid = `${number}@${number}`;
type ExerciseFormat = 'multiple-choice' | 'free-response' | 'true-false';

export type AvailablePoints = `${number}.${number}`;
