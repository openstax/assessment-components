export type Exercise = {
  context: string;
  stimulus_html: string;
  stem_html: string;
  questions: Question[];
};

export type Question = {
  id: ID;
  stem_html: string;
  collaborator_solutions: CollaboratorSolution[];
  formats?: string[];
  stimulus_html: string;
  answers: Answer[];
  is_answer_order_important: boolean;
};

export type Answer = {
  id: ID;
  correctness?: string | null | undefined;
  isCorrect?: boolean;
  content_html: string;
  selected_count?: number;
  feedback_html?: string;
};

export type Step = {
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
  labels?: any[];
  formats?: any[];
  can_be_updated: boolean;
  is_feedback_available: boolean;
  exercise_id: ID
  attempts_remaining: number;
  attempt_number: number;
  solution?: Solution;
  content?: any;
  incorrectAnswerId: ID;
}

interface Solution {
  content_html: string;
  solution_type: string;
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

export type AvailablePoints = `${number}.${number}`;
