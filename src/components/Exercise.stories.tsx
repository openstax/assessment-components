import React, { useState } from 'react';
import {
  Exercise,
  ExerciseWithStepDataProps,
  ExerciseWithQuestionStatesProps,
} from './Exercise';
import { Answer, ExerciseData } from '../types';
import { IncludeRemoveQuestion } from './IncludeRemoveQuestion';
import styled from 'styled-components';
import { ExercisePreview } from './ExercisePreview';

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
    questions: [
      {
        id: '1',
        collaborator_solutions: [],
        formats: ['true-false'],
        stimulus_html: '',
        stem_html: '',
        is_answer_order_important: false,
        answers: [
          {
            id: '1',
            correctness: undefined,
            content_html: 'True',
          },
          {
            id: '2',
            correctness: undefined,
            content_html: 'False',
          },
        ],
      },
    ],
  },
  questionNumber: 1,
  hasMultipleAttempts: false,
  hasUnlimitedAttempts: false,
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
    incorrectAnswerId: 0,
  },
  numberOfQuestions: 1,
  canUpdateCurrentStep: false,
};

const exerciseWithQuestionStatesProps = (uid?: string, correctness?: string): ExerciseWithQuestionStatesProps => {
  return {
    exercise: {
      uid: uid || '1@1',
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
          correctness: correctness,
          content_html: 'True',
        }, {
          id: '2',
          correctness: correctness,
          content_html: 'False',
        }],
      }],
    },
    questionNumber: 1,
    numberOfQuestions: 1,
    hasMultipleAttempts: false,
    hasUnlimitedAttempts: false,
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
    hasFeedback: true,
  }
};

type TextResizerValue = -2 | -1 | 0 | 1 | 2 | 3;
const textResizerScales = [0.75, 0.9, 1, 1.25, 1.5, 2];
const textResizerValues: TextResizerValue[] = [-2, -1, 0, 1, 2, 3];
const textResizerValueMap = new Map(
  textResizerValues.map((v, i) => [v, textResizerScales[i]]),
);

const ExerciseWrapper = styled.div<{ textSize: TextResizerValue }>`
  ${(props: { textSize: TextResizerValue }) => `
    --content-text-scale: ${textResizerValueMap.get(props.textSize)};
  `}
`;

const TextResizerProvider = ({ children }: { children: React.ReactNode }) => {
  const [index, setIndex] = useState(2);

  const increase = () =>
    setIndex(Math.min(index + 1, textResizerValues.length - 1));
  const decrease = () => setIndex(Math.max(index - 1, 0));

  return (
    <ExerciseWrapper textSize={textResizerValues[index]}>
      <div
        style={{
          marginBottom: '2rem',
          alignItems: 'center',
          placeContent: 'center',
          display: 'flex',
          gap: '1rem',
        }}
      >
        <h3>Text Size</h3>
        <button onClick={decrease}>- Decrease</button>
        <span
          style={{
            display: 'inline-block',
            width: '3rem',
            textAlign: 'center',
          }}
        >
          <b>{textResizerScales[index]}</b>
        </span>
        <button onClick={increase}>+ Increase</button>
      </div>
      {children}
    </ExerciseWrapper>
  );
};

export const Default = () => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<number>(0);
  const [apiIsPending, setApiIsPending] = useState(false);
  const props = exerciseWithQuestionStatesProps();
  props.questionStates['1'].answer_id = selectedAnswerId;
  props.questionStates['1'].apiIsPending = apiIsPending;
  return (
    <Exercise
      {...props}
      onAnswerChange={(
        a: Omit<Answer, 'id'> & { id: number; question_id: number },
      ) => {
        setSelectedAnswerId(a.id);
      }}
      onAnswerSave={() => setApiIsPending(true)}
    />
  );
};

export const AnswerInteractionDisable = () => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<number>(0);
  const [apiIsPending, setApiIsPending] = useState(false);
  const props = exerciseWithQuestionStatesProps();
  props.questionStates['1'].answer_id = selectedAnswerId;
  props.questionStates['1'].apiIsPending = apiIsPending;
  return (
    <Exercise
      {...props}
      onAnswerChange={(
        a: Omit<Answer, 'id'> & { id: number; question_id: number },
      ) => {
        setSelectedAnswerId(a.id);
      }}
      onAnswerSave={() => setApiIsPending(true)}
      previewMode
    />
  );
};

export const DefaultWithoutFeedback = () => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<number>(0);
  const [apiIsPending, setApiIsPending] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const props = exerciseWithQuestionStatesProps();
  props.hasFeedback = false;
  props.questionStates['1'].answer_id = selectedAnswerId;
  props.questionStates['1'].apiIsPending = apiIsPending;
  props.questionStates['1'].is_completed = isCompleted;
  props.questionStates['1'].canAnswer = !isCompleted;
  return (
    <Exercise
      {...props}
      onAnswerChange={(a: Omit<Answer, 'id'> & { id: number, question_id: number }) => {
        setSelectedAnswerId(a.id)
      }}
      onAnswerSave={() => {
        setApiIsPending(true);
        setTimeout(() => {
          setApiIsPending(false)
          setIsCompleted(true)
        }, 1000)
      }}
      onNextStep={(idx) => console.log(`Next step: ${idx}`)}
    />
  )
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
        apiIsPending: false,
      },
    },
  };

  return (
    <TextResizerProvider>
      <Exercise {...props} />
    </TextResizerProvider>
  );
};

export const CompleteWithoutFeedback = () => {
  const props: ExerciseWithQuestionStatesProps = {
    ...exerciseWithQuestionStatesProps(),

    questionStates: {
      '1': {
        available_points: '1.0',
        is_completed: true,
        answer_id_order: ['1', '2'],
        answer_id: 1,
        free_response: 'Free response',
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
    hasFeedback: false,
  };

  return <TextResizerProvider><Exercise {...props} /></TextResizerProvider>;
};

export const IncorrectWithFeedbackAndSolution = () => {
  const props: ExerciseWithQuestionStatesProps = {
    ...exerciseWithQuestionStatesProps(),
  };
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
      solution: {
        content_html: 'A detailed solution',
        solution_type: 'detailed',
      },
      canAnswer: true,
      needsSaved: false,
      apiIsPending: false,
    },
  };
  return (
    <TextResizerProvider>
      <Exercise {...props} />
    </TextResizerProvider>
  );
};

