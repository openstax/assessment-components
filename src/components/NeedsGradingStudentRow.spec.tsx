import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { NeedsGradingStudentRow, NeedsGradingStudentRowProps } from './NeedsGradingStudentRow';
import { FreeResponseGrading } from './FreeResponseGrading';
import { findNode, textOf } from '../test/utils';

jest.mock('../utils', () => ({
  ...jest.requireActual('../utils'),
  formatTimestamp: () => 'Mar 1, 2024, 10:00 AM',
}));

const student = { name: 'Ada Lovelace', userId: 'user-1' };
const answer = 'An object at rest stays at rest.';

const baseProps: NeedsGradingStudentRowProps = {
  student,
  freeResponse: answer,
  questionId: 'q-1',
  maxScore: 10,
  onSave: jest.fn(),
};

const render = (props: Partial<NeedsGradingStudentRowProps> = {}) =>
  renderer.create(<NeedsGradingStudentRow {...baseProps} {...props} />);

const isHeader = (node: renderer.ReactTestRendererJSON) =>
  node.type === 'button' && node.props['aria-expanded'] !== undefined;

const header = (tree: renderer.ReactTestRenderer) => tree.root.findAll(
  node => node.type === 'button' && node.props['aria-expanded'] !== undefined
)[0];

// the row body is the only element that hides itself with an inline display style
const isBodyHidden = (tree: renderer.ReactTestRenderer) => findNode(
  tree.toJSON(), node => node.type === 'div' && node.props.style && 'display' in node.props.style
)?.props.style.display === 'none';

describe('NeedsGradingStudentRow', () => {
  describe('expanding', () => {
    it('starts expanded when the answer is ungraded', () => {
      const tree = render();

      expect(header(tree).props['aria-expanded']).toBe(true);
      expect(isBodyHidden(tree)).toBe(false);
    });

    it('starts collapsed when the answer is graded', () => {
      const tree = render({ score: 8 });

      expect(header(tree).props['aria-expanded']).toBe(false);
      expect(isBodyHidden(tree)).toBe(true);
    });

    it('toggles when the header is clicked', () => {
      const tree = render();

      renderer.act(() => { header(tree).props.onClick(); });
      expect(header(tree).props['aria-expanded']).toBe(false);
      expect(isBodyHidden(tree)).toBe(true);

      renderer.act(() => { header(tree).props.onClick(); });
      expect(header(tree).props['aria-expanded']).toBe(true);
      expect(isBodyHidden(tree)).toBe(false);
    });

    it('follows the expanded prop and only reports the click when controlled', () => {
      const onToggle = jest.fn();
      const tree = render({ expanded: true, onToggle });

      renderer.act(() => { header(tree).props.onClick(); });
      expect(onToggle).toHaveBeenCalledTimes(1);
      expect(header(tree).props['aria-expanded']).toBe(true);

      renderer.act(() => {
        tree.update(<NeedsGradingStudentRow {...baseProps} expanded={false} onToggle={onToggle} />);
      });
      expect(header(tree).props['aria-expanded']).toBe(false);
      expect(isBodyHidden(tree)).toBe(true);
    });
  });

  describe('the header', () => {
    it('shows the student and no points before grading', () => {
      const text = textOf(findNode(render().toJSON(), isHeader) || null);

      expect(text).toContain('Ada Lovelace');
      expect(text).toContain('Points: -- out of 10');
    });

    it('shows the points once graded', () => {
      const text = textOf(findNode(render({ score: 8 }).toJSON(), isHeader) || null);

      expect(text).toContain('Points: 8 out of 10');
    });
  });

  describe('the answer', () => {
    it('shows what the student wrote', () => {
      expect(textOf(render().toJSON())).toContain(answer);
    });

    it('says so when the student did not answer', () => {
      const text = textOf(render({ freeResponse: undefined }).toJSON());

      expect(text).toContain('Unanswered');
      expect(text).not.toContain(answer);
    });

    it('shows the score and comment when graded', () => {
      const text = textOf(render({ score: 8, comment: 'Good work.' }).toJSON());

      expect(text).toContain('Score: 8/10');
      expect(text).toContain('Comment: Good work.');
    });

    it('leaves out the comment line when there is no comment', () => {
      const text = textOf(render({ score: 8 }).toJSON());

      expect(text).toContain('Score: 8/10');
      expect(text).not.toContain('Comment:');
    });

    it('shows no score before grading', () => {
      expect(textOf(render().toJSON())).not.toContain('Score:');
    });

    describe('when the answer changes size', () => {
      // jsdom has no layout or ResizeObserver, so the answer's height is set by hand and the
      // observer is fired by hand: 400px overflows, 100px fits, 0px is hidden under display: none
      let observers: Set<() => void>;
      let answerNode: HTMLDivElement;
      let tree: renderer.ReactTestRenderer;

      const resizeTo = (height: number) => renderer.act(() => {
        Object.defineProperty(answerNode, 'scrollHeight', { configurable: true, value: height });
        observers.forEach(callback => callback());
      });
      const readMore = () => tree.root.findAll(
        node => node.type === 'button' && /show (more|less)/.test(String(node.props.children))
      )[0];

      beforeEach(() => {
        observers = new Set();
        global.ResizeObserver = class {
          constructor(private callback: () => void) {}
          observe() { observers.add(this.callback); }
          unobserve() { observers.delete(this.callback); }
          disconnect() { observers.delete(this.callback); }
        } as unknown as typeof ResizeObserver;

        answerNode = document.createElement('div');
        Object.defineProperty(answerNode, 'scrollHeight', { configurable: true, value: 400 });
        renderer.act(() => {
          tree = renderer.create(
            <NeedsGradingStudentRow {...baseProps} />,
            { createNodeMock: () => answerNode },
          );
        });
      });

      it('shows "show more" again when the window is narrowed after "show less"', () => {
        renderer.act(() => readMore().props.onClick()); // show more
        resizeTo(100); // the window is widened
        renderer.act(() => readMore().props.onClick()); // show less
        expect(readMore()).toBeUndefined();

        resizeTo(400); // the window is narrowed
        expect(readMore().props.children).toBe('show more');
      });

      it('brings "show more" back when a card collapsed during a resize is reopened', () => {
        expect(readMore().props.children).toBe('show more');

        resizeTo(0); // the card is collapsed, then the window is resized
        expect(readMore()).toBeUndefined();

        resizeTo(400); // the card is reopened
        expect(readMore().props.children).toBe('show more');
      });
    });
  });

  describe('the grading form', () => {
    it('is given the grade and everything it needs to save it', () => {
      const onSave = jest.fn();
      const tree = render({
        score: 8, comment: 'Good work.', disabled: true, gradingTimestamp: '2024-03-01T10:00:00.000Z', onSave,
      });

      expect(tree.root.findByType(FreeResponseGrading).props).toMatchObject({
        questionId: 'q-1',
        maxScore: 10,
        score: 8,
        comment: 'Good work.',
        disabled: true,
        gradingTimestamp: '2024-03-01T10:00:00.000Z',
        onSave,
      });
    });
  });
});

