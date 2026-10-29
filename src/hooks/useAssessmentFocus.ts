import { ID } from '../types';
import { AssessmentIds } from './useAssessmentIds';
import { Move, Position } from './useAssessmentPosition';
import { FocusRequest, FocusTarget, useFocusHandoff } from './useFocusHandoff';

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
 * Where focus goes as the learner moves through an assessment, and taking it there. An item that
 * starts its section is reached by the section's top, so it is read from there, and the items
 * after it by their own. The completion step is reached by its heading. A section not yet ready
 * has focus wait on its loader, which carries the section's id.
 */
export const useAssessmentFocus = ({ ids, items, position, index, lastMove, isRetry, section }: {
  ids: AssessmentIds;
  items: Array<{ id: ID; section: string }>;
  position: Position | undefined;
  /** The position's place in `items`. */
  index: number;
  lastMove: Move | undefined;
  /** Whether this is an attempt the learner retried into. */
  isRetry: boolean;
  /** The current section's drawing: whether it is ready, as of the render and as soon as it says so. */
  section: { ready: boolean; reportedReady: () => boolean };
}) => {
  const currentItem = position === 'completion' ? undefined : items[index];
  const sectionTarget: AssessmentTarget = {
    id: ids.sectionDomId, scrollTargetId: ids.sectionScrollTargetId, hint: SECTION_HINT,
  };
  const destination: AssessmentTarget | undefined = position === undefined ? undefined
    : currentItem === undefined ? { id: ids.completionDomId, hint: COMPLETION_HINT }
    : items[index - 1]?.section !== currentItem.section ? sectionTarget
    : { id: ids.itemDomId(currentItem.id), hint: ITEM_HINT };

  useFocusHandoff({
    request: focusRequestFor(lastMove, isRetry),
    destination,
    ready: currentItem === undefined || section.ready,
    reportedReady: section.reportedReady,
    waitOn: sectionTarget,
    onMissing: warnMissing,
  });
};
