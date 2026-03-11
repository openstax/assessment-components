import { FreeResponseInput, FreeResponseProps } from './FreeResponseInput';
import renderer from 'react-test-renderer';

jest.mock('../hooks/useTypesetMath', () => ({
  useTypesetMath: () => jest.fn(),
}));

jest.mock('../utils', () => ({
  ...jest.requireActual('../utils'),
  formatTimestamp: () => 'Jul 26, 2024, 9:00 AM',
}));

describe('Free Response Input', () => {
  let baseProps: FreeResponseProps;

  beforeEach(() => {
    baseProps = {
      is_completed: false,
      canAnswer: true,
      apiIsPending: false,
      free_response: '',
      onAnswerChange: jest.fn(),
      onAnswerSave: jest.fn(),
      onNextStep: jest.fn(),
      questionNumber: 1,
      question: {
        id: '1',
        stem_html: 'Explain the process of photosynthesis.',
        collaborator_solutions: [],
        formats: ['free-response'],
        stimulus_html: '',
        answers: [],
        is_answer_order_important: false,
      },
      wordLimit: 50,
      needsSaved: false,
      cancelHandler: jest.fn(),
    };
  });

  it('matches snapshot - initial state', () => {
    const tree = renderer.create(
      <FreeResponseInput {...baseProps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot - with free response text', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        free_response="Photosynthesis converts light energy into chemical energy."
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot - with submission info', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        submissionTimestamp="2024-07-26T16:00:00.000Z"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot - completed state', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        is_completed={true}
        canAnswer={false}
        free_response="Photosynthesis is the process by which plants convert light energy into chemical energy."
        score={{ raw: 8, max: 10 }}
        feedback_html="<p>Good explanation!</p>"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot - update mode', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        is_completed={true}
        canAnswer={true}
        free_response="Previously submitted answer"
        submissionTimestamp="2024-07-26T16:00:00.000Z"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot - preview mode unanswered', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        previewMode={true}
        score={{ max: 10 }}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot - preview mode with answer', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        is_completed={true}
        canAnswer={false}
        previewMode={true}
        free_response="Photosynthesis converts sunlight into chemical energy."
        score={{ raw: 9, max: 10 }}
        feedback_html="<p>Excellent work!</p>"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot - preview mode with grading', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        is_completed={true}
        canAnswer={false}
        previewMode={true}
        free_response="Photosynthesis converts sunlight into chemical energy."
        score={{ raw: 9, max: 10 }}
        feedback_html="Good work overall."
        onGradingSave={jest.fn()}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot - saving state', () => {
    const tree = renderer.create(
      <FreeResponseInput
        {...baseProps}
        apiIsPending={true}
        free_response="This is being saved"
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
