import { FreeResponseGrading } from './FreeResponseGrading';

export const Default = () => (
  <FreeResponseGrading
    questionId="test-question-1"
    maxScore={10}
    onSave={(questionId, data) => console.log('Saved for question', questionId, ':', data.score, '/', data.max, data.comment)}
  />
);

export const WithInitialScore = () => (
  <FreeResponseGrading
    questionId="test-question-2"
    maxScore={10}
    score={7}
    onSave={(questionId, data) => console.log('Saved for question', questionId, ':', data.score, '/', data.max, data.comment)}
  />
);

export const WithInitialScoreAndComment = () => (
  <FreeResponseGrading
    questionId="test-question-3"
    maxScore={10}
    score={8.5}
    comment="Good work, but needs more detail on the second part."
    gradingTimestamp="2024-01-15T15:45:00.000Z"
    onSave={(questionId, data) => console.log('Saved for question', questionId, ':', data.score, '/', data.max, data.comment)}
  />
);

export const HighMaxScore = () => (
  <FreeResponseGrading
    questionId="test-question-4"
    maxScore={25}
    score={18}
    comment="Strong analysis with clear examples."
    gradingTimestamp="2024-02-02T10:30:00.000Z"
    onSave={(questionId, data) => console.log('Saved for question', questionId, ':', data.score, '/', data.max, data.comment)}
  />
);

export const Disabled = () => (
  <FreeResponseGrading
    questionId="test-question-5"
    maxScore={10}
    score={7}
    comment="This grading interface is disabled."
    disabled={true}
    onSave={(questionId, data) => console.log('Saved for question', questionId, ':', data.score, '/', data.max, data.comment)}
  />
);

export const WithOnChange = () => (
  <FreeResponseGrading
    questionId="test-question-6"
    maxScore={15}
    score={10}
    onChange={(data) => console.log('Changed:', data)}
    onSave={(questionId, data) => console.log('Saved for question', questionId, ':', data.score, '/', data.max, data.comment)}
  />
);
