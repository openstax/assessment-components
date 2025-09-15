import React, { useState } from 'react';
import {
  Exercise,
  ExerciseWithStepDataProps,
  ExerciseWithQuestionStatesProps,
} from './Exercise';
import { Answer } from '../types';
import styled from 'styled-components';

const exerciseWithStepDataProps: ExerciseWithStepDataProps = {
  exercise: {
    uid: '1@1',
    uuid: 'e4e27897-4abc-40d3-8565-5def31795edc',
    group_uuid: '20e82bf6-232e-40c8-ba68-2d22c6498f69',
    number: 1,
    version: 1,
    published_at: '2022-09-06T20:32:21.981Z',
    context: 'Context',
    stimulus_html: '<b>Stimulus HTML</b> ',
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

export const Modal = () => {
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
          stem_html: `What's the sound of the reaction <span data-math='2 \\, \\text{H}_{2(g)} + \\, \\text{O}_{2(g)} \\to 2 \\, \\text{H}_{2}\\text{O}_{(l)}'></span> under the moonlight? <img src="https://openstax.org/apps/archive/20240910.161227/resources/7cae44f5197466069c4f7e68a0c28fe10450bade" data-media-type="image/png" alt="A flow chart shows the steps in the scientific method. In step 1, an observation is made. In step 2, a question is asked about the observation. In step 3, an answer to the question, called a hypothesis, is proposed. In step 4, a prediction is made based on the hypothesis. In step 5, an experiment is done to test the prediction. In step 6, the results are analyzed to determine whether or not the hypothesis is correct. If the hypothesis is incorrect, another hypothesis is made. In either case, the results are reported." width="300" height="510">`,
          is_answer_order_important: false,
          answers: [
            {
              id: '1',
              correctness: '1',
              content_html: `<span data-math='\\text{H}_2\\text{O} + \\sqrt[3]{\\text{Melodic Echo}}'></span>`,
              feedback_html: `<span data-math='\\text{H}_2\\text{O} + \\sqrt[3]{\\text{Melodic Echo}}'></span> implies that water molecules are harmonizing with the cubic root of a Melodic Echo.
This resonates with an unheard symphony of the universe, creating a multisensory mathematics that's both refreshing and melodious. <img src="https://openstax.org/apps/archive/20240910.161227/resources/7cae44f5197466069c4f7e68a0c28fe10450bade" data-media-type="image/png" alt="A flow chart shows the steps in the scientific method. In step 1, an observation is made. In step 2, a question is asked about the observation. In step 3, an answer to the question, called a hypothesis, is proposed. In step 4, a prediction is made based on the hypothesis. In step 5, an experiment is done to test the prediction. In step 6, the results are analyzed to determine whether or not the hypothesis is correct. If the hypothesis is incorrect, another hypothesis is made. In either case, the results are reported." width="300" height="510">`,
            },
            {
              id: '2',
              correctness: undefined,
              content_html: `<span data-math='2 \\, \\text{NO}_2 \\to \\, \\text{N}_2\\text{O}_4 + \\text{Silent Whisper}'> </span>`,
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
      content_html: ` <span data-math='2 \\, \\text{H}_{2(g)} + \\, \\text{O}_{2(g)} \\to 2 \\, \\text{H}_{2}\\text{O}_{(l)}'></span> <img src="https://openstax.org/apps/archive/20240910.161227/resources/7cae44f5197466069c4f7e68a0c28fe10450bade" data-media-type="image/png" alt="A flow chart shows the steps in the scientific method. In step 1, an observation is made. In step 2, a question is asked about the observation. In step 3, an answer to the question, called a hypothesis, is proposed. In step 4, a prediction is made based on the hypothesis. In step 5, an experiment is done to test the prediction. In step 6, the results are analyzed to determine whether or not the hypothesis is correct. If the hypothesis is incorrect, another hypothesis is made. In either case, the results are reported." width="300" height="510">`,
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
