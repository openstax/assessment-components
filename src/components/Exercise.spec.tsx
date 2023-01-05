import { Exercise, ExerciseWithStepDataProps, ExerciseWithQuestionStatesProps } from './Exercise';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Exercise', () => {
  describe('using step data', () => {

    let props: ExerciseWithStepDataProps;

    beforeEach(() => {
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
        onAnswerChange: () => null,
        onAnswerSave: () => null,
        onNextStep: () => null,
        onFinish: () => null,
        canAnswer: false,
        needsSaved: false,
        apiIsPending: false,
        canUpdateCurrentStep: false,
        step: {
          uid: '1234@4',
          id: 1,
          available_points: '1.0',
          is_completed: false,
          answer_id_order: ['1', '2'],
          answer_id: '1',
          free_response: '',
          feedback_html: '',
          correct_answer_id: '',
          correct_answer_feedback_html: '',
          is_feedback_available: true,
          attempts_remaining: 0,
          attempt_number: 1,
          incorrectAnswerId: 0
        },
        numberOfQuestions: 1
      }
    });

    it('matches snapshot', () => {
      const tree = renderer.create(
        <Exercise {...props} show_all_feedback />
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('with question state data', () => {
    let props: ExerciseWithQuestionStatesProps;

    beforeEach(() => {
      const ref = { current: null };
      Object.defineProperty(ref, 'current', {
        get: jest.fn(() => [null, 'element'])
      });
      jest.spyOn(React, "useRef").mockReturnValue(ref);

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
        onAnswerChange: () => null,
        onAnswerSave: () => null,
        onNextStep: () => null,
        onFinish: () => null,
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

    it('matches snapshot', () => {
      const tree = renderer.create(
        <Exercise {...props} />
      );
      expect(tree.toJSON()).toMatchSnapshot();
      expect(tree.root.findByProps({ "data-test-id": "continue-btn" }).props['children']).toContain('Next');
    });

    it('shows a detailed solution', () => {
      props.questionStates['1'].solution = { content_html: 'Detailed solution', solution_type: 'detailed' };
      const tree = renderer.create(
        <Exercise {...props} />
      ).toJSON();
      expect(tree).toMatchSnapshot();
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

    it('renders header icons with multiple choice explanation', () => {
      const tree = renderer.create(
        <Exercise {...props} showExerciseIcons={true} errataUrl='https://openstax.org' topicUrl='https://openstax.org'  />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it('renders header icons with two-step explanation', () => {
      props.exercise.questions[0].formats.push('free-response');
      const tree = renderer.create(
        <Exercise {...props} showExerciseIcons={true}  />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
