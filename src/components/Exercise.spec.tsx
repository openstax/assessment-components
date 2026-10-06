import { Exercise, ExerciseWithQuestionStatesProps, OverlayProps } from './Exercise';
import renderer from 'react-test-renderer';
import React from 'react';
import { byClass, findAllNodes, findNode, isJson, textOf } from '../test/utils';

describe('Exercise', () => {
  describe('with question state data', () => {
    let props: ExerciseWithQuestionStatesProps;

    beforeEach(() => {
      const ref = { current: null };

      Object.defineProperty(ref, 'current', {
        get: jest.fn(() => [null, 'element'])
      });

      const _useRef = React.useRef;

      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      (React.useRef as any) = jest.fn((initialValue) => {
        // Return the mocked ref if it's likely the questionsRef use
        if (Array.isArray(initialValue)) {
          return ref;
        }

        // Let other useRef uses work normally
        return _useRef(initialValue);
      });

      props = {
        exercise: {
          uid: '1@1',
          uuid: 'e4e27897-4abc-40d3-8565-5def31795edc',
          group_uuid: '20e82bf6-232e-40c8-ba68-2d22c6498f69',
          number: 1,
          version: 1,
          published_at: '2022-09-06T20:32:21.981Z',
          context: 'Context',
          stimulus_html: '<b>Stimulus HTML</b>',
          tags: [],
          authors: [{ user_id: 1, name: 'OpenStax' }],
          copyright_holders: [{ user_id: 1, name: 'OpenStax' }],
          derived_from: [],
          is_vocab: false,
          solutions_are_public: false,
          versions: [1],
          questions: [{
            id: 1,
            collaborator_solutions: [],
            formats: ['true-false'],
            stimulus_html: '',
            stem_html: '',
            is_answer_order_important: false,
            answers: [{
              id: '1',
              correctness: undefined,
              content_html: 'True',
            }, {
              id: '2',
              correctness: undefined,
              content_html: 'False',
            }],
          }],
        },
        questionNumber: 1,
        numberOfQuestions: 1,
        scrollToQuestion: 1,
        hasMultipleAttempts: false,
        hasUnlimitedAttempts: false,
        hasFeedback: true,
        onAnswerChange: () => null,
        onAnswerSave: () => null,
        onNextStep: () => null,
        step: {
          id: 1,
          uid: '1234@5',
          available_points: '1.0',
        },
        questionStates: {
          '1': {
            available_points: '1.0',
            is_completed: false,
            answer_id_order: ['1', '2'],
            answer_id: 1,
            free_response: '',
            feedback_html: '',
            correct_answer_id: '',
            correct_answer_feedback_html: '',
            attempts_remaining: 0,
            attempt_number: 1,
            incorrectAnswerId: 0,
            canAnswer: false,
            needsSaved: false,
            apiIsPending: false
          }
        },
      };
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('matches snapshot', () => {
      const tree = renderer.create(
        <Exercise {...props} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
      expect(tree.root.findByProps({ "data-test-id": "continue-btn" }).props['children']).toContain('Next');
    });

    it('advances after a free response submission whatever hasFeedback says', () => {
      // free response has always auto-advanced, and this entry point holds that contract:
      // `QuestionWrapper` gates the behaviour on hasFeedback and knows nothing about formats
      const onNextStep = jest.fn();
      props.exercise.questions[0].formats = ['free-response'];
      props.questionStates['1'].canAnswer = true;
      props.questionStates['1'].needsSaved = true;
      props.questionStates['1'].free_response = 'an answer';

      let tree!: renderer.ReactTestRenderer;
      renderer.act(() => {
        tree = renderer.create(<Exercise {...props} hasFeedback={true} onNextStep={onNextStep} />);
      });

      renderer.act(() => {
        tree.root.findByProps({ 'data-test-id': 'submit-answer-btn' }).props.onClick();
      });
      renderer.act(() => {
        props.questionStates['1'].is_completed = true;
        tree.update(<Exercise {...props} hasFeedback={true} onNextStep={onNextStep} />);
      });

      expect(onNextStep).toHaveBeenCalledWith(0);
    });

    it('leaves multiple choice to hasFeedback', () => {
      const onNextStep = jest.fn();
      props.questionStates['1'].canAnswer = true;
      props.questionStates['1'].needsSaved = true;
      props.questionStates['1'].answer_id = '1';

      let tree!: renderer.ReactTestRenderer;
      renderer.act(() => {
        tree = renderer.create(<Exercise {...props} hasFeedback={true} onNextStep={onNextStep} />);
      });

      renderer.act(() => {
        tree.root.findByProps({ 'data-test-id': 'submit-answer-btn' }).props.onClick();
      });
      renderer.act(() => {
        props.questionStates['1'].is_completed = true;
        tree.update(<Exercise {...props} hasFeedback={true} onNextStep={onNextStep} />);
      });

      expect(onNextStep).not.toHaveBeenCalled();
    });

    it('shows a detailed solution in the footer', () => {
      props.questionStates['1'].solution = { content_html: 'Detailed solution', solution_type: 'detailed' };
      const tree = renderer.create(<Exercise {...props} />).toJSON();
      const footer = findNode(tree, byClass('step-card-footer'));
      const solution = findNode(footer || null, byClass('detailed-solution'));

      expect(solution).toBeDefined();
      expect(textOf(findNode(solution || null, byClass('solution')) || null)).toBe('Detailed solution');
    });

    it('shows only the detailed solution from the definition, not the others it carries', () => {
      props.exercise.questions[0].collaborator_solutions = [
        { solution_type: 'summary', content_html: 'Summary solution' },
        { solution_type: 'detailed', content_html: 'Detailed solution' },
      ];
      const tree = renderer.create(<Exercise {...props} previewMode />);
      const text = JSON.stringify(tree.toJSON());

      expect(text).toContain('Detailed solution');
      expect(text).not.toContain('Summary solution');
    });

    it('shows no solution from a definition with no detailed solution', () => {
      props.exercise.questions[0].collaborator_solutions = [
        { solution_type: 'summary', content_html: 'Summary solution' },
      ];
      const tree = renderer.create(<Exercise {...props} previewMode />);

      expect(JSON.stringify(tree.toJSON())).not.toContain('Summary solution');
      expect(tree.root.findAllByProps({ className: 'detailed-solution' })).toHaveLength(0);
    });

    it('shows a detailed solution without controls in preview mode', () => {
      props.questionStates['1'] = {
        ...props.questionStates['1'],
        is_completed: true,
        canAnswer: false,
        solution: { content_html: 'Detailed solution', solution_type: 'detailed' },
      };
      const tree = renderer.create(
        <Exercise {...props} previewMode />
      );
      expect(tree.root.findAllByProps({ className: 'step-card-footer' })).not.toHaveLength(0);
      expect(tree.root.findAllByType('button')).toHaveLength(0);
    });

    it('shows no footer in a preview with nothing but attempts to put in it', () => {
      const tree = renderer.create(
        <Exercise {...props} previewMode hasMultipleAttempts hasUnlimitedAttempts />
      );
      expect(tree.root.findAllByProps({ className: 'step-card-question' })).not.toHaveLength(0);
      expect(tree.root.findAllByProps({ className: 'step-card-footer' })).toHaveLength(0);
    });

    it('shows a continue button when completed if there is another question', () => {
      props.exercise.questions.push({
        id: 2,
        collaborator_solutions: [],
        formats: ['true-false'],
        stimulus_html: '',
        stem_html: '',
        is_answer_order_important: false,
        answers: [{
          id: '1',
          correctness: undefined,
          content_html: 'True',
        }, {
          id: '2',
          correctness: undefined,
          content_html: 'False',
        }]
      });
      props.questionStates['1'] = { ...props.questionStates['1'], is_completed: true, canAnswer: false };
      props.questionStates['2'] = {
        available_points: '1.0',
        is_completed: false,
        answer_id_order: ['1', '2'],
        free_response: '',
        feedback_html: '',
        correct_answer_id: '',
        correct_answer_feedback_html: '',
        attempts_remaining: 0,
        attempt_number: 1,
        incorrectAnswerId: 0,
        canAnswer: true,
        needsSaved: false,
        apiIsPending: false
      }
      const tree = renderer.create(
        <Exercise {...props} />
      )
      expect(tree.root.findAllByProps({ "data-test-id": "continue-btn" })[0].props['children']).toContain('Continue');
    });

    describe('header icons', () => {
      const location = { header: { mobile: true, desktop: true } };
      const links = {
        errata: { url: 'https://openstax.org/errata', location },
        topic: { url: 'https://openstax.org/topic', location },
      };

      const render = (exerciseIcons: ExerciseWithQuestionStatesProps['exerciseIcons']) =>
        renderer.create(<Exercise {...props} exerciseIcons={exerciseIcons} />).toJSON();

      // The toolbar renders links with the same labels and URLs, so only the card header counts.
      const headerLinks = (tree: ReturnType<typeof render>) =>
        findAllNodes(findNode(tree, byClass('step-card-header')) || null, node => node.type === 'a');

      const hrefsLabelled = (tree: ReturnType<typeof render>, label: string) =>
        headerLinks(tree).filter(node => node.props['aria-label'] === label).map(node => node.props.href);

      it('links to the topic and the errata form from the header, in a new tab', () => {
        const tree = render(links);

        expect(hrefsLabelled(tree, 'View topic in textbook')).toEqual(['https://openstax.org/topic']);
        expect(hrefsLabelled(tree, 'Suggest a correction')).toEqual(['https://openstax.org/errata']);
        expect(headerLinks(tree).map(node => node.props.target)).toEqual(['_blank', '_blank']);
      });

      it('shows only the icons that are configured', () => {
        const tree = render({ topic: links.topic });

        expect(hrefsLabelled(tree, 'View topic in textbook')).toEqual(['https://openstax.org/topic']);
        expect(hrefsLabelled(tree, 'Suggest a correction')).toEqual([]);
      });

      it('explains a multiple-choice question', () => {
        expect(textOf(render({ info: { type: 'multiple-choice', location } })))
          .toContain('Select the best answer from the given list of distractors.');
      });

      it('explains a two-step question', () => {
        expect(textOf(render({ info: { type: 'two-step', location } })))
          .toContain('In a two-step question, OpenStax asks for your own answer first');
      });

      it('shows no icons or explanations when none are configured', () => {
        const text = textOf(render(undefined));

        expect(text).not.toContain('View topic in textbook');
        expect(text).not.toContain('Suggest a correction');
        expect(text).not.toContain('Select the best answer');
        expect(text).not.toContain('In a two-step question');
      });
    });
  });

  describe('with overlay rendering', () => {

    let props: ExerciseWithQuestionStatesProps & OverlayProps;

    beforeEach(() => {
      props = {
        overlayChildren: <span>Overlay</span>,
        exercise: {
          uid: '1@1',
          uuid: 'e4e27897-4abc-40d3-8565-5def31795edc',
          group_uuid: '20e82bf6-232e-40c8-ba68-2d22c6498f69',
          number: 1,
          version: 1,
          published_at: '2022-09-06T20:32:21.981Z',
          context: 'Context',
          stimulus_html: '<b>Stimulus HTML</b>',
          tags: [],
          authors: [{ user_id: 1, name: 'OpenStax' }],
          copyright_holders: [{ user_id: 1, name: 'OpenStax' }],
          derived_from: [],
          is_vocab: false,
          solutions_are_public: false,
          versions: [1],
          questions: [{
            id: '1234@5',
            collaborator_solutions: [],
            formats: ['true-false'],
            stimulus_html: '',
            stem_html: '',
            is_answer_order_important: false,
            answers: [{
              id: '1',
              correctness: undefined,
              content_html: 'True',
            }, {
              id: '2',
              correctness: undefined,
              content_html: 'False',
            }],
          }],
        },
        questionNumber: 1,
        hasMultipleAttempts: false,
        hasUnlimitedAttempts: false,
        onAnswerChange: () => null,
        onAnswerSave: () => null,
        onNextStep: () => null,
        canUpdateCurrentStep: false,
        step: {
          uid: '1234@4',
          id: 1,
          available_points: '1.0',
        },
        questionStates: {
          '1234@5': {
            available_points: '1.0',
            is_completed: false,
            answer_id: '1',
            free_response: '',
            feedback_html: '',
            correct_answer_id: '',
            correct_answer_feedback_html: '',
            attempts_remaining: 0,
            attempt_number: 1,
            incorrectAnswerId: 0,
            canAnswer: false,
            needsSaved: false,
            apiIsPending: false,
          },
        },
        numberOfQuestions: 1
      }
    });

    const overlayCard = (tree: renderer.ReactTestRenderer) =>
      tree.root.find(node => node.type === 'div' && typeof node.props.onMouseOver === 'function');

    it('keeps the overlay out of sight until the card is hovered', () => {
      const tree = renderer.create(<Exercise {...props} show_all_feedback />);

      expect(textOf(tree.toJSON())).not.toContain('Overlay');

      renderer.act(() => { overlayCard(tree).props.onMouseOver(); });
      expect(textOf(tree.toJSON())).toContain('Overlay');

      renderer.act(() => { overlayCard(tree).props.onMouseLeave(); });
      expect(textOf(tree.toJSON())).not.toContain('Overlay');
    });

    // the card's outer container is the element that holds the step card, and is the one that takes focus
    const cardContainer = (tree: renderer.ReactTestRenderer) => findNode(
      tree.toJSON(),
      node => node.type === 'div' && (node.children || []).some(child => isJson(child) && byClass('step-card')(child))
    );

    it('makes the card focusable only when there is an overlay', () => {
      const withOverlay = renderer.create(<Exercise {...props} show_all_feedback />);
      const without = renderer.create(<Exercise {...props} overlayChildren={undefined} show_all_feedback />);

      expect(cardContainer(withOverlay)?.props.tabIndex).toBe(0);

      expect(cardContainer(without)).toBeDefined();
      expect(cardContainer(without)?.props.tabIndex).toBeUndefined();
      expect(cardContainer(without)?.props.onMouseOver).toBeUndefined();
    });

    it('matches snapshot with previewMode', () => {
      const tree = renderer.create(
        <Exercise {...props} show_all_feedback previewMode />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
