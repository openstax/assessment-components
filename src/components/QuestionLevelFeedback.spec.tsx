import renderer from 'react-test-renderer';
import { QuestionLevelFeedback } from './QuestionLevelFeedback';

jest.mock('../hooks/useTypesetMath', () => ({
  useTypesetMath: () => jest.fn(),
}));

describe('QuestionLevelFeedback', () => {
  it('renders nothing when it has nothing to say', () => {
    expect(renderer.create(<QuestionLevelFeedback />).toJSON()).toBeNull();
  });

  it('carries its own live region', () => {
    const tree = renderer.create(<QuestionLevelFeedback detailedSolution='Because.' />);
    expect(tree.root.findByProps({ role: 'status' })).toBeTruthy();
  });

  it('matches snapshot with everything it can render', () => {
    const tree = renderer.create(
      <QuestionLevelFeedback
        score={{ raw: 9, max: 10 }}
        gradingComments='Good work overall.'
        detailedSolution='Because eleven has no divisors but itself and one.'
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders no score until both halves of it are known', () => {
    const tree = renderer.create(<QuestionLevelFeedback score={{ raw: 9 }} />).toJSON();
    expect(tree).toBeNull();
  });
});
