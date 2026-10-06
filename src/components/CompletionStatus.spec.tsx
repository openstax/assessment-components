import { CompletionStatus, CompletionStatusProps } from './CompletionStatus';
import renderer from 'react-test-renderer';
import { findAllNodes, textOf } from '../test/utils';

describe('CompletionStatus', () => {
  let props: CompletionStatusProps;

  beforeEach(() => {
    props = {
      numberOfQuestions: 15,
      numberCompleted: 0,
      handleNext: jest.fn(),
      handleContinue: jest.fn(),
    };
  });

  const render = (overrides: Partial<CompletionStatusProps> = {}) =>
    renderer.create(<CompletionStatus {...props} {...overrides} />);

  const heading = (tree: renderer.ReactTestRenderer) => textOf(
    findAllNodes(tree.toJSON(), node => node.type === 'h2')[0]
  );

  const paragraphs = (tree: renderer.ReactTestRenderer) => findAllNodes(
    tree.toJSON(), node => node.type === 'p'
  ).map(textOf);

  const buttons = (tree: renderer.ReactTestRenderer) => tree.root.findAll(node => node.type === 'button');

  const button = (tree: renderer.ReactTestRenderer, testId: string) =>
    buttons(tree).find(b => b.props['data-test-id'] === testId);

  const labelOf = (target?: renderer.ReactTestInstance) => target?.children.join('');

  const click = (tree: renderer.ReactTestRenderer, testId: string) => {
    const target = button(tree, testId);
    if (!target) { throw new Error(`no ${testId} button`); }
    renderer.act(() => { target.props.onClick(); });
  };

  describe('a quiz without retries', () => {
    it.each([
      [0, 'No questions have been answered.', 'Begin working on the quiz.', 'Start', 'start-btn'],
      [5, 'Quiz is partially complete.', 'You\'ve completed 5 of 15 questions.', 'Continue', 'continue-btn'],
      [15, 'You are done.', 'Great job answering all the questions.', 'Next', 'next-btn'],
    ])('with %i completed it says where the learner is and offers one way on', (
      numberCompleted, title, message, label, testId
    ) => {
      const tree = render({ numberCompleted });

      expect(heading(tree)).toBe(title);
      expect(paragraphs(tree)).toEqual([message]);
      expect(buttons(tree).map(b => [b.props['data-test-id'], labelOf(b)]))
        .toEqual([[testId, label]]);
    });

    it('continues the quiz while questions remain', () => {
      const tree = render({ numberCompleted: 5 });

      click(tree, 'continue-btn');
      expect(props.handleContinue).toHaveBeenCalledTimes(1);
      expect(props.handleNext).not.toHaveBeenCalled();
    });

    it('moves on once every question is done', () => {
      const tree = render({ numberCompleted: 15 });

      click(tree, 'next-btn');
      expect(props.handleNext).toHaveBeenCalledTimes(1);
      expect(props.handleContinue).not.toHaveBeenCalled();
    });
  });

  describe('a quiz with unlimited attempts', () => {
    let handleRetry: jest.Mock;

    beforeEach(() => { handleRetry = jest.fn(); });

    it('offers to resume a quiz that is still in progress', () => {
      const tree = render({ numberCompleted: 5, handleRetry });
      const resume = button(tree, 'retry-resume-btn');

      expect(labelOf(resume)).toBe('Resume Quiz');
      renderer.act(() => { resume?.props.onClick(); });
      expect(props.handleContinue).toHaveBeenCalledTimes(1);
      expect(handleRetry).not.toHaveBeenCalled();
    });

    it('offers to retry a quiz that is finished', () => {
      const tree = render({ numberCompleted: 15, handleRetry });
      const retry = button(tree, 'retry-resume-btn');

      expect(labelOf(retry)).toBe('Retry Quiz');
      renderer.act(() => { retry?.props.onClick(); });
      expect(handleRetry).toHaveBeenCalledTimes(1);
      expect(props.handleContinue).not.toHaveBeenCalled();
    });

    it('always moves on with Next, never Continue, so it can be left at any point', () => {
      const tree = render({ numberCompleted: 5, handleRetry });

      expect(labelOf(button(tree, 'next-btn'))).toBe('Next');
      click(tree, 'next-btn');
      expect(props.handleNext).toHaveBeenCalledTimes(1);
      expect(props.handleContinue).not.toHaveBeenCalled();
    });

    it('disables the retry button while a retry is starting', () => {
      const tree = render({ numberCompleted: 15, handleRetry, isRetrying: true });

      expect(button(tree, 'retry-resume-btn')?.props.disabled).toBe(true);
      expect(button(tree, 'next-btn')?.props.disabled).toBeFalsy();
    });

    it('shows both scores, and says so when one is unavailable', () => {
      const withScores = render({ numberCompleted: 15, handleRetry, score: { current: '8/10', saved: '9/10' } });
      expect(paragraphs(withScores)).toContain('Current Score: 8/10 | Saved Score: 9/10');

      const without = render({ numberCompleted: 15, handleRetry });
      expect(paragraphs(without)).toContain(
        'Current Score: Score unavailable | Saved Score: Score unavailable'
      );
    });

    it('explains that attempts are unlimited, and whether an attempt is under way', () => {
      expect(paragraphs(render({ numberCompleted: 15, handleRetry })).join(' '))
        .toContain('Attempts for this quiz are unlimited. Your highest score will be saved.');
      expect(paragraphs(render({ numberCompleted: 5, handleRetry })).join(' '))
        .toContain('You are in the middle of a quiz attempt.');
    });
  });

  describe('a quiz whose responses can be edited', () => {
    let handleEditResponses: jest.Mock;

    beforeEach(() => { handleEditResponses = jest.fn(); });

    it('offers to edit responses once every question is done', () => {
      const tree = render({ numberCompleted: 15, handleEditResponses });

      expect(heading(tree)).toBe('You are done.');
      expect(paragraphs(tree)).toEqual(['Your ungraded responses can be edited until they have been graded.']);
      expect(buttons(tree).map(b => b.props['data-test-id'])).toEqual(['edit-responses-btn', 'next-btn']);

      click(tree, 'edit-responses-btn');
      expect(handleEditResponses).toHaveBeenCalledTimes(1);
    });

    it('also offers a retry once every question is done, when retrying is allowed', () => {
      const handleRetry = jest.fn();
      const tree = render({ numberCompleted: 15, handleEditResponses, handleRetry });

      expect(buttons(tree).map(b => b.props['data-test-id']))
        .toEqual(['edit-responses-btn', 'retry-btn', 'next-btn']);
      click(tree, 'retry-btn');
      expect(handleRetry).toHaveBeenCalledTimes(1);
    });

    it('offers to continue a quiz that is part done', () => {
      const tree = render({ numberCompleted: 5, handleEditResponses });

      expect(paragraphs(tree)).toEqual(['You\'ve completed 5 of 15 questions.']);
      expect(buttons(tree).map(b => b.props['data-test-id'])).toEqual(['resume-btn', 'next-btn']);

      click(tree, 'resume-btn');
      expect(props.handleContinue).toHaveBeenCalledTimes(1);
    });

    it('offers only Next before anything has been answered', () => {
      const tree = render({ numberCompleted: 0, handleEditResponses });

      expect(paragraphs(tree)).toEqual(['Begin working on the quiz.']);
      expect(buttons(tree).map(b => b.props['data-test-id'])).toEqual(['next-btn']);

      click(tree, 'next-btn');
      expect(props.handleNext).toHaveBeenCalledTimes(1);
    });
  });
});
