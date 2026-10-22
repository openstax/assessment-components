import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { Content } from './Content';
import { QuestionLevelFeedback } from './QuestionLevelFeedback';
import { colors } from '../theme';
import { findNode } from '../test/utils';

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

  it('renders the grading comment as plain text, not through Content', () => {
    const tree = renderer.create(<QuestionLevelFeedback gradingComments='<b>2 < 3</b>' />);
    expect(tree.root.findAllByType(Content)).toHaveLength(0);
    expect(tree.root.findByProps({ className: 'feedback-label' }).parent?.props.children)
      .toContain('<b>2 < 3</b>');
  });

  it('renders no score until both halves of it are known', () => {
    const tree = renderer.create(<QuestionLevelFeedback score={{ raw: 9 }} />).toJSON();
    expect(tree).toBeNull();
  });

  describe('the detailed solution', () => {
    const render = () => renderer.create(<QuestionLevelFeedback detailedSolution='Because.' />);

    it('is introduced by a level 3 heading', () => {
      const heading = render().root.findByType('h3');

      expect(heading.props.className).toBe('header');
      expect(heading.children).toEqual(['Detailed solution:']);
    });

    it('is the only heading', () => {
      expect(render().root.findAll(node => /^h[1-6]$/.test(String(node.type)))).toHaveLength(1);
    });

    it('draws no heading when there is no solution', () => {
      const tree = renderer.create(<QuestionLevelFeedback gradingComments='Fine.' />);

      expect(tree.root.findAll(node => node.type === 'h3')).toHaveLength(0);
    });

    it('keeps the heading on the line of the solution, in the surrounding type', () => {
      const tree = render().toJSON() as renderer.ReactTestRendererJSON;
      const modifier = '.detailed-solution .header';

      expect(findNode(tree, node => node.type === 'h3')).toBeTruthy();
      expect(tree).toHaveStyleRule('display', 'inline', { modifier });
      expect(tree).toHaveStyleRule('font', 'inherit', { modifier });
      expect(tree).toHaveStyleRule('margin', '0 0.5rem 0 0', { modifier });
    });

    // a selected card is tinted with the header colour, and the footer shows it through
    it('is readable on the selected card', () => {
      const luminance = (hex: string) => {
        const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
          .map(c => c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };
      const [lighter, darker] = [colors.card.header.background, colors.palette.neutralDark]
        .map(luminance).sort((a, b) => b - a);
      const tree = render().toJSON() as renderer.ReactTestRendererJSON;

      expect((lighter + 0.05) / (darker + 0.05)).toBeGreaterThanOrEqual(4.5);
      expect(tree).toHaveStyleRule('color', colors.palette.neutralDark, { modifier: '.detailed-solution .header' });
      expect(tree).toHaveStyleRule('color', colors.palette.neutralDark, { modifier: '.detailed-solution .solution' });
    });
  });
});
