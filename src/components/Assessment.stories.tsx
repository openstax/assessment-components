import React from 'react';
import { Answer, ExerciseData, ExerciseQuestionData, ID, QuestionState } from '../types';
import { Assessment, AssessmentItem, AssessmentSectionProps } from './Assessment';
import { Score } from './CompletionStatus';
import { Exercise } from './Exercise';
import { ExerciseBody } from './ExerciseBody';
import { ExerciseWrapper } from './ExerciseWrapper';
import { Loader } from './Loader';
import { QuestionBody } from './QuestionBody';
import { QuestionWrapper } from './QuestionWrapper';

const trueFalse = (id: number, stem: string): ExerciseQuestionData => ({
  id,
  formats: ['multiple-choice'],
  is_answer_order_important: false,
  stimulus_html: '',
  stem_html: stem,
  collaborator_solutions: [],
  answers: [
    { id: id * 10 + 1, content_html: 'True' },
    { id: id * 10 + 2, content_html: 'False' },
  ],
});

const freeResponse = (id: number, stem: string): ExerciseQuestionData => ({
  id,
  formats: ['free-response'],
  is_answer_order_important: false,
  stimulus_html: '',
  stem_html: stem,
  collaborator_solutions: [],
  answers: [],
});

const exercise = (uuid: string, questions: ExerciseQuestionData[], context = ''): ExerciseData => ({
  uid: `${uuid}@1`,
  uuid,
  group_uuid: uuid,
  number: 1,
  version: 1,
  published_at: '2026-10-28T00:00:00.000Z',
  context,
  stimulus_html: questions.length > 1 ? 'The questions below share this stimulus.' : '',
  tags: [],
  authors: [],
  copyright_holders: [],
  derived_from: [],
  is_vocab: false,
  solutions_are_public: false,
  versions: [1],
  questions,
});

/** Three sections: a single question, a multi-part exercise, and a free response. */
const exercises = [
  exercise('section-a', [trueFalse(1, 'Eleven is a prime number.')]),
  exercise('section-b', [
    trueFalse(2, 'Water boils at 100°C at sea level.'),
    trueFalse(3, 'Water boils at a higher temperature on a mountain.'),
  ]),
  exercise('section-c', [freeResponse(4, 'Explain, in your own words, why eleven is prime.')]),
];

/** The answer key, which only the host's "server" reads: a learner's exercise never carries it. */
const correctAnswers: Record<string, ID> = { 1: 11, 2: 21, 3: 32 };

const blankState = (): QuestionState => ({
  available_points: '1.0',
  is_completed: false,
  canAnswer: true,
  needsSaved: false,
  apiIsPending: false,
  free_response: '',
  feedback_html: '',
  correct_answer_id: '',
  correct_answer_feedback_html: '',
  attempts_remaining: 0,
  attempt_number: 0,
  incorrectAnswerId: '',
});

const delay = (ms: number) => new Promise(resolve => window.setTimeout(resolve, ms));

const scorable = Object.keys(correctAnswers).length;

/**
 * The host: it holds every response, posts them (here, after a delay), and fetches each section
 * when it is drawn. The shell holds only where the learner is.
 */
const useHost = (initial: (id: ID) => Partial<QuestionState> = () => ({})) => {
  const blankStates = (from: (id: ID) => Partial<QuestionState>) => Object.fromEntries(
    exercises.flatMap(e => e.questions).map(q => [q.id, { ...blankState(), ...from(q.id) }])
  );
  const [states, setStates] = React.useState<Record<string, QuestionState>>(() => blankStates(initial));
  const [attemptId, setAttemptId] = React.useState(1);

  // the "server's" account of the assessment's score, which comes back with every answer
  const graded = React.useRef<Record<string, number>>({});
  const answerScore = (id: ID, right: boolean): Score => {
    graded.current[id] = right ? 1 : 0;
    const total = Object.values(graded.current).reduce((sum, points) => sum + points, 0);
    return { current: `${total}/${scorable}`, saved: `${total}/${scorable}` };
  };

  const update = (id: ID, change: Partial<QuestionState>) =>
    setStates(current => ({ ...current, [id]: { ...current[id], ...change } }));

  const onAnswerChange = (answer: Omit<Answer, 'id' | 'question_id'> & { id: ID; question_id: ID }) => update(answer.question_id, {
    ...(answer.free_response !== undefined ? { free_response: answer.free_response } : { answer_id: answer.id }),
    needsSaved: true,
  });

  // the assessment's score comes back with the answer, and is reported from where it lands
  const onAnswerSave = (id: ID, onScoreAssessment: (score: Score) => void) => {
    const question = exercises.flatMap(e => e.questions).find(q => q.id === id);
    const isFreeResponse = question?.formats.includes('free-response');
    const correct = correctAnswers[id];
    const right = !isFreeResponse && states[id].answer_id === correct;

    update(id, { apiIsPending: true });
    delay(500).then(() => {
      if (!isFreeResponse) { onScoreAssessment(answerScore(id, right)); }
      setStates(current => {
        const state = current[id];

        return {
          ...current,
          [id]: {
            ...state,
            apiIsPending: false,
            needsSaved: false,
            is_completed: true,
            // a free response stays editable until it is graded
            canAnswer: !!isFreeResponse,
            ...(isFreeResponse ? {} : {
              score: { raw: right ? 1 : 0, max: 1 },
              correct_answer_id: correct ?? '',
              incorrectAnswerId: right ? '' : state.answer_id ?? '',
            }),
          },
        };
      });
    });
  };

  const items: AssessmentItem[] = exercises.flatMap(e => e.questions.map(q => {
    const state = states[q.id];
    return {
      id: q.id,
      section: e.uuid,
      state: !state.is_completed ? 'isIncomplete'
        : state.score === undefined ? null
        : state.score.raw === state.score.max ? 'isCorrect' : 'isIncorrect',
      isCompleted: state.is_completed,
      editable: state.canAnswer,
    };
  }));

  // a new attempt: every response cleared, after the "server" has started it
  const retry = () => delay(500).then(() => {
    graded.current = {};
    setStates(blankStates(() => ({})));
    setAttemptId(current => current + 1);
  });

  return { states, items, attemptId: `${attemptId}`, onAnswerChange, onAnswerSave, retry };
};

