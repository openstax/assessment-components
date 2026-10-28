import React from 'react';
import scrollToElement from 'scroll-to-element';
import { ID } from '../types';
import { CompletionStatus, Score } from './CompletionStatus';
import { ProgressBar, ProgressBarItemVariant } from './ProgressBar';

export interface AssessmentItem {
  id: ID;
  /**
   * The section the item is drawn in. Items that share a section share a page, and come one
   * after another in `items`.
   */
  section: string;
  /** The item's circle in the navigation. */
  state: Exclude<ProgressBarItemVariant, 'isStatus'>;
  /** Marks the item's circle as having feedback to read. */
  hasFeedback?: boolean;
  isCompleted: boolean;
  /** A completed response that can still be changed. The completion step offers "Edit responses" for these. */
  editable?: boolean;
}

export interface AssessmentSectionProps {
  sectionId: string;
  /** The number of the section's first item within the whole assessment, for its header. */
  firstItemNumber: number;
  /**
   * The DOM id the host puts on the section itself, both while it loads (on its `Loader`) and
   * once it has (on its `ExerciseWrapper`). Entering a section moves focus here, so the learner
   * starts at the top of it.
   */
  sectionDomId: string;
  /**
   * The DOM id the host's chrome puts on each item. Moving to an item after a section's first
   * moves focus here.
   */
  itemDomId: (itemId: ID) => string;
  /** The item's Next button: moves on from that item. */
  onNext: (itemId: ID) => void;
  /**
   * Reports the assessment's score, as it comes back from answering an item, for the completion
   * step to show. The shell keeps the latest, so the host need not hold it above its sections.
   */
  onScoreAssessment: (score: Score) => void;
  /**
   * Called once the section's items are in the DOM. A section not ready shortly after it is
   * entered has focus moved to its loader in the meantime, and on to the item when it is.
   */
  onReady: () => void;
}

export interface AssessmentCompletion {
  /** The score before any is reported through `onScoreAssessment`. */
  score?: Score;
  onRetry?: () => void;
  isRetrying?: boolean;
  /** Leaves the assessment. Omit when there is no next step after it, and no Next is offered. */
  onNext?: () => void;
}

export interface AssessmentProps {
  /** In the order they are taken. Until there are any, nothing is drawn. */
  items: AssessmentItem[];
  /**
   * Draws the current section and the chrome around each of its items, or its `Loader` while it
   * loads. Remounted for every section, so a host can load a section's content when it is drawn
   * and report it ready.
   */
  renderSection: (props: AssessmentSectionProps) => React.ReactNode;
  completion: AssessmentCompletion;
  /**
   * The attempt the items belong to. When it changes, as it does on a retry, the assessment opens
   * afresh: where the learner is and the score reported so far are both dropped.
   */
  attemptId?: string;
}

let instances = 0;
const useFallbackId = () => React.useState(() => `${++instances}`)[0];
/** `React.useId` where the host's React has it, so the ids survive server rendering. */
const useInstanceId: () => string = (React as { useId?: () => string }).useId ?? useFallbackId;

const firstIndex = (items: AssessmentItem[], test: (item: AssessmentItem) => boolean) => {
  const index = items.findIndex(test);
  return index === -1 ? undefined : index;
};

/** How long a section has to report ready before focus waits on its loader instead. */
const LOADING_DELAY = 10;

/** Where the learner is: an item, by id, so that it survives the host reordering its items. */
type Position = { item: ID } | 'completion';

/** Where an assessment opens: the first incomplete item, or the completion step once there is none. */
const startingPosition = (items: AssessmentItem[]): Position => {
  const index = firstIndex(items, item => !item.isCompleted);
  return index === undefined ? 'completion' : { item: items[index].id };
};

/**
 * An assessment's progression: the navigation, which section is drawn, the completion step,
 * and where focus goes as a learner moves through it. The host draws each section and holds
 * every response; this holds only where the learner is.
 *
 * Moving to an item moves focus to it, and moving to the completion step moves focus there, so
 * a keyboard or screen reader user follows the navigation instead of being left on it. Focus is
 * never moved on the first render.
 *
 * Where the assessment opens is decided once, when it first has items, and again for every new
 * `attemptId`.
 */
