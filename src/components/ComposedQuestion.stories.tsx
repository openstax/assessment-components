import React from 'react';
import { Answer, ExerciseQuestionData, QuestionBodyState } from '../types';
import { ExerciseBody } from './ExerciseBody';
import { ExerciseWrapper } from './ExerciseWrapper';
import { QuestionBody } from './QuestionBody';
import { QuestionLevelFeedback } from './QuestionLevelFeedback';
import { QuestionWrapper } from './QuestionWrapper';

/**
 * The inversion these components exist for: an embedding app owns the chrome, this library
 * owns what is inside it. Nothing here renders an `Exercise`, and none of it needs an
 * `ExerciseData` or a step.
 */

const multipleChoice: ExerciseQuestionData = {
  id: 'q-1',
  formats: ['multiple-choice'],
  is_answer_order_important: false,
  stimulus_html: '',
  stem_html: 'Which of these is a prime number, <span data-math="x^2 + 1"></span> notwithstanding?',
  collaborator_solutions: [],
  answers: [
    { id: '1', content_html: 'Nine', feedback_html: 'Nine is three squared.' },
    { id: '2', content_html: 'Eleven', feedback_html: 'Eleven has no divisors but itself and one.' },
    { id: '3', content_html: 'Fifteen', feedback_html: 'Fifteen is three times five.' },
  ],
};

const freeResponse: ExerciseQuestionData = {
  id: 'q-2',
  formats: ['free-response'],
  is_answer_order_important: false,
  stimulus_html: '',
  stem_html: 'Explain, in your own words, why eleven is prime.',
  collaborator_solutions: [],
  answers: [],
};

/** A host: it owns the response, the request and the navigation. */
const useHost = (initial: Partial<QuestionBodyState> = {}) => {
  const [state, setState] = React.useState<QuestionBodyState>({
    is_completed: false,
    canAnswer: true,
    ...initial,
  });
  const [needsSaved, setNeedsSaved] = React.useState(false);
  const [status, setStatus] = React.useState<{ canSubmit?: boolean; dirty?: boolean }>({});
  const [apiIsPending, setApiIsPending] = React.useState(false);

  const onAnswerChange = (answer: Answer) => {
    setNeedsSaved(true);
    setState((current) => ({
      ...current,
      answer_id: answer.id,
      free_response: answer.free_response ?? current.free_response,
    }));
  };

  // the host advances when its own POST completes, rather than the footer doing it
  const onAnswerSave = () => {
    setApiIsPending(true);
    window.setTimeout(() => {
      setApiIsPending(false);
      setNeedsSaved(false);
      setState((current) => ({ ...current, is_completed: true, canAnswer: false, score: { raw: 1, max: 1 } }));
    }, 600);
  };

  return { state, needsSaved, status, setStatus, apiIsPending, onAnswerChange, onAnswerSave };
};

const ComposedExercise = ({ question, compactDisplay }: {
  question: ExerciseQuestionData;
  compactDisplay?: boolean;
}) => {
  const host = useHost();

  return (
    <ExerciseWrapper
      questionNumber={1}
      numberOfQuestions={1}
      questionId="composed@1"
      compactDisplay={compactDisplay}
      exerciseIcons={{ topic: { url: 'https://openstax.org' }, info: { type: 'multiple-choice' } }}
    >
      <ExerciseBody
        context="<b>Context</b> supplied by the host, not by an exercise."
        stimulus_html="Some shared stimulus."
      >
        <QuestionWrapper
          question_id={question.id}
          questionIndex={0}
          is_completed={host.state.is_completed}
          canAnswer={host.state.canAnswer}
          canSubmit={host.status.canSubmit}
          dirty={host.status.dirty}
          apiIsPending={host.apiIsPending}
          canUpdateCurrentStep={false}
          onAnswerSave={host.onAnswerSave}
          onNextStep={() => window.alert('the host navigates')}
        >
          <QuestionBody
            question={question}
            state={host.state}
            needsSaved={host.needsSaved}
            apiIsPending={host.apiIsPending}
            responseSize="short"
            onAnswerChange={host.onAnswerChange}
            onStatusChange={host.setStatus}
            feedback={host.state.is_completed
              ? <QuestionLevelFeedback
                  score={host.state.score}
                  gradingComments="Nicely reasoned."
                  detailedSolution="Eleven is divisible only by itself and one."
                />
              : undefined}
          />
        </QuestionWrapper>
      </ExerciseBody>
    </ExerciseWrapper>
  );
};

export const MultipleChoice = () => <ComposedExercise question={multipleChoice} />;
export const FreeResponse = () => <ComposedExercise question={freeResponse} />;
export const Compact = () => <ComposedExercise question={multipleChoice} compactDisplay />;

/** The body validates and reports, the host owns the button that asks it to. */
export const HostDrivenSubmit = () => {
  const host = useHost();
  const submit = React.useRef<(() => Answer | null) | undefined>();

  return (
    <ExerciseWrapper questionNumber={1} numberOfQuestions={1} questionId="composed@1">
      <ExerciseBody>
        <QuestionBody
          question={multipleChoice}
          state={host.state}
          onAnswerChange={host.onAnswerChange}
          registerSubmit={(fn) => { submit.current = fn; }}
        />
        <div style={{ padding: '2rem' }}>
          <button
            onClick={() => {
              const response = submit.current?.();
              if (response) { window.alert(`the host posts ${JSON.stringify(response.id)}`); }
            }}
          >
            The host&apos;s own submit button
          </button>
        </div>
      </ExerciseBody>
    </ExerciseWrapper>
  );
};
