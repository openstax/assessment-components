import { AnswersTable, AnswersTableProps } from './AnswersTable';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { answerContent } from '../test/fixtures';
import { Answer } from './Answer';
import { Feedback } from './Feedback';
import { byClass, findAllNodes, findNode, isJson, textOf } from '../test/utils';

jest.mock('../hooks/useTypesetMath', () => ({
  useTypesetMath: () => jest.fn(),
}));

describe('AnswersTable', () => {
  let props: AnswersTableProps;

  beforeEach(() => {
    props = {
      question: {
        id: 1,
        stem_html: '',
        collaborator_solutions: [],
        formats: [],
        stimulus_html: '',
        is_answer_order_important: false,
        answers: [{
          id: '1',
          correctness: undefined,
          content_html: 'True'
        }, {
          id: '2',
          correctness: undefined,
          content_html: 'False'
        }],
      },
      type: 'student',
      answer_id: '',
      correct_answer_id: '',
      feedback_html: '',
      correct_answer_feedback_html: '',
      answered_count: 0,
      show_all_feedback: false,
      onChangeAnswer: jest.fn(),
      hideAnswers: false,
      hasCorrectAnswer: false,
      onChangeAttempt: jest.fn(),
      choicesEnabled: false,
    };
  });

  // The feedback that belongs to each answer, read out of that answer's live region.
  const feedbackByRegion = (tree: ReactTestRenderer) => tree.root
    .findAllByProps({ className: 'question-feedback-live-region' })
    .map((region) => region.findAllByType(Feedback).map((f) => f.props.children));

  const answersWithFeedback = [{
    id: '1',
    correctness: undefined,
    content_html: 'True',
    feedback_html: 'Feedback for True',
  }, {
    id: '2',
    correctness: undefined,
    content_html: 'False',
    feedback_html: 'Feedback for False',
  }];

  // One deliberate whole-tree snapshot as a broad regression net; the rest assert the specific
  // thing they are named for, so they do not churn when Answer's markup changes.
  it('matches tutor teacher-preview snapshot', () => {
    props.question.answers.forEach((answer, i) => answer.content_html = answerContent[i]);
    const tree = renderer.create(
      <AnswersTable {...props} type="teacher-preview" onKeyPress={() => null} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('routes answer-level feedback to the live region of its own answer', () => {
    const tree = renderer.create(
      <AnswersTable {...props}
        show_all_feedback={true}
        question={{...props.question, answers: answersWithFeedback}}
      />
    );

    expect(feedbackByRegion(tree)).toEqual([['Feedback for True'], ['Feedback for False']]);
  });

  it('renders an empty live region per answer before there is any feedback', () => {
    const tree = renderer.create(
      <AnswersTable {...props} />
    );
    const regions = tree.root.findAllByProps({ className: 'question-feedback-live-region' });

    expect(regions.length).toBe(2);
    regions.forEach((region) => {
      expect(region.props['aria-live']).toBe('polite');
      expect(region.props['aria-atomic']).toBe('true');
      expect(region.props.children).toBeNull();
    });
    expect(tree.root.findAllByType(Feedback).length).toBe(0);
  });

  it('renders feedback into the live region of its own answer', () => {
    // Mount without feedback first: the fix depends on the empty region already being in
    // the tree when the answer is submitted, so the feedback has to arrive by updating an
    // existing region rather than by mounting a region that comes with its content.
    const tree = renderer.create(
      <AnswersTable {...props} />
    );
    const findRegions = () => tree.root.findAllByProps({ className: 'question-feedback-live-region' });

    expect(findRegions().length).toBe(2);
    expect(tree.root.findAllByType(Feedback).length).toBe(0);

    renderer.act(() => {
      tree.update(
        <AnswersTable {...props}
          answer_id="1"
          correct_answer_id="1"
          correct_answer_feedback_html="Feedback"
          hasCorrectAnswer={true}
        />
      );
    });

    const regions = findRegions();
    expect(regions.length).toBe(2);
    expect(regions[0].findAllByType(Feedback).map((f) => f.props.id)).toEqual(['feedback-1-0']);
    expect(regions[0].findByType(Feedback).props.children).toBe('Feedback');
    expect(regions[1].findAllByType(Feedback).length).toBe(0);
    expect(tree.root.findAllByType(Answer).map((a) => a.props.feedbackId))
      .toEqual(['feedback-1-0', undefined]);
  });

  it('renders incorrect answer feedback into the live region on submit', () => {
    // The incorrect branch picks its html from feedback_html/incorrectAnswerId rather than
    // correct_answer_feedback_html, so it reaches the region by a different path and needs
    // its own transition case.
    const tree = renderer.create(
      <AnswersTable {...props} />
    );
    const findRegions = () => tree.root.findAllByProps({ className: 'question-feedback-live-region' });

    expect(findRegions().length).toBe(2);
    expect(tree.root.findAllByType(Feedback).length).toBe(0);

    renderer.act(() => {
      tree.update(
        <AnswersTable {...props}
          answer_id="1"
          correct_answer_id="2"
          incorrectAnswerId="1"
          feedback_html="Feedback"
        />
      );
    });

    const regions = findRegions();
    expect(regions.length).toBe(2);
    expect(regions[0].findAllByType(Feedback).map((f) => f.props.id)).toEqual(['feedback-1-0']);
    expect(regions[0].findByType(Feedback).props.children).toBe('Feedback');
    expect(regions[1].findAllByType(Feedback).length).toBe(0);
  });

  it('keeps the same live region element when the feedback arrives', () => {
    // Rendered into a real container so the element identity can be checked: if React
    // unmounts and remounts the region along with its content there is nothing for a
    // screen reader to observe changing, and the feedback goes unannounced again.
    const container = document.createElement('div');
    document.body.appendChild(container);

    act(() => { ReactDOM.render(<AnswersTable {...props} />, container); });

    const before = container.querySelectorAll('.question-feedback-live-region');
    expect(before.length).toBe(2);
    expect(before[0].textContent).toBe('');

    act(() => {
      ReactDOM.render(
        <AnswersTable {...props}
          answer_id="1"
          correct_answer_id="1"
          correct_answer_feedback_html="Feedback"
          hasCorrectAnswer={true}
        />,
        container
      );
    });

    const after = container.querySelectorAll('.question-feedback-live-region');
    expect(after.length).toBe(2);
    expect(after[0]).toBe(before[0]);
    expect(after[1]).toBe(before[1]);
    expect(after[0].getAttribute('aria-live')).toBe('polite');
    expect(after[0].getAttribute('aria-atomic')).toBe('true');
    expect(after[0].textContent).toContain('Answer feedback:');
    expect(after[0].textContent).toContain('Feedback');
    expect(after[0].querySelector('#feedback-1-0')).not.toBeNull();
    expect(after[1].textContent).toBe('');

    act(() => { ReactDOM.unmountComponentAtNode(container); });
    container.remove();
  });

  const render = (overrides: Partial<AnswersTableProps> = {}) =>
    renderer.create(<AnswersTable {...props} {...overrides} />).toJSON();

  /**
   * Each feedback block is associated with its answer by `aria-details` on the radio, so assert
   * the pairing rather than the markup: which answer points at feedback, and what it says. The
   * hidden "Answer feedback:" label is excluded so only the feedback itself is compared.
   */
  const feedbackByAnswer = (tree: ReturnType<typeof render>) => {
    const feedback = new Map(findAllNodes(tree, byClass('question-feedback'))
      .map(node => [node.props.id, textOf(findNode(node, byClass('question-feedback-content')) || null)]));

    return findAllNodes(tree, node => node.type === 'input')
      .map(input => input.props['aria-details'])
      .map(id => (id === undefined ? null : feedback.get(id) ?? 'MISSING FEEDBACK'));
  };

  it('renders correct answer feedback', () => {
    expect(feedbackByAnswer(render({
      answer_id: '1', correct_answer_id: '1', correct_answer_feedback_html: 'Feedback',
      hasCorrectAnswer: true,
    }))).toEqual(['Feedback', null]);
  });

  it('renders incorrect answer feedback', () => {
    expect(feedbackByAnswer(render({
      answer_id: '1', correct_answer_id: '2', incorrectAnswerId: '1', feedback_html: 'Feedback',
    }))).toEqual(['Feedback', null]);
  });

  it('renders all feedback', () => {
    // with show_all_feedback every answer gets its own feedback, not just the chosen one
    expect(feedbackByAnswer(render({
      answer_id: '1', correct_answer_id: '2', incorrectAnswerId: '1', feedback_html: 'Feedback',
      show_all_feedback: true,
      question: {...props.question, answers: answersWithFeedback},
    }))).toEqual(['Feedback for True', 'Feedback for False']);
  });

  it('renders no feedback by default', () => {
    expect(feedbackByAnswer(render())).toEqual([null, null]);
  });

  it('follows every answer with its live region, so a live region always closes the table', () => {
    // the spacing rules in Question find the last answer and its feedback by this shape
    const table = findNode(render(), byClass('answers-table'));
    const kinds = (table?.children || []).map(child => (
      isJson(child) && byClass('question-feedback-live-region')(child) ? 'live-region'
        : isJson(child) && byClass('openstax-answer')(child) ? 'answer' : 'other'
    ));

    expect(kinds).toEqual(['answer', 'live-region', 'answer', 'live-region']);
  });

  it('hides answers', () => {
    const tree = renderer.create(
      <AnswersTable {...props} hideAnswers={true} />
    ).toJSON();
    expect(tree).toBeNull();
  });

  it('generates an id if missing', () => {
    const tree = renderer.create(
      <AnswersTable {...props} question={{...props.question, id: ''}} />
    );
    // 2 answers * 3 times the prop is passed down (Answer -> AnswerBody -> RadioAnswer)
    expect(tree.root.findAllByProps({ qid: 'auto-0' }).length).toBe(6);
  });

  it('defaults type and show_all_feedback', () => {
    const tree = renderer.create(
      <AnswersTable {...props} type={undefined} show_all_feedback={undefined} />
    );
    const allProps = tree.root.findAllByType(Answer).map((a) => a.props);
    expect(allProps.map((props) => props['type'])).toEqual(['student', 'student']);
    expect(allProps.map((props) => props['show_all_feedback'])).toEqual([false, false]);
  });

  it('renders teacher-preview type', () => {
    const type = 'teacher-preview';
    const tree = renderer.create(
      <AnswersTable {...props} question={{...props.question, id: ''}} type={type} />
    );
    expect(tree.root.findAllByType(Answer).map((a) => a.props['type'])).toEqual([type, type]);
  });

  it('renders instructions', () => {
    const table = findNode(render({ instructions: <b>Instructions</b> }), byClass('answers-table'));

    expect(textOf(table || null)).toContain('Instructions');
    expect(textOf(findNode(render(), byClass('answers-table')) || null)).not.toContain('Instructions');
  });

  it('casts question id to a number', () => {
    props.question.id = '1';
    const tree = renderer.create(
      <AnswersTable {...props} />
    );
    expect(tree.root.findAllByType(Answer)[0].props.answer.question_id).toEqual(1);
  });
});
