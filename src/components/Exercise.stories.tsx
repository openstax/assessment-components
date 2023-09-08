import { useState } from 'react';
import { Exercise, ExerciseWithStepDataProps, ExerciseWithQuestionStatesProps } from './Exercise';
import { Answer } from '../types';

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
  numberOfQuestions: 1,
  canUpdateCurrentStep: false
}

const exerciseWithQuestionStatesProps = (): ExerciseWithQuestionStatesProps => { return {
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
      attempt_number: 0,
      incorrectAnswerId: 0,
      canAnswer: true,
      needsSaved: true,
      apiIsPending: false
    }
  },
}};

export const Default = () => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<number>(0);
  const [apiIsPending, setApiIsPending] = useState(false)
  const props = exerciseWithQuestionStatesProps();
  props.questionStates['1'].answer_id = selectedAnswerId;
  props.questionStates['1'].apiIsPending = apiIsPending;
  return (
    <Exercise
      {...props}
      onAnswerChange={(a: Omit<Answer, 'id'> & { id: number, question_id: number }) => {
        setSelectedAnswerId(a.id)
      }}
      onAnswerSave={() => setApiIsPending(true)}
    />)
};

export const DeprecatedStepData = () => <Exercise {...exerciseWithStepDataProps} />;

export const CompleteWithFeedback = () => {
  const props: ExerciseWithQuestionStatesProps = {
    ...exerciseWithQuestionStatesProps(),

    questionStates: {
      '1': {
        available_points: '1.0',
        is_completed: true,
        answer_id_order: ['1', '2'],
        answer_id: undefined,
        free_response: 'Free response',
        feedback_html: 'Feedback',
        correct_answer_id: '1',
        correct_answer_feedback_html: 'Feedback for the correct answer',
        attempts_remaining: 0,
        attempt_number: 1,
        incorrectAnswerId: 0,
        canAnswer: false,
        needsSaved: false,
        apiIsPending: false
      }
    }
  };

  return <Exercise {...props} />;
};

export const IncorrectWithFeedbackAndSolution = () => {
  const props: ExerciseWithQuestionStatesProps = { ...exerciseWithQuestionStatesProps() };
  props.questionStates = {
    '1': {
      available_points: '1.0',
      is_completed: true,
      answer_id_order: ['1', '2'],
      answer_id: undefined,
      free_response: 'Free response',
      feedback_html: 'Feedback for the incorrect answer',
      correct_answer_id: '1',
      correct_answer_feedback_html: 'Feedback for the correct answer',
      attempts_remaining: 0,
      attempt_number: 1,
      incorrectAnswerId: '2',
      solution: { content_html: 'A detailed solution', solution_type: 'detailed' },
      canAnswer: true,
      needsSaved: false,
      apiIsPending: false
    }
  };
  return <Exercise {...props} />;
};

export const IncorrectWithFeedbackAndSolutionWrappingText = () => {
  const props: ExerciseWithQuestionStatesProps = exerciseWithQuestionStatesProps();
  props.questionStates = {
    '1': {
      available_points: '1.0',
      is_completed: true,
      answer_id_order: ['1', '2'],
      answer_id: 2,
      free_response: 'Free response',
      feedback_html: 'Feedback for the incorrect answer',
      correct_answer_id: '1',
      correct_answer_feedback_html: 'Feedback for the correct answer',
      attempts_remaining: 0,
      attempt_number: 1,
      incorrectAnswerId: '2',
      solution: { content_html: 'A detailed solution', solution_type: 'detailed' },
      canAnswer: true,
      needsSaved: false,
      apiIsPending: false
    }
  };
  props.exercise.questions[0].answers[0].content_html = 'A very long correct answer to observe line wrapping at mobile sizes';
  props.exercise.questions[0].answers[1].content_html = 'A very long incorrect answer to observe line wrapping at mobile sizes';
  return <Exercise {...props} />;
};

