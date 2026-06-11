import { NeedsGradingStudentRow } from './NeedsGradingStudentRow';

const onSave = (id: unknown, data: unknown) => console.log('saved', id, data);

const longResponse =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur locus metus, sempor nec volutpat at, elementum sit amet leo. ' +
  'Pellentesque eu diam in nunc, agentesa a fermentum urna, gravida sit amet nulla. Maecenas hendrerit ipsum in sapien mollis, ' +
  'quis imperdiet diam suscipit. Maury posuere, lectus at nulla. ' +
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur locus metus, sempor nec volutpat at, elementum sit amet leo. ' +
  'Pellentesque eu diam in nunc, agentesa a fermentum urna, gravida sit amet nulla.';

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