export const IncorrectWithFeedbackAndSolutionWrappingText = () => {
  const props: ExerciseWithQuestionStatesProps =
    exerciseWithQuestionStatesProps();
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
      solution: {
        content_html: 'A detailed solution',
        solution_type: 'detailed',
      },
      canAnswer: true,
      needsSaved: false,
      apiIsPending: false,
    },
  };
  props.exercise.questions[0].answers[0].content_html =
    'A very long correct answer to observe line wrapping at mobile sizes';
  props.exercise.questions[0].answers[1].content_html =
    'A very long incorrect answer to observe line wrapping at mobile sizes';
  return (
    <TextResizerProvider>
      <Exercise {...props} />
    </TextResizerProvider>
  );
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
      questions: [
        {
          id: 1,
          collaborator_solutions: [],
          formats: ['true-false'],
          stimulus_html: '',
          stem_html: '',
          is_answer_order_important: false,
          answers: [
            {
              id: '1',
              correctness: undefined,
              content_html: 'True',
            },
            {
              id: '2',
              correctness: undefined,
              content_html: 'False',
            },
          ],
        },
        {
          id: 2,
          collaborator_solutions: [],
          formats: ['true-false'],
          stimulus_html: '',
          stem_html: '',
          is_answer_order_important: false,
          answers: [
            {
              id: '1',
              correctness: undefined,
              content_html: 'True',
            },
            {
              id: '2',
              correctness: undefined,
              content_html: 'False',
            },
          ],
        },
      ],
    },
    questionNumber: 1,
    numberOfQuestions: 2,
    hasMultipleAttempts: false,
    hasUnlimitedAttempts: false,
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
        apiIsPending: false,
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
        apiIsPending: false,
      },
    },
  };

  return (
    <TextResizerProvider>
      <Exercise {...props} />
    </TextResizerProvider>
  );
};

export const Icons = () => {
  const location = {
    toolbar: {
      desktop: false,
      mobile: true,
    },
    header: {
      desktop: true,
      mobile: false,
    },
  };

  return (
    <Exercise
      {...exerciseWithQuestionStatesProps()}
      exerciseIcons={{
        topic: {
          url: 'https://openstax.org',
          location,
        },
        errata: {
          url: 'https://openstax.org',
          location,
        },
        info: {
          location,
        },
      }}
    />
  );
};

export const MathJax = () => {
  const [selectedAnswerId, setSelectedAnswerId] = useState<number>(0);
  const [correctAnswerId, setCorrectAnswerId] = useState<number | undefined>(
    undefined,
  );
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
        apiIsPending: false,
      },
    },
    exercise: {
      ...exerciseWithStepDataProps.exercise,
      context: '',
      stimulus_html: '',
      questions: [
        {
          id: '1',
          formats: ['true-false'],
          stimulus_html: '',
          stem_html: `What's the sound of the reaction <span data-math='2 \\, \\text{H}_{2(g)} + \\, \\text{O}_{2(g)} \\to 2 \\, \\text{H}_{2}\\text{O}_{(l)}'></span> under the moonlight?`,
          is_answer_order_important: false,
          answers: [
            {
              id: '1',
              correctness: '1',
              content_html: `<span data-math='\\text{H}_2\\text{O} + \\sqrt[3]{\\text{Melodic Echo}}'></span>`,
              feedback_html: `<span data-math='\\text{H}_2\\text{O} + \\sqrt[3]{\\text{Melodic Echo}}'></span> implies that water molecules are harmonizing with the cubic root of a Melodic Echo.
This resonates with an unheard symphony of the universe, creating a multisensory mathematics that's both refreshing and melodious.`,
            },
            {
              id: '2',
              correctness: undefined,
              content_html: `<span data-math='2 \\, \\text{NO}_2 \\to \\, \\text{N}_2\\text{O}_4 + \\text{Silent Whisper}'></span>`,
            },
          ],
        },
      ],
    },
  };

  if (correctAnswerId) {
    props1.questionStates['1'].is_completed = true;
    props1.questionStates['1'].correct_answer_feedback_html =
      props1.exercise.questions[0].answers[0].feedback_html || '';
    props1.questionStates['1'].solution = {
      content_html: `<span data-math='2 \\, \\text{H}_{2(g)} + \\, \\text{O}_{2(g)} \\to 2 \\, \\text{H}_{2}\\text{O}_{(l)}'></span>`,
      solution_type: 'detailed',
    };
  }

  const props2: ExerciseWithQuestionStatesProps = {
    ...exerciseWithQuestionStatesProps(),
    exercise: {
      ...exerciseWithStepDataProps.exercise,
      context: `At the intersection of mathematics and abstract art, there is a realm where equations take on the characteristics of color and flavor. For
instance, in this dimension, the quadratic formula <span data-math='x = \\frac{{-b \\pm \\sqrt{{b^2-4ac}}}}{{2a}}'></span> might taste like a blend of sweet and
sour, with the variable <span data-math='a'></span> contributing sweetness, <span data-math='b'></span> sourness, and <span data-math='c'></span> a hint of
bitterness. The discriminant <span data-math='b^2 - 4ac'></span> could perhaps alter the color of the equation, ranging from vibrant blue to fiery red.`,
      stimulus_html: `In a universe where equations like
<math xmlns='http://www.w3.org/1998/Math/MathML'>
  <mi>x</mi>
  <mo>=</mo>
  <mrow class='MJX-TeXAtom-ORD'>
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
      questions: [
        {
          id: '1',
          collaborator_solutions: [],
          formats: ['true-false'],
          stimulus_html: '',
          stem_html: `What's the flavor of the integral <span data-math='( \\int (3x^2 - 2x + 1) \\, dx )?'></span>`,
          is_answer_order_important: false,
          answers: [
            {
              id: '1',
              correctness: '1.0',
              content_html: `<span data-math='\\sqrt[3]{\\text{Apple}}'></span>`,
            },
            {
              id: '2',
              correctness: '1.0',
              content_html: `<span data-math='\\frac{\\text{Banana}^{2}}{4}'></span>`,
            },
          ],
        },
        {
          id: '2',
          collaborator_solutions: [],
          formats: ['true-false'],
          stimulus_html: `If <span data-math='f(x) = \\sin(x) \\cos(x)'></span>, then what's the color of its derivative?`,
          stem_html: '',
          is_answer_order_important: false,
          answers: [
            {
              id: '1',
              correctness: '1.0',
              content_html: `<span data-math='e^{\\text{Blue}}'></span>`,
            },
            {
              id: '2',
              correctness: '1.0',
              content_html: `<span data-math='\\frac{\\pi}{2} + \\text{Red}'></span>`,
            },
          ],
        },
      ],
    },
    questionStates: {
      ...exerciseWithQuestionStatesProps().questionStates,
      '1': {
        ...exerciseWithQuestionStatesProps().questionStates['1'],
        solution: {
          content_html: `<span data-math='\\sqrt[3]{\\text{Apple}}'></span>`,
          solution_type: 'detailed',
        },
      },
      '2': {
        ...exerciseWithQuestionStatesProps().questionStates['1'],
        solution: {
          content_html: `<span data-math='e^{\\text{Blue}}'></span>`,
          solution_type: 'detailed',
        },
      },
    },
  };

  return (
    <TextResizerProvider>
      <Exercise
        {...props1}
        onAnswerChange={(
          answer: Omit<Answer, 'id'> & { id: number; question_id: number },
        ) => {
          setSelectedAnswerId(answer.id);
        }}
        onAnswerSave={() => {
          setCorrectAnswerId(1);
        }}
      />
      <Exercise {...props2} />
    </TextResizerProvider>
  );
};