export const MultiPartHalfComplete = () => {
  const props: ExerciseWithQuestionStatesProps = {
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
      }, {
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
        }],
      }],
    },
    questionNumber: 1,
    numberOfQuestions: 2,
    hasMultipleAttempts: false,
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
        is_completed: true,
        answer_id_order: ['1', '2'],
        answer_id: 1,
        free_response: '',
        feedback_html: '',
        correct_answer_id: '',
        correct_answer_feedback_html: '',
        attempts_remaining: 0,
        attempt_number: 0,
        incorrectAnswerId: 0,
        canAnswer: false,
        needsSaved: false,
        apiIsPending: false
      },
      '2': {
        available_points: '1.0',
        is_completed: false,
        answer_id_order: ['1', '2'],
        answer_id: 0,
        free_response: '',
        feedback_html: '',
        correct_answer_id: '',
        correct_answer_feedback_html: '',
        attempts_remaining: 0,
        attempt_number: 0,
        incorrectAnswerId: 0,
        canAnswer: true,
        needsSaved: true,
        apiIsPending: false
      }
    }
  };

  return <Exercise {...props} />;
};

export const Icons = () => {
  const location = {
    toolbar: {
      desktop: false,
      mobile: true
    },
    header: {
      desktop: true,
      mobile: false
    }
  };

  return <Exercise
    {...exerciseWithQuestionStatesProps()}
    exerciseIcons={{
      topic: {
        url: 'https://openstax.org',
        location
      },
      errata: {
        url: 'https://openstax.org',
        location
      },
      info: {
        location
      },
    }}
  />;
};

