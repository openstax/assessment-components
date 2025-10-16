import { FreeResponseReview } from "./FreeResponseReview";
import renderer from 'react-test-renderer';

describe('FreeResponseReview', () => {
  const exampleText = 
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris orci, mattis scelerisque';

  it('renders the full free response text when not in preview mode', () => {
    const tree = renderer.create(
      <FreeResponseReview free_response={exampleText} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the free response text in preview mode with "read more" link if overflowing', () => {
    const longText = exampleText.repeat(2000); // Make it long enough to overflow
    const tree = renderer.create(
      <FreeResponseReview free_response={longText} previewMode />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('does not render anything if free_response is empty', () => {
    const tree = renderer.create(
      <FreeResponseReview free_response="" previewMode />
    ).toJSON();
    expect(tree).toBeNull();
  });
});