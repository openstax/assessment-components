import React from 'react';
import { ID } from '../types';

interface PositionItem {
  id: ID;
  isCompleted: boolean;
}

/** Whether two ids name the same item. A host may give the same id as a number in one place and a string in another. */
export const sameId = (a: ID, b: ID) => String(a) === String(b);

/** Where the item with an id is in `items`, or undefined when it is not there. */
export const findItemIndex = (items: PositionItem[], id: ID) => {
  const found = items.findIndex(item => sameId(item.id, id));
  return found === -1 ? undefined : found;
};

/** Where the learner is: an item, by id, so that it survives the host reordering its items. */
export type Position = { item: ID } | 'completion';

/** Where an assessment opens: the first incomplete item, or the completion step once there is none. */
export const startingPosition = (items: PositionItem[]): Position => {
  const found = items.find(item => !item.isCompleted);
  return found ? { item: found.id } : 'completion';
};

/**
 * A move of the learner, numbered by `seq` so each is told apart from the last, even to where
 * they already were. Its cause is what made it: the assessment opening where it starts, the
 * learner asking to go somewhere, or the assessment falling back to where it starts from an item
 * the host dropped.
 */
export interface Move {
  seq: number;
  cause: 'open' | 'learner' | 'fallback';
}

interface State {
  chosen: Position | undefined;
  lastMove: Move | undefined;
}

type Action =
  | { type: 'open'; position: Position; cause: 'open' | 'fallback' }
  | { type: 'goTo'; position: Position };

const reducer = (state: State, action: Action): State => {
  const seq = (state.lastMove?.seq ?? 0) + 1;
  switch (action.type) {
    case 'open':
      return { chosen: action.position, lastMove: { seq, cause: action.cause } };
    case 'goTo':
      return { chosen: action.position, lastMove: { seq, cause: 'learner' } };
  }
};

/**
 * Where the learner is in an assessment, and the last move that took them there.
 *
 * Where it opens is chosen once it has items, and again when the host drops the item the learner
 * was on. Either way it is kept, so it does not move as items are completed.
 *
 * Its place in the navigation is `index`, where the completion step comes after the last item.
 */
export const useAssessmentPosition = (items: PositionItem[]) => {
  const [state, dispatch] = React.useReducer(reducer, { chosen: undefined, lastMove: undefined });

  const kept = state.chosen;
  const keptIsGone = kept !== undefined && kept !== 'completion' && findItemIndex(items, kept.item) === undefined;
  const opening = items.length > 0 && (kept === undefined || keptIsGone) ? startingPosition(items) : undefined;
  // chosen while rendering, rather than in an effect, so the render that has the items already
  // draws where they open, instead of drawing nothing and then opening
  if (opening !== undefined) {
    dispatch({ type: 'open', position: opening, cause: keptIsGone ? 'fallback' : 'open' });
  }
  const position = items.length === 0 ? undefined : opening ?? kept;

  const index = position === 'completion' ? items.length
    : position === undefined ? -1 : findItemIndex(items, position.item) ?? -1;

  const goTo = React.useCallback((next: Position) => dispatch({ type: 'goTo', position: next }), []);

  /** Moves to a place in the navigation. */
  const goToIndex = React.useCallback((navIndex: number) => {
    const item = items[navIndex];
    goTo(item ? { item: item.id } : 'completion');
  }, [goTo, items]);

  /** Moves on from an item: to the one after it, or the completion step after the last. */
  const next = React.useCallback((itemId: ID) => {
    const itemIndex = findItemIndex(items, itemId);
    if (itemIndex === undefined) {
      console.warn(`Assessment: no item with id "${itemId}" to move on from.`);
      return;
    }
    goToIndex(itemIndex + 1);
  }, [goToIndex, items]);

  return { position, index, lastMove: state.lastMove, goTo, goToIndex, next };
};
