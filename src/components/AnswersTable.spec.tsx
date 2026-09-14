import { AnswersTable, AnswersTableProps } from './AnswersTable';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { answerContent } from '../test/fixtures';
import { Answer } from './Answer';
import { Feedback } from './Feedback';

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

  it('matches tutor teacher-preview snapshot', () => {
    props.question.answers.forEach((answer, i) => answer.content_html = answerContent[i]);
    const tree = renderer.create(
      <AnswersTable {...props} type="teacher-preview" onKeyPress={() => null} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correct answer feedback', () => {
    const tree = renderer.create(
      <AnswersTable {...props}
        answer_id="1"
        correct_answer_id="1"
        correct_answer_feedback_html="Feedback"
        hasCorrectAnswer={true}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders incorrect answer feedback', () => {
    const tree = renderer.create(
      <AnswersTable {...props}
        answer_id="1"
        correct_answer_id="2"
        incorrectAnswerId="1"
        feedback_html="Feedback"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders all feedback', () => {
    const answers = [{
      id: '1',
      correctness: undefined,
      content_html: 'True',
      feedback_html: 'Answer level feedback',
    }, {
      id: '2',
      correctness: undefined,
      content_html: 'False',
      feedback_html: 'Answer level feedback'
    }];

    const tree = renderer.create(
      <AnswersTable {...props}
        answer_id="1"
        correct_answer_id="2"
        incorrectAnswerId="1"
        feedback_html="Feedback"
        show_all_feedback={true}
        tableFeedbackEnabled={true}
        question={{...props.question, answers}}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
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

  it('labels the feedback for screen readers', () => {
    const tree = renderer.create(
      <AnswersTable {...props}
        answer_id="1"
        correct_answer_id="1"
        correct_answer_feedback_html="Feedback"
        hasCorrectAnswer={true}
      />
    );
    const region = tree.root.findAllByProps({ className: 'question-feedback-live-region' })[0];

    expect(region.findAllByType(Feedback)[0].findAll(
      (node) => node.children.includes('Answer feedback:')
    ).length).toBeGreaterThan(0);
  });

  it('only points aria-details at feedback that exists', () => {
    const tree = renderer.create(
      <AnswersTable {...props}
        answer_id="1"
        correct_answer_id="1"
        correct_answer_feedback_html="Feedback"
        hasCorrectAnswer={true}
      />
    );

    expect(tree.root.findAllByType(Answer).map((a) => a.props.feedbackId))
      .toEqual(['feedback-1-0', undefined]);
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

  it('sorts by given ID order', () => {
    const tree = renderer.create(
      <AnswersTable {...props} answerIdOrder={['2', '1']} />
    );
    expect(tree.root.findAllByType(Answer).map((a) => a.props.answer.id)).toEqual(['2', '1']);
    expect(tree).toMatchSnapshot();
  });

  it('renders instructions', () => {
    const tree = renderer.create(
      <AnswersTable {...props}
        instructions={<b>Instructions</b>}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('casts question id to a number', () => {
    props.question.id = '1';
    const tree = renderer.create(
      <AnswersTable {...props} />
    );
    expect(tree.root.findAllByType(Answer)[0].props.answer.question_id).toEqual(1);
  });
});
