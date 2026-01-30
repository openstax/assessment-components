import { FreeResponseGrading } from './FreeResponseGrading';

export const Default = () => (
  <FreeResponseGrading
    maxScore={10}
    onSave={(data) => console.log('Saved:', data)}
  />
);

export const WithInitialScore = () => (
  <FreeResponseGrading
    maxScore={10}
    score={7}
    onSave={(data) => console.log('Saved:', data)}
  />
);

export const WithInitialScoreAndComment = () => (
  <FreeResponseGrading
    maxScore={10}
    score={8.5}
    comment="Good work, but needs more detail on the second part."
    onSave={(data) => console.log('Saved:', data)}
  />
);

export const HighMaxScore = () => (
  <FreeResponseGrading
    maxScore={25}
    score={18}
    comment="Strong analysis with clear examples."
    onSave={(data) => console.log('Saved:', data)}
  />
);

export const Disabled = () => (
  <FreeResponseGrading
    maxScore={10}
    score={7}
    comment="This grading interface is disabled."
    disabled={true}
    onSave={(data) => console.log('Saved:', data)}
  />
);

export const WithOnChange = () => (
  <FreeResponseGrading
    maxScore={15}
    score={10}
    onChange={(data) => console.log('Changed:', data)}
    onSave={(data) => console.log('Saved:', data)}
  />
);
