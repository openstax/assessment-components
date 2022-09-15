import { Exercise, ExerciseWithStepDataProps, ExerciseWithQuestionStatesProps } from './Exercise';

const exerciseWithStepDataProps: ExerciseWithStepDataProps = {
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
      id: '1',
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
  canAnswer: false,
  needsSaved: false,
  apiIsPending: false,
  step: {
    uid: '1234@5',
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

const exerciseWithQuestionStatesProps: ExerciseWithQuestionStatesProps = {
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
      id: '1',
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
  hasMultipleAttempts: false,
  onAnswerChange: () => null,
  onAnswerSave: () => null,
  onNextStep: () => null,
  canAnswer: false,
  needsSaved: false,
  apiIsPending: false,
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
      answer_id: '1',
      free_response: '',
      feedback_html: '',
      correct_answer_id: '',
      correct_answer_feedback_html: '',
      attempts_remaining: 0,
      attempt_number: 1,
      incorrectAnswerId: 0
    }
  },
};

export const Default = () => <Exercise {...exerciseWithQuestionStatesProps} />;
export const DeprecatedStepData = () => <Exercise {...exerciseWithStepDataProps} />;
export const CompleteWithFeedback = () => {
  const props: ExerciseWithQuestionStatesProps = {
    ...exerciseWithQuestionStatesProps,

    questionStates: {
      '1': {
        available_points: '1.0',
        is_completed: true,
        answer_id_order: ['1', '2'],
        answer_id: '1',
        free_response: 'Free response',
        feedback_html: 'Feedback',
        correct_answer_id: '1',
        correct_answer_feedback_html: 'Feedback for the correct answer',
        attempts_remaining: 0,
        attempt_number: 1,
        incorrectAnswerId: 0
      }
    }
  };

  return <Exercise {...props} />;
};

export const IncorrectWithFeedbackAndSolution = () => {
  const props: ExerciseWithQuestionStatesProps = { ...exerciseWithQuestionStatesProps };
  props.questionStates = {
    '1': {
      available_points: '1.0',
      is_completed: true,
      answer_id_order: ['1', '2'],
      answer_id: '2',
      free_response: 'Free response',
      feedback_html: 'Feedback for the incorrect answer',
      correct_answer_id: '1',
      correct_answer_feedback_html: 'Feedback for the correct answer',
      attempts_remaining: 0,
      attempt_number: 1,
      incorrectAnswerId: '2',
      solution: { content_html: 'A detailed solution', solution_type: 'detailed' }
    }
  };
  return <Exercise {...props} />;
};