export const PreviewCardWithScore = () => {
  const answer_id_order = [832300, 832303, 832301, 832302];
  const answer_id = answer_id_order[Math.floor(Math.random() * answer_id_order.length)];
  const props1: ExerciseWithQuestionStatesProps = {
    ...exerciseWithQuestionStatesProps(),
    questionStates: {
      '320733': {
        available_points: '1.0',
        is_completed: true,
        answer_id_order,
        answer_id,
        free_response: 'Feedback info',
        feedback_html: '',
        correct_answer_id: 832303,
        correct_answer_feedback_html:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        attempts_remaining: 0,
        attempt_number: 0,
        incorrectAnswerId: 0,
        canAnswer: false,
        needsSaved: false,
        apiIsPending: false,
        solution: {
          content_html:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          solution_type: 'detailed',
        },
        scoring: { score: 1.5, maxScore: 2.0}
      },
      '320734': {
        available_points: '1.0',
        is_completed: true,
        answer_id_order,
        answer_id,
        free_response: 'Feedback info',
        feedback_html: '',
        correct_answer_id: 832303,
        correct_answer_feedback_html:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        attempts_remaining: 0,
        attempt_number: 0,
        incorrectAnswerId: 0,
        canAnswer: false,
        needsSaved: false,
        apiIsPending: false,
        solution: {
          content_html:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          solution_type: 'detailed',
        },
        scoring: { score: 2.0, maxScore: 3.0}
      },
    },
    exercise: {
      tags: [
        'book:stax-anp',
        'context-cnxmod:bbaedbf4-4d78-4b7c-bc94-2a742f0f2f8c',
        'lo:stax-anp:22-3-6',
        'exid:stax-anp:1786',
        'dok:1',
        'time:short',
        'book-slug:anatomy-and-physiology',
        'book-slug:anatomy-and-physiology-2e',
        'module-slug:anatomy-and-physiology:22-3-the-process-of-breathing',
        'module-slug:anatomy-and-physiology-2e:22-3-the-process-of-breathing',
        'assignment-type:reading',
        'blooms:1',
        'ost-type:concept-coach',
        'assessment:preparedness:https://openstax.org/orn/book:page/4fd99458-6fdf-49bc-8688-a6dc17a1268d:11673dd9-55e6-46d9-8b78-b06df85246bd',
      ],
      uuid: '8ae2b252-8943-4a1a-a123-2e6d9eeef54a',
      group_uuid: '19bd7035-d50b-42d8-8f8c-a4d72588a7cc',
      number: 2939,
      version: 4,
      uid: '2939@4',
      published_at: '2022-12-05T21:24:12.207Z',
      solutions_are_public: false,
      authors: [
        {
          user_id: 1,
          name: 'OpenStax Exercises',
        },
      ],
      copyright_holders: [
        {
          user_id: 2,
          name: 'Rice University',
        },
      ],
      derived_from: [],
      is_vocab: false,
      stimulus_html: '',
      questions: [
        {
          id: 320733,
          is_answer_order_important: true,
          stimulus_html: '',
          stem_html:
            'Respiratory rate refers to the total number of breaths (respiratory cycles) that occur each minute. The respiratory rate is controlled by the ___ within the brain.',
          answers: [
            {
              id: 832300,
              content_html: 'hypothalamus',
              correctness: undefined,
              feedback_html: 'Feedback response',
            },
            {
              id: 832303,
              content_html: 'medulla oblongata',
              correctness: '1.0',
              feedback_html: 'Feedback response',
            },
            {
              id: 832301,
              content_html: 'corpus callosum',
              correctness: undefined,
            },
            {
              id: 832302,
              content_html: 'cerebellum',
              correctness: undefined,
            },
          ],
          hints: [],
          formats: ['multiple-choice'],
          combo_choices: [],
          collaborator_solutions: [
            {
              solution_type: 'detailed',
              content_html: `<span data-math='e^{\\text{Blue}}'></span>`,
            },
            {
              solution_type: 'no-detailed',
              content_html: `<span data-math='e^{\\text{Blue}}'></span>`,
            }
          ],
        },
        {
          id: 320734,
          is_answer_order_important: true,
          stimulus_html: '',
          stem_html:
            'Respiratory rate refers to the total number of breaths (respiratory cycles) that occur each minute. The respiratory rate is controlled by the ___ within the brain.',
          answers: [
            {
              id: 732300,
              content_html: 'hypothalamus',
              correctness: undefined,
              feedback_html: 'Feedback response',
            },
            {
              id: 732303,
              content_html: 'medulla oblongata',
              correctness: '1.0',
              feedback_html: 'Feedback response',
            },
            {
              id: 732301,
              content_html: 'corpus callosum',
              correctness: undefined,
            },
            {
              id: 732302,
              content_html: 'cerebellum',
              correctness: undefined,
            },
          ],
          hints: [],
          formats: ['multiple-choice'],
          combo_choices: [],
          collaborator_solutions: [
            {
              solution_type: 'detailed',
              content_html: `<span data-math='e^{\\text{Blue}}'></span>`,
            },
            {
              solution_type: 'no-detailed',
              content_html: `<span data-math='e^{\\text{Blue}}'></span>`,
            }
          ],
        },
      ],

      versions: [4, 3, 2, 1],
    },
  };

  const [showScoring, setShowScoring] = React.useState<boolean>(false);
  const [showFeedback, setShowFeedback] = React.useState<boolean>(false);
  const [showChosenAnswer, setShowChosenAnswer] = React.useState<boolean>(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = React.useState<boolean>(false);
  const [labelAnswers, setLabelAnswers] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<boolean>(false);

  return (
    <TextResizerProvider>
      <h3>Answer labels require correctness to be on</h3>
      <button
        onClick={()=> setShowScoring(prev => !prev)}>{`Turn ${showScoring ? 'off': 'on'} scoring`}
      </button>
      <button
        onClick={()=> setShowFeedback(prev => !prev)}>{`Turn ${showFeedback ? 'off': 'on'} feedback`}
      </button>
      <button
        onClick={()=> setShowChosenAnswer(prev => !prev)}>{`Turn ${showChosenAnswer ? 'off': 'on'} chosen answer`}
      </button>
      <button
        onClick={()=> setShowCorrectAnswer(prev => !prev)}>{`Turn ${showCorrectAnswer ? 'off': 'on'} correct answer`}
      </button>
      <button
        onClick={()=> setLabelAnswers(prev => !prev)}>{`Turn ${labelAnswers ? 'off': 'on'} answer labels`}
      </button>
      <button
        onClick={()=> setSelected(prev => !prev)}>{`${selected ? 'Selected': 'Unselected'}`}
      </button>
      <ExercisePreview
        exercise={props1.exercise}
        selected={selected}
        showAllFeedback={showFeedback}
        showChosenAnswer={showChosenAnswer}
        showCorrectAnswer={showCorrectAnswer}
        labelAnswers={labelAnswers}
        questionStates={props1.questionStates}
        showScoring={showScoring}
      />
    </TextResizerProvider>
  );
};

export const PreviewCardWithoutScore = () => {
  const props = exerciseWithQuestionStatesProps();
  return (
    <ExercisePreview
      {...props}
      showScoring
    />
  );
};

export const OverlayCard = () => {
  const randomlyCorrectAnswer = Math.floor(Math.random() * 3) + 1;
  const props1: ExerciseWithQuestionStatesProps = {
    ...exerciseWithQuestionStatesProps('1@123'),
    questionStates: {
      '320733': {
        available_points: '1.0',
        is_completed: true,
        answer_id_order: ['1', '2', '3', '4'],
        answer_id: randomlyCorrectAnswer,
        free_response: '',
        feedback_html: '',
        correct_answer_id: randomlyCorrectAnswer.toString(),
        correct_answer_feedback_html:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        attempts_remaining: 0,
        attempt_number: 0,
        incorrectAnswerId: 0,
        canAnswer: false,
        needsSaved: false,
        apiIsPending: false,
        solution: {
          content_html:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          solution_type: 'detailed',
        },
      },
    },
    exercise: {
      tags: [
        'book:stax-anp',
        'context-cnxmod:bbaedbf4-4d78-4b7c-bc94-2a742f0f2f8c',
        'lo:stax-anp:22-3-6',
        'exid:stax-anp:1786',
        'dok:1',
        'time:short',
        'book-slug:anatomy-and-physiology',
        'book-slug:anatomy-and-physiology-2e',
        'module-slug:anatomy-and-physiology:22-3-the-process-of-breathing',
        'module-slug:anatomy-and-physiology-2e:22-3-the-process-of-breathing',
        'assignment-type:reading',
        'blooms:1',
        'ost-type:concept-coach',
        'assessment:preparedness:https://openstax.org/orn/book:page/4fd99458-6fdf-49bc-8688-a6dc17a1268d:11673dd9-55e6-46d9-8b78-b06df85246bd',
      ],
      uuid: '8ae2b252-8943-4a1a-a123-2e6d9eeef4p5',
      group_uuid: '19bd7035-d50b-42d8-8f8c-a4d72588a7aa',
      number: 3030,
      version: 4,
      uid: '3030@4',
      published_at: '2022-15-05T21:24:12.207Z',
      solutions_are_public: false,
      authors: [
        {
          user_id: 1,
          name: 'OpenStax Exercises',
        },
      ],
      copyright_holders: [
        {
          user_id: 2,
          name: 'Rice University',
        },
      ],
      derived_from: [],
      is_vocab: false,
      stimulus_html: '',
      questions: [
        {
          id: 320733,
          is_answer_order_important: true,
          stimulus_html: '',
          stem_html:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          answers: [
            {
              id: 832312,
              content_html: 'Option 1',
            },
            {
              id: 832313,
              content_html: 'Option 2',
            },
            {
              id: 832314,
              content_html: 'Option 3',
            },
            {
              id: 832315,
              content_html: 'Option 4',
            },
          ],
          hints: [],
          formats: ['multiple-choice'],
          combo_choices: [],
        },
      ],

      versions: [4, 3, 2, 1],
    },
    numberOfQuestions: 2,
  };

  const props2: ExerciseWithQuestionStatesProps = {
    ...exerciseWithQuestionStatesProps('1@321', '1.0'),
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
        apiIsPending: false,
      },
    },
  };

  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const [showDetails1, setShowDetails1] = useState<boolean>(false);
  const [showDetails2, setShowDetails2] = useState<boolean>(false);

  const includeHandler = (exerciseUid: string) => setSelectedQuestions(previous => previous.concat(exerciseUid));
  const removeHandler = (exerciseUid: string) => setSelectedQuestions(previous => previous.filter((id) => id !== exerciseUid));


  const includeRemoveQuestionComponent1 =
    <IncludeRemoveQuestion
      buttonVariant={selectedQuestions.includes(props1.exercise.uid) ? 'remove' : 'include'}
      onIncludeHandler={() => includeHandler(props1.exercise.uid)}
      onRemoveHandler={() => removeHandler(props1.exercise.uid)}
      onClickDetails={() => setShowDetails1((previous) => !previous)}
    />;

  const includeRemoveQuestionComponent2 =
    <IncludeRemoveQuestion
      buttonVariant={selectedQuestions.includes(props2.exercise.uid) ? 'remove' : 'include'}
      onIncludeHandler={() => includeHandler(props2.exercise.uid)}
      onRemoveHandler={() => removeHandler(props2.exercise.uid)}
      onClickDetails={() => setShowDetails2((previous) => !previous)}
    />;

  return (
    <TextResizerProvider>
      <h2>Exercise cards</h2>
      <Exercise {...props1} overlayChildren={<button>Overlay</button>} className='preview-card' previewMode />
      <Exercise {...props2} overlayChildren={<button>Overlay</button>} className='preview-card' previewMode />
      <h2>Exercise Preview cards</h2>
      {showDetails1 && <h2>Details 1!</h2>}
      <ExercisePreview
        selected={selectedQuestions.includes(props1.exercise.uid)}
        overlayChildren={includeRemoveQuestionComponent1}
        exercise={props1.exercise}
      />
      {showDetails2 && <h2>Details 2!</h2>}
      <ExercisePreview
        selected={selectedQuestions.includes(props2.exercise.uid)}
        overlayChildren={includeRemoveQuestionComponent2}
        exercise={props2.exercise}
        showAllFeedback
      />
    </TextResizerProvider>
  );
};

