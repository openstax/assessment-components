import { Answer, AnswerProps } from './Answer';
import renderer, { act } from 'react-test-renderer';
import { answerContent } from '../test/fixtures';
import { byClass, findNode, Rendered, textOf } from '../test/utils';

jest.mock('../hooks/useTypesetMath', () => ({
  useTypesetMath: () => jest.fn(),
}));

describe('Answer', () => {
  let props: AnswerProps;

  beforeEach(() => {
    props = {
      type: 'student',
      iter: 1,
      answer: {
        id: 1,
        question_id: 1,
        correctness: null,
        isCorrect: true,
        content_html: answerContent[0],
        selected_count: 5
      },
      onChangeAnswer: () => jest.fn(),
      disabled: false,
      onKeyPress: () => jest.fn(),
      qid: 1,
      hasCorrectAnswer: false,
      answerId: '',
      correctAnswerId: 2,
      incorrectAnswerId: 0,
      answered_count: 10,
    };
  });

  it('matches snapshot', () => {
    const callback = jest.fn();

    const instance = renderer.create(
      <Answer {...props} onChangeAnswer={callback} />
    );
    act(() => {
      instance.root.findByType('input').props.onChange({ target: {} });
    });
    expect(callback).toHaveBeenCalled();

    expect(instance.toJSON()).toMatchSnapshot();
  });

  it('renders with a custom renderer if set', () => {
    const CustomRenderer = ({ html = '' }: { html?: string }) => (
      <div className="custom-renderer" dangerouslySetInnerHTML={{ __html: html }} />
    );
    const tree = renderer.create(
      <Answer {...props} contentRenderer={<CustomRenderer />} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a correct answer', () => {
    const tree = renderer.create(
      <Answer {...props} correctAnswerId={props.answer.id} hasCorrectAnswer={true} disabled={true} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders an incorrect answer', () => {
    const tree = renderer.create(
      <Answer {...props} incorrectAnswerId={props.answer.id} hasCorrectAnswer={true} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a checked answer', () => {
    const tree = renderer.create(
      <Answer {...props} answerId={props.answer.id} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders teacher review', () => {
    const tree = renderer.create(
      <Answer {...props} type='teacher-review' />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders teacher preview', () => {
    props = { ...props, correctAnswerId: props.answer.id, correctIncorrectIcon: <span>Iconic</span> };
    const tree = renderer.create(
      <Answer {...props} type='teacher-preview' />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // CORE-2739: the answer text must contribute to the radio's accessible name. Browsers skip
  // subtrees whose role does not support name-from-contents while computing the name of the
  // enclosing label, so wrapping the content in role="status" silently erased the answer text.
  describe('label association (CORE-2739)', () => {
    const render = (overrides: Partial<AnswerProps> = {}): Rendered =>
      renderer.create(<Answer {...props} {...overrides} />).toJSON();

    it('associates the label with the input', () => {
      const tree = render();
      const input = findNode(tree, n => n.type === 'input');
      const label = findNode(tree, n => n.type === 'label');
      expect(input?.props.id).toBe(`${props.qid}-option-${props.iter}`);
      expect(label?.props.htmlFor).toBe(input?.props.id);
      // grouped by name, which is deliberately NOT the same as the id
      expect(input?.props.name).toBe(`${props.qid}-options`);
    });

    it('renders the answer content inside the label and outside any live region', () => {
      const label = findNode(render(), n => n.type === 'label');

      expect(findNode(label ?? null, byClass('answer-content'))).toBeTruthy();

      // no role on the path from the label to the content, or the name would be truncated
      const roled = findNode(label ?? null,
        n => !!n.props?.role && !!findNode(n, byClass('answer-content')));
      expect(roled).toBeUndefined();
    });

    it('scopes the live region to the answer indicator', () => {
      const tree = render({
        answerId: props.answer.id,
        correctAnswerId: props.answer.id,
        hasCorrectAnswer: true,
      });

      const live = findNode(tree, byClass('answer-indicator-live'));
      expect(live?.props.role).toBe('status');
      expect(live?.props['aria-live']).toBe('polite');
      expect(live?.props['aria-atomic']).toBe('true');

      expect(textOf(live ?? null)).toBe('Correct Answer');
      expect(findNode(live ?? null, byClass('answer-content'))).toBeUndefined();
    });

    it('renders the live region before there is anything to announce', () => {
      // a live region only announces later changes if it was already present
      const live = findNode(render(), byClass('answer-indicator-live'));
      expect(live).toBeTruthy();
      expect(live?.props.role).toBe('status');
      expect(textOf(live ?? null)).toBe('');
    });

    it('exposes the choice letter as real text rather than aria-label', () => {
      const tree = render();

      const bubble = findNode(tree, byClass('answer-letter-wrapper'));
      expect(bubble?.props['aria-label']).toBeUndefined();
      expect(bubble?.props['aria-hidden']).toBe('true');

      expect(textOf(findNode(tree, byClass('answer-choice-label')) ?? null)).toBe('Choice B:');
    });

    it('does not put the selected state in the name', () => {
      // the radio already exposes checked state; repeating it in the name duplicates the
      // announcement and makes the name change when only state changed
      const selected = render({ answerId: props.answer.id });
      expect(textOf(findNode(selected, byClass('answer-choice-label')) ?? null)).toBe('Choice B:');
    });
  });
});
