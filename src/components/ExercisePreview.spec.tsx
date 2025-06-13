import { ExercisePreview } from './ExercisePreview';
import renderer from 'react-test-renderer';
import { ExerciseData, QuestionState } from 'src/types';

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

  describe('using questionStates', () => {
    let exercise: ExerciseData;
    let questionStates: { [key: string]: QuestionState };

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
          collaborator_solutions: [],
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

      questionStates = {
        '1234@5': {
          available_points: '1.0',
          is_completed: true,
          answer_id_order: ['1', '2'],
          answer_id: 1,
          free_response: '',
          feedback_html: 'Feedback for selected answer',
          correct_answer_id: '1',
          correct_answer_feedback_html: 'Feedback for correct answer',
          attempts_remaining: 0,
          attempt_number: 1,
          incorrectAnswerId: 0,
          canAnswer: false,
          needsSaved: false,
          apiIsPending: false,
          solution: {
            content_html: 'Detailed solution',
            solution_type: 'detailed',
          },
        },
      };
    });

    it('matches snapshot with questionStates', () => {
      const tree = renderer.create(
        <ExercisePreview
          exercise={exercise}
          questionStates={questionStates}
          showAllFeedback={true}
          showCorrectAnswer={true}
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('matches snapshot with questionStates and selected state', () => {
      const tree = renderer.create(
        <ExercisePreview
          exercise={exercise}
          questionStates={questionStates}
          selected={true}
          showAllFeedback={true}
          showCorrectAnswer={true}
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('matches snapshot with questionStates and overlay', () => {
      const tree = renderer.create(
        <ExercisePreview
          exercise={exercise}
          questionStates={questionStates}
          overlayChildren={<button>Overlay</button>}
          showAllFeedback={true}
          showCorrectAnswer={true}
        />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