export const FreeResponseInitial = () => {
  const [freeResponseText, setFreeResponseText] = useState<string>('');
  const [apiIsPending, setApiIsPending] = useState(false);

  const props: ExerciseWithQuestionStatesProps = {
    exercise: {
      uid: '1@1',
      uuid: 'fr-initial-uuid',
      group_uuid: 'fr-initial-group',
      number: 1,
      version: 1,
      published_at: '2024-01-01T00:00:00.000Z',
      context: '',
      stimulus_html: '',
      tags: [],
      authors: [{ user_id: 1, name: 'OpenStax' }],
      copyright_holders: [{ user_id: 1, name: 'OpenStax' }],
      derived_from: [],
      is_vocab: false,
      solutions_are_public: false,
      versions: [1],
      questions: [
        {
          id: 1,
          collaborator_solutions: [],
          formats: ['free-response'],
          stimulus_html: '',
          stem_html: 'Describe the process of photosynthesis and explain its importance to life on Earth.',
          is_answer_order_important: false,
          answers: [],
          word_limit: 100,
        },
      ],
    },
    questionNumber: 1,
    numberOfQuestions: 1,
    hasMultipleAttempts: false,
    hasUnlimitedAttempts: false,
    onAnswerChange: (answer: Omit<Answer, 'id'> & { id: number, question_id: number }) => {
      setFreeResponseText(answer.content_html);
    },
    onAnswerSave: () => {
      setApiIsPending(true);
      setTimeout(() => setApiIsPending(false), 1000);
    },
    onNextStep: () => console.log('Next step'),
    step: {
      id: 1,
      uid: '1@1',
      available_points: '1.0',
    },
    questionStates: {
      '1': {
        available_points: '1.0',
        is_completed: false,
        answer_id_order: [],
        answer_id: undefined,
        free_response: freeResponseText,
        feedback_html: '',
        correct_answer_id: '',
        correct_answer_feedback_html: '',
        attempts_remaining: 0,
        attempt_number: 0,
        incorrectAnswerId: 0,
        canAnswer: true,
        needsSaved: freeResponseText.trim().length > 0,
        apiIsPending: apiIsPending,
      },
    },
  };

  return (
    <TextResizerProvider>
      <Exercise {...props} />
    </TextResizerProvider>
  );
};

