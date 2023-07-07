import { ExerciseToolbar } from './ExerciseToolbar';
import renderer from 'react-test-renderer';

describe('ExerciseToolbar', () => {
  it('matches snapshot', () => {
    const instance = renderer.create(
      <ExerciseToolbar
        icons={{
          errata: {
            url: 'https://openstax.org',
            location: {
              header: {
                mobile: true,
                desktop: true
              }
            }
          },
          topic: {
            url: 'https://openstax.org',
            location: {
              header: {
                mobile: true,
                desktop: true
              }
            }
          },
          info: {
            location: {
              header: {
                mobile: true,
                desktop: true
              }
            }
          }
        }}
      />
    );

    expect(instance.toJSON()).toMatchSnapshot();
  });

  it('conditionally renders icons', () => {
    expect(renderer.create(
      <ExerciseToolbar />
    ).toJSON()).toMatchInlineSnapshot(`null`);

    expect(renderer.create(
      <ExerciseToolbar
        icons={{
          errata: {
            url: 'https://openstax.org',
            location: {
              header: {
                mobile: true,
                desktop: true
              }
            }
          }
        }}
      />
    ).toJSON()).toMatchSnapshot();

    expect(renderer.create(
      <ExerciseToolbar
        icons={{
          topic: {
            url: 'https://openstax.org',
            location: {
              header: {
                mobile: true,
                desktop: true
              }
            }
          }
        }}
      />
    ).toJSON()).toMatchSnapshot();
  });
});
