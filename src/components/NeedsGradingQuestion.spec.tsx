import renderer from 'react-test-renderer';
import { NeedsGradingQuestion } from './NeedsGradingQuestion';
import { NeedsGradingStudentRow } from './NeedsGradingStudentRow';
import { findNode, textOf } from '../test/utils';

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
  it('expands all rows when "Expand all answers" is clicked', () => {
    const tree = renderer.create(
      <NeedsGradingQuestion
        questionNumber={1}
        questionStemHtml="<p>Describe Newton's first law.</p>"
        students={students}
      />
    );

    const expandButton = tree.root.findAll(n => n.type === 'button' && n.children[0] === 'Expand all answers')[0];
    renderer.act(() => { expandButton.props.onClick({ stopPropagation: () => undefined }); });

    const rows = tree.root.findAllByType(NeedsGradingStudentRow);
    expect(rows.every(r => r.props.expanded)).toBe(true);
  });

  it('collapses all rows when "Collapse all answers" is clicked', () => {
    const tree = renderer.create(
      <NeedsGradingQuestion
        questionNumber={1}
        questionStemHtml="<p>Describe Newton's first law.</p>"
        students={students}
      />
    );

    // First expand all so we can then collapse
    const expandButton = tree.root.findAll(n => n.type === 'button' && n.children[0] === 'Expand all answers')[0];
    renderer.act(() => { expandButton.props.onClick({ stopPropagation: () => undefined }); });

    const collapseButton = tree.root.findAll(n => n.type === 'button' && n.children[0] === 'Collapse all answers')[0];
    renderer.act(() => { collapseButton.props.onClick({ stopPropagation: () => undefined }); });

    const rows = tree.root.findAllByType(NeedsGradingStudentRow);
    expect(rows.every(r => !r.props.expanded)).toBe(true);
  });

  it('toggles a single student row independently', () => {
    const tree = renderer.create(
      <NeedsGradingQuestion
        questionNumber={1}
        questionStemHtml="<p>Describe Newton's first law.</p>"
        students={students}
      />
    );

    const rows = tree.root.findAllByType(NeedsGradingStudentRow);
    const firstRowExpanded = rows[0].props.expanded;

    renderer.act(() => { rows[0].props.onToggle(); });

    expect(tree.root.findAllByType(NeedsGradingStudentRow)[0].props.expanded).toBe(!firstRowExpanded);
    expect(tree.root.findAllByType(NeedsGradingStudentRow)[1].props.expanded).toBe(rows[1].props.expanded);
  });

  describe('the header', () => {
    const render = (props: Partial<React.ComponentProps<typeof NeedsGradingQuestion>> = {}) => renderer.create(
      <NeedsGradingQuestion
        questionNumber={1}
        questionStemHtml="<p>Describe Newton's first law.</p>"
        students={students}
        {...props}
      />
    );

    const cardHeader = (tree: renderer.ReactTestRenderer) => tree.root.findAll(
      n => n.type === 'button' && n.props['aria-expanded'] !== undefined
    )[0];

    // the card body is the first element that hides itself with an inline display style
    const isBodyHidden = (tree: renderer.ReactTestRenderer) => findNode(
      tree.toJSON(), n => n.type === 'div' && n.props.style && 'display' in n.props.style
    )?.props.style.display === 'none';

    it('counts the students that have been graded', () => {
      expect(textOf(render().toJSON())).toContain('1/2 Graded');
      expect(textOf(render({ students: students.map(s => ({ ...s, score: 8 })) }).toJSON()))
        .toContain('2/2 Graded');
    });

    it('shows the question number, and its id when it has one', () => {
      expect(textOf(render({ questionNumber: 2 }).toJSON())).toContain('Question 2');
      expect(textOf(render().toJSON())).not.toContain('ID:');
      expect(textOf(render({ questionId: '4652@7' }).toJSON())).toContain('ID: 4652@7');
    });

    it('shows the question stem', () => {
      expect(textOf(render().toJSON())).toContain('Describe Newton\'s first law.');
    });

    it('collapses and re-opens the whole card from its header', () => {
      const tree = render();
      expect(cardHeader(tree).props['aria-expanded']).toBe(true);
      expect(isBodyHidden(tree)).toBe(false);

      renderer.act(() => { cardHeader(tree).props.onClick(); });
      expect(cardHeader(tree).props['aria-expanded']).toBe(false);
      expect(isBodyHidden(tree)).toBe(true);
    });
  });

  describe('which rows start expanded', () => {
    const expandedRows = (tree: renderer.ReactTestRenderer) =>
      tree.root.findAllByType(NeedsGradingStudentRow).map(row => row.props.expanded);

    it('opens only the ungraded rows', () => {
      const tree = renderer.create(
        <NeedsGradingQuestion questionNumber={1} questionStemHtml="<p>Stem</p>" students={students} />
      );

      expect(expandedRows(tree)).toEqual([true, false]);
    });

    it('opens nothing when every row is graded, and offers to expand them all', () => {
      const tree = renderer.create(
        <NeedsGradingQuestion
          questionNumber={2}
          questionStemHtml="<p>Stem</p>"
          students={students.map(s => ({ ...s, score: 8 }))}
        />
      );

      expect(expandedRows(tree)).toEqual([false, false]);
      expect(textOf(tree.toJSON())).toContain('Expand all answers');
    });

    it('offers to collapse them all once every row is open', () => {
      const tree = renderer.create(
        <NeedsGradingQuestion
          questionNumber={1}
          questionStemHtml="<p>Stem</p>"
          students={students.map(s => ({ ...s, score: undefined }))}
        />
      );

      expect(expandedRows(tree)).toEqual([true, true]);
      expect(textOf(tree.toJSON())).toContain('Collapse all answers');
    });
  });
});
