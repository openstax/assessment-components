import renderer from 'react-test-renderer';
import { NeedsGradingQueue } from './NeedsGradingQueue';
import { NeedsGradingQuestion } from './NeedsGradingQuestion';
import { byTestId, findAllNodes, textOf } from '../test/utils';

const onSave = jest.fn();

const question = {
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
};

describe('NeedsGradingQueue', () => {
  it('says everything is graded when there are no questions', () => {
    const tree = renderer.create(<NeedsGradingQueue questions={[]} />).toJSON();

    expect(textOf(tree)).toBe('All responses have been graded.');
    expect(findAllNodes(tree, byTestId('grading-notice'))).toHaveLength(0);
  });

  it('shows the grading note once, above the questions', () => {
    const tree = renderer.create(
      <NeedsGradingQueue questions={[question, { ...question, questionNumber: 2 }]} />
    ).toJSON();

    expect(findAllNodes(tree, byTestId('grading-notice'))).toHaveLength(1);
    expect(textOf(tree)).not.toContain('All responses have been graded.');
  });

  it('renders a card for each question, in order', () => {
    const tree = renderer.create(
      <NeedsGradingQueue questions={[question, { ...question, questionNumber: 2 }]} />
    );

    expect(tree.root.findAllByType(NeedsGradingQuestion).map(card => card.props.questionNumber))
      .toEqual([1, 2]);
  });
});
