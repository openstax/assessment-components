import styled from "styled-components";
import { colors, layouts } from '../../theme';

export const COLLAPSED_HEIGHT = 16.8; // rem

const baseContainer = `
  padding: ${layouts.answer.horizontalSpacing} ${layouts.answer.horizontalBuffer};
  margin: ${layouts.answer.verticalSpacing} 0 ${layouts.answer.horizontalSpacing} ${layouts.answer.verticalSpacing};
`;

export const FreeResponseDefaultContainer = styled.div`
  ${baseContainer}
  border-left: ${layouts.answer.horizontalSpacing} solid ${colors.palette.neutralLighter};
  font-style: italic;
`;

export const FreeResponseExpandedContainer = styled.div`
  ${baseContainer}
  position: relative;
  width: 100%;
`;

export const FreeResponseText = styled.div<{ expanded: boolean; isOverflowing: boolean;}>`
  max-height: ${({ expanded }) => (expanded ? "none" : `${COLLAPSED_HEIGHT}rem`)};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: 1.4rem;

  ${({ expanded, isOverflowing }) =>
    !expanded && isOverflowing
      ? `
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `
      : ""}
`;

export const ReadMoreLink = styled.button`
  display: inline;
  background: none;
  border: none;
  color: ${colors.palette.blue};
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-size: 1.3rem;
  text-decoration: underline;
  white-space: nowrap;
`;
  
  