import { formatTimestamp, isAnswerChecked, isAnswerCorrect, isAnswerIncorrect, numberfyId } from './utils';
import { Answer } from './types';

describe('isAnswerCorrect', () => {
  let answer: Answer;

  beforeEach(() => {
    answer = {
      id: '1',
      question_id: 1,
      correctness: null,
      isCorrect: true,
      content_html: '',
    }
  });

  it('checks for an id match when correctAnswerId is available', () => {
    expect(isAnswerCorrect(answer, '2')).toBe(false);
    expect(isAnswerCorrect(answer, '1')).toBe(true);

    answer.id = 1;
    expect(isAnswerCorrect(answer, 2)).toBe(false);
    expect(isAnswerCorrect(answer, 1)).toBe(true);
  });

  it('checks isCorrect when answer.id or correctAnswerId is unavailable', () => {
    answer = {...answer, id: '', isCorrect: false};
    expect(isAnswerCorrect(answer, '1')).toBe(false);

    answer.isCorrect = true;
    expect(isAnswerCorrect(answer, '')).toBe(true);
  });

  it('checks correctness value', () => {
    answer.correctness = '0.0';
    expect(isAnswerCorrect(answer, answer.id)).toBe(false);

    answer.correctness = '1.0';
    expect(isAnswerCorrect(answer, answer.id)).toBe(true);
  });
});

describe('isAnswerIncorrect', () => {
  let answer: Answer;

  beforeEach(() => {
    answer = {
      id: '1',
      question_id: 1,
      correctness: null,
      isCorrect: true,
      content_html: '',
    }
  });

  it('checks for incorrectness', () => {
    expect(isAnswerIncorrect(answer, '')).toBe(false);
    expect(isAnswerIncorrect(answer, '2')).toBe(false);
    expect(isAnswerIncorrect(answer, '1')).toBe(true);
  });
});

describe('isAnswerChecked', () => {
  let answer: Answer;

  beforeEach(() => {
    answer = {
      id: '1',
      question_id: 1,
      correctness: null,
      isCorrect: true,
      content_html: '',
    }
  });

  it('checks for being a checked answer', () => {
    expect(isAnswerChecked(answer, undefined)).toBe(false);
    expect(isAnswerChecked(answer)).toBe(false);
    expect(isAnswerChecked(answer, answer.id)).toBe(true);
  });
});

describe('numberfyId', () => {
  it('converts an ID string to a number or returns the value', () => {
    expect(numberfyId('1')).toBe(1);
    expect(numberfyId(1)).toBe(1);
  });
});

describe('formatTimestamp', () => {
  it('renders a numeric short date with a 12 hour time', () => {
    // fixed offset so the assertion does not depend on the runner's timezone
    expect(formatTimestamp('2024-10-03T10:55:00-05:00')).toBe(
      new Date('2024-10-03T10:55:00-05:00').toLocaleString('en-US', {
        month: 'numeric', day: 'numeric', year: '2-digit',
        hour: 'numeric', minute: '2-digit', hour12: true,
      })
    );
  });

  it('matches the 10/3/24, 10:55 AM shape', () => {
    expect(formatTimestamp('2024-10-03T10:55:00Z')).toMatch(/^\d{1,2}\/\d{1,2}\/\d{2}, \d{1,2}:\d{2} (AM|PM)$/);
  });
});