export const MathJax = () => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<number>(0);
  const [correctAnswerId, setCorrectAnswerId] = useState<number | undefined>(undefined);

  const props1: ExerciseWithQuestionStatesProps = {
    ...exerciseWithQuestionStatesProps(),
    questionStates: {
      '1': {
        available_points: '1.0',
        is_completed: false,
        answer_id_order: ['1', '2'],
        answer_id: selectedAnswerId,
        free_response: '',
        feedback_html: '',
        correct_answer_id: '1',
        correct_answer_feedback_html: '',
        attempts_remaining: 0,
        attempt_number: 0,
        incorrectAnswerId: 0,
        canAnswer: true,
        needsSaved: true,
        apiIsPending: false
      }
    },
    exercise: {
      ...exerciseWithStepDataProps.exercise,
      context: '',
      stimulus_html: '',
      questions: [{
        id: '1',
        formats: ['true-false'],
        stimulus_html: '',
        stem_html: `What's the sound of the reaction <span data-math="2 \\, \\text{H}_{2(g)} + \\, \\text{O}_{2(g)} \\to 2 \\, \\text{H}_{2}\\text{O}_{(l)}"></span> under the moonlight?`,
        is_answer_order_important: false,
        answers: [{
          id: '1',
          correctness: '1',
          content_html: `<span data-math="\\text{H}_2\\text{O} + \\sqrt[3]{\\text{Melodic Echo}}"></span>`,
          feedback_html: `<span data-math="\\text{H}_2\\text{O} + \\sqrt[3]{\\text{Melodic Echo}}"></span> implies that water molecules are harmonizing with the cubic root of a Melodic Echo.
This resonates with an unheard symphony of the universe, creating a multisensory mathematics that's both refreshing and melodious.`,
        }, {
          id: '2',
          correctness: undefined,
          content_html: `<span data-math="2 \\, \\text{NO}_2 \\to \\, \\text{N}_2\\text{O}_4 + \\text{Silent Whisper}"></span>`,
        }],
      }],
    },
  };

  if (correctAnswerId) {
    props1.questionStates['1'].is_completed = true;
    props1.questionStates['1'].correct_answer_feedback_html = props1.exercise.questions[0].answers[0].feedback_html || '';
    props1.questionStates['1'].solution = {
      content_html: `<span data-math="2 \\, \\text{H}_{2(g)} + \\, \\text{O}_{2(g)} \\to 2 \\, \\text{H}_{2}\\text{O}_{(l)}"></span>`,
      solution_type: 'detailed'
    };
  }

  const props2: ExerciseWithQuestionStatesProps = {
    ...exerciseWithQuestionStatesProps(),
    exercise: {
      ...exerciseWithStepDataProps.exercise,
      context: `At the intersection of mathematics and abstract art, there is a realm where equations take on the characteristics of color and flavor. For
instance, in this dimension, the quadratic formula <span data-math="x = \\frac{{-b \\pm \\sqrt{{b^2-4ac}}}}{{2a}}"></span> might taste like a blend of sweet and
sour, with the variable <span data-math="a"></span> contributing sweetness, <span data-math="b"></span> sourness, and <span data-math="c"></span> a hint of
bitterness. The discriminant <span data-math="b^2 - 4ac"></span> could perhaps alter the color of the equation, ranging from vibrant blue to fiery red.`,
      stimulus_html: `In a universe where equations like
<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mi>x</mi>
  <mo>=</mo>
  <mrow class="MJX-TeXAtom-ORD">
    <mfrac>
      <mrow>
        <mo>&#x2212;<!-- − --></mo>
        <mi>b</mi>
        <mo>&#x00B1;<!-- ± --></mo>
        <msqrt>
          <msup>
            <mi>b</mi>
            <mn>2</mn>
          </msup>
          <mo>&#x2212;<!-- − --></mo>
          <mn>4</mn>
          <mi>a</mi>
          <mi>c</mi>
        </msqrt>
      </mrow>
      <mrow>
        <mn>2</mn>
        <mi>a</mi>
      </mrow>
    </mfrac>
  </mrow>
</math> have flavor and color properties...`,
      questions: [{
        id: '1',
        collaborator_solutions: [],
        formats: ['true-false'],
        stimulus_html: '',
        stem_html: `What's the flavor of the integral <span data-math="( \\int (3x^2 - 2x + 1) \\, dx )?"></span>`,
        is_answer_order_important: false,
        answers: [{
          id: '1',
          correctness: undefined,
          content_html: `<span data-math="\\sqrt[3]{\\text{Apple}}"></span>`,
        }, {
          id: '2',
          correctness: undefined,
          content_html: `<span data-math="\\frac{\\text{Banana}^{2}}{4}"></span>`,
        }],
      }, {
        id: '2',
        collaborator_solutions: [],
        formats: ['true-false'],
        stimulus_html: `If <span data-math="f(x) = \\sin(x) \\cos(x)"></span>, then what's the color of its derivative?`,
        stem_html: '',
        is_answer_order_important: false,
        answers: [{
          id: '1',
          correctness: undefined,
          content_html: `<span data-math="e^{\\text{Blue}}"></span>`,
        }, {
          id: '2',
          correctness: undefined,
          content_html: `<span data-math="\\frac{\\pi}{2} + \\text{Red}"></span>`,
        }],
      }],
    },
    questionStates: {
      ...exerciseWithQuestionStatesProps().questionStates,
      '1': {
        ...exerciseWithQuestionStatesProps().questionStates['1'],
        solution: {
          content_html: `<span data-math="\\sqrt[3]{\\text{Apple}}"></span>`,
          solution_type: 'detailed'
        }
      },
      '2': {
        ...exerciseWithQuestionStatesProps().questionStates['1'],
        solution: {
          content_html: `<span data-math="e^{\\text{Blue}}"></span>`,
          solution_type: 'detailed'
        }
      }
    }
  };

  return (
    <>
      <Exercise {...props1}
        onAnswerChange={(a: Omit<Answer, 'id'> & { id: number, question_id: number }) => {
          setSelectedAnswerId(a.id)
        }}
        onAnswerSave={() => {
          setCorrectAnswerId(1);
        }}
      />
      <Exercise {...props2} />
    </>
  );
};
