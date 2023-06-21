import styled from "styled-components";
import { ExerciseToolbar } from "./ExerciseToolbar";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  min-height: 20rem;
`;

export const Default = () => <Wrapper><ExerciseToolbar data={{}} /></Wrapper>;