type Host = ReturnType<typeof useHost>;

/** Fetches the section when it is drawn, and reports it ready once it is on the page. */
const useLoadedSection = (sectionId: string, onReady: () => void) => {
  const [loaded, setLoaded] = React.useState<ExerciseData | undefined>(undefined);

  React.useEffect(() => {
    let live = true;
    delay(400).then(() => { if (live) { setLoaded(exercises.find(e => e.uuid === sectionId)); } });
    return () => { live = false; };
  }, [sectionId]);

  React.useEffect(() => { if (loaded) { onReady(); } }, [loaded, onReady]);

  return loaded;
};

/** The legacy host: one `Exercise` per section, the way assessments draws an attempt today. */
const LegacySection = ({ host, section }: { host: Host; section: AssessmentSectionProps }) => {
  const loaded = useLoadedSection(section.sectionId, section.onReady);
  if (!loaded) { return <Loader id={section.sectionDomId} />; }

  return (
    <Exercise
      id={section.sectionDomId}
      exercise={loaded}
      questionId={loaded.uid}
      questionNumber={section.firstItemNumber}
      numberOfQuestions={loaded.questions.length}
      questionStates={host.states}
      hasFeedback
      hasMultipleAttempts={false}
      hasUnlimitedAttempts={false}
      onAnswerChange={host.onAnswerChange}
      onAnswerSave={id => host.onAnswerSave(id, section.onScoreAssessment)}
      // the exercise reports the index of the question whose Next was clicked, counted from
      // `questionNumber` — which is the section's first item number, so it indexes `items`
      onNextStep={index => section.onNext(host.items[index].id)}
      questionDomId={section.itemDomId}
    />
  );
};

/** A composed host: its own chrome around each question, the way the display package is hosted. */
const ComposedSection = ({ host, section }: { host: Host; section: AssessmentSectionProps }) => {
  const loaded = useLoadedSection(section.sectionId, section.onReady);
  if (!loaded) { return <Loader id={section.sectionDomId} />; }

  return (
    <ExerciseWrapper
      id={section.sectionDomId}
      questionNumber={section.firstItemNumber}
      numberOfQuestions={loaded.questions.length}
      questionId={loaded.uid}
    >
      <ExerciseBody stimulus_html={loaded.stimulus_html}>
        {loaded.questions.map((q, i) => {
          const state = host.states[q.id];
          return (
            <QuestionWrapper
              key={q.id}
              id={section.itemDomId(q.id)}
              questionNumber={section.firstItemNumber + i}
              is_completed={state.is_completed}
              canAnswer={state.canAnswer}
              apiIsPending={state.apiIsPending}
              canUpdateCurrentStep={i + 1 < loaded.questions.length}
              onAnswerSave={() => host.onAnswerSave(q.id, section.onScoreAssessment)}
              onNextStep={() => section.onNext(q.id)}
            >
              <QuestionBody
                question={q}
                state={state}
                needsSaved={state.needsSaved}
                apiIsPending={state.apiIsPending}
                questionNumber={section.firstItemNumber + i}
                onAnswerChange={answer => host.onAnswerChange({ ...answer, question_id: q.id })}
              />
            </QuestionWrapper>
          );
        })}
      </ExerciseBody>
    </ExerciseWrapper>
  );
};

const Story = ({ Section, initial, retry, leaves = true }: {
  Section: typeof LegacySection;
  initial?: (id: ID) => Partial<QuestionState>;
  /** unlimited attempts: the completion step offers a retry, and shows the score */
  retry?: boolean;
  /** whether there is a next step after the assessment for the completion step to offer */
  leaves?: boolean;
}) => {
  const host = useHost(initial);

  return (
    <Assessment
      items={host.items}
      attemptId={host.attemptId}
      renderSection={section => <Section host={host} section={section} />}
      completion={{
        score: { current: `0/${scorable}`, saved: `0/${scorable}` },
        onRetry: retry ? host.retry : undefined,
        onNext: leaves ? () => window.alert('the host leaves the assessment') : undefined,
      }}
    />
  );
};

export const Legacy = () => <Story Section={LegacySection} retry />;
/** With no next step after the assessment, as a preview has: the completion step offers no Next. */
export const Composed = () => <Story Section={ComposedSection} retry leaves={false} />;

/** Everything answered, with the free response still editable: it opens on the completion step. */
export const Completed = () => <Story
  Section={LegacySection}
  initial={id => ({
    is_completed: true,
    canAnswer: id === 4,
    ...(id === 4 ? { free_response: 'It has no divisors but itself and one.' } : { score: { raw: 1, max: 1 } }),
  })}
/>;
