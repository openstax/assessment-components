import renderer from 'react-test-renderer';
import { NeedsGradingQuestion } from './NeedsGradingQuestion';

const onSave = jest.fn();

const students = [
  {
    student: { name: 'Ada Lovelace', userId: 'user-1' },
    freeResponse: 'An object at rest stays at rest.',
    questionId: 'q-1',
    maxScore: 10,
    onSave,
  },
  {
    student: { name: 'Grace Hopper', userId: 'user-2' },
    freeResponse: 'Things keep doing what they\'re doing.',
    questionId: 'q-1',
    maxScore: 10,
    score: 9,
    comment: 'Good answer.',
    onSave,
  },
];

describe('NeedsGradingQuestion', () => {
  it('matches snapshot with mixed graded and ungraded students', () => {
    const tree = renderer.create(
      <NeedsGradingQuestion
        questionNumber={1}
        questionStemHtml="<p>Describe Newton's first law.</p>"
        students={students}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with all graded students', () => {
    const tree = renderer.create(
      <NeedsGradingQuestion
        questionNumber={2}
        questionStemHtml="<p>Describe Newton's first law.</p>"
        students={students.map(s => ({ ...s, score: 8 }))}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
