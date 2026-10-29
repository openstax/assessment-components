import React from 'react';
import { ID } from '../types';

interface PositionItem {
  id: ID;
  isCompleted: boolean;
}

/** Where the learner is: an item, by id, so that it survives the host reordering its items. */
export type Position = { item: ID } | 'completion';

/** Where an assessment opens: the first incomplete item, or the completion step once there is none. */
const startingPosition = (items: PositionItem[]): Position => {
  const found = items.find(item => !item.isCompleted);
  return found ? { item: found.id } : 'completion';
};

interface State {
  attemptId: string | undefined;
  chosen: Position | undefined;
  /** How many times the learner has been moved. */
  moves: number;
}

type Action =
  /** Where an attempt opens, or falls back to, chosen. A move when it takes the learner from where they were. */
  | { type: 'open'; attemptId: string | undefined; position: Position | undefined; moved: boolean }
  | { type: 'goTo'; position: Position };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'open':
      return { attemptId: action.attemptId, chosen: action.position, moves: state.moves + (action.moved ? 1 : 0) };
    case 'goTo':
      return { ...state, chosen: action.position, moves: state.moves + 1 };
  }
};

/**
 * Where the learner is in an assessment, and the moves that took them there.
 *
 * Where the assessment opens is chosen once it has items, and again for every new `attemptId`,
 * and when the host drops the item the learner was on. Either way it is kept, so it does not
 * move as items are completed. A new attempt, or a dropped item, moves the learner as `goTo` does.
 */
export const useAssessmentPosition = (items: PositionItem[], attemptId: string | undefined) => {
  const [state, dispatch] = React.useReducer(reducer, { attemptId, chosen: undefined, moves: 0 });

  const newAttempt = state.attemptId !== attemptId;
  const kept = newAttempt ? undefined : state.chosen;
  const keptIsGone = kept !== undefined && kept !== 'completion' && !items.some(item => item.id === kept.item);
  const opening = items.length > 0 && (kept === undefined || keptIsGone) ? startingPosition(items) : undefined;
  if (newAttempt || opening !== undefined) {
    dispatch({ type: 'open', attemptId, position: opening ?? kept, moved: newAttempt || keptIsGone });
  }
  const position = items.length === 0 ? undefined : opening ?? kept;

  // the position's place in the navigation, where the completion step comes after the last item
  const index = position === 'completion' ? items.length
    : items.findIndex(item => item.id === position?.item);

  const goTo = React.useCallback((next: number) => {
    const nextItem = items[next];
    dispatch({ type: 'goTo', position: nextItem ? { item: nextItem.id } : 'completion' });
  }, [items]);

  return { position, index, moves: state.moves, goTo };
};
