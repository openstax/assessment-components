import renderer from 'react-test-renderer';
import { NeedsGradingStudentRow } from './NeedsGradingStudentRow';

jest.mock('../utils', () => ({
  ...jest.requireActual('../utils'),
  formatTimestamp: () => 'Mar 1, 2024, 10:00 AM',
}));

const student = { name: 'Ada Lovelace', userId: 'user-1' };
const onSave = jest.fn();

describe('NeedsGradingStudentRow', () => {
  it('matches snapshot when ungraded (expanded by default)', () => {
    const tree = renderer.create(
      <NeedsGradingStudentRow
        student={student}
        freeResponse="An object at rest stays at rest."
        questionId="q-1"
        maxScore={10}
        onSave={onSave}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when graded (collapsed by default)', () => {
    const tree = renderer.create(
      <NeedsGradingStudentRow
        student={student}
        freeResponse="An object at rest stays at rest."
        questionId="q-1"
        maxScore={10}
        score={8}
        comment="Good work."
        gradingTimestamp="2024-03-01T10:00:00.000Z"
        onSave={onSave}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot in controlled expanded state', () => {
    const tree = renderer.create(
      <NeedsGradingStudentRow
        student={student}
        freeResponse="An object at rest stays at rest."
        questionId="q-1"
        maxScore={10}
        score={8}
        expanded={true}
        onToggle={jest.fn()}
        onSave={onSave}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
