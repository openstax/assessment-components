import React from 'react';
import { findItemIndex, Move, startingPosition, useAssessmentPosition } from '../hooks/useAssessmentPosition';
import { AssessmentSection, AssessmentSectionContext } from '../hooks/useAssessmentSection';
import { FocusRequest, FocusTarget, useFocusHandoff } from '../hooks/useFocusHandoff';
import { useInstanceId } from '../hooks/useInstanceId';
import { useSectionDrawing } from '../hooks/useSectionDrawing';
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
  /** The item's Next button: moves on from that item. A Next made for an attempt since replaced is ignored. */
  onNext: (itemId: ID) => void;
  /**
   * Reports the assessment's score, as it comes back from answering an item, for the completion
   * step to show. The shell keeps the latest, so the host need not hold it above its sections. A
   * report made for an attempt since replaced is ignored.
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
   * Draws the current section, in an `ExerciseWrapper` with a `QuestionWrapper` (given its
   * `itemId`) around each item, or a `Loader` while it loads. Those take the ids that focus moves
   * to from the assessment, so the host has none to wire. Remounted for every section, so a host
   * can load a section's content when it is drawn and report it ready.
   */
  renderSection: (props: AssessmentSectionProps) => React.ReactNode;
  completion: AssessmentCompletion;
  /**
   * The attempt the items belong to. When it moves on from one it had, as on a retry, the
   * assessment opens afresh, as though newly drawn: where the learner is, the score reported so
   * far and every section are dropped, and the learner is taken to where the new attempt opens.
   *
   * The new attempt opens on the items it is given with its id, so change it together with its
   * items, or with none until they arrive; never before them, or it opens on the old attempt's.
   * An id going undefined, as while a host refetches, is not a new attempt, nor is it coming back.
   */
  attemptId?: string;
}

const SECTION_HINT = 'Draw the section in an `ExerciseWrapper`, and a `Loader` while it loads.';
const ITEM_HINT = 'Draw the item in a `QuestionWrapper` given its `itemId`.';
const COMPLETION_HINT = 'Draw the completion step in a `CompletionStatus` given its `id`.';

interface AssessmentTarget extends FocusTarget {
  /** How to draw what carries the id, for the warning when nothing does. */
  hint: string;
}

const warnMissing = ({ id, hint }: AssessmentTarget) =>
  console.warn(`Assessment: no element with id "${id}" to move focus to. ${hint}`);

/**
 * The focus move a move of the learner asks for. Every move the learner asks for takes focus with
 * them. The assessment opening takes it only for an attempt they retried into: one first drawn
 * leaves focus wherever the page has it. Falling back from an item the host dropped takes it only
 * from nowhere, as when it was in what was dropped.
 */
const focusRequestFor = (move: Move | undefined, isRetry: boolean): FocusRequest | undefined =>
  move === undefined || (move.cause === 'open' && !isRetry) ? undefined
    : { seq: move.seq, takeFrom: move.cause === 'fallback' ? 'nowhere' : 'active' };

/**
 * Counts the attempts an assessment has had, so each can be drawn afresh. An attempt is new when
 * `attemptId` moves on from one it had to another: the first one given is the attempt already
 * drawn, not a new one, and an id going undefined and coming back is the same attempt.
 */
const useAttemptCount = (attemptId: string | undefined) => {
  const [seen, setSeen] = React.useState({ attemptId, count: 0 });
  const isNew = attemptId !== undefined && seen.attemptId !== undefined && seen.attemptId !== attemptId;
  const count = isNew ? seen.count + 1 : seen.count;
  // counted while rendering, so the render with the new attempt already draws it afresh
  if (attemptId !== undefined && seen.attemptId !== attemptId) {
    setSeen({ attemptId, count });
  }
  return count;
};

/**
 * An assessment's progression: the navigation, which section is drawn, the completion step,
 * and where focus goes as a learner moves through it. The host draws each section and holds
 * every response; this holds where the learner is, and the latest score its sections report.
 *
 * Moving to an item moves focus to it, and moving to the completion step moves focus there, so
 * a keyboard or screen reader user follows the navigation instead of being left on it. Entering a
 * section by its first item focuses the section, so it is read from its top; a section still
 * loading has focus wait on its loader. Focus is not moved when the assessment is first drawn,
 * only by moves after that and by a new attempt.
 *
 * Where focus goes is scrolled to only when its top is off screen, as it may not be when the
 * assessment is part of a longer page. A section is scrolled to by its card, header included, and
 * it and the completion step are left a rem of room above.
 *
 * Where the assessment opens is decided once, when it first has items, and again for every new
 * `attemptId`.
 *
 * Its DOM ids come from `React.useId` where the host's React has it. Before React 18 they are
 * counted instead, and are not stable across server and client renders.
 */
