import { ExercisePreview } from './ExercisePreview';
import renderer from 'react-test-renderer';
import { ExerciseData } from 'src/types';

describe('ExercisePreview', () => {
  describe('using step data', () => {

    let exercise: ExerciseData;

    beforeEach(() => {
      exercise = {
        uid: '1@1',
        uuid: 'e4e27897-4abc-40d3-8565-5def31795edc',
        group_uuid: '20e82bf6-232e-40c8-ba68-2d22c6498f69',
        number: 1,
        version: 1,
        published_at: '2022-09-06T20:32:21.981Z',
        context: 'Context',
        stimulus_html: '<b>Stimulus HTML</b>',
        tags: [],
        authors: [{ user_id: 1, name: 'OpenStax' }],
        copyright_holders: [{ user_id: 1, name: 'OpenStax' }],
        derived_from: [],
        is_vocab: false,
        solutions_are_public: false,
        versions: [1],
        questions: [{
          id: '1234@5',
          collaborator_solutions: [
            {
              solution_type: 'no-detailed',
              content_html: `<span data-math='e^{\\text{Blue}}'></span>`,
            },
            {
              solution_type: 'detailed',
              content_html: `<span data-math='e^{\\text{Blue}}'></span>`,
            },
          ],
          formats: ['true-false'],
          stimulus_html: '',
          stem_html: '',
          is_answer_order_important: false,
          answers: [{
            id: '1',
            correctness: '1.0',
            content_html: 'True',
            feedback_html: 'Feedback',
          }, {
            id: '2',
            correctness: undefined,
            content_html: 'False',
          }],
        }],
      };
    });

    it.each`
        selected | description                          | overlay                  | showFeedback | showCorrect
        ${true}  | ${'with overlay and selected true'}  | ${<button>Over</button>} | ${undefined} | ${false}
        ${true}  | ${'with overlay and correctness'}    | ${<button>Over</button>} | ${undefined} | ${true}
        ${true}  | ${'with overlay and selected false'} | ${<button>Over</button>} | ${false}     | ${false}
        ${false} | ${'without overlay'}                 | ${undefined}             | ${true}      | ${true}
    `('matches snapshot $description', (
      { selected, overlay, showFeedback, showCorrect }: 
      { selected: boolean, overlay: JSX.Element, showFeedback: boolean, showCorrect: boolean }) => {
      const tree = renderer.create(
        <ExercisePreview
          exercise={exercise}
          selected={selected}
          overlayChildren={overlay}
          showAllFeedback={showFeedback}
          showCorrectAnswer={showCorrect}
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
