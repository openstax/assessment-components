import React from 'react';
import ReactDOM, { unstable_batchedUpdates } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { useAssessmentSection } from '../hooks/useAssessmentSection';
import { Assessment, AssessmentItem, AssessmentProps, AssessmentSectionProps } from './Assessment';
import { ExerciseWrapper } from './ExerciseWrapper';
import { Loader } from './Loader';
import { QuestionWrapper } from './QuestionWrapper';

const items: AssessmentItem[] = [
  { id: 1, section: 'a', state: 'isCorrect', isCompleted: true },
  { id: 2, section: 'b', state: 'isIncomplete', isCompleted: false },
  { id: 3, section: 'b', state: 'isIncomplete', isCompleted: false },
  { id: 4, section: 'c', state: null, isCompleted: true, editable: true },
];

/**
 * A host section: its card, the section itself and each of its items carry the ids the assessment
 * gives them, as `ExerciseWrapper` and `QuestionWrapper` do, and it reports itself ready only when
 * the test says so — the way a host that loads its section does.
 */
const SectionHost = ({ sectionId }: { sectionId: string }) => {
  const section = useAssessmentSection();
  return <div id={section?.sectionScrollTargetId} data-card={sectionId}>
    <div data-section={sectionId} id={section?.sectionDomId} tabIndex={-1} aria-label={`section ${sectionId}`}>
      {hostItems.filter(item => item.section === sectionId).map(item =>
        <div key={item.id} id={section?.itemDomId(item.id)} tabIndex={-1}>item {item.id}</div>
      )}
    </div>
  </div>;
};
/** An element's text, as read: what is hidden from screen readers is left out. */
const readText = (element: Element): string => Array.from(element.childNodes).map(node =>
  node instanceof Element ? (node.getAttribute('aria-hidden') === 'true' ? '' : readText(node)) : node.textContent ?? ''
).join('');

/** What an element is called: its label, what labels it, or else its text. */
const nameOf = (element: Element) => {
  const labelledBy = element.getAttribute('aria-labelledby');
  const label = labelledBy ? document.getElementById(labelledBy) : null;
  return element.getAttribute('aria-label') ?? (label ? readText(label) : element.textContent ?? '').replace(/\s+/g, ' ').trim();
};

/**
 * Runs what updates the state of an attempt since replaced, without the warning React 17 gives of
 * it, once a run, whichever test is first; later Reacts give none. Anything else is let through.
 */
const silencingUnmountedUpdate = (run: () => void) => {
  const error = console.error;
  const spy = jest.spyOn(console, 'error').mockImplementation((message, ...rest) => {
    if (!String(message).includes('unmounted component')) { error(message, ...rest); }
  });
  try {
    run();
  } finally {
    spy.mockRestore();
  }
};

const sections: Record<string, AssessmentSectionProps> = {};
// the items the host draws, which a test that drops one from the assessment drops from here too
let hostItems = items;
const renderSection = (props: AssessmentSectionProps) => {
  sections[props.sectionId] = props;
  return <SectionHost sectionId={props.sectionId} />;
};

