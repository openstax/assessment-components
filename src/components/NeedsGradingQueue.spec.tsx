import renderer from 'react-test-renderer';
import { NeedsGradingQueue } from './NeedsGradingQueue';

const onSave = jest.fn();

const questions = [
  {
    questionNumber: 1,
    questionStemHtml: '<p>Describe Newton\'s first law.</p>',
    students: [
      {
        student: { name: 'Ada Lovelace', userId: 'user-1' },
        freeResponse: 'An object at rest stays at rest.',
        questionId: 'q-1',
        maxScore: 10,
        onSave,
      },
    ],
  },
];

describe('NeedsGradingQueue', () => {
  it('matches snapshot with questions', () => {
    const tree = renderer.create(
      <NeedsGradingQueue
        questions={questions}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when empty', () => {
    const tree = renderer.create(
      <NeedsGradingQueue
        questions={[]}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
