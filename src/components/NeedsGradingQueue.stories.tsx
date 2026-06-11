import { NeedsGradingQueue } from './NeedsGradingQueue';

const onSave = (id: unknown, data: unknown) => console.log('saved', id, data);

const longResponse =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur locus metus, sempor nec volutpat at, elementum sit amet leo. ' +
  'Pellentesque eu diam in nunc, agentesa a fermentum urna, gravida sit amet nulla. Maecenas hendrerit ipsum in sapien mollis, ' +
  'quis imperdiet diam suscipit. Maury posuere, lectus at nulla.';

const questions = [
  {
    questionNumber: 1,
    questionId: '3065081',
    questionStemHtml:
      '<p>What do you think C. Wright Mills meant when he said that to be a sociologist, one had to develop a sociological imagination?</p>',
    students: [
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
    ],
  },
  {
    questionNumber: 2,
    questionId: '3065082',
    questionStemHtml:
      '<p>Discuss the importance for the visualization of which structures and why?</p>',
    students: [
      {
        student: { name: 'Student Name', userId: 'user-1' },
        freeResponse: longResponse,
        questionId: 'q-2',
        maxScore: 5,
        onSave,
      },
    ],
  },
];

export const Default = () => (
  <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
    <NeedsGradingQueue
      questions={questions}
    />
  </div>
);

export const WithMath = () => (
  <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
    <NeedsGradingQueue
      questions={[{
        questionNumber: 1,
        questionId: '3065083',
        questionStemHtml:
          '<p>Given the equation <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>, explain what each variable represents and the significance of this relationship.</p>',
        students: [
          {
            student: { name: 'Student Name', userId: 'user-1' },
            freeResponse: 'E is energy, m is mass, and c is the speed of light. This shows mass-energy equivalence.',
            questionId: 'q-math-1',
            maxScore: 5,
            onSave,
          },
        ],
      }]}
    />
  </div>
);

export const Empty = () => (
  <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
    <NeedsGradingQueue
      questions={[]}
    />
  </div>
);