describe('Assessment', () => {
  let container: HTMLDivElement;

  const render = (props: Partial<AssessmentProps> = {}) => act(() => {
    ReactDOM.render(
      <Assessment items={items} renderSection={renderSection} completion={{ onNext: jest.fn() }} {...props} />,
      container
    );
  });
  const navButtons = () => Array.from(container.querySelectorAll('nav button')) as HTMLButtonElement[];
  const click = (element: Element | null) => act(() => { (element as HTMLElement).click(); });
  const ready = (sectionId: string) => act(() => sections[sectionId].onReady());
  // what has focus: a section by its label, anything else by its text
  const focusedText = () => document.activeElement ? nameOf(document.activeElement) : undefined;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    Object.keys(sections).forEach(key => delete sections[key]);
    hostItems = items;
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });

  it('starts at the first incomplete item, without moving focus', () => {
    render();

    expect(container.querySelector('[data-section]')?.getAttribute('data-section')).toBe('b');
    expect(navButtons()[1].getAttribute('aria-current')).toBe('location');
    expect(sections.b.firstItemNumber).toBe(2);

    ready('b');
    expect(document.activeElement).toBe(document.body);
  });

  it('starts at the completion step when every item is complete', () => {
    render({ items: items.map(item => ({ ...item, isCompleted: true })) });

    expect(container.querySelector('[data-section]')).toBeNull();
    expect(container.textContent).toContain('You are done.');
  });

  it('focuses the top of a section entered by its first item, once it reports ready', () => {
    render();
    ready('b');

    click(navButtons()[3]);
    expect(container.querySelector('[data-section]')?.getAttribute('data-section')).toBe('c');
    expect(document.activeElement).toBe(document.body);

    ready('c');
    expect(focusedText()).toBe('section c');
  });

  it('focuses an item after the first, in a section entered by it, once it reports ready', () => {
    render();
    ready('b');
    click(navButtons()[0]);
    ready('a');

    click(navButtons()[2]);
    ready('b');
    expect(focusedText()).toBe('item 3');
  });

  describe('a section that is not ready straight away', () => {
    beforeEach(() => { jest.useFakeTimers(); });
    afterEach(() => { jest.useRealTimers(); });

    it('has focus wait on it while it loads, then moves on when it is ready', () => {
      render();
      ready('b');
      click(navButtons()[0]);
      ready('a');
      click(navButtons()[2]);

      expect(document.activeElement).toBe(document.body);

      act(() => { jest.runOnlyPendingTimers(); });
      expect(focusedText()).toBe('section b');

      ready('b');
      expect(focusedText()).toBe('item 3');
    });

    it('is not waited on when it reports ready before the render that shows it', () => {
      const visits: string[] = [];
      const recordFocus = (event: FocusEvent) => visits.push(nameOf(event.target as Element));
      document.addEventListener('focusin', recordFocus);
      const loads: Record<string, () => void> = {};
      const Loading = ({ props }: { props: AssessmentSectionProps }) => {
        const section = useAssessmentSection();
        const [loaded, setLoaded] = React.useState(false);
        loads[props.sectionId] = () => { setLoaded(true); props.onReady(); };
        return loaded
          ? <SectionHost sectionId={props.sectionId} />
          : <div id={section?.sectionDomId} tabIndex={-1} aria-label="Loading" />;
      };
      render({ renderSection: props => { sections[props.sectionId] = props; return <Loading props={props} />; } });
      act(() => loads.b());
      click(navButtons()[3]);

      // the report is held back from rendering while the wait runs out, as a later React may batch it
      act(() => unstable_batchedUpdates(() => {
        loads.c();
        jest.runOnlyPendingTimers();
      }));
      document.removeEventListener('focusin', recordFocus);
      expect(visits).toEqual(['section c']);
    });

    it('is not waited on when it reports ready in time', () => {
      render();
      ready('b');
      click(navButtons()[3]);
      ready('c');

      act(() => { jest.runOnlyPendingTimers(); });
      expect(focusedText()).toBe('section c');
      expect(document.activeElement?.getAttribute('data-section')).toBe('c');
    });

    it('warns when nothing carries the section id while it loads', () => {
      const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
      render({ renderSection: props => { sections[props.sectionId] = props; return null; } });

      click(navButtons()[3]);
      act(() => { jest.runOnlyPendingTimers(); });

      expect(warn).toHaveBeenCalledWith(expect.stringContaining('ExerciseWrapper'));
      warn.mockRestore();
    });
  });

  it('focuses an item in the section already drawn straight away', () => {
    render();
    ready('b');

    click(navButtons()[2]);
    expect(focusedText()).toBe('item 3');
  });

  it('waits for the section again when it is left and returned to', () => {
    render();
    ready('b');

    click(navButtons()[0]);
    click(navButtons()[2]);
    expect(document.activeElement).toBe(document.body);

    ready('b');
    expect(focusedText()).toBe('item 3');
  });

  it('moves on from the item whose Next was clicked', () => {
    render();
    ready('b');

    act(() => sections.b.onNext(2));
    expect(focusedText()).toBe('item 3');

    act(() => sections.b.onNext(3));
    ready('c');
    expect(focusedText()).toBe('section c');
  });

  it('moves from the last item to the completion step, and focuses its heading', () => {
    render();
    click(navButtons()[3]);
    ready('c');

    act(() => sections.c.onNext(4));
    expect(document.activeElement?.tagName).toBe('H2');
    expect(focusedText()).toBe('Quiz is partially complete.');
  });

  it('focuses the completion step whether or not the section it left reported ready', () => {
    render();

    click(navButtons()[3]);
    act(() => sections.c.onNext(4));
    expect(focusedText()).toBe('Quiz is partially complete.');
  });

  it('focuses the current item when its own circle is activated, and only then', () => {
    render();
    ready('b');

    click(navButtons()[1]);
    expect(focusedText()).toBe('section b');

    // a later render of the host, such as the learner typing, leaves focus where it is
    const typing = document.createElement('input');
    document.body.appendChild(typing);
    typing.focus();
    render({ items: items.map(item => ({ ...item })) });
    expect(document.activeElement).toBe(typing);
    typing.remove();
  });

  it('ignores a ready report from a drawing of the section that has since been left', () => {
    render();
    ready('b');
    click(navButtons()[3]);
    const stale = sections.c.onReady;

    click(navButtons()[0]);
    click(navButtons()[3]);
    act(() => stale());
    expect(document.activeElement).toBe(document.body);

    ready('c');
    expect(focusedText()).toBe('section c');
  });

  describe('a new attempt', () => {
    const done = items.map(item => ({ ...item, isCompleted: true, editable: false }));
    const fresh = items.map(item => ({ ...item, isCompleted: false, state: 'isIncomplete' as const }));
    const completion = { onRetry: jest.fn(), score: { current: '0/4', saved: '3/4' } };

    it('opens afresh, drops the reported score, and takes the learner to where it opens', () => {
      render({ items, attemptId: '1', completion });
      act(() => sections.b.onScoreAssessment({ current: '3/4', saved: '3/4' }));
      render({ items: done, attemptId: '1', completion });
      click(navButtons()[4]);
      expect(container.textContent).toContain('Current Score: 3/4');

      render({ items: fresh, attemptId: '2', completion });
      expect(navButtons()[0].getAttribute('aria-current')).toBe('location');

      ready('a');
      expect(focusedText()).toBe('section a');

      click(navButtons()[4]);
      expect(container.textContent).toContain('Current Score: 0/4');
    });

    it('is not opened by the items changing within the same attempt', () => {
      render({ items: done, attemptId: '1', completion });

      render({ items: fresh, attemptId: '1', completion });
      expect(navButtons()[4].getAttribute('aria-current')).toBe('location');
    });
  });

  it('draws nothing until it has items, then opens where the items say', () => {
    render({ items: [] });
    expect(container.innerHTML).toBe('');

    render();
    expect(navButtons()[1].getAttribute('aria-current')).toBe('location');
  });

  it('keeps the learner on their item when the host reorders the items', () => {
    render();
    ready('b');
    click(navButtons()[2]);

    render({ items: [items[1], items[2], items[0], items[3]] });
    expect(navButtons()[1].getAttribute('aria-current')).toBe('location');
    expect(sections.b.firstItemNumber).toBe(1);
  });

  it('opens where it would have when the host drops the current item, and stays there', () => {
    render();
    click(navButtons()[3]);
    const dropped = items.slice(0, 3);

    render({ items: dropped });
    expect(navButtons()[1].getAttribute('aria-current')).toBe('location');

    ready('b');
    expect(focusedText()).toBe('section b');

    // completing the item it fell back to does not move the learner on
    render({ items: dropped.map(item => item.id === 2 ? { ...item, isCompleted: true } : item) });
    expect(navButtons()[1].getAttribute('aria-current')).toBe('location');
  });

  it('draws the section afresh when a fallback lands in another one', () => {
    const mounts: string[] = [];
    const Section = ({ props }: { props: AssessmentSectionProps }) => {
      React.useEffect(() => { mounts.push(props.sectionId); }, []); // eslint-disable-line react-hooks/exhaustive-deps
      return renderSection(props);
    };
    render({ renderSection: props => <Section props={props} /> });
    click(navButtons()[3]);

    render({ items: items.slice(0, 3), renderSection: props => <Section props={props} /> });
    expect(mounts).toEqual(['b', 'c', 'b']);
  });

  it('warns when the section has no element for where focus goes', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
    render({ renderSection: props => { sections[props.sectionId] = props; return <div />; } });

    click(navButtons()[3]);
    ready('c');

    expect(warn).toHaveBeenCalledWith(expect.stringContaining('assessment-'));
    warn.mockRestore();
  });

  it('gives each assessment on the page its own ids', () => {
    const ids: string[] = [];
    const Collect = () => {
      const section = useAssessmentSection();
      if (section) { ids.push(section.sectionDomId ?? "", section.itemDomId(2)); }
      return null;
    };
    act(() => {
      ReactDOM.render(<>
        {[0, 1].map(key => <Assessment key={key} items={items} renderSection={() => <Collect />} completion={{}} />)}
      </>, container);
    });

    expect(new Set(ids).size).toBe(4);
  });

  it('numbers each item within the whole assessment', () => {
    const numbers: Array<number | undefined> = [];
    const Collect = () => {
      const section = useAssessmentSection();
      numbers.push(section?.itemNumber(3), section?.itemNumber('missing'));
      return null;
    };
    render({ renderSection: () => <Collect /> });

    expect(numbers.slice(-2)).toEqual([3, undefined]);
  });

  it('keeps the readiness of the drawing on show when an earlier one reports late', () => {
    render();
    ready('b');
    click(navButtons()[3]);
    const stale = sections.c.onReady;
    click(navButtons()[0]);
    ready('a');
    click(navButtons()[3]);
    ready('c');

    act(() => stale());
    click(navButtons()[3]);
    expect(focusedText()).toBe('section c');
  });

  it('takes focus to a new attempt whose items arrive after it does', () => {
    const done = items.map(item => ({ ...item, isCompleted: true, editable: false }));
    render({ items: done, attemptId: '1' });
    render({ items: [], attemptId: '2' });

    render({ items: done, attemptId: '2' });
    expect(focusedText()).toBe('You are done.');
  });

  it('ignores a Next made for an attempt since replaced', () => {
    const fresh = items.map(item => ({ ...item, isCompleted: false, state: 'isIncomplete' as const }));
    render({ items, attemptId: '1' });
    click(navButtons()[3]);
    const next = sections.c.onNext;

    render({ items: fresh, attemptId: '2' });
    silencingUnmountedUpdate(() => act(() => next(4)));
    expect(navButtons()[0].getAttribute('aria-current')).toBe('location');
  });

  it('ignores a score reported for an attempt since replaced', () => {
    const done = items.map(item => ({ ...item, isCompleted: true, editable: false }));
    const completion = { onRetry: jest.fn(), score: { current: '0/4', saved: '0/4' } };
    render({ items, attemptId: '1', completion });
    const report = sections.b.onScoreAssessment;

    render({ items: done, attemptId: '2', completion });
    silencingUnmountedUpdate(() => act(() => report({ current: '4/4', saved: '4/4' })));
    expect(container.textContent).toContain('Current Score: 0/4');
  });

  it('keeps the attempt, and the learner on their item, when the attempt id goes undefined and comes back', () => {
    render({ items, attemptId: 'a' });
    ready('b');
    click(navButtons()[2]);

    render({ items, attemptId: undefined });
    render({ items, attemptId: 'a' });
    expect(navButtons()[2].getAttribute('aria-current')).toBe('location');
  });

  it('opens a new attempt when the attempt id goes undefined and comes back as another', () => {
    const fresh = items.map(item => ({ ...item, isCompleted: false, state: 'isIncomplete' as const }));
    render({ items, attemptId: 'a' });
    click(navButtons()[3]);

    render({ items, attemptId: undefined });
    render({ items: fresh, attemptId: 'b' });
    expect(navButtons()[0].getAttribute('aria-current')).toBe('location');
  });

  it('does not bring back the score of an attempt returned to', () => {
    const done = items.map(item => ({ ...item, isCompleted: true, editable: false }));
    const completion = { onRetry: jest.fn(), score: { current: '0/4', saved: '0/4' } };
    render({ items, attemptId: 'a', completion });
    act(() => sections.b.onScoreAssessment({ current: '4/4', saved: '4/4' }));

    render({ items: done, attemptId: 'b', completion });
    render({ items: done, attemptId: 'a', completion });
    expect(container.textContent).toContain('Current Score: 0/4');
  });

  it('does not move focus when the attempt is first known after the assessment is drawn', () => {
    render({ items: [] });
    render({ items: [], attemptId: '1' });
    render({ items, attemptId: '1' });
    ready('b');

    expect(document.activeElement).toBe(document.body);
  });

  it('moves on from an item whose id the host gives as a string where its items have a number', () => {
    render();
    ready('b');

    act(() => (sections.b.onNext as (itemId: string) => void)('2'));
    expect(focusedText()).toBe('item 3');
  });

  it('warns of a Next for an item it does not have', () => {
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
    render();

    act(() => sections.b.onNext('missing'));
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('"missing"'));
    expect(navButtons()[1].getAttribute('aria-current')).toBe('location');
    warn.mockRestore();
  });

  describe('a learner who moves focus elsewhere before it gets there', () => {
    let elsewhere: HTMLInputElement;
    beforeEach(() => {
      jest.useFakeTimers();
      elsewhere = document.createElement('input');
      document.body.appendChild(elsewhere);
    });
    afterEach(() => {
      jest.useRealTimers();
      elsewhere.remove();
    });

    it('is left there when the section they were moved to finishes loading', () => {
      render();
      ready('b');
      click(navButtons()[3]);
      act(() => { jest.runOnlyPendingTimers(); });
      expect(focusedText()).toBe('section c');

      elsewhere.focus();
      ready('c');
      expect(document.activeElement).toBe(elsewhere);
    });

    it('is left there by the host dropping the item they were on', () => {
      render();
      ready('b');
      click(navButtons()[2]);
      elsewhere.focus();

      render({ items: items.filter(item => item.id !== 3) });
      expect(navButtons()[1].getAttribute('aria-current')).toBe('location');
      expect(document.activeElement).toBe(elsewhere);
    });
  });

  it('takes focus where the assessment falls back to when the host drops the item that had it', () => {
    render();
    ready('b');
    click(navButtons()[2]);
    expect(focusedText()).toBe('item 3');

    hostItems = items.filter(item => item.id !== 3);
    render({ items: hostItems });
    expect(focusedText()).toBe('section b');
  });

  describe('scrolling to where focus goes', () => {
    // where each element's top is, by its text or label; anything not named is at the top of the screen
    let tops: Record<string, number> = {};
    let bottoms: Record<string, number> = {};
    const scrollName = (element: Element) => element.getAttribute('data-card')
      ? `card ${element.getAttribute('data-card')}`
      : nameOf(element);
    let scrollIntoView: jest.Mock;
    // what is drawn at a point is what was last measured, unless something is laid over it
    const measured: { last: Element | null } = { last: null };
    let covering: Element | undefined;
    beforeEach(() => {
      tops = {};
      bottoms = {};
      covering = undefined;
      jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function(this: HTMLElement) {
        measured.last = this;
        const name = scrollName(this);
        return { top: tops[name] ?? 0, bottom: bottoms[name] ?? window.innerHeight, left: 0, right: 100 } as DOMRect;
      });
      // jsdom has no layout, so no scrolling and nothing drawn anywhere of its own
      scrollIntoView = jest.fn();
      Element.prototype.scrollIntoView = scrollIntoView;
      document.elementFromPoint = jest.fn(() => covering ?? measured.last);
    });
    afterEach(() => {
      jest.restoreAllMocks();
      delete (Element.prototype as Partial<Element>).scrollIntoView;
      delete (document as Partial<Document>).elementFromPoint;
    });
    const scrolledTo = () => scrollIntoView.mock.instances.map((element: Element, call) =>
      [scrollName(element), scrollIntoView.mock.calls[call][0]]);
    const smoothly = { block: 'start', behavior: 'smooth' };

    it('scrolls to a section above the screen by its card', () => {
      render();
      ready('b');
      tops['card c'] = -800;

      click(navButtons()[3]);
      ready('c');
      expect(focusedText()).toBe('section c');
      expect(scrolledTo()).toEqual([['card c', smoothly]]);
    });

    it('scrolls to a section below the screen', () => {
      render();
      ready('b');
      tops['card c'] = window.innerHeight + 1;

      click(navButtons()[3]);
      ready('c');
      expect(scrolledTo()).toEqual([['card c', smoothly]]);
    });

    it('scrolls to a section whose top is in the bottom half of the screen', () => {
      render();
      ready('b');
      tops['card c'] = window.innerHeight * 0.6;

      click(navButtons()[3]);
      ready('c');
      expect(scrolledTo()).toEqual([['card c', smoothly]]);
    });

    it('leaves a section whose top is in the top half of the screen where it is', () => {
      render();
      ready('b');
      tops['card c'] = window.innerHeight * 0.4;

      click(navButtons()[3]);
      ready('c');
      expect(scrollIntoView).not.toHaveBeenCalled();
    });

    it('judges by the panel the host scrolls the assessment in, where it has one', () => {
      container.setAttribute('aria-label', 'panel');
      container.style.overflowY = 'auto';
      Object.defineProperty(container, 'scrollHeight', { value: 2000 });
      Object.defineProperty(container, 'clientHeight', { value: 200 });
      render();
      ready('b');
      const screenMiddle = window.innerHeight / 2;

      // in the bottom half of the panel, though in the top half of the screen
      tops.panel = screenMiddle - 300;
      bottoms.panel = screenMiddle - 100;
      tops['card c'] = screenMiddle - 150;
      click(navButtons()[3]);
      ready('c');
      expect(scrolledTo()).toEqual([['card c', smoothly]]);

      // in the top half of the panel, though in the bottom half of the screen
      scrollIntoView.mockClear();
      tops.panel = screenMiddle + 100;
      bottoms.panel = screenMiddle + 300;
      tops['card c'] = screenMiddle + 150;
      click(navButtons()[3]);
      expect(scrollIntoView).not.toHaveBeenCalled();
    });

    it('judges by every panel it scrolls within, where one is inside another', () => {
      const outer = document.createElement('div');
      document.body.appendChild(outer);
      outer.appendChild(container);
      try {
        [[outer, 'outer panel'], [container, 'inner panel']].forEach(([panel, name]) => {
          (panel as HTMLElement).setAttribute('aria-label', name as string);
          (panel as HTMLElement).style.overflowY = 'auto';
          Object.defineProperty(panel, 'scrollHeight', { value: 2000 });
          Object.defineProperty(panel, 'clientHeight', { value: 200 });
        });
        tops['inner panel'] = 100;
        bottoms['inner panel'] = 700;
        tops['outer panel'] = 400;
        bottoms['outer panel'] = 500;
        render();
        ready('b');

        // in the top half of the inner panel, but above what the outer one shows of it
        tops['card c'] = 300;
        click(navButtons()[3]);
        ready('c');
        expect(scrolledTo()).toEqual([['card c', smoothly]]);
      } finally {
        document.body.appendChild(container);
        outer.remove();
      }
    });

    it('leaves a section on screen where it is', () => {
      render();
      ready('b');

      click(navButtons()[3]);
      ready('c');
      expect(focusedText()).toBe('section c');
      expect(scrollIntoView).not.toHaveBeenCalled();
    });

    it('scrolls to an item after the first by itself', () => {
      render();
      ready('b');
      tops['item 3'] = -200;

      act(() => sections.b.onNext(2));
      expect(focusedText()).toBe('item 3');
      expect(scrolledTo()).toEqual([['item 3', smoothly]]);
    });

    it('scrolls to the completion step by its heading', () => {
      render();
      click(navButtons()[3]);
      ready('c');
      tops['Quiz is partially complete.'] = -300;

      act(() => sections.c.onNext(4));
      expect(scrolledTo()).toEqual([['Quiz is partially complete.', smoothly]]);
    });

    it('scrolls without animating for a learner who prefers reduced motion', () => {
      window.matchMedia = jest.fn().mockImplementation((query: string) =>
        ({ matches: query === '(prefers-reduced-motion: reduce)' }));
      try {
        render();
        ready('b');
        tops['card c'] = -800;

        click(navButtons()[3]);
        ready('c');
        expect(scrolledTo()).toEqual([['card c', { block: 'start', behavior: 'instant' }]]);
      } finally {
        delete (window as Partial<Window>).matchMedia;
      }
    });

    it('scrolls to a section whose top is covered, as by a sticky header', () => {
      const header = document.createElement('header');
      document.body.appendChild(header);
      try {
        render();
        ready('b');
        tops['card c'] = 40;
        covering = header;

        click(navButtons()[3]);
        ready('c');
        expect(scrolledTo()).toEqual([['card c', smoothly]]);
        expect(document.elementFromPoint).toHaveBeenCalledWith(50, 41);
      } finally {
        header.remove();
      }
    });

    describe('a section that loads while its loader is scrolled to', () => {
      const loaded: Record<string, boolean> = {};
      const Loading = () => {
        const section = useAssessmentSection();
        return <div id={section?.sectionDomId} tabIndex={-1} aria-label="Loading" />;
      };
      const loadingSection = (props: AssessmentSectionProps) => {
        sections[props.sectionId] = props;
        return loaded[props.sectionId] ? <SectionHost sectionId={props.sectionId} /> : <Loading />;
      };
      beforeEach(() => {
        jest.useFakeTimers();
        Object.keys(loaded).forEach(key => delete loaded[key]);
      });
      afterEach(() => { jest.useRealTimers(); });

      it('is scrolled to though it is on screen, as that scroll may not have landed', () => {
        render({ renderSection: loadingSection });
        loaded.b = true;
        ready('b');
        tops.Loading = -500;
        click(navButtons()[3]);
        act(() => { jest.runOnlyPendingTimers(); });

        loaded.c = true;
        ready('c');
        expect(focusedText()).toBe('section c');
        expect(scrolledTo()).toEqual([['Loading', smoothly], ['card c', smoothly]]);
      });

      it('is left where it is when its loader was on screen, and not scrolled to', () => {
        render({ renderSection: loadingSection });
        loaded.b = true;
        ready('b');
        click(navButtons()[3]);
        act(() => { jest.runOnlyPendingTimers(); });

        loaded.c = true;
        ready('c');
        expect(focusedText()).toBe('section c');
        expect(scrollIntoView).not.toHaveBeenCalled();
      });
    });

    it('scrolls to the section itself when nothing carries its scroll target', () => {
      jest.useFakeTimers();
      try {
        const Loading = () => {
          const section = useAssessmentSection();
          return <div id={section?.sectionDomId} tabIndex={-1} aria-label="Loading" />;
        };
        render({ renderSection: props => { sections[props.sectionId] = props; return <Loading />; } });
        ready('b');
        tops.Loading = -500;

        click(navButtons()[3]);
        act(() => { jest.runOnlyPendingTimers(); });
        expect(focusedText()).toBe('Loading');
        expect(scrolledTo()).toEqual([['Loading', smoothly]]);
      } finally {
        jest.useRealTimers();
      }
    });
  });

  describe('the completion step', () => {
    const toCompletion = () => click(navButtons()[4]);

    it('continues to the first incomplete item', () => {
      render();
      toCompletion();

      click(container.querySelector('[data-test-id=resume-btn]'));
      expect(navButtons()[1].getAttribute('aria-current')).toBe('location');
    });

    it('edits the first editable response', () => {
      render({ items: items.map(item => ({ ...item, isCompleted: true })) });

      click(container.querySelector('[data-test-id=edit-responses-btn]'));
      expect(navButtons()[3].getAttribute('aria-current')).toBe('location');
    });

    it('offers no edit when nothing is editable', () => {
      render({ items: items.map(item => ({ ...item, isCompleted: true, editable: false })) });

      expect(container.querySelector('[data-test-id=edit-responses-btn]')).toBeNull();
    });

    it('shows the latest score a section reported, over the one it started with', () => {
      const completion = { onNext: jest.fn(), onRetry: jest.fn(), score: { current: '0/4', saved: '0/4' } };
      // with nothing to edit, so the completion step shows the score rather than offering edits
      render({ completion, items: items.map(item => ({ ...item, editable: false })) });
      act(() => sections.b.onScoreAssessment({ current: '1/4', saved: '1/4' }));
      act(() => sections.b.onScoreAssessment({ current: '2/4', saved: '1/4' }));

      toCompletion();
      expect(container.textContent).toContain('Current Score: 2/4');
      expect(container.textContent).toContain('Saved Score: 1/4');
    });

    it('offers no Next when there is no next step after the assessment', () => {
      render({ items: items.map(item => ({ ...item, isCompleted: true, editable: false })), completion: {} });

      expect(container.querySelector('[data-test-id=next-btn]')).toBeNull();
    });

    it('hands retry, score and leaving to the host', () => {
      const onNext = jest.fn();
      const onRetry = jest.fn();
      // with nothing to edit, a retry-able assessment shows its score
      render({
        items: items.map(item => ({ ...item, isCompleted: true, editable: false })),
        completion: { onNext, onRetry, score: { current: '3/4', saved: '2/4' } },
      });

      expect(container.textContent).toContain('3/4');
      click(container.querySelector('[data-test-id=retry-resume-btn]'));
      click(container.querySelector('[data-test-id=next-btn]'));
      expect(onRetry).toHaveBeenCalled();
      expect(onNext).toHaveBeenCalled();
    });
  });

  describe('drawn with the components made for it', () => {
    // a host that loads each section when it is drawn, in an ExerciseWrapper with a QuestionWrapper per item
    const loads: Record<string, () => void> = {};
    const Section = ({ sectionId, firstItemNumber, onNext, onReady, readyOnMount }: AssessmentSectionProps & { readyOnMount?: boolean }) => {
      const [loaded, setLoaded] = React.useState(readyOnMount ?? false);
      loads[sectionId] = () => setLoaded(true);
      React.useEffect(() => { if (loaded) { onReady(); } }, [loaded, onReady]);
      const sectionItems = items.filter(item => item.section === sectionId);

      if (!loaded) { return <Loader />; }
      return <ExerciseWrapper questionNumber={firstItemNumber} numberOfQuestions={sectionItems.length}>
        {sectionItems.map(item => <QuestionWrapper
          key={item.id}
          itemId={item.id}
          is_completed={item.isCompleted}
          canAnswer={false}
          apiIsPending={false}
          canUpdateCurrentStep={false}
          onAnswerSave={jest.fn()}
          onNextStep={() => onNext(item.id)}
        >item {item.id}</QuestionWrapper>)}
      </ExerciseWrapper>;
    };
    let focused: string[];
    const recordFocus = (event: FocusEvent) => focused.push(nameOf(event.target as Element));
    beforeEach(() => {
      focused = [];
      document.addEventListener('focusin', recordFocus);
    });
    afterEach(() => { document.removeEventListener('focusin', recordFocus); });

    it('has focus wait on the loader, then takes it to the section and on through its questions', () => {
      jest.useFakeTimers();
      try {
        render({ renderSection: props => <Section {...props} /> });
        act(() => loads.b());

        click(navButtons()[0]);
        act(() => { jest.runOnlyPendingTimers(); });
        expect(focusedText()).toBe('Loading');

        act(() => loads.a());
        expect(focusedText()).toBe('Question 1');

        click(container.querySelector('[data-test-id=continue-btn]'));
        act(() => { jest.runOnlyPendingTimers(); });
        act(() => loads.b());
        expect(focusedText()).toBe('Questions 2 through 3');

        click(container.querySelectorAll('[data-test-id=continue-btn]')[0]);
        expect(focusedText()).toBe('Question 3');

        click(container.querySelectorAll('[data-test-id=continue-btn]')[1]);
        act(() => { jest.runOnlyPendingTimers(); });
        act(() => loads.c());
        click(container.querySelector('[data-test-id=continue-btn]'));
        expect(document.activeElement?.tagName).toBe('H2');
      } finally {
        jest.useRealTimers();
      }
    });

    it('never has focus visit the loader of a section ready as soon as it is drawn', () => {
      jest.useFakeTimers();
      try {
        render({ renderSection: props => <Section {...props} readyOnMount /> });
        click(navButtons()[0]);
        click(navButtons()[2]);
        act(() => { jest.runOnlyPendingTimers(); });

        expect(focused).toEqual(['Question 1', 'Question 3']);
      } finally {
        jest.useRealTimers();
      }
    });

    it('keeps the section id off a loader drawn inside the section, as while a question loads', () => {
      render({
        renderSection: ({ firstItemNumber }) =>
          <ExerciseWrapper questionNumber={firstItemNumber} numberOfQuestions={2}><Loader /></ExerciseWrapper>,
      });

      const carriers = container.querySelectorAll('[id$="-section"]');
      expect(carriers).toHaveLength(1);
      expect(carriers[0].getAttribute('role')).toBe('group');
    });
  });
});
