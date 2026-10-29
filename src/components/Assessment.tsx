import React from 'react';
import { useAssessmentPosition } from '../hooks/useAssessmentPosition';
import { AssessmentSection, AssessmentSectionContext } from '../hooks/useAssessmentSection';
import { useAttemptGuard } from '../hooks/useAttemptGuard';
import { FocusTarget, useFocusHandoff } from '../hooks/useFocusHandoff';
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
  /** The item's Next button: moves on from that item. A Next made for an earlier attempt is ignored. */
  onNext: (itemId: ID) => void;
  /**
   * Reports the assessment's score, as it comes back from answering an item, for the completion
   * step to show. The shell keeps the latest, so the host need not hold it above its sections. A
   * report made for an earlier attempt is ignored.
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
   * The attempt the items belong to. When it changes, as it does on a retry, the assessment opens
   * afresh: where the learner is and the score reported so far are both dropped.
   */
  attemptId?: string;
}

const firstIndex = (items: AssessmentItem[], test: (item: AssessmentItem) => boolean) => {
  const found = items.findIndex(test);
  return found === -1 ? undefined : found;
};

const SECTION_HINT = 'Draw the section in an `ExerciseWrapper`, and a `Loader` while it loads.';
const ITEM_HINT = 'Draw the item in a `QuestionWrapper` given its `itemId`.';
const COMPLETION_HINT = 'Draw the completion step in a `CompletionStatus` given its `id`.';

/**
 * An assessment's progression: the navigation, which section is drawn, the completion step,
 * and where focus goes as a learner moves through it. The host draws each section and holds
 * every response; this holds only where the learner is.
 *
 * Moving to an item moves focus to it, and moving to the completion step moves focus there, so
 * a keyboard or screen reader user follows the navigation instead of being left on it. Entering a
 * section by its first item focuses the section, so it is read from its top; a section still
 * loading has focus wait on its loader. Focus is never moved on the first render.
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
export const Assessment = ({ items, renderSection, completion, attemptId }: AssessmentProps) => {
  const prefix = `assessment-${useInstanceId()}`;
  const itemDomId = React.useCallback((itemId: ID) => `${prefix}-item-${itemId}`, [prefix]);
  const sectionDomId = `${prefix}-section`;
  const sectionScrollTargetId = `${prefix}-section-scroll-target`;
  const completionDomId = `${prefix}-completion`;

  const { position, index, moves, goTo } = useAssessmentPosition(items, attemptId);
  const currentItem = position === 'completion' ? undefined : items[index];
  const sectionId = currentItem?.section;
  const drawing = useSectionDrawing(sectionId, attemptId);

  const sectionTarget: FocusTarget = {
    id: sectionDomId, scrollTargetId: sectionScrollTargetId, margin: true, hint: SECTION_HINT,
  };
  // a section's first item is reached by its top, and the items after it by their own
  const destination: FocusTarget | undefined = position === undefined ? undefined
    : currentItem === undefined ? { id: completionDomId, margin: true, hint: COMPLETION_HINT }
    : items[index - 1]?.section !== currentItem.section ? sectionTarget
    : { id: itemDomId(currentItem.id), hint: ITEM_HINT };
  useFocusHandoff({
    moves,
    destination,
    ready: currentItem === undefined || drawing.ready,
    // a section that is not ready straight away is loading: focus waits on its loader, which has its id
    waitOn: sectionTarget,
  });

  // the callbacks a section is handed belong to the attempt it was drawn for
  const forAttempt = useAttemptGuard(attemptId);

  const [reported, setReported] = React.useState<{ attemptId: string | undefined; score: Score }>();
  const reportedScore = reported !== undefined && reported.attemptId === attemptId ? reported.score : undefined;
  const onScoreAssessment = React.useMemo(
    () => forAttempt((score: Score) => setReported({ attemptId, score })),
    [attemptId, forAttempt]
  );

  const onNext = React.useMemo(() => forAttempt((itemId: ID) => {
    const itemIndex = items.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) { goTo(itemIndex + 1); }
  }), [forAttempt, goTo, items]);

  const section: AssessmentSection = React.useMemo(() => ({
    sectionDomId,
    sectionScrollTargetId,
    itemDomId,
    itemNumber: (itemId: ID) => {
      const found = items.findIndex(item => item.id === itemId);
      return found === -1 ? undefined : found + 1;
    },
  }), [itemDomId, items, sectionDomId, sectionScrollTargetId]);

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
        ? <AssessmentSectionContext.Provider key={drawing.mount} value={section}>
          {renderSection({
            sectionId,
            firstItemNumber: items.findIndex(item => item.section === sectionId) + 1,
            onNext,
            onReady: drawing.onReady,
            onScoreAssessment,
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
          handleContinue={() => { if (firstIncomplete !== undefined) { goTo(firstIncomplete); } }}
          handleEditResponses={firstEditable !== undefined ? () => goTo(firstEditable) : undefined}
        />}
    </>
  );
};

Assessment.displayName = 'OSAssessment';