export const FreeResponseUpdateMode = () => {
  const [freeResponseText, setFreeResponseText] = useState<string>('Photosynthesis is the process by which plants convert light energy into chemical energy.');
  const [apiIsPending, setApiIsPending] = useState(false);

  const props: ExerciseWithQuestionStatesProps = {
    exercise: {
      uid: '2@1',
      uuid: 'fr-update-uuid',
      group_uuid: 'fr-update-group',
      number: 2,
      version: 1,
      published_at: '2024-01-01T00:00:00.000Z',
      context: '',
      stimulus_html: '',
      tags: [],
      authors: [{ user_id: 1, name: 'OpenStax' }],
      copyright_holders: [{ user_id: 1, name: 'OpenStax' }],
      derived_from: [],
      is_vocab: false,
      solutions_are_public: false,
      versions: [1],
      questions: [
        {
          id: 1,
          collaborator_solutions: [],
          formats: ['free-response'],
          stimulus_html: '',
          stem_html: 'Explain the difference between mitosis and meiosis.',
          is_answer_order_important: false,
          answers: [],
          word_limit: 100,
        },
      ],
    },
    questionNumber: 1,
    numberOfQuestions: 1,
    hasMultipleAttempts: false,
    hasUnlimitedAttempts: false,
    onAnswerChange: (answer: Omit<Answer, 'id'> & { id: number, question_id: number }) => {
      setFreeResponseText(answer.content_html);
    },
    onAnswerSave: () => {
      setApiIsPending(true);
      setTimeout(() => setApiIsPending(false), 1000);
    },
    onNextStep: () => console.log('Next step'),
    step: {
      id: 1,
      uid: '2@1',
      available_points: '1.0',
    },
    questionStates: {
      '1': {
        available_points: '1.0',
        is_completed: true,
        answer_id_order: [],
        answer_id: undefined,
        free_response: freeResponseText,
        feedback_html: '',
        correct_answer_id: '',
        correct_answer_feedback_html: '',
        attempts_remaining: 0,
        attempt_number: 1,
        incorrectAnswerId: 0,
        canAnswer: true,
        needsSaved: true,
        apiIsPending: apiIsPending,
      },
    },
  };

  return (
    <TextResizerProvider>
      <Exercise {...props} />
    </TextResizerProvider>
  );
};

