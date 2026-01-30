import { FreeResponseGrading } from './FreeResponseGrading';
import renderer from 'react-test-renderer';

describe('FreeResponseGrading', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <FreeResponseGrading
        maxScore={10}
        onSave={() => {}}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with initial score', () => {
    const tree = renderer.create(
      <FreeResponseGrading
        maxScore={10}
        score={7}
        onSave={() => {}}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with score and comment', () => {
    const tree = renderer.create(
      <FreeResponseGrading
        maxScore={10}
        score={8.5}
        comment="Good work on this assignment."
        onSave={() => {}}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot when disabled', () => {
    const tree = renderer.create(
      <FreeResponseGrading
        maxScore={10}
        score={7}
        comment="Grading is disabled"
        disabled={true}
        onSave={() => {}}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot with high max score', () => {
    const tree = renderer.create(
      <FreeResponseGrading
        maxScore={25}
        score={18}
        onSave={() => {}}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
