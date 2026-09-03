import renderer from 'react-test-renderer';
import { FreeResponseInput, FreeResponseProps } from './FreeResponseInput';

// the status line is a plain text node, so serializing the tree is enough to assert on it
const statusText = (element: React.ReactElement) =>
  JSON.stringify(renderer.create(element).toJSON());

jest.mock('../hooks/useTypesetMath', () => ({
  useTypesetMath: () => jest.fn(),
}));

// echoes its input so each assertion can tell which of the two timestamps was rendered
jest.mock('../utils', () => ({
  ...jest.requireActual('../utils'),
  formatTimestamp: (timestamp: string | number) => `<${timestamp}>`,
}));

const SUBMITTED = '2024-10-03T10:00:00.000Z';
const DRAFT_NEWER = '2024-10-03T10:55:00.000Z';
const DRAFT_OLDER = '2024-10-03T09:00:00.000Z';

describe('free response status line', () => {
  let baseProps: FreeResponseProps;

  beforeEach(() => {
    baseProps = {
      is_completed: false,
      canAnswer: true,
      apiIsPending: false,
      free_response: 'a partial thought',
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

  it('shows nothing when the response has never been submitted or autosaved', () => {
    const text = statusText(<FreeResponseInput {...baseProps} />);

    expect(text).not.toContain('Draft last saved');
    expect(text).not.toContain('Last submitted on');
  });

  it('shows the draft time when nothing has been submitted yet', () => {
    const text = statusText(<FreeResponseInput {...baseProps} draftTimestamp={DRAFT_NEWER} />);

    expect(text).toContain(`Draft last saved <${DRAFT_NEWER}>`);
  });

  it('shows the submitted time when there is no draft', () => {
    const text = statusText(
      <FreeResponseInput {...baseProps} is_completed={true} submissionTimestamp={SUBMITTED} />
    );

    expect(text).toContain(`Last submitted on <${SUBMITTED}>`);
  });

  it('prefers the draft when it is newer than the submission', () => {
    const text = statusText(
      <FreeResponseInput
        {...baseProps}
        is_completed={true}
        submissionTimestamp={SUBMITTED}
        draftTimestamp={DRAFT_NEWER}
      />
    );

    expect(text).toContain(`Draft last saved <${DRAFT_NEWER}>`);
    expect(text).not.toContain('Last submitted on');
  });

  // a draft left over from before the last submit must not present itself as the newer state
  it('prefers the submission when the draft is older', () => {
    const text = statusText(
      <FreeResponseInput
        {...baseProps}
        is_completed={true}
        submissionTimestamp={SUBMITTED}
        draftTimestamp={DRAFT_OLDER}
      />
    );

    expect(text).toContain(`Last submitted on <${SUBMITTED}>`);
    expect(text).not.toContain('Draft last saved');
  });
});

describe('restored draft baseline', () => {
  const submittedProps = (overrides: Partial<FreeResponseProps>): FreeResponseProps => ({
    is_completed: true,
    canAnswer: true,
    apiIsPending: false,
    free_response: 'the restored draft',
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
    needsSaved: true,
    cancelHandler: jest.fn(),
    ...overrides,
  });

  const updateButtonDisabled = (props: FreeResponseProps) => {
    const tree = renderer.create(<FreeResponseInput {...props} />);
    return tree.root.findByProps({'data-test-id': 'update-answer-btn'}).props.disabled;
  };

  // the trap this prop exists to avoid: baseline taken from free_response makes the restored
  // draft look unchanged, leaving the student unable to submit it
  it('enables Update when a restored draft differs from the submitted text', () => {
    expect(updateButtonDisabled(submittedProps({submittedResponse: 'the original answer'}))).toBe(false);
  });

  it('disables Update when the text matches what was submitted', () => {
    expect(updateButtonDisabled(submittedProps({submittedResponse: 'the restored draft'}))).toBe(true);
  });

  it('falls back to free_response as the baseline when no submitted text is given', () => {
    expect(updateButtonDisabled(submittedProps({}))).toBe(true);
  });
});
