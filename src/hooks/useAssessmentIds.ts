import React from 'react';
import { ID } from '../types';
import { useInstanceId } from './useInstanceId';

/** The DOM ids an assessment moves focus and scrolls to, unique to this assessment on the page. */
export interface AssessmentIds {
  sectionDomId: string;
  /** The current section's card, header included, scrolled to when the section is entered. */
  sectionScrollTargetId: string;
  completionDomId: string;
  itemDomId: (itemId: ID) => string;
}

export const useAssessmentIds = (): AssessmentIds => {
  const prefix = `assessment-${useInstanceId()}`;
  return React.useMemo(() => ({
    sectionDomId: `${prefix}-section`,
    sectionScrollTargetId: `${prefix}-section-scroll-target`,
    completionDomId: `${prefix}-completion`,
    itemDomId: (itemId: ID) => `${prefix}-item-${itemId}`,
  }), [prefix]);
};