describe('NeedsGradingStudentRow show more button', () => {
  const originalHeight = Object.getOwnPropertyDescriptor(Element.prototype, 'scrollHeight');

  // jsdom does no layout, so make the answer look taller than its collapsed height
  beforeEach(() => {
    Object.defineProperty(Element.prototype, 'scrollHeight', { configurable: true, get: () => 1000 });
  });

  afterEach(() => {
    if (originalHeight) { Object.defineProperty(Element.prototype, 'scrollHeight', originalHeight); }
    else { Reflect.deleteProperty(Element.prototype, 'scrollHeight'); }
  });

  const mount = (rows: Array<Partial<NeedsGradingStudentRowProps>>) => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      ReactDOM.render(
        <>{rows.map((row, i) => <NeedsGradingStudentRow key={i} {...baseProps} {...row} />)}</>,
        container
      );
    });
    return {
      buttons: () => Array.from(container.querySelectorAll('button')).filter(b => b.getAttribute('aria-controls')),
      cleanup: () => { act(() => { ReactDOM.unmountComponentAtNode(container); }); container.remove(); },
    };
  };

  it('is named for the answer it expands and the student it belongs to', () => {
    const { buttons, cleanup } = mount([{}]);
    const [button] = buttons();

    expect(button.textContent).toBe('show more');
    expect(button.getAttribute('aria-label')).toBe('Show more of the answer from Ada Lovelace');
    cleanup();
  });

  it('reports whether the answer is expanded and points at it', () => {
    const { buttons, cleanup } = mount([{ questionId: 'exercise@1.2:3' }]);

    expect(buttons()[0].getAttribute('aria-expanded')).toBe('false');
    act(() => { buttons()[0].click(); });
    expect(buttons()[0].getAttribute('aria-expanded')).toBe('true');
    expect(buttons()[0].textContent).toBe('show less');
    expect(buttons()[0].getAttribute('aria-label')).toBe('Show less of the answer from Ada Lovelace');
    expect(document.getElementById(buttons()[0].getAttribute('aria-controls') as string)?.textContent).toBe(answer);
    cleanup();
  });

  it('gives each student in the list its own name and target', () => {
    const { buttons, cleanup } = mount([
      {},
      { student: { name: 'Grace Hopper', userId: 'user-2' }, freeResponse: 'A different answer.' },
    ]);
    const [first, second] = buttons();

    expect(first.getAttribute('aria-label')).not.toBe(second.getAttribute('aria-label'));
    expect(first.getAttribute('aria-controls')).not.toBe(second.getAttribute('aria-controls'));
    expect(document.getElementById(second.getAttribute('aria-controls') as string)?.textContent).toBe('A different answer.');
    cleanup();
  });
});
