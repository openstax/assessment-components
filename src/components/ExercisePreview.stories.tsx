import { ExerciseData } from '../types';
import { ExercisePreview } from './ExercisePreview';

const exercise: ExerciseData = {
  uid: '4833@8',
  uuid: 'e4e27897-4abc-40d3-8565-5def31795edc',
  group_uuid: '20e82bf6-232e-40c8-ba68-2d22c6498f69',
  number: 4833,
  version: 8,
  published_at: '2022-09-06T20:32:21.981Z',
  context: '',
  stimulus_html: '',
  tags: [],
  authors: [{ user_id: 1, name: 'OpenStax' }],
  copyright_holders: [{ user_id: 1, name: 'OpenStax' }],
  derived_from: [],
  is_vocab: false,
  solutions_are_public: false,
  versions: [8],
  questions: [
    {
      id: '1',
      collaborator_solutions: [],
      formats: ['multiple-choice'],
      stimulus_html: '',
      stem_html: 'Which of the following is a source of variation in asexual reproduction?',
      is_answer_order_important: false,
      answers: [
        { id: '1', correctness: '1.0', content_html: 'mutation of DNA' },
        { id: '2', correctness: '0.0', content_html: 'crossing over' },
      ],
    },
  ],
};

/** The card heading is an h2 unless a page sets a level. */
export const DefaultHeadingLevel = () => (
  <ExercisePreview exercise={exercise} />
);

/** On a page with an h2 and h3 above the cards, the card heading goes under them at h4. */
export const UnderPageHeadings = () => (
  <>
    <h2>Select Questions</h2>
    <h3>7.1 Sexual Reproduction</h3>
    <ExercisePreview exercise={exercise} headingLevel={4} />
  </>
);
