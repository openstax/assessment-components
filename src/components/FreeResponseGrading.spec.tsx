import { FreeResponseGrading, FreeResponseGradingProps } from './FreeResponseGrading';
import renderer from 'react-test-renderer';
import { textOf } from '../test/utils';

jest.mock('../utils', () => ({
  ...jest.requireActual('../utils'),
  formatTimestamp: () => 'Mar 1, 2024, 10:00 AM',
}));

describe('FreeResponseGrading', () => {
  // created inside act so the component's mount effects have run before a test types into it
  const render = (props: Partial<FreeResponseGradingProps> = {}) => {
    let tree!: renderer.ReactTestRenderer;
    renderer.act(() => {
      tree = renderer.create(
        <FreeResponseGrading maxScore={10} questionId="q-1" onSave={jest.fn()} {...props} />
      );
    });
    return tree;
  };

  const scoreInput = (tree: renderer.ReactTestRenderer) =>
    tree.root.find(node => node.type === 'input' && node.props['aria-label'] === 'Score');
  const commentInput = (tree: renderer.ReactTestRenderer) =>
    tree.root.find(node => node.type === 'textarea');
  const saveButton = (tree: renderer.ReactTestRenderer) =>
    tree.root.find(node => node.type === 'button');

  const enterScore = (tree: renderer.ReactTestRenderer, value: string) =>
    renderer.act(() => { scoreInput(tree).props.onChange({ target: { value } }); });
  const enterComment = (tree: renderer.ReactTestRenderer, value: string) =>
    renderer.act(() => { commentInput(tree).props.onChange({ target: { value } }); });

  describe('what it starts with', () => {
    it('shows the score and comment it is given', () => {
      const tree = render({ score: 8.5, comment: 'Good work on this assignment.' });

      expect(scoreInput(tree).props.value).toBe('8.5');
      expect(commentInput(tree).props.value).toBe('Good work on this assignment.');
    });

    it('starts empty when nothing has been graded', () => {
      const tree = render();

      expect(scoreInput(tree).props.value).toBe('');
      expect(scoreInput(tree).props.placeholder).toBe('--');
      expect(commentInput(tree).props.value).toBe('');
    });

    it('shows the maximum score and limits the input to it', () => {
      const tree = render({ maxScore: 25 });

      expect(textOf(tree.toJSON())).toContain('out of 25');
      expect(scoreInput(tree).props.min).toBe(0);
      expect(scoreInput(tree).props.max).toBe(25);
    });

    it('follows a new grade passed in later', () => {
      const tree = render({ score: 7, comment: 'Fine.' });

      renderer.act(() => {
        tree.update(<FreeResponseGrading maxScore={10} questionId="q-1" score={9} comment="Better." />);
      });

      expect(scoreInput(tree).props.value).toBe('9');
      expect(commentInput(tree).props.value).toBe('Better.');
    });

    it('says when it was last graded', () => {
      expect(textOf(render({ score: 7, gradingTimestamp: '2024-03-01T10:00:00.000Z' }).toJSON()))
        .toContain('Last graded on Mar 1, 2024, 10:00 AM');
      expect(textOf(render({ score: 7 }).toJSON())).not.toContain('Last graded');
    });
  });

  describe('the save button', () => {
    it('says Save for a new grade and Update for one that exists', () => {
      expect(saveButton(render()).props.children).toBe('Save');
      expect(saveButton(render({ score: 7 })).props.children).toBe('Update');
    });

    it('treats a score of zero as an existing grade', () => {
      expect(saveButton(render({ score: 0 })).props.children).toBe('Update');
    });

    it('is disabled until something changes', () => {
      expect(saveButton(render()).props.disabled).toBe(true);
      expect(saveButton(render({ score: 7, comment: 'Fine.' })).props.disabled).toBe(true);
    });

    it('is enabled once a valid score is entered', () => {
      const tree = render();

      enterScore(tree, '8');
      expect(saveButton(tree).props.disabled).toBe(false);
    });

    it('is enabled when only the comment of a graded answer changes', () => {
      const tree = render({ score: 7, comment: 'Fine.' });

      enterComment(tree, 'Fine, but show your working.');
      expect(saveButton(tree).props.disabled).toBe(false);
    });

    it.each(['0', '10'])('accepts %s, the edge of the allowed range', (value) => {
      const tree = render({ score: 5 });

      enterScore(tree, value);
      expect(saveButton(tree).props.disabled).toBe(false);
    });

    it.each(['', '-1', '11', 'abc'])('stays disabled for the score "%s"', (value) => {
      const tree = render({ score: 5 });

      enterScore(tree, value);
      expect(saveButton(tree).props.disabled).toBe(true);
    });

    it('stays disabled when the form is disabled, whatever has changed', () => {
      const tree = render({ disabled: true });

      enterScore(tree, '8');
      expect(saveButton(tree).props.disabled).toBe(true);
      expect(scoreInput(tree).props.disabled).toBe(true);
      expect(commentInput(tree).props.disabled).toBe(true);
    });
  });

  describe('saving', () => {
    it('hands over the question, score, maximum and comment', () => {
      const onSave = jest.fn();
      const tree = render({ onSave, questionId: 'q-7', maxScore: 25 });

      enterScore(tree, '18');
      enterComment(tree, 'Clear and well argued.');
      renderer.act(() => { saveButton(tree).props.onClick(); });

      expect(onSave).toHaveBeenCalledTimes(1);
      expect(onSave).toHaveBeenCalledWith('q-7', { score: 18, max: 25, comment: 'Clear and well argued.' });
    });

    it('does not save a score outside the range, even if the button is pressed', () => {
      const onSave = jest.fn();
      const tree = render({ onSave });

      enterScore(tree, '11');
      renderer.act(() => { saveButton(tree).props.onClick(); });

      expect(onSave).not.toHaveBeenCalled();
    });

    it('locks the form while the save is in flight, then unlocks it', async () => {
      let finish: () => void = () => undefined;
      const onSave = jest.fn(() => new Promise<void>((resolve) => { finish = resolve; }));
      const tree = render({ onSave });

      enterScore(tree, '8');
      await renderer.act(async () => { saveButton(tree).props.onClick(); });

      expect(scoreInput(tree).props.disabled).toBe(true);
      expect(commentInput(tree).props.disabled).toBe(true);
      expect(saveButton(tree).props.disabled).toBe(true);

      await renderer.act(async () => { finish(); });

      expect(scoreInput(tree).props.disabled).toBe(false);
      expect(commentInput(tree).props.disabled).toBe(false);
    });

    it('unlocks the form when the save fails', async () => {
      const onSave = jest.fn(() => Promise.reject(new Error('offline')));
      const tree = render({ onSave });

      enterScore(tree, '8');
      await renderer.act(async () => {
        await saveButton(tree).props.onClick().catch(() => undefined);
      });

      expect(scoreInput(tree).props.disabled).toBe(false);
    });
  });

  describe('reporting changes', () => {
    it('reports the score and comment whenever the score is a number', () => {
      const onChange = jest.fn();
      const tree = render({ onChange });

      expect(onChange).not.toHaveBeenCalled();

      enterScore(tree, '8');
      expect(onChange).toHaveBeenLastCalledWith({ score: 8, comment: '' });

      enterComment(tree, 'Nice.');
      expect(onChange).toHaveBeenLastCalledWith({ score: 8, comment: 'Nice.' });
    });

    it('stays quiet while the score is not a number', () => {
      const onChange = jest.fn();
      const tree = render({ onChange });

      enterComment(tree, 'Nice.');
      expect(onChange).not.toHaveBeenCalled();
    });
  });
});