export const FreeResponsePostReview = () => {
  const props: ExerciseWithQuestionStatesProps = {
    exercise: {
      uid: '3@1',
      uuid: 'fr-postreview-uuid',
      group_uuid: 'fr-postreview-group',
      number: 3,
      version: 1,
      published_at: '2024-01-01T00:00:00.000Z',
      context: '',
      stimulus_html: '',
      tags: [],
      authors: [{ user_id: 1, name: 'OpenStax' }],
      copyright_holders: [{ user_id: 1, name: 'OpenStax' }],
      derived_from: [],
      is_vocab: false,
      solutions_are_public: false,
      versions: [1],
      questions: [
        {
          id: 1,
          collaborator_solutions: [],
          formats: ['free-response'],
          stimulus_html: '',
          stem_html: 'Discuss the role of DNA in heredity and explain how mutations can affect organisms.',
          is_answer_order_important: false,
          answers: [],
          word_limit: 150,
        },
      ],
    },
    questionNumber: 1,
    numberOfQuestions: 1,
    hasMultipleAttempts: false,
    hasUnlimitedAttempts: false,
    onAnswerChange: () => undefined,
    onAnswerSave: () => undefined,
    onNextStep: () => console.log('Next step'),
    step: {
      id: 1,
      uid: '3@1',
      available_points: '1.0',
    },
    questionStates: {
      '1': {
        available_points: '1.0',
        is_completed: true,
        answer_id_order: [],
        answer_id: undefined,
        free_response: 'DNA contains genetic information that is passed from parents to offspring through heredity. It acts as a blueprint for building proteins and determining traits. Mutations are changes in the DNA sequence that can occur naturally or due to environmental factors. These mutations can have various effects on organisms - some are beneficial and lead to adaptations, some are neutral with no noticeable effect, and others can be harmful, potentially causing genetic disorders or diseases.',
        feedback_html: '<p>Excellent answer! You provided a clear explanation of DNA\'s role in heredity and thoroughly discussed the different types of mutations and their effects. Consider adding more specific examples of genetic disorders for an even stronger response.</p>',
        correct_answer_id: '',
        correct_answer_feedback_html: '',
        attempts_remaining: 0,
        attempt_number: 1,
        incorrectAnswerId: 0,
        canAnswer: false,
        needsSaved: false,
        apiIsPending: false,
        scoring: { score: 9, maxScore: 10 },
      },
    },
  };

  return (
    <TextResizerProvider>
      <Exercise {...props} />
    </TextResizerProvider>
  );
};

export const MultipleFreeResponseQuestions = () => {
  const [freeResponse1, setFreeResponse1] = useState<string>('');
  const [freeResponse2, setFreeResponse2] = useState<string>('');
  const [apiIsPending1, setApiIsPending1] = useState(false);
  const [apiIsPending2, setApiIsPending2] = useState(false);

  const props: ExerciseWithQuestionStatesProps = {
    exercise: {
      uid: '4@1',
      uuid: 'fr-multiple-uuid',
      group_uuid: 'fr-multiple-group',
      number: 4,
      version: 1,
      published_at: '2024-01-01T00:00:00.000Z',
      context: 'Answer the following questions about cellular biology.',
      stimulus_html: '<b>Part A: Energy Production</b>',
      tags: [],
      authors: [{ user_id: 1, name: 'OpenStax' }],
      copyright_holders: [{ user_id: 1, name: 'OpenStax' }],
      derived_from: [],
      is_vocab: false,
      solutions_are_public: false,
      versions: [1],
      questions: [
        {
          id: 1,
          collaborator_solutions: [],
          formats: ['free-response'],
          stimulus_html: '',
          stem_html: 'Describe the process of cellular respiration and where it occurs in the cell.',
          is_answer_order_important: false,
          answers: [],
          word_limit: 75,
        },
        {
          id: 2,
          collaborator_solutions: [],
          formats: ['free-response'],
          stimulus_html: '',
          stem_html: 'Explain how ATP is used as an energy currency in cells.',
          is_answer_order_important: false,
          answers: [],
          word_limit: 50,
        },
      ],
    },
    questionNumber: 1,
    numberOfQuestions: 2,
    hasMultipleAttempts: false,
    hasUnlimitedAttempts: false,
    onAnswerChange: (answer: Omit<Answer, 'id'> & { id: number, question_id: number }) => {
      if (answer.question_id === 1) {
        setFreeResponse1(answer.content_html);
      } else if (answer.question_id === 2) {
        setFreeResponse2(answer.content_html);
      }
    },
    onAnswerSave: (question_id: number) => {
      if (question_id === 1) {
        setApiIsPending1(true);
        setTimeout(() => setApiIsPending1(false), 1000);
      } else if (question_id === 2) {
        setApiIsPending2(true);
        setTimeout(() => setApiIsPending2(false), 1000);
      }
    },
    onNextStep: () => console.log('Next step'),
    step: {
      id: 1,
      uid: '4@1',
      available_points: '2.0',
    },
    questionStates: {
      '1': {
        available_points: '1.0',
        is_completed: false,
        answer_id_order: [],
        answer_id: undefined,
        free_response: freeResponse1,
        feedback_html: '',
        correct_answer_id: '',
        correct_answer_feedback_html: '',
        attempts_remaining: 0,
        attempt_number: 0,
        incorrectAnswerId: 0,
        canAnswer: true,
        needsSaved: freeResponse1.trim().length > 0,
        apiIsPending: apiIsPending1,
      },
      '2': {
        available_points: '1.0',
        is_completed: false,
        answer_id_order: [],
        answer_id: undefined,
        free_response: freeResponse2,
        feedback_html: '',
        correct_answer_id: '',
        correct_answer_feedback_html: '',
        attempts_remaining: 0,
        attempt_number: 0,
        incorrectAnswerId: 0,
        canAnswer: true,
        needsSaved: freeResponse2.trim().length > 0,
        apiIsPending: apiIsPending2,
      },
    },
  };

  return (
    <TextResizerProvider>
      <Exercise {...props} />
    </TextResizerProvider>
  );
};

