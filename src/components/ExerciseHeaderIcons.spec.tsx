import { ExerciseHeaderIcons } from './ExerciseHeaderIcons';
import renderer from 'react-test-renderer';

describe('ExerciseIcons', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(
      <ExerciseHeaderIcons
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
            type: 'multiple-choice',
            location: {
              header: {
                mobile: true,
                desktop: true
              }
            }
          }
        }}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
