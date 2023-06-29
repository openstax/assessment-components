import styled from "styled-components";
import { ExerciseToolbar } from "./ExerciseToolbar";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  min-height: 20rem;
`;

export const Default = () => <Wrapper>
  <ExerciseToolbar icons={{
    topic: {
      url: 'https://openstax.org'
    },
    errata: {
      url: 'https://openstax.org'
    }
  }} />
  </Wrapper>;

export const DefaultMobileOnly = () => <Wrapper>
  <ExerciseToolbar icons={{
    topic: {
      url: 'https://openstax.org',
      location: {
        toolbar: {
          desktop: false,
          mobile: true
        }
      }
    },
    errata: {
      url: 'https://openstax.org',
      location: {
        toolbar: {
          desktop: false,
          mobile: true
        }
      }
    }
  }} />
  </Wrapper>;
