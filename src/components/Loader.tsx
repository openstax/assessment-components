import { BulletList } from "react-content-loader";
import { colors } from "../../src/theme";
import styled from "styled-components";

const StyledLoader = styled(BulletList)`
  max-width: 1000px;
  padding: 2rem;
  border: 1px solid ${colors.palette.light};
  border-radius: 0.25rem;
  background-color: white;
`;

export const Loader = () => <StyledLoader />;
