import { ExerciseToolbar } from './ExerciseToolbar';
import renderer from 'react-test-renderer';

describe('ExerciseToolbar', () => {
  it('matches snapshot', () => {
    const instance = renderer.create(
      <ExerciseToolbar errataUrl='openstax.org' topicUrl='openstax.org' />
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });

  it('conditionally renders icons', () => {
    expect(renderer.create(
      <ExerciseToolbar />
    ).toJSON()).toMatchInlineSnapshot(`null`);

    expect(renderer.create(
      <ExerciseToolbar errataUrl='openstax' />
    ).toJSON()).toMatchSnapshot();

    expect(renderer.create(
      <ExerciseToolbar topicUrl='openstax' />
    ).toJSON()).toMatchSnapshot();
  });
});
