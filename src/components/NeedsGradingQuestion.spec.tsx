import renderer from 'react-test-renderer';
import { NeedsGradingQuestion } from './NeedsGradingQuestion';
import { NeedsGradingStudentRow } from './NeedsGradingStudentRow';

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
