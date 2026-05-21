import React, { useState } from 'react';
import styled from 'styled-components';
import { NeedsGradingStudentRow } from './NeedsGradingStudentRow';

const onSave = (id: unknown, data: unknown) => console.log('saved', id, data);

const longResponse =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur locus metus, sempor nec volutpat at, elementum sit amet leo. ' +
  'Pellentesque eu diam in nunc, agentesa a fermentum urna, gravida sit amet nulla. Maecenas hendrerit ipsum in sapien mollis, ' +
  'quis imperdiet diam suscipit. Maury posuere, lectus at nulla. ' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur locus metus, sempor nec volutpat at, elementum sit amet leo. ' +
  'Pellentesque eu diam in nunc, agentesa a fermentum urna, gravida sit amet nulla.';

type TextResizerValue = -2 | -1 | 0 | 1 | 2 | 3;
const textResizerScales = [0.75, 0.9, 1, 1.25, 1.5, 2];
const textResizerValues: TextResizerValue[] = [-2, -1, 0, 1, 2, 3];
const textResizerValueMap = new Map(
  textResizerValues.map((v, i) => [v, textResizerScales[i]]),
);

const ScaleWrapper = styled.div<{ textSize: TextResizerValue }>`
  ${(props) => `--content-text-scale: ${textResizerValueMap.get(props.textSize)};`}
`;

const TextResizerProvider = ({ children }: { children: React.ReactNode }) => {
  const [index, setIndex] = useState(2);
  return (
    <ScaleWrapper textSize={textResizerValues[index]}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', placeContent: 'center' }}>
        <h3>Text Size</h3>
        <button onClick={() => setIndex(i => Math.max(i - 1, 0))}>- Decrease</button>
        <span style={{ display: 'inline-block', width: '3rem', textAlign: 'center' }}>
          <b>{textResizerScales[index]}</b>
        </span>
        <button onClick={() => setIndex(i => Math.min(i + 1, textResizerValues.length - 1))}>+ Increase</button>
      </div>
      {children}
    </ScaleWrapper>
  );
};

export const Ungraded = () => (
  <NeedsGradingStudentRow
    student={{ name: 'Student Name', userId: 'user-1' }}
    freeResponse={longResponse}
    questionId="q-1"
    maxScore={5}
    onSave={onSave}
  />
);

export const Graded = () => (
  <NeedsGradingStudentRow
    student={{ name: 'Student Name', userId: 'user-2' }}
    freeResponse={longResponse}
    questionId="q-1"
    maxScore={5}
    score={4}
    comment="Good job"
    gradingTimestamp="2024-11-23T09:33:00.000Z"
    onSave={onSave}
  />
);

export const GradedExpanded = () => (
  <NeedsGradingStudentRow
    student={{ name: 'Student Name', userId: 'user-3' }}
    freeResponse={longResponse}
    questionId="q-1"
    maxScore={5}
    score={4}
    comment="Good job"
    gradingTimestamp="2024-11-23T09:33:00.000Z"
    expanded={true}
    onToggle={() => console.log('toggled')}
    onSave={onSave}
  />
);

export const Unanswered = () => (
  <NeedsGradingStudentRow
    student={{ name: 'Student Name', userId: 'user-4' }}
    questionId="q-1"
    maxScore={5}
    onSave={onSave}
  />
);

export const TextResizer = () => (
  <TextResizerProvider>
    <NeedsGradingStudentRow
      student={{ name: 'Student Name', userId: 'user-5' }}
      freeResponse={longResponse}
      questionId="q-1"
      maxScore={5}
      onSave={onSave}
    />
  </TextResizerProvider>
);