export const Assessment = ({ attemptId, ...props }: AssessmentProps) => {
  const attempt = useAttemptCount(attemptId);
  // every attempt is drawn afresh, by a component of its own that knows nothing of the others.
  // This is done here, from `attemptId`, rather than by the host giving the assessment a new
  // `key`: the host's remount could not tell a new attempt from a first draw, and only a new
  // attempt takes focus to where it opens. Keep it here.
  return <AssessmentAttempt key={attempt} {...props} isRetry={attempt > 0} />;
};

Assessment.displayName = 'OSAssessment';

/** One attempt at an assessment. One the learner retried into takes them to where it opens. */
const AssessmentAttempt = ({ items, renderSection, completion, isRetry }: Omit<AssessmentProps, 'attemptId'> & {
  isRetry: boolean;
}) => {
  const prefix = `assessment-${useInstanceId()}`;
  const itemDomId = React.useCallback((itemId: ID) => `${prefix}-item-${itemId}`, [prefix]);
  const sectionDomId = `${prefix}-section`;
  const sectionScrollTargetId = `${prefix}-section-scroll-target`;
  const completionDomId = `${prefix}-completion`;

  const { position, index, lastMove, goTo, goToIndex, next } = useAssessmentPosition(items);
  const currentItem = position === 'completion' ? undefined : items[index];
  const sectionId = currentItem?.section;
  const drawing = useSectionDrawing(sectionId);

  const sectionTarget: AssessmentTarget = { id: sectionDomId, scrollTargetId: sectionScrollTargetId, hint: SECTION_HINT };
  // a section's first item is reached by its top, and the items after it by their own
  const destination: AssessmentTarget | undefined = position === undefined ? undefined
    : currentItem === undefined ? { id: completionDomId, hint: COMPLETION_HINT }
    : items[index - 1]?.section !== currentItem.section ? sectionTarget
    : { id: itemDomId(currentItem.id), hint: ITEM_HINT };
  useFocusHandoff({
    request: focusRequestFor(lastMove, isRetry),
    destination,
    ready: currentItem === undefined || drawing.ready,
    reportedReady: drawing.reportedReady,
    // a section that is not ready straight away is loading: focus waits on its loader, which has its id
    waitOn: sectionTarget,
    onMissing: warnMissing,
  });

  // the attempt's own, dropped with it when a new one is drawn
  const [reportedScore, setReportedScore] = React.useState<Score>();

  const section: AssessmentSection = React.useMemo(() => ({
    sectionDomId,
    sectionScrollTargetId,
    itemDomId,
    itemNumber: (itemId: ID) => {
      const found = findItemIndex(items, itemId);
      return found === undefined ? undefined : found + 1;
    },
  }), [itemDomId, items, sectionDomId, sectionScrollTargetId]);

  const firstEditable = items.find(item => item.isCompleted && item.editable === true);

  if (position === undefined) { return null; }

  return (
    <>
      <ProgressBar
        activeIndex={index}
        goToStep={goToIndex}
        steps={[
          ...items.map(item => ({ variant: item.state, hasFeedback: item.hasFeedback ?? false })),
          { variant: 'isStatus' as const },
        ]}
      />

      {sectionId !== undefined
        ? <AssessmentSectionContext.Provider key={drawing.mount} value={section}>
          {renderSection({
            sectionId,
            firstItemNumber: items.findIndex(item => item.section === sectionId) + 1,
            onNext: next,
            onReady: drawing.onReady,
            onScoreAssessment: setReportedScore,
          })}
        </AssessmentSectionContext.Provider>
        : <CompletionStatus
          id={completionDomId}
          numberOfQuestions={items.length}
          numberCompleted={items.filter(item => item.isCompleted).length}
          score={reportedScore ?? completion.score}
          handleRetry={completion.onRetry}
          isRetrying={completion.isRetrying}
          handleNext={completion.onNext}
          handleContinue={() => goTo(startingPosition(items))}
          handleEditResponses={firstEditable ? () => goTo({ item: firstEditable.id }) : undefined}
        />}
    </>
  );
};
