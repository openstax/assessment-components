export type Task = {
  is_deleted: boolean;
  type?: 'homework';
};

type CollaboratorSolution = {
  content_html: string;
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
}

export type AnswerDisplayType = 'teacher-review' | 'teacher-preview' | 'student' | 'student-mpp';
export type ChosenAnswer = (ID | undefined)[];

export type ID = string | number;

type ExerciseUid = `${number}@${number}`;

export type AvailablePoints = `${number}.${number}`;
