import React from "react";
import { ID } from "../types";

/**
 * What an `Assessment` tells the section it is drawing: the DOM ids it moves focus and scrolls
 * to, and the number of each item in the whole assessment. `ExerciseWrapper` and `Loader` put the
 * section's id on themselves, and `QuestionWrapper` its item's, so a host using them has nothing to wire.
 *
 * Absent outside an assessment, where those components carry no ids and take no focus.
 */
export interface AssessmentSection {
  /**
   * Absent inside the section's own `ExerciseWrapper`, which has taken it, so a `Loader` drawn
   * inside it, as while a question loads, does not take it again.
   */
  sectionDomId?: string;
  /**
   * What is scrolled into view when the section is entered, where that is more than the element
   * that takes focus: the whole card, header included, around the body `ExerciseWrapper` focuses.
   * Without it the section's own element is scrolled to.
   */
  sectionScrollTargetId?: string;
  itemDomId: (itemId: ID) => string;
  /** The item's number in the whole assessment, or undefined for an item the assessment does not have. */
  itemNumber: (itemId: ID) => number | undefined;
}

export const AssessmentSectionContext = React.createContext<AssessmentSection | undefined>(undefined);
export const useAssessmentSection = () => React.useContext(AssessmentSectionContext);
