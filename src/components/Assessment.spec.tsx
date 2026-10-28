import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { useAssessmentSection } from '../hooks/useAssessmentSection';
import { Assessment, AssessmentItem, AssessmentProps, AssessmentSectionProps } from './Assessment';

jest.mock('scroll-to-element', () => jest.fn());

const items: AssessmentItem[] = [
  { id: 1, section: 'a', state: 'isCorrect', isCompleted: true },
  { id: 2, section: 'b', state: 'isIncomplete', isCompleted: false },
  { id: 3, section: 'b', state: 'isIncomplete', isCompleted: false },
  { id: 4, section: 'c', state: null, isCompleted: true, editable: true },
];

/**
 * A host section: the section itself and each of its items carry the ids the assessment gives
 * them, as `ExerciseWrapper` and `QuestionWrapper` do, and it reports itself ready only when the
 * test says so — the way a host that loads its section does.
 */
const SectionHost = ({ sectionId }: { sectionId: string }) => {
  const section = useAssessmentSection();
  return <div data-section={sectionId} id={section?.sectionDomId} tabIndex={-1} aria-label={`section ${sectionId}`}>
    {items.filter(item => item.section === sectionId).map(item =>
      <div key={item.id} id={section?.itemDomId(item.id)} tabIndex={-1}>item {item.id}</div>
    )}
  </div>;
};
const sections: Record<string, AssessmentSectionProps> = {};
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
  const focusedText = () => document.activeElement?.getAttribute('aria-label') ?? document.activeElement?.textContent;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    window.scrollTo = jest.fn();
    Object.keys(sections).forEach(key => delete sections[key]);
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
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
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

      act(() => { jest.advanceTimersByTime(9); });
      expect(document.activeElement).toBe(document.body);

      act(() => { jest.advanceTimersByTime(1); });
      expect(focusedText()).toBe('section b');

      ready('b');
      expect(focusedText()).toBe('item 3');
    });

    it('is not waited on when it reports ready in time', () => {
      render();
      ready('b');
      click(navButtons()[3]);
      ready('c');

      act(() => { jest.advanceTimersByTime(10); });
      expect(focusedText()).toBe('section c');
      expect(document.activeElement?.getAttribute('data-section')).toBe('c');
    });

    it('warns when nothing carries the section id while it loads', () => {
      const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
      render({ renderSection: props => { sections[props.sectionId] = props; return null; } });

      click(navButtons()[3]);
      act(() => { jest.advanceTimersByTime(10); });

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
      if (section) { ids.push(section.sectionDomId, section.itemDomId(2)); }
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
    act(() => next(4));
    expect(navButtons()[0].getAttribute('aria-current')).toBe('location');
  });

  it('ignores a score reported for an attempt since replaced', () => {
    const done = items.map(item => ({ ...item, isCompleted: true, editable: false }));
    const completion = { onRetry: jest.fn(), score: { current: '0/4', saved: '0/4' } };
    render({ items, attemptId: '1', completion });
    const report = sections.b.onScoreAssessment;

    render({ items: done, attemptId: '2', completion });
    act(() => report({ current: '4/4', saved: '4/4' }));
    expect(container.textContent).toContain('Current Score: 0/4');
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
});
