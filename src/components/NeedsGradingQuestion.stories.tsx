import { NeedsGradingQuestion } from './NeedsGradingQuestion';

const onSave = (id: unknown, data: unknown) => console.log('saved', id, data);

const stemHtml =
  '<p>What do you think C. Wright Mills meant when he said that to be a sociologist, one had to develop a sociological imagination?</p>';

const longResponse =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur locus metus, sempor nec volutpat at, elementum sit amet leo. ' +
  'Pellentesque eu diam in nunc, agentesa a fermentum urna, gravida sit amet nulla. Maecenas hendrerit ipsum in sapien mollis, ' +
  'quis imperdiet diam suscipit. Maury posuere, lectus at nulla.';

const students = [
  {
    student: { name: 'Student Name', userId: 'user-1' },
    freeResponse: longResponse,
    questionId: 'q-1',
    maxScore: 5,
    score: 4,
    comment: 'Good job',
    gradingTimestamp: '2024-11-23T09:33:00.000Z',
    onSave,
  },
  {
    student: { name: 'Student Name', userId: 'user-2' },
    freeResponse: longResponse,
    questionId: 'q-1',
    maxScore: 5,
    onSave,
  },
  {
    student: { name: 'Student Name', userId: 'user-3' },
    questionId: 'q-1',
    maxScore: 5,
    onSave,
  },
  {
    student: { name: 'Student Name', userId: 'user-4' },
    questionId: 'q-1',
    maxScore: 5,
    onSave,
  },
];

export const Default = () => (
  <NeedsGradingQuestion
    questionNumber={1}
    questionId="3065081"
    questionStemHtml={stemHtml}
    students={students}
  />
);

export const AllGraded = () => (
  <NeedsGradingQuestion
    questionNumber={2}
    questionId="3065082"
    questionStemHtml={stemHtml}
    students={students.map(s => ({ ...s, score: 4, comment: 'Good job.' }))}
  />
);

export const SingleStudent = () => (
  <NeedsGradingQuestion
    questionNumber={1}
    questionId="3065081"
    questionStemHtml={stemHtml}
    students={[students[1]]}
  />
);
