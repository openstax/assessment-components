import React from "react";
import { ID } from "../types";

/**
 * What an `Assessment` tells the section it is drawing: the DOM ids it moves focus to, and the
 * number of each item in the whole assessment. `ExerciseWrapper` and `Loader` put the section's
 * id on themselves, and `QuestionWrapper` its item's, so a host using them has nothing to wire.
 *
 * Absent outside an assessment, where those components carry no ids and take no focus.
 */
export interface AssessmentSection {
  sectionDomId: string;
  itemDomId: (itemId: ID) => string;
  /** The item's number in the whole assessment, or undefined for an item the assessment does not have. */
  itemNumber: (itemId: ID) => number | undefined;
}

export const AssessmentSectionContext = React.createContext<AssessmentSection | undefined>(undefined);
export const useAssessmentSection = () => React.useContext(AssessmentSectionContext);