export const Assessment = ({ items, renderSection, completion, attemptId }: AssessmentProps) => {
  const prefix = `assessment-${useInstanceId()}`;
  const itemDomId = React.useCallback((itemId: ID) => `${prefix}-item-${itemId}`, [prefix]);
  const sectionDomId = `${prefix}-section`;
  const completionDomId = `${prefix}-completion`;

  const [chosen, setChosen] = React.useState<Position | undefined>(undefined);
  /*
   * Where the assessment opens is chosen once it has items, and chosen again if the host drops
   * the item the learner was on. Either way it is kept, so it does not move as items are completed.
   */
  const chosenIsGone = chosen !== undefined && chosen !== 'completion' && !items.some(item => item.id === chosen.item);
  const opening = items.length > 0 && (chosen === undefined || chosenIsGone) ? startingPosition(items) : undefined;
  if (opening !== undefined) {
    setChosen(opening);
  }
  const position = items.length === 0 ? undefined : opening ?? chosen;

  // the index of the position in the navigation, where the completion step comes after the last item
  const index = position === 'completion' ? items.length
    : items.findIndex(item => item.id === position?.item);
  const currentItem = position === 'completion' ? undefined : items[index];
  const sectionId = currentItem?.section;

  /*
   * Each drawing of a section is a mount of its own, and only the current one's `onReady` counts:
   * a section left and returned to is drawn afresh, and a late report from the drawing that was
   * left must not stand in for the one on show.
   */
  const [drawn, setDrawn] = React.useState({ section: sectionId, mount: 0 });
  if (drawn.section !== sectionId) {
    setDrawn({ section: sectionId, mount: drawn.mount + 1 });
  }
  const mount = drawn.section === sectionId ? drawn.mount : drawn.mount + 1;
  const [readyMount, setReadyMount] = React.useState<number | undefined>(undefined);
  // every navigation is a request to move focus, even to where the learner already is
  const [focusRequest, setFocusRequest] = React.useState(0);
  const focusHandled = React.useRef(0);
  // falling back from a dropped item moves focus too, or it is left on what was dropped
  if (chosenIsGone && items.length > 0) {
    setFocusRequest(focusRequest + 1);
  }
  const [reportedScore, setReportedScore] = React.useState<Score | undefined>(undefined);

  // a new attempt opens afresh, and the learner is taken to where it opens
  const [attempt, setAttempt] = React.useState(attemptId);
  if (attempt !== attemptId) {
    setAttempt(attemptId);
    setChosen(undefined);
    setReportedScore(undefined);
    setDrawn({ section: undefined, mount: drawn.mount + 1 });
    setFocusRequest(focusRequest + 1);
  }

  // read by the focus effect, which runs for a navigation and not for every new `items`
  const latest = React.useRef({ items, index, currentItem });
  latest.current = { items, index, currentItem };

  const goTo = React.useCallback((next: number) => {
    const nextItem = items[next];
    setChosen(nextItem ? { item: nextItem.id } : 'completion');
    setFocusRequest(current => current + 1);
  }, [items]);

  React.useEffect(() => {
    if (focusHandled.current === focusRequest) { return; }
    const { items, index, currentItem } = latest.current;

    if (currentItem === undefined) {
      focusHandled.current = focusRequest;
      window.scrollTo(0, 0);
      document.getElementById(completionDomId)?.focus({ preventScroll: true });
      return;
    }

    // a section's first item is reached by its top, and the items after it by their own
    const opensSection = items[index - 1]?.section !== currentItem.section;
    const target = opensSection ? sectionDomId : itemDomId(currentItem.id);

    const focus = (id: string, scroll: (element: HTMLElement) => void) => {
      const element = document.getElementById(id);
      if (!element) {
        console.warn(`Assessment: no element with id "${id}" to move focus to. Put the ` +
          (id === sectionDomId
            ? '`sectionDomId` on the section, e.g. `ExerciseWrapper`\'s `id`, and on its `Loader` while it loads.'
            : '`itemDomId` on the item\'s chrome, e.g. `QuestionWrapper`\'s `id`.'));
        return;
      }
      scroll(element);
      element.focus({ preventScroll: true });
    };

    if (readyMount === mount) {
      focusHandled.current = focusRequest;
      focus(target, opensSection ? () => window.scrollTo(0, 0) : scrollToElement);
      return;
    }

    // a section that is not ready straight away is loading: wait on its loader, which has its id
    const waiting = window.setTimeout(() => focus(sectionDomId, () => window.scrollTo(0, 0)), LOADING_DELAY);
    return () => window.clearTimeout(waiting);
  }, [completionDomId, focusRequest, itemDomId, mount, readyMount, sectionDomId]);

  const onReady = React.useCallback(() => setReadyMount(mount), [mount]);

  const onNext = React.useCallback((itemId: ID) => {
    const index = items.findIndex(item => item.id === itemId);
    if (index !== -1) { goTo(index + 1); }
  }, [goTo, items]);

  const firstIncomplete = firstIndex(items, item => !item.isCompleted);
  const firstEditable = firstIndex(items, item => item.isCompleted && item.editable === true);

  if (position === undefined) { return null; }

  return (
    <>
      <ProgressBar
        activeIndex={index}
        goToStep={goTo}
        steps={[
          ...items.map(item => ({ variant: item.state, hasFeedback: item.hasFeedback ?? false })),
          { variant: 'isStatus' as const },
        ]}
      />

      {sectionId !== undefined
        ? <React.Fragment key={mount}>
          {renderSection({
            sectionId,
            sectionDomId,
            firstItemNumber: items.findIndex(item => item.section === sectionId) + 1,
            itemDomId,
            onNext,
            onReady,
            onScoreAssessment: setReportedScore,
          })}
        </React.Fragment>
        : <CompletionStatus
          id={completionDomId}
          numberOfQuestions={items.length}
          numberCompleted={items.filter(item => item.isCompleted).length}
          score={reportedScore ?? completion.score}
          handleRetry={completion.onRetry}
          isRetrying={completion.isRetrying}
          handleNext={completion.onNext}
          handleContinue={() => { if (firstIncomplete !== undefined) { goTo(firstIncomplete); } }}
          handleEditResponses={firstEditable !== undefined ? () => goTo(firstEditable) : undefined}
        />}
    </>
  );
};

Assessment.displayName = 'OSAssessment';
