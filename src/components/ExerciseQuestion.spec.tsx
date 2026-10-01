import { ExerciseQuestion, ExerciseQuestionProps, SaveButton, NextButton } from './ExerciseQuestion';
import renderer from 'react-test-renderer';
import { byClass, findNode, textOf, textOfTestId } from '../test/utils';

jest.mock('../hooks/useTypesetMath', () => ({
  useTypesetMath: () => jest.fn(),
}));

describe('ExerciseQuestion', () => {
  let props: ExerciseQuestionProps;

  beforeEach(() => {
    props = {
      question: {
        id: '1',
        stem_html: 'Is this a question?',
        collaborator_solutions: [],
        formats: [],
        stimulus_html: '',
        answers: [{
          id: '1',
          correctness: undefined,
          content_html: 'True',
        }, {
          id: '2',
          correctness: undefined,
          content_html: 'False',
        }],
        is_answer_order_important: false,
      },
      questionNumber: 1,
      choicesEnabled: false,
      hasMultipleAttempts: false,
      hasUnlimitedAttempts: false,
      onAnswerChange: () => null,
      onAnswerSave: () => null,
      onNextStep: () => null,
      feedback_html: '',
      correct_answer_feedback_html: '',
      is_completed: false,
      correct_answer_id: '',
      incorrectAnswerId: '',
      answer_id: '',
      attempts_remaining: 2,
      detailedSolution: '',
      canAnswer: false,
      needsSaved: false,
      canUpdateCurrentStep: false,
      attempt_number: 0,
      apiIsPending: false,
      displaySolution: false,
      exercise_uid: '',
      hasFeedback: true,
    }
  });

  // One deliberate whole-tree snapshot as a broad regression net. Everything below asserts the
  // specific thing its name promises, so the test says what broke and does not churn when an
  // unrelated component somewhere in the tree changes its markup.
  it('matches snapshot', () => {
    const tree = renderer.create(
      <ExerciseQuestion {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  const render = (overrides: Partial<ExerciseQuestionProps> = {}) =>
    renderer.create(<ExerciseQuestion {...props} {...overrides} />).toJSON();

  const attemptsText = (tree: ReturnType<typeof render>) =>
    textOf(findNode(tree, byClass('attempts-left')) || null);

  it('renders all attempts remaining', () => {
    expect(attemptsText(render({
      hasMultipleAttempts: true, choicesEnabled: true, attempts_remaining: 2, attempt_number: 0,
    }))).toBe('2 attempts left');
  });

  it('renders some attempts remaining', () => {
    // singular, not "1 attempts left"
    expect(attemptsText(render({
      hasMultipleAttempts: true, choicesEnabled: true, attempts_remaining: 1, attempt_number: 1,
      incorrectAnswerId: '2',
    }))).toBe('1 attempt left');
  });

  it('renders no attempts remaining', () => {
    expect(attemptsText(render({
      hasMultipleAttempts: true, choicesEnabled: false, attempts_remaining: 0, attempt_number: 2,
      incorrectAnswerId: '2',
    }))).toBe('');
  });

  it('counts attempts only for formats that have more than one', () => {
    // ExerciseQuestion withholds attempts_remaining from the footer unless the format allows
    // multiple attempts, so the count below must not reach the learner
    expect(attemptsText(render({ hasMultipleAttempts: false, attempts_remaining: 2 }))).toBe('');
  });

  it('renders unlimited attempts', () => {
    expect(attemptsText(render({ hasUnlimitedAttempts: true }))).toBe('Unlimited quiz attempts left');
  });

  const answering = {
    choicesEnabled: true, incorrectAnswerId: '2', canAnswer: true, needsSaved: true, answer_id: '1',
  } as const;

  it('renders Save button', () => {
    const tree = render({ ...answering });
    expect(textOfTestId(tree, 'submit-answer-btn')).toBe('Submit');
    expect(textOfTestId(tree, 'continue-btn')).toBeUndefined();
  });

  it('renders Re-submit button', () => {
    expect(textOfTestId(render({ ...answering, attempt_number: 1 }), 'submit-answer-btn'))
      .toBe('Re-submit');
  });

  it('renders Submit & continue button', () => {
    // with no feedback to show, saving continues straight on to the next step
    expect(textOfTestId(
      render({ ...answering, canUpdateCurrentStep: false, hasFeedback: false }), 'submit-answer-btn'
    )).toBe('Submit & continue');
  });

  it('renders continue button (unused?)', () => {
    const notAnswering = { choicesEnabled: false, incorrectAnswerId: '2', canAnswer: false } as const;

    expect(textOfTestId(render({ ...notAnswering, canUpdateCurrentStep: true }), 'continue-btn'))
      .toBe('Continue');
    expect(textOfTestId(render({ ...notAnswering, canUpdateCurrentStep: false }), 'continue-btn'))
      .toBe('Next');
    expect(textOfTestId(render(notAnswering), 'submit-answer-btn')).toBeUndefined();
  });

  const footerText = (tree: ReturnType<typeof render>) =>
    textOf(findNode(tree, byClass('step-card-footer-inner')) || null);

  it('renders detailed solution', () => {
    expect(footerText(render({
      choicesEnabled: false, incorrectAnswerId: '2', correct_answer_id: '1', is_completed: true,
      canAnswer: false, needsSaved: false, detailedSolution: 'A detailed solution',
    }))).toContain('Detailed solution:A detailed solution');
  });

  it('omits detailed solution when there is none', () => {
    expect(footerText(render())).not.toContain('Detailed solution:');
  });

  it('renders free response', () => {
    expect(textOf(render({ free_response: 'A free response' }))).toContain('A free response');
    expect(textOf(render())).not.toContain('A free response');
  });

  it('converts question id as a number when saving', () => {
    const mockFn = jest.fn();

    const tree = renderer.create(
      <ExerciseQuestion
        {...props}
        needsSaved={true}
        canAnswer={true}
        onAnswerSave={mockFn}
      />
    );
    renderer.act(() => {
      tree.root.findByType(SaveButton).props.onClick();
    });

    expect(mockFn).toHaveBeenCalledWith(1);
  });

  it('passes question index on next button click', () => {
    const mockFn = jest.fn();

    const tree = renderer.create(
      <ExerciseQuestion
        {...props}
        canAnswer={false}
        onNextStep={mockFn}
      />
    );
    renderer.act(() => {
      tree.root.findByType(NextButton).props.onClick();
    });

    expect(mockFn).toHaveBeenCalledWith(0);
  });

  it('advances after submitting when there is no feedback to stop on', () => {
    const mockFn = jest.fn();

    const tree = renderer.create(
      <ExerciseQuestion
        {...props}
        canAnswer={true}
        answer_id='1'
        hasFeedback={false}
        is_completed={false}
        onNextStep={mockFn}
      />
    );
    renderer.act(() => {
      tree.root.findByType(SaveButton).props.onClick();
    });

    // the response lands, and the footer advances on its own
    renderer.act(() => {
      tree.update(
        <ExerciseQuestion
          {...props}
          canAnswer={true}
          answer_id='1'
          hasFeedback={false}
          is_completed={true}
          onNextStep={mockFn}
        />
      );
    });

    expect(mockFn).toHaveBeenCalledWith(0);
  });
});
