import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { typesetMath } from '../helpers/mathjax';
import { TypesetMathContext } from '../hooks/useTypesetMath';
import { CompactDisplayProps, CompactDisplayProvider, useCompactDisplay } from './compactDisplay';
import { Content } from './Content';

const GlobalStyle = createGlobalStyle`
  :root {
    --content-text-scale: 1;
  }
`;

const StyledExerciseBody = styled.div<CompactDisplayProps>`
  ${props => props.compactDisplay && css`
    .exercise-context {
      .os-title {
        margin: 0 0 var(--spacing);
      }
      .os-subtitle {
        margin: var(--spacing) 0;
      }
      figure {
        float: left;
        margin: 0;
      }
      img {
        max-width: 16rem;
      }
      p:last-child {
        margin-bottom: 0;
      }
    }

    .question-info,
    .exercise-context {
      line-height: 2rem;
    }
  `}
`;

const Preamble = ({ context, stimulus_html }: Pick<ExerciseBodyProps, 'context' | 'stimulus_html'>) => (
  <>
    {context &&
      <Content className="step-card-body exercise-context"
        block html={context} />}

    {stimulus_html &&
      <Content className="step-card-body exercise-stimulus"
        block html={stimulus_html} />}
  </>
);

export interface ExerciseBodyProps extends CompactDisplayProps {
  /** exercise-level preamble, rendered above the questions */
  context?: string;
  /** exercise-level preamble, rendered above the questions */
  stimulus_html?: string;
  children: React.ReactNode;
}

/**
 * The content half of an exercise: the preamble, and the MathJax context every question
 * below needs. Rendered outside this, a `Question` silently does not typeset.
 *
 * Takes no `ExerciseData`, so a caller composing questions from somewhere else can still
 * establish the context.
 */
export const ExerciseBody = ({ context, stimulus_html, children, compactDisplay }: ExerciseBodyProps) => {
  const container = React.useRef<HTMLDivElement>(null);
  const compact = useCompactDisplay(compactDisplay);

  const typesetExercise = React.useCallback(() => {
    if (container.current) {
      typesetMath(container.current);
    }
  }, []);

  return (
    <TypesetMathContext.Provider value={typesetExercise}>
      <GlobalStyle />
      <CompactDisplayProvider compactDisplay={compact}>
        <StyledExerciseBody ref={container} compactDisplay={compact}>
          <Preamble context={context} stimulus_html={stimulus_html} />
          {children}
        </StyledExerciseBody>
      </CompactDisplayProvider>
    </TypesetMathContext.Provider>
  );
};

ExerciseBody.displayName = 'OSExerciseBody';
