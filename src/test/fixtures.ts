import { ExerciseData, ExerciseQuestionData } from '../types';

export const answerContent = [
`<ol>
  <li>matter is moving at speeds of less than roughly 1% the speed of light,</li>
  <li>objects are too small to be seen with the naked eye, and</li>
  <li>there is the involvement of only a weak gravitational field</li>
</ol>
`,
`<ol>
  <li>matter is moving at speeds greater than roughly 1% the speed of light,</li>
  <li>objects are large enough to be seen with the naked eye, and</li>
  <li>there is the involvement of a strong gravitational field</li>
</ol>
`];

export const trueFalse = (id: number, stem: string): ExerciseQuestionData => ({
  id,
  formats: ['multiple-choice'],
  is_answer_order_important: false,
  stimulus_html: '',
  stem_html: stem,
  collaborator_solutions: [],
  answers: [
    { id: id * 10 + 1, content_html: 'True' },
    { id: id * 10 + 2, content_html: 'False' },
  ],
});

export const freeResponse = (id: number, stem: string): ExerciseQuestionData => ({
  id,
  formats: ['free-response'],
  is_answer_order_important: false,
  stimulus_html: '',
  stem_html: stem,
  collaborator_solutions: [],
  answers: [],
});

export const exercise = (uuid: string, questions: ExerciseQuestionData[], context = ''): ExerciseData => ({
  uid: `${uuid}@1`,
  uuid,
  group_uuid: uuid,
  number: 1,
  version: 1,
  published_at: '2026-10-28T00:00:00.000Z',
  context,
  stimulus_html: questions.length > 1 ? 'The questions below share this stimulus.' : '',
  tags: [],
  authors: [],
  copyright_holders: [],
  derived_from: [],
  is_vocab: false,
  solutions_are_public: false,
  versions: [1],
  questions,
});
