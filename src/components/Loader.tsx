import { BulletList } from "react-content-loader";
import { colors } from "../../src/theme";
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
  }
`;

export const Loader = () => <Wrapper><BulletList /></Wrapper>;
