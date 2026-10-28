import { BulletList } from "react-content-loader";
import { colors } from "../theme";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1000px;
  @media(min-width: 960px) {
    // Around the height of a multiple choice with 4 options
    min-height: 53.8rem;
  }
  padding: 2rem;
  margin: 2rem;
  border: 1px solid ${colors.palette.light};
  border-radius: 0.25rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    max-width: 600px;
    flex-grow: 1;
  }
`;

/**
 * `id` is the DOM id an `Assessment` moves focus to while a section loads (its `sectionDomId`).
 * Given one, the loader is focusable and announces itself as loading.
 */
export const Loader = ({ id }: { id?: string } = {}) => {
  const focusTarget = id !== undefined
    ? { id, tabIndex: -1, role: 'progressbar', 'aria-label': 'Loading', 'aria-busy': true }
    : {};

  return <Wrapper {...focusTarget}><BulletList uniqueKey="OSLoader" /></Wrapper>;
};
