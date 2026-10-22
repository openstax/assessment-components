import { FreeResponseReview } from "./FreeResponseReview";
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

describe('FreeResponseReview', () => {
  const exampleText = 
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris orci, mattis scelerisque';

  it('renders the full free response text when not in preview mode', () => {
    const tree = renderer.create(
      <FreeResponseReview free_response={exampleText} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the free response text in preview mode with "show more" link if overflowing', () => {
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

describe('FreeResponseReview show more button', () => {
  const originalHeight = Object.getOwnPropertyDescriptor(Element.prototype, 'scrollHeight');

  // jsdom does no layout, so make the answer look taller than its collapsed height
  beforeEach(() => {
    Object.defineProperty(Element.prototype, 'scrollHeight', { configurable: true, get: () => 1000 });
  });

  afterEach(() => {
    if (originalHeight) { Object.defineProperty(Element.prototype, 'scrollHeight', originalHeight); }
    else { Reflect.deleteProperty(Element.prototype, 'scrollHeight'); }
  });

  const mount = (props: Partial<React.ComponentProps<typeof FreeResponseReview>> = {}) => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(
        <FreeResponseReview id="free-response-review-exercise@1:2" free_response="A long answer" previewMode {...props} />,
        container
      );
    });
    return {
      button: () => container.querySelector('button') as HTMLButtonElement,
      cleanup: () => { act(() => { ReactDOM.unmountComponentAtNode(container); }); container.remove(); },
    };
  };

  it('is a plain button, so it never submits a form around it', () => {
    const { button, cleanup } = mount();

    expect(button().getAttribute('type')).toBe('button');
    cleanup();
  });

  it('reports whether the answer is expanded and points at it', () => {
    const { button, cleanup } = mount();

    expect(button().textContent).toBe('show more');
    expect(button().getAttribute('aria-expanded')).toBe('false');
    expect(document.getElementById(button().getAttribute('aria-controls') as string)?.textContent).toBe('A long answer');
    act(() => { button().click(); });
    expect(button().textContent).toBe('show less');
    expect(button().getAttribute('aria-expanded')).toBe('true');
    cleanup();
  });

  it('keeps the visible words in its name and says which question it belongs to', () => {
    const { button, cleanup } = mount({ questionNumber: 2 });

    expect(button().getAttribute('aria-label')).toBe('Show more of the answer for question 2');
    act(() => { button().click(); });
    expect(button().getAttribute('aria-label')).toBe('Show less of the answer for question 2');
    cleanup();
  });

  it('still has a name when the question number is not known', () => {
    const { button, cleanup } = mount();

    expect(button().getAttribute('aria-label')).toBe('Show more of the answer');
    cleanup();
  });
});
