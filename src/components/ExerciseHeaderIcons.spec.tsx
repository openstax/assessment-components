import { ExerciseHeaderIcons } from './ExerciseHeaderIcons';
import renderer from 'react-test-renderer';

describe('ExerciseIcons', () => {
  const exercise = {
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
      id: 1,
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
  };

  it('matches snapshot', () => {
    const tree = renderer.create(
      <ExerciseHeaderIcons exercise={exercise} topicUrl='https://openstax.org' errataUrl='https://openstax.org' />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
