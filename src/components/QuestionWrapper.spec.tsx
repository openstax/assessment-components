import 'jest-styled-components';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { QuestionWrapper, QuestionWrapperProps } from './QuestionWrapper';
import { byClass, findNode, inAssessmentSection, textOf as renderedText } from '../test/utils';
import { colors } from '../theme';

const props: QuestionWrapperProps = {
  is_completed: false,
  canAnswer: true,
  apiIsPending: false,
  canUpdateCurrentStep: false,
  onAnswerSave: () => undefined,
  onNextStep: () => undefined,
  children: <div>body</div>,
};

const textOf = (tree: renderer.ReactTestRenderer, testId: string) => {
  const found = tree.root.findAllByProps({ 'data-test-id': testId });
  return found.length ? found[0].props.children : undefined;
};

describe('QuestionWrapper', () => {
  describe('the three arrangements', () => {
    it('renders Next when the question cannot be answered', () => {
      const tree = renderer.create(<QuestionWrapper {...props} canAnswer={false} />);
      expect(textOf(tree, 'continue-btn')).toEqual('Next');
      expect(tree.root.findAllByProps({ 'data-test-id': 'submit-answer-btn' })).toHaveLength(0);
    });

    it('renders Continue when the host can move to another step', () => {
      const tree = renderer.create(
        <QuestionWrapper {...props} canAnswer={false} canUpdateCurrentStep={true} />
      );
      expect(textOf(tree, 'continue-btn')).toEqual('Continue');
    });

    it('renders Submit when the question is answerable and incomplete', () => {
      const tree = renderer.create(<QuestionWrapper {...props} hasFeedback={true} />);
      expect(textOf(tree, 'submit-answer-btn')).toEqual('Submit');
    });

    it('renders Re-submit once an attempt has been made', () => {
      const tree = renderer.create(
        <QuestionWrapper {...props} hasFeedback={true} attempt_number={1} />
      );
      expect(textOf(tree, 'submit-answer-btn')).toEqual('Re-submit');
    });

    it('renders Submit when no attempts are counted', () => {
      // `undefined == 0` is false, so an absent attempt_number used to read "Re-submit"
      const tree = renderer.create(<QuestionWrapper {...props} hasFeedback={true} />);
      expect(textOf(tree, 'submit-answer-btn')).toEqual('Submit');
    });

    it('renders Cancel, Update and Next together when a completed question is still answerable', () => {
      const tree = renderer.create(<QuestionWrapper {...props} is_completed={true} />);
      expect(tree.root.findAllByProps({ 'data-test-id': 'update-answer-btn' })).not.toHaveLength(0);
      expect(textOf(tree, 'continue-btn')).toEqual('Next');
      expect(tree.root.findAllByType('button')).toHaveLength(3);
    });

    it('renders no buttons when showControls is false', () => {
      const tree = renderer.create(
        <QuestionWrapper {...props} canAnswer={false} showControls={false} footerChildren={<div>solution</div>} />
      );
      expect(tree.root.findAllByType('button')).toHaveLength(0);
      expect(tree.root.findAllByProps({ className: 'controls' })).toHaveLength(0);
    });
  });

  describe('the left region', () => {
    it('renders nothing when there is nothing to say', () => {
      const tree = renderer.create(<QuestionWrapper {...props} />);
      expect(tree.root.findAllByProps({ className: 'points' })).toHaveLength(0);
    });

    it('announces the attempts remaining', () => {
      const tree = renderer.create(<QuestionWrapper {...props} attemptsRemaining={2} />);
      const region = tree.root.findByProps({ className: 'attempts-left' });
      expect(region.props.role).toEqual('status');
      expect(renderedText(findNode(tree.toJSON(), byClass('attempts-left')) || null)).toBe('2 attempts left');
    });

    it('uses the singular for a single attempt', () => {
      const tree = renderer.create(<QuestionWrapper {...props} attemptsRemaining={1} />);
      expect(renderedText(findNode(tree.toJSON(), byClass('attempts-left')) || null)).toBe('1 attempt left');
    });

    it('tells a learner about unlimited quiz attempts, whatever the format', () => {
      const tree = renderer.create(<QuestionWrapper {...props} hasUnlimitedAttempts={true} />);
      expect(JSON.stringify(tree.toJSON())).toContain('Unlimited quiz attempts left');
    });

    it('renders composed feedback', () => {
      const tree = renderer.create(
        <QuestionWrapper {...props} footerChildren={<div data-test-id="feedback" />} />
      );
      expect(tree.root.findAllByProps({ 'data-test-id': 'feedback' })).not.toHaveLength(0);
    });
  });

  describe('the disabled conditions', () => {
    it('leaves controls enabled when the body reports nothing', () => {
      const tree = renderer.create(<QuestionWrapper {...props} hasFeedback={true} />);
      expect(tree.root.findByProps({ 'data-test-id': 'submit-answer-btn' }).props['aria-disabled']).toBeFalsy();
    });

    it('makes Submit unavailable, but focusable, when the body says the response is not submittable', () => {
      const tree = renderer.create(
        <QuestionWrapper {...props} hasFeedback={true} canSubmit={false} />
      );
      expect(tree.root.findByProps({ 'data-test-id': 'submit-answer-btn' }).props['aria-disabled']).toBe(true);
    });

    it('makes Cancel disabled and Update unavailable until the response differs from the last submission', () => {
      const tree = renderer.create(
        <QuestionWrapper {...props} is_completed={true} dirty={false} />
      );
      expect(tree.root.findByProps({ 'data-test-id': 'update-answer-btn' }).props['aria-disabled']).toBe(true);
      expect(tree.root.findByProps({ 'data-test-id': 'continue-btn' }).props.disabled).toBe(false);
    });

    it('disables Next while there is an unsaved change', () => {
      const tree = renderer.create(
        <QuestionWrapper {...props} is_completed={true} dirty={true} />
      );
      expect(tree.root.findByProps({ 'data-test-id': 'continue-btn' }).props.disabled).toBe(true);
    });
  });

  describe('cancelling', () => {
    it('hands the Cancel click event to the handler', () => {
      const onCancel = jest.fn();
      const tree = renderer.create(
        <QuestionWrapper {...props} is_completed={true} dirty={true} onCancel={onCancel} />
      );
      const event = { preventDefault: jest.fn() };

      // the Cancel button carries no test id, so it is found the way a learner sees it
      const cancel = tree.root.findAll(
        (node) => node.type === 'button' && node.props.children === 'Cancel'
      )[0];

      renderer.act(() => { cancel.props.onClick(event); });

      expect(onCancel).toHaveBeenCalledWith(event);
    });
  });

  describe('without onNextStep, for a host that navigates on its own', () => {
    const withoutNext: QuestionWrapperProps = { ...props, onNextStep: undefined };

    it('holds the place of Next with an unavailable Submit once the question cannot be answered', () => {
      const tree = renderer.create(<QuestionWrapper {...withoutNext} canAnswer={false} />);
      expect(tree.root.findAllByProps({ 'data-test-id': 'continue-btn' })).toHaveLength(0);
      const submit = tree.root.find(node => node.type === 'button' && node.props['data-test-id'] === 'submit-answer-btn');
      expect(submit.props.children).toEqual('Submit');
      expect(submit.props['aria-disabled']).toBe(true);
    });

    it('labels the disabled button Re-submit once an attempt has been made', () => {
      const tree = renderer.create(
        <QuestionWrapper {...withoutNext} canAnswer={false} attempt_number={1} />
      );
      expect(textOf(tree, 'submit-answer-btn')).toEqual('Re-submit');
    });

    it('renders only Cancel and Update when a completed question is still answerable', () => {
      const tree = renderer.create(<QuestionWrapper {...withoutNext} is_completed={true} />);
      expect(tree.root.findAllByProps({ 'data-test-id': 'update-answer-btn' })).not.toHaveLength(0);
      expect(tree.root.findAllByProps({ 'data-test-id': 'continue-btn' })).toHaveLength(0);
      expect(tree.root.findAllByType('button')).toHaveLength(2);
    });

    it('renders an enabled Submit while the question is answerable', () => {
      const tree = renderer.create(<QuestionWrapper {...withoutNext} />);
      const submit = tree.root.findByProps({ 'data-test-id': 'submit-answer-btn' });
      expect(submit.props.children).toEqual('Submit');
      expect(submit.props['aria-disabled']).toBeFalsy();
    });

    it('does not offer to continue when hasFeedback is false, since there is nowhere to go', () => {
      const onAnswerSave = jest.fn();
      const tree = renderer.create(
        <QuestionWrapper {...withoutNext} hasFeedback={false} onAnswerSave={onAnswerSave} />
      );
      expect(textOf(tree, 'submit-answer-btn')).toEqual('Submit');

      renderer.act(() => {
        tree.root.findByProps({ 'data-test-id': 'submit-answer-btn' }).props.onClick();
      });
      expect(onAnswerSave).toHaveBeenCalled();
      // not held waiting for an advance that will never come
      expect(tree.root.findByProps({ 'data-test-id': 'submit-answer-btn' }).props.isWaiting).toBe(false);
    });
  });

  describe('footer button colours', () => {
    const buttonJson = (label: string) => {
      const tree = renderer.create(<QuestionWrapper {...props} is_completed={true} dirty={true} />);
      const search = (node: renderer.ReactTestRendererNode | null): renderer.ReactTestRendererJSON | undefined => {
        if (!node || typeof node === 'string') return undefined;
        if (node.type === 'button' && node.children?.includes(label)) return node;
        return node.children?.map(search).find(Boolean);
      };
      const json = tree.toJSON();
      return (Array.isArray(json) ? json : [json]).map(search).find(Boolean);
    };

    it('colours Cancel from the secondary set in each state', () => {
      const cancel = buttonJson('Cancel');

      expect(cancel).toHaveStyleRule('background-color', colors.button.secondary.background);
      expect(cancel).toHaveStyleRule(
        'background-color', colors.button.secondary.backgroundHover, { modifier: ':hover:not(:disabled)' }
      );
      expect(cancel).toHaveStyleRule(
        'background-color', colors.button.secondary.backgroundActive, { modifier: ':active:not(:disabled)' }
      );
    });

    it('colours Update from the primary set in each state', () => {
      const update = buttonJson('Update');

      expect(update).toHaveStyleRule('background', colors.button.backgroundHover, { modifier: ':not([disabled]):not([aria-disabled="true"]):hover' });
      expect(update).toHaveStyleRule('background', colors.button.backgroundActive, { modifier: ':not([disabled]):not([aria-disabled="true"]):active' });
    });
  });

  describe('navigation', () => {
    it('advances by itself while hasFeedback is false', () => {
      const onNextStep = jest.fn();
      const tree = renderer.create(
        <QuestionWrapper {...props} hasFeedback={false} onNextStep={onNextStep} />
      );
      expect(textOf(tree, 'submit-answer-btn')).toEqual('Submit & continue');

      renderer.act(() => {
        tree.root.findByProps({ 'data-test-id': 'submit-answer-btn' }).props.onClick();
      });
      renderer.act(() => {
        tree.update(<QuestionWrapper {...props} hasFeedback={false} onNextStep={onNextStep} is_completed={true} />);
      });

      expect(onNextStep).toHaveBeenCalled();
    });

    it('does not advance when hasFeedback is omitted, which is the host-driven path', () => {
      const onNextStep = jest.fn();
      const onAnswerSave = jest.fn();
      const tree = renderer.create(
        <QuestionWrapper {...props} onNextStep={onNextStep} onAnswerSave={onAnswerSave} />
      );
      // a plain Submit: the host owns what happens after its own POST returns
      expect(textOf(tree, 'submit-answer-btn')).toEqual('Submit');

      renderer.act(() => {
        tree.root.findByProps({ 'data-test-id': 'submit-answer-btn' }).props.onClick();
      });
      renderer.act(() => {
        tree.update(<QuestionWrapper {...props} onNextStep={onNextStep} onAnswerSave={onAnswerSave} is_completed={true} />);
      });

      expect(onAnswerSave).toHaveBeenCalled();
      expect(onNextStep).not.toHaveBeenCalled();
    });

    it('leaves navigation to the host when hasFeedback is true', () => {
      const onNextStep = jest.fn();
      const onAnswerSave = jest.fn();
      const tree = renderer.create(
        <QuestionWrapper {...props} hasFeedback={true} onNextStep={onNextStep} onAnswerSave={onAnswerSave} />
      );

      renderer.act(() => {
        tree.root.findByProps({ 'data-test-id': 'submit-answer-btn' }).props.onClick();
      });
      renderer.act(() => {
        tree.update(<QuestionWrapper {...props} hasFeedback={true} onNextStep={onNextStep} onAnswerSave={onAnswerSave} is_completed={true} />);
      });

      expect(onAnswerSave).toHaveBeenCalled();
      expect(onNextStep).not.toHaveBeenCalled();
    });
  });

  describe('as an assessment navigates to it', () => {
    it('is a focusable group named by its number when drawn in an assessment\'s section', () => {
      const tree = renderer.create(inAssessmentSection(<QuestionWrapper {...props} itemId={1} />, { 1: 3 }));
      const body = tree.root.find(node => node.type === 'div' && node.props.id === 'item-1');

      expect(body.props.tabIndex).toBe(-1);
      expect(body.props.role).toBe('group');
      expect(body.props['aria-label']).toBe('Question 3');
    });

    it.each([
      ['outside an assessment', <QuestionWrapper key="q" {...props} itemId={1} />],
      ['without an item id', inAssessmentSection(<QuestionWrapper {...props} />, { 1: 3 })],
      ['for an item the assessment does not have', inAssessmentSection(<QuestionWrapper {...props} itemId={2} />, { 1: 3 })],
    ])('is a plain body section %s', (_, element) => {
      const tree = renderer.create(element);

      const groups = tree.root.findAll(node => node.type === 'div' && node.props.role === 'group');
      expect(groups.map(node => node.props.className)).toEqual(['controls']);
    });
  });

  describe('focus, once a save the learner pressed lands', () => {
    let container: HTMLDivElement;
    const draw = (overrides: Partial<QuestionWrapperProps>) => act(() => {
      ReactDOM.render(<QuestionWrapper {...props} {...overrides as QuestionWrapperProps} />, container);
    });
    const button = (testId: string) => container.querySelector(`button[data-test-id=${testId}]`) as HTMLButtonElement;
    const press = (testId: string) => act(() => { button(testId).focus(); button(testId).click(); });

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container);
      container.remove();
    });

    it('stays on Submit while it is pending, then moves on to Next', () => {
      draw({});
      press('submit-answer-btn');

      draw({ apiIsPending: true });
      expect(document.activeElement).toBe(button('submit-answer-btn'));

      draw({ is_completed: true, canAnswer: false });
      expect(document.activeElement).toBe(button('continue-btn'));
    });

    const controls = () => container.querySelector('.controls') as HTMLDivElement;

    it('moves to the controls, which say none can be used, when only the Submit holding Next\'s place is left', () => {
      draw({ onNextStep: undefined });
      press('submit-answer-btn');

      draw({ onNextStep: undefined, apiIsPending: true });
      draw({ onNextStep: undefined, is_completed: true, canAnswer: false });
      expect(document.activeElement).toBe(controls());
      expect(controls().getAttribute('aria-label')).toBe('No actions available');
    });

    it('moves to the controls, which say none can be used, after a first save that leaves nothing to do', () => {
      draw({ onNextStep: undefined });
      press('submit-answer-btn');

      draw({ onNextStep: undefined, apiIsPending: true });
      draw({ onNextStep: undefined, is_completed: true, dirty: false });
      expect(document.activeElement).toBe(controls());
      expect(controls().getAttribute('aria-label')).toBe('No actions available');
    });

    it('names the controls by the question number in an assessment, and for whether any can be used', () => {
      act(() => {
        ReactDOM.render(inAssessmentSection(<QuestionWrapper {...props} itemId={1} />, { 1: 3 }), container);
      });
      expect(controls().getAttribute('aria-label')).toBe('Question 3 actions');

      act(() => {
        ReactDOM.render(inAssessmentSection(<QuestionWrapper {...props} itemId={1} canSubmit={false} />, { 1: 3 }), container);
      });
      expect(controls().getAttribute('aria-label')).toBe('Question 3, no actions available');
    });

    it('is not reached by tabbing, only moved to', () => {
      draw({});
      expect(controls().tabIndex).toBe(-1);
    });

    it('moves on from Update to Next once there is nothing left to save', () => {
      draw({ is_completed: true, dirty: true });
      press('update-answer-btn');

      draw({ is_completed: true, dirty: true, apiIsPending: true });
      expect(document.activeElement).toBe(button('update-answer-btn'));

      draw({ is_completed: true, dirty: false });
      expect(document.activeElement).toBe(button('continue-btn'));
    });

    it('moves from Update to the controls once there is nothing left to save, for a host that navigates on its own', () => {
      draw({ onNextStep: undefined, is_completed: true, dirty: true });
      press('update-answer-btn');
      draw({ onNextStep: undefined, is_completed: true, dirty: true, apiIsPending: true });

      draw({ onNextStep: undefined, is_completed: true, dirty: false });
      expect(document.activeElement).toBe(controls());
      expect(controls().getAttribute('aria-label')).toBe('No actions available');
    });

    it('moves from Submit on to Next when Next becomes available only a render after the save lands', () => {
      draw({});
      press('submit-answer-btn');
      draw({ apiIsPending: true });

      // an editable response: the body still reports its edit as unsaved, so Next is unavailable
      draw({ is_completed: true, dirty: true });
      expect(document.activeElement).toBe(button('update-answer-btn'));

      draw({ is_completed: true, dirty: false });
      expect(document.activeElement).toBe(button('continue-btn'));
    });

    it('leaves a learner who moved to another of its controls where they are', () => {
      const cancel = () => Array.from(container.querySelectorAll('button')).find(b => b.textContent === 'Cancel') as HTMLButtonElement;
      draw({});
      press('submit-answer-btn');
      draw({ apiIsPending: true });
      // Next is unavailable while the edit is unsaved, so Update stands in for it
      draw({ is_completed: true, dirty: true });
      expect(document.activeElement).toBe(button('update-answer-btn'));

      act(() => { cancel().focus(); });
      draw({ is_completed: true, dirty: false });
      expect(document.activeElement).toBe(cancel());
    });

    it('moves on from the question the learner last saved when two saves land together', () => {
      const drawBoth = (first: Partial<QuestionWrapperProps>, second: Partial<QuestionWrapperProps>) => act(() => {
        ReactDOM.render(<>
          <div data-question="1"><QuestionWrapper {...props} {...first as QuestionWrapperProps} /></div>
          <div data-question="2"><QuestionWrapper {...props} {...second as QuestionWrapperProps} /></div>
        </>, container);
      });
      const inQuestion = (n: number, testId: string) =>
        container.querySelector(`[data-question="${n}"] button[data-test-id=${testId}]`) as HTMLButtonElement;
      const pressIn = (n: number) => act(() => { inQuestion(n, 'submit-answer-btn').focus(); inQuestion(n, 'submit-answer-btn').click(); });

      drawBoth({}, {});
      pressIn(1);
      drawBoth({ apiIsPending: true }, {});
      pressIn(2);
      drawBoth({ apiIsPending: true }, { apiIsPending: true });

      drawBoth({ is_completed: true, canAnswer: false }, { is_completed: true, canAnswer: false });
      expect(document.activeElement).toBe(inQuestion(2, 'continue-btn'));
    });

    /*
     * Clicking empty page space moves focus to the body, as the button going away does, and in a
     * browser the blur names nothing it moved to. jsdom names the document instead, so its blur
     * is swallowed and a browser's dispatched in its place. Whether the learner let go is settled
     * once the render, if any, is done, so this waits that long.
     */
    const clickAway = () => act(async () => {
      const active = document.activeElement as HTMLElement;
      const swallow = (event: Event) => event.stopImmediatePropagation();
      window.addEventListener('focusout', swallow, true);
      active.blur();
      window.removeEventListener('focusout', swallow, true);
      active.dispatchEvent(new FocusEvent('focusout', { bubbles: true, relatedTarget: null }));
    });

    it('lets go once a Submit that did not save is left for nowhere', async () => {
      draw({});
      press('submit-answer-btn');
      draw({ apiIsPending: true });
      draw({});
      expect(document.activeElement).toBe(button('submit-answer-btn'));

      await clickAway();
      draw({ is_completed: true, canAnswer: false });
      expect(document.activeElement).toBe(document.body);
    });

    it('lets go once an Update that did not save is left for nowhere', async () => {
      draw({ is_completed: true, dirty: true });
      press('update-answer-btn');
      draw({ is_completed: true, dirty: true, apiIsPending: true });
      draw({ is_completed: true, dirty: true });
      expect(document.activeElement).toBe(button('update-answer-btn'));

      await clickAway();
      draw({ is_completed: true, dirty: false });
      expect(document.activeElement).toBe(document.body);
    });

    it('moves on still when the control pressed going unavailable blurs it, as a browser may', async () => {
      draw({ is_completed: true, dirty: true });
      press('update-answer-btn');
      draw({ is_completed: true, dirty: true, apiIsPending: true });

      await act(async () => {
        ReactDOM.render(<QuestionWrapper {...props} is_completed dirty={false} />, container);
        button('update-answer-btn').dispatchEvent(new FocusEvent('focusout', { bubbles: true, relatedTarget: null }));
      });
      expect(document.activeElement).toBe(button('continue-btn'));
    });

    it('moves on still when the window loses focus while the save is pending', async () => {
      draw({});
      press('submit-answer-btn');
      draw({ apiIsPending: true });

      // switching windows blurs the button, naming nothing, but leaves it the active element
      await act(async () => {
        button('submit-answer-btn').dispatchEvent(new FocusEvent('focusout', { bubbles: true, relatedTarget: null }));
      });
      draw({ is_completed: true, canAnswer: false });
      expect(document.activeElement).toBe(button('continue-btn'));
    });

    it('leaves focus to the continuing, when the deprecated hasFeedback={false} continues by itself', () => {
      const onNextStep = jest.fn();
      draw({ hasFeedback: false, onNextStep });
      press('submit-answer-btn');
      draw({ hasFeedback: false, onNextStep, apiIsPending: true });

      draw({ hasFeedback: false, onNextStep, is_completed: true, canAnswer: false });
      expect(onNextStep).toHaveBeenCalled();
      expect(document.activeElement).not.toBe(button('continue-btn'));
    });

    it('leaves a learner who moved elsewhere where they are', () => {
      const elsewhere = document.createElement('input');
      document.body.appendChild(elsewhere);
      draw({});
      press('submit-answer-btn');
      draw({ apiIsPending: true });
      elsewhere.focus();

      draw({ is_completed: true, canAnswer: false });
      expect(document.activeElement).toBe(elsewhere);
      elsewhere.remove();
    });
  });
});
