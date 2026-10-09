import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Content } from './Content';
import { Feedback, SimpleFeedback } from './Feedback';

jest.mock('../hooks/useTypesetMath', () => ({
  useTypesetMath: () => jest.fn(),
}));

describe('Feedback', () => {
  const html = 'Adhesion is the tendency of different particles to cling to one another.';

  const content = (tree: renderer.ReactTestRenderer) => tree.root.findByType(Content);

  it('renders the feedback html in a popover carrying its own id', () => {
    const tree = renderer.create(<Feedback id="feedback-1-0">{html}</Feedback>);
    const aside = tree.root.findAllByType('aside')[0];

    expect(aside.props.id).toBe('feedback-1-0');
    expect(aside.props.className).toBe('question-feedback bottom');
    expect(content(tree).props.html).toBe(html);
    expect(content(tree).props.className).toBe('question-feedback-content has-html');
    expect(content(tree).props.block).toBe(true);
  });

  it('positions the popover from the position prop', () => {
    const tree = renderer.create(<Feedback id="x" position="top">{html}</Feedback>);
    expect(tree.root.findAllByType('aside')[0].props.className).toBe('question-feedback top');
  });

  it('hides the decorative arrow from the accessibility tree', () => {
    // aria-label was ignored here: it does not apply to a generic element, so the arrow
    // was exposed as an unnamed node instead of labelling the feedback.
    const tree = renderer.create(<Feedback id="x">{html}</Feedback>);
    expect(tree.root.findByProps({ className: 'arrow' }).props['aria-hidden']).toBe('true');
  });

  it('labels the feedback with real text so it is announced as feedback', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => { ReactDOM.render(<Feedback id="x">{html}</Feedback>, container); });

    const aside = container.querySelector('aside.question-feedback') as HTMLElement;
    expect(aside.textContent).toContain('Answer feedback:');

    // ...and the label has to stay invisible while remaining in the accessibility tree
    let label: HTMLElement | undefined;
    aside.querySelectorAll('span').forEach((span) => {
      if (span.textContent === 'Answer feedback:') { label = span; }
    });
    if (!label) { throw new Error('the visually hidden "Answer feedback:" label is missing'); }
    expect(window.getComputedStyle(label).position).toBe('absolute');
    expect(window.getComputedStyle(label).width).toBe('1px');

    act(() => { ReactDOM.unmountComponentAtNode(container); });
    container.remove();
  });

  it('renders SimpleFeedback without the popover chrome', () => {
    const tree = renderer.create(<SimpleFeedback>{html}</SimpleFeedback>);

    expect(tree.root.findAllByProps({ className: 'arrow' }).length).toBe(0);
    expect(tree.root.findAll((node) => node.children.includes('Answer feedback:')).length).toBe(0);
    expect(content(tree).props.html).toBe(html);
  });
});
