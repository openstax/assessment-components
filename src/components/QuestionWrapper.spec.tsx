import renderer from 'react-test-renderer';
import { QuestionWrapper, QuestionWrapperProps } from './QuestionWrapper';

const props: QuestionWrapperProps = {
  question_id: '1',
  questionIndex: 0,
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
      expect(tree.toJSON()).toMatchSnapshot();
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
      expect(tree.root.findByProps({ 'data-test-id': 'submit-answer-btn' }).props.disabled).toBe(false);
    });

    it('disables Submit when the body says the response is not submittable', () => {
      const tree = renderer.create(
        <QuestionWrapper {...props} hasFeedback={true} canSubmit={false} />
      );
      expect(tree.root.findByProps({ 'data-test-id': 'submit-answer-btn' }).props.disabled).toBe(true);
    });

    it('disables Cancel and Update until the response differs from the last submission', () => {
      const tree = renderer.create(
        <QuestionWrapper {...props} is_completed={true} dirty={false} />
      );
      expect(tree.root.findByProps({ 'data-test-id': 'update-answer-btn' }).props.disabled).toBe(true);
      expect(tree.root.findByProps({ 'data-test-id': 'continue-btn' }).props.disabled).toBe(false);
    });

    it('disables Next while there is an unsaved change', () => {
      const tree = renderer.create(
        <QuestionWrapper {...props} is_completed={true} dirty={true} />
      );
      expect(tree.root.findByProps({ 'data-test-id': 'continue-btn' }).props.disabled).toBe(true);
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

    it('leaves navigation to the host when hasFeedback is omitted', () => {
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
});