export const FreeResponsePreviewCompleted = () => {
  const exercise: ExerciseData = {
    uid: '5000@1',
    uuid: 'free-response-uuid-123',
    group_uuid: 'group-uuid-456',
    number: 5000,
    version: 1,
    published_at: '2024-01-15T10:00:00.000Z',
    context: '',
    stimulus_html: '',
    tags: [],
    authors: [{ user_id: 1, name: 'OpenStax' }],
    copyright_holders: [{ user_id: 1, name: 'OpenStax' }],
    derived_from: [],
    is_vocab: false,
    solutions_are_public: false,
    versions: [1],
    questions: [
      {
        id: 1,
        collaborator_solutions: [
          {
            solution_type: 'detailed',
            content_html: '<p>A thorough explanation should discuss how photosynthesis converts light energy into chemical energy, the role of chlorophyll, and the production of glucose and oxygen as outputs.</p>',
          },
        ],
        formats: ['free-response'],
        stimulus_html: '',
        stem_html: 'Explain the process of photosynthesis and its importance to life on Earth.',
        is_answer_order_important: false,
        answers: [],
        word_limit: 100,
      },
    ],
  };

  const questionStates = {
    '1': {
      available_points: '10.0' as const,
      is_completed: true,
      answer_id_order: [],
      answer_id: undefined,
      free_response: 'Photosynthesis is the process by which plants convert sunlight into chemical energy. Using chlorophyll in their leaves, plants absorb light energy and combine carbon dioxide from the air with water from the soil to produce glucose and oxygen. This process is crucial for life on Earth because it generates oxygen that animals breathe and forms the base of most food chains.',
      feedback_html: '<p>Excellent answer! You clearly explained the key components of photosynthesis and its importance to the ecosystem.</p>',
      correct_answer_id: '',
      correct_answer_feedback_html: '',
      attempts_remaining: 0,
      attempt_number: 1,
      incorrectAnswerId: 0,
      canAnswer: false,
      needsSaved: false,
      apiIsPending: false,
      scoring: { score: 9, maxScore: 10 },
    },
  };

  return (
    <TextResizerProvider>
      <ExercisePreview
        exercise={exercise}
        showAllFeedback={true}
        showCorrectAnswer={true}
        questionStates={questionStates}
        showScoring={true}
      />
    </TextResizerProvider>
  );
};

export const FreeResponsePreviewUnanswered = () => {
  const exercise: ExerciseData = {
    uid: '5001@1',
    uuid: 'free-response-uuid-456',
    group_uuid: 'group-uuid-789',
    number: 5001,
    version: 1,
    published_at: '2024-01-15T10:00:00.000Z',
    context: '',
    stimulus_html: '',
    tags: [],
    authors: [{ user_id: 1, name: 'OpenStax' }],
    copyright_holders: [{ user_id: 1, name: 'OpenStax' }],
    derived_from: [],
    is_vocab: false,
    solutions_are_public: false,
    versions: [1],
    questions: [
      {
        id: 2,
        collaborator_solutions: [
          {
            solution_type: 'detailed',
            content_html: '<p>A complete answer should describe the structure of DNA (double helix), explain how genetic information is encoded in base sequences, and discuss how mutations in DNA can lead to changes in protein structure and function.</p>',
          },
        ],
        formats: ['free-response'],
        stimulus_html: '',
        stem_html: 'Describe the structure of DNA and explain how mutations can affect an organism.',
        is_answer_order_important: false,
        answers: [],
        word_limit: 150,
      },
    ],
  };

  const questionStates = {
    '2': {
      available_points: '10.0' as const,
      is_completed: false,
      answer_id_order: [],
      answer_id: undefined,
      free_response: '',
      feedback_html: '',
      correct_answer_id: '',
      correct_answer_feedback_html: '',
      attempts_remaining: 0,
      attempt_number: 0,
      incorrectAnswerId: 0,
      canAnswer: true,
      needsSaved: false,
      apiIsPending: false,
      scoring: {},
    },
  };

  return (
    <TextResizerProvider>
      <ExercisePreview
        exercise={exercise}
        showAllFeedback={false}
        showCorrectAnswer={false}
        questionStates={questionStates}
        showScoring={false}
      />
    </TextResizerProvider>
  );
};

export const FreeResponseGradingUnanswered = () => {
  const exercise: ExerciseData = {
    uid: '6000@1',
    uuid: 'free-response-grading-uuid-123',
    group_uuid: 'group-uuid-grading',
    number: 6000,
    version: 1,
    published_at: '2024-01-20T10:00:00.000Z',
    context: '',
    stimulus_html: '',
    tags: [],
    authors: [{ user_id: 1, name: 'OpenStax' }],
    copyright_holders: [{ user_id: 1, name: 'OpenStax' }],
    derived_from: [],
    is_vocab: false,
    solutions_are_public: false,
    versions: [1],
    questions: [
      {
        id: 'fr-grade-1',
        collaborator_solutions: [],
        formats: ['free-response'],
        stimulus_html: '',
        stem_html: 'Explain the difference between prokaryotic and eukaryotic cells.',
        is_answer_order_important: false,
        answers: [],
        word_limit: 100,
      },
    ],
  };

  const questionStates = {
    'fr-grade-1': {
      available_points: '10.0' as const,
      is_completed: false,
      answer_id_order: [],
      answer_id: undefined,
      free_response: '',
      feedback_html: '',
      correct_answer_id: '',
      correct_answer_feedback_html: '',
      attempts_remaining: 0,
      attempt_number: 0,
      incorrectAnswerId: 0,
      canAnswer: true,
      needsSaved: false,
      apiIsPending: false,
      scoring: { maxScore: 10 },
    },
  };

  return (
    <TextResizerProvider>
      <ExercisePreview
        exercise={exercise}
        questionStates={questionStates}
        showScoring={true}
        onGradingSave={(questionId, data) => console.log('Grading saved for question', questionId, ':', data)}
      />
    </TextResizerProvider>
  );
};

