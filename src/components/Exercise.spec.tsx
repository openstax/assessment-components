import { Exercise, ExerciseProps } from './Exercise';
import renderer from 'react-test-renderer';

describe('Exercise', () => {
  let props: ExerciseProps;

  beforeEach(() => {
    props = {
      exercise: {
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
            correctness: undefined,
            content_html: 'True',
          }, {
            id: '2',
            correctness: undefined,
            content_html: 'False',
          }],
        }],
      },
      displaySolution: false,
      exerciseAnswers: {},
      questionNumber: 1,
      hasMultipleAttempts: false,
      onAnswerChange: () => null,
      onAnswerSave: () => null,
      onNextStep: () => null,
      available_points: '1.0' as const,
      canAnswer: false,
      needsSaved: false,
      canUpdateCurrentStep: false,
      attempt_number: 0,
      apiIsPending: false,
      step: {
        type: 'exercise' as const,
        task: {
          is_deleted: false,
          type: 'homework' as const
        },
        uid: '1234@4',
        id: 1,
        available_points: '1.0',
        preview: 'Preview content',
        is_completed: false,
        answer_id_order: ['1', '2'],
        answer_id: '1',
        free_response: '',
        last_completed_at: new Date(),
        feedback_html: '',
        correct_answer_id: '',
        correct_answer_feedback_html: '',
        external_url: '',
        can_be_updated: false,
        is_feedback_available: true,
        exercise_id: '1',
        attempts_remaining: 0,
        attempt_number: 1,
        incorrectAnswerId: 0
      },
      numberOfQuestions: 1
    }
  });

  it('matches snapshot', () => {
    const tree = renderer.create(
      <Exercise {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
