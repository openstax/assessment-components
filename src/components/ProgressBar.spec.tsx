import 'jest-styled-components';
import { ProgressBar, ProgressBarItem, ProgressBarItemVariant, ProgressBarProps, StyledItem } from './ProgressBar';
import FlagIcon from '../assets/flag';
import { colors } from '../theme';
import renderer from 'react-test-renderer';

type Step = {variant: ProgressBarItemVariant; hasFeedback?: boolean};

const renderItem = (step: Step, props: {index?: number; isActive?: boolean; goToStep?: () => void} = {}) =>
  renderer.create(
    <ProgressBarItem index={props.index ?? 3} isActive={props.isActive ?? false} step={step} goToStep={props.goToStep ?? (() => null)} />
  ).root;

// toHaveStyleRule reads rendered JSON, not the ReactTestInstance returned by find*.
const renderButtonJson = (step: Step, isActive = false) => {
  const item = renderer.create(
    <ProgressBarItem index={0} isActive={isActive} step={step} goToStep={() => null} />
  ).toJSON() as renderer.ReactTestRendererJSON;

  return item.children?.find(child => typeof child !== 'string' && child.type === 'button');
};

const feedbackDots = (root: renderer.ReactTestInstance) =>
  root.findAll(node => node.type === 'span' && node.props['aria-hidden'] === 'true');

describe('ProgressBar', () => {
  let props: ProgressBarProps<Step>;

  beforeEach(() => {
    props = {
      activeIndex: 2,
      goToStep: () => null,
      steps: [{variant: 'isCorrect'}, {variant: 'isIncorrect'}, {variant: null}, {variant: 'isStatus'}],
    };
  });

  it('renders a labeled nav with one button per step', () => {
    const root = renderer.create(<ProgressBar {...props} />).root;

    expect(root.findByType('nav').props['aria-label']).toBe('Breadcrumbs');
    expect(root.findAllByType('button')).toHaveLength(props.steps.length);
  });

  it('marks only the active step as the current location', () => {
    const root = renderer.create(<ProgressBar {...props} />).root;

    expect(root.findAllByType('button').map(button => button.props['aria-current']))
      .toEqual(['false', 'false', 'location', 'false']);
  });

  it('marks no step as current when there is no active step', () => {
    const root = renderer.create(<ProgressBar {...props} activeIndex={null} />).root;

    expect(root.findAllByType('button').every(button => button.props['aria-current'] === 'false')).toBe(true);
  });

  it('makes the active step larger and raised', () => {
    const active = renderButtonJson({variant: 'isCorrect'}, true);

    expect(active).toHaveStyleRule('width', '4rem');
    expect(active).toHaveStyleRule('height', '4rem');
    expect(active).toHaveStyleRule('box-shadow', '0px 1px 4px 0px #00000066');
  });

  it('keeps inactive steps at the default size with no shadow', () => {
    const inactive = renderButtonJson({variant: 'isCorrect'});

    expect(inactive).toHaveStyleRule('width', '3.2rem');
    expect(inactive).toHaveStyleRule('height', '3.2rem');
    expect(inactive).not.toHaveStyleRule('box-shadow', expect.any(String));
  });

  it.each([
    ['isCorrect', '#E8F4D8'],
    ['isIncorrect', '#F8E8EA'],
    ['isIncomplete', colors.palette.neutralBright],
    ['isPartialCredit', colors.palette.yellow],
    ['isStatus', colors.palette.neutralDarker],
    [null, colors.palette.neutralLight],
  ] as [ProgressBarItemVariant, string][])('gives a %s step a %s background', (variant, background) => {
    expect(renderButtonJson({variant})).toHaveStyleRule('background-color', background);
  });

  it('shows the question number on question steps', () => {
    const root = renderItem({variant: 'isCorrect'});

    expect(root.findByType('button').children).toEqual(['4']);
  });

  it('shows the flag icon on the status step', () => {
    const root = renderItem({variant: 'isStatus'});

    expect(root.findByType('button').findAllByType(FlagIcon)).toHaveLength(1);
  });

  it.each([
    ['isCorrect', 'check'],
    ['isIncorrect', 'xmark'],
    ['isIncomplete', 'question'],
    ['isPartialCredit', 'p'],
    [null, 'circle'],
  ] as [ProgressBarItemVariant, string][])('shows the %s status icon as %s', (variant, icon) => {
    const root = renderItem({variant});

    expect(root.findByProps({'data-icon': icon}).type).toBe('svg');
  });

  it('shows no status icon on the status step', () => {
    const root = renderItem({variant: 'isStatus'});

    expect(root.findAll(node => node.type === 'svg' && node.props['data-icon'])).toHaveLength(0);
  });

  it.each([
    ['isCorrect', true, 1],
    ['isIncorrect', true, 1],
    ['isIncomplete', true, 1],
    ['isPartialCredit', true, 1],
    ['isCorrect', false, 0],
    [null, true, 0],
    ['isStatus', true, 0],
  ] as [ProgressBarItemVariant, boolean, number][])('a %s step with feedback=%s shows %i feedback dots', (variant, hasFeedback, count) => {
    const root = renderItem({variant, hasFeedback});

    expect(feedbackDots(root)).toHaveLength(count);
  });

  it('calls goToStep with the index and step when clicked', () => {
    const goToStep = jest.fn();
    const step: Step = {variant: 'isCorrect'};
    const root = renderItem(step, {goToStep});

    renderer.act(() => {
      root.findByType(StyledItem).props.onClick();
    });

    expect(goToStep).toHaveBeenCalledWith(3, step);
  });

  it.each([
    ['isCorrect', false, 'Question 4, Correct'],
    ['isIncorrect', true, 'Question 4, Incorrect, feedback available'],
    ['isIncomplete', false, 'Question 4, Incomplete'],
    ['isPartialCredit', true, 'Question 4, Partial credit, feedback available'],
    [null, true, 'Question 4, Not yet graded'],
    ['isStatus', true, 'Assignment status'],
  ] as [ProgressBarItemVariant, boolean, string][])('names a %s step with feedback=%s as "%s"', (variant, hasFeedback, label) => {
    const root = renderItem({variant, hasFeedback});

    expect(root.findByType(StyledItem).props['aria-label']).toBe(label);
  });

  it('hides the status icon and feedback dot from assistive technology', () => {
    const root = renderItem({variant: 'isCorrect', hasFeedback: true});

    expect(root.findAllByType('button')).toHaveLength(1);
    expect(root.findByType('svg').props['aria-hidden']).toBe('true');
    expect(feedbackDots(root)).toHaveLength(1);
  });
});