export const FreeResponseGradingWithAnswer = () => {
  const exercise: ExerciseData = {
    uid: '6001@1',
    uuid: 'free-response-grading-uuid-456',
    group_uuid: 'group-uuid-grading-2',
    number: 6001,
    version: 1,
    published_at: '2024-01-20T10:00:00.000Z',
    context: '',
    stimulus_html: '',
    tags: [],
    authors: [{ user_id: 1, name: 'OpenStax' }],
    copyright_holders: [{ user_id: 1, name: 'OpenStax' }],
    derived_from: [],
    is_vocab: false,
    solutions_are_public: false,
    versions: [1],
    questions: [
      {
        id: 'fr-grade-2',
        collaborator_solutions: [],
        formats: ['free-response'],
        stimulus_html: '',
        stem_html: 'Describe the main stages of the cell cycle and what happens in each stage.',
        is_answer_order_important: false,
        answers: [],
        word_limit: 150,
        grading_comment: "Good overview, but could include more detail about checkpoints.",
      },
    ],
  };

  const questionStates = {
    'fr-grade-2': {
      available_points: '15.0' as const,
      is_completed: true,
      answer_id_order: [],
      answer_id: undefined,
      free_response: 'The cell cycle consists of interphase and mitotic phase. Interphase includes G1 (cell growth), S (DNA replication), and G2 (preparation for division). The mitotic phase includes mitosis (nuclear division with prophase, metaphase, anaphase, and telophase) and cytokinesis (cytoplasm division). This cycle allows cells to grow and reproduce.',
      feedback_html: '<p>Good overview, but could include more detail about checkpoints.</p>',
      correct_answer_id: '',
      correct_answer_feedback_html: '',
      attempts_remaining: 0,
      attempt_number: 1,
      incorrectAnswerId: 0,
      canAnswer: false,
      needsSaved: false,
      apiIsPending: false,
      scoring: { score: 12, maxScore: 15 },
      gradingSubmissionInfo: 'Grade submitted on Jan 20 at 2:15 pm',
    },
  };

  return (
    <TextResizerProvider>
      <ExercisePreview
        exercise={exercise}
        questionStates={questionStates}
        showScoring={true}
        showCorrectAnswer={true}
        onGradingSave={(questionId, data) => console.log('Grading updated for question', questionId, ':', data)}
      />
    </TextResizerProvider>
  );
};

export const FreeResponseWithSubmissionInfo = () => {
  const [freeResponseText, setFreeResponseText] = useState<string>('Photosynthesis is the process by which green plants use sunlight to synthesize nutrients from carbon dioxide and water.');
  const [apiIsPending, setApiIsPending] = useState(false);

  const props: ExerciseWithQuestionStatesProps = {
    exercise: {
      uid: '7@1',
      uuid: 'fr-submission-info-uuid',
      group_uuid: 'fr-submission-info-group',
      number: 7,
      version: 1,
      published_at: '2024-01-01T00:00:00.000Z',
      context: '',
      stimulus_html: '',
      tags: [],
      authors: [{ user_id: 1, name: 'OpenStax' }],
      copyright_holders: [{ user_id: 1, name: 'OpenStax' }],
      derived_from: [],
      is_vocab: false,
      solutions_are_public: false,
      versions: [1],
      questions: [
        {
          id: 1,
          collaborator_solutions: [],
          formats: ['free-response'],
          stimulus_html: '',
          stem_html: 'Describe the process of photosynthesis.',
          is_answer_order_important: false,
          answers: [],
          word_limit: 100,
        },
      ],
    },
    questionNumber: 1,
    numberOfQuestions: 1,
    hasMultipleAttempts: false,
    hasUnlimitedAttempts: false,
    onAnswerChange: (answer: Omit<Answer, 'id'> & { id: number, question_id: number }) => {
      setFreeResponseText(answer.content_html);
    },
    onAnswerSave: () => {
      setApiIsPending(true);
      setTimeout(() => setApiIsPending(false), 1000);
    },
    onNextStep: () => console.log('Next step'),
    step: {
      id: 1,
      uid: '7@1',
      available_points: '1.0',
    },
    questionStates: {
      '1': {
        available_points: '1.0',
        is_completed: true,
        answer_id_order: [],
        answer_id: undefined,
        free_response: freeResponseText,
        feedback_html: '',
        correct_answer_id: '',
        correct_answer_feedback_html: '',
        attempts_remaining: 0,
        attempt_number: 1,
        incorrectAnswerId: 0,
        canAnswer: true,
        needsSaved: true,
        apiIsPending: apiIsPending,
        submissionInfo: 'Last submitted on Feb 3, 2024 at 2:30 PM',
      },
    },
  };

  return (
    <TextResizerProvider>
      <Exercise {...props} />
    </TextResizerProvider>
  );
};

export const FreeResponsePreviewWithoutGrading = () => {
  const exercise: ExerciseData = {
    uid: '6002@1',
    uuid: 'free-response-preview-uuid-789',
    group_uuid: 'group-uuid-preview',
    number: 6002,
    version: 1,
    published_at: '2024-01-20T10:00:00.000Z',
    context: '',
    stimulus_html: '',
    tags: [],
    authors: [{ user_id: 1, name: 'OpenStax' }],
    copyright_holders: [{ user_id: 1, name: 'OpenStax' }],
    derived_from: [],
    is_vocab: false,
    solutions_are_public: false,
    versions: [1],
    questions: [
      {
        id: 'fr-preview-1',
        collaborator_solutions: [],
        formats: ['free-response'],
        stimulus_html: '',
        stem_html: 'Explain how enzymes function as biological catalysts.',
        is_answer_order_important: false,
        answers: [],
        word_limit: 120,
      },
    ],
  };

  const questionStates = {
    'fr-preview-1': {
      available_points: '10.0' as const,
      is_completed: true,
      answer_id_order: [],
      answer_id: undefined,
      free_response: 'Enzymes are biological catalysts that speed up chemical reactions by lowering the activation energy required. They have specific active sites that bind to substrates, forming enzyme-substrate complexes. After the reaction, products are released and the enzyme can be reused.',
      feedback_html: '<p>Clear explanation of enzyme function.</p>',
      correct_answer_id: '',
      correct_answer_feedback_html: '',
      attempts_remaining: 0,
      attempt_number: 1,
      incorrectAnswerId: 0,
      canAnswer: false,
      needsSaved: false,
      apiIsPending: false,
      scoring: { score: 9, maxScore: 10 },
    },
  };

  return (
    <TextResizerProvider>
      <ExercisePreview
        exercise={exercise}
        questionStates={questionStates}
        showScoring={true}
        showCorrectAnswer={true}
      />
    </TextResizerProvider>
  );
};
