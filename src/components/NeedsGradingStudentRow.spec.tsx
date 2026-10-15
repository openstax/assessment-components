import renderer from 'react-test-renderer';
import { NeedsGradingStudentRow, NeedsGradingStudentRowProps } from './NeedsGradingStudentRow';
import { FreeResponseGrading } from './FreeResponseGrading';
import { findNode, textOf } from '../test/utils';

jest.mock('../utils', () => ({
  ...jest.requireActual('../utils'),
  formatTimestamp: () => 'Mar 1, 2024, 10:00 AM',
}));

const student = { name: 'Ada Lovelace', userId: 'user-1' };
const answer = 'An object at rest stays at rest.';

const baseProps: NeedsGradingStudentRowProps = {
  student,
  freeResponse: answer,
  questionId: 'q-1',
  maxScore: 10,
  onSave: jest.fn(),
};

const render = (props: Partial<NeedsGradingStudentRowProps> = {}) =>
  renderer.create(<NeedsGradingStudentRow {...baseProps} {...props} />);

const isHeader = (node: renderer.ReactTestRendererJSON) =>
  node.type === 'button' && node.props['aria-expanded'] !== undefined;

const header = (tree: renderer.ReactTestRenderer) => tree.root.findAll(
  node => node.type === 'button' && node.props['aria-expanded'] !== undefined
)[0];

// the row body is the only element that hides itself with an inline display style
const isBodyHidden = (tree: renderer.ReactTestRenderer) => findNode(
  tree.toJSON(), node => node.type === 'div' && node.props.style && 'display' in node.props.style
)?.props.style.display === 'none';

describe('NeedsGradingStudentRow', () => {
  describe('expanding', () => {
    it('starts expanded when the answer is ungraded', () => {
      const tree = render();

      expect(header(tree).props['aria-expanded']).toBe(true);
      expect(isBodyHidden(tree)).toBe(false);
    });

    it('starts collapsed when the answer is graded', () => {
      const tree = render({ score: 8 });

      expect(header(tree).props['aria-expanded']).toBe(false);
      expect(isBodyHidden(tree)).toBe(true);
    });

    it('toggles when the header is clicked', () => {
      const tree = render();

      renderer.act(() => { header(tree).props.onClick(); });
      expect(header(tree).props['aria-expanded']).toBe(false);
      expect(isBodyHidden(tree)).toBe(true);

      renderer.act(() => { header(tree).props.onClick(); });
      expect(header(tree).props['aria-expanded']).toBe(true);
      expect(isBodyHidden(tree)).toBe(false);
    });

    it('follows the expanded prop and only reports the click when controlled', () => {
      const onToggle = jest.fn();
      const tree = render({ expanded: true, onToggle });

      renderer.act(() => { header(tree).props.onClick(); });
      expect(onToggle).toHaveBeenCalledTimes(1);
      expect(header(tree).props['aria-expanded']).toBe(true);

      renderer.act(() => {
        tree.update(<NeedsGradingStudentRow {...baseProps} expanded={false} onToggle={onToggle} />);
      });
      expect(header(tree).props['aria-expanded']).toBe(false);
      expect(isBodyHidden(tree)).toBe(true);
    });
  });

  describe('the header', () => {
    it('shows the student and no points before grading', () => {
      const text = textOf(findNode(render().toJSON(), isHeader) || null);

      expect(text).toContain('Ada Lovelace');
      expect(text).toContain('Points: -- out of 10');
    });

    it('shows the points once graded', () => {
      const text = textOf(findNode(render({ score: 8 }).toJSON(), isHeader) || null);

      expect(text).toContain('Points: 8 out of 10');
    });
  });

  describe('the answer', () => {
    it('shows what the student wrote', () => {
      expect(textOf(render().toJSON())).toContain(answer);
    });

    it('says so when the student did not answer', () => {
      const text = textOf(render({ freeResponse: undefined }).toJSON());

      expect(text).toContain('Unanswered');
      expect(text).not.toContain(answer);
    });

    it('shows the score and comment when graded', () => {
      const text = textOf(render({ score: 8, comment: 'Good work.' }).toJSON());

      expect(text).toContain('Score: 8/10');
      expect(text).toContain('Comment: Good work.');
    });

    it('leaves out the comment line when there is no comment', () => {
      const text = textOf(render({ score: 8 }).toJSON());

      expect(text).toContain('Score: 8/10');
      expect(text).not.toContain('Comment:');
    });

    it('shows no score before grading', () => {
      expect(textOf(render().toJSON())).not.toContain('Score:');
    });
  });

  describe('the grading form', () => {
    it('is given the grade and everything it needs to save it', () => {
      const onSave = jest.fn();
      const tree = render({
        score: 8, comment: 'Good work.', disabled: true, gradingTimestamp: '2024-03-01T10:00:00.000Z', onSave,
      });

      expect(tree.root.findByType(FreeResponseGrading).props).toMatchObject({
        questionId: 'q-1',
        maxScore: 10,
        score: 8,
        comment: 'Good work.',
        disabled: true,
        gradingTimestamp: '2024-03-01T10:00:00.000Z',
        onSave,
      });
    });
  });
});
