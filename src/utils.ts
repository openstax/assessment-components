import { Answer, ID } from '../src/types';

export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const MAX_CORRECTNESS = '1.0';

export const isAnswerCorrect = function(answer: Answer, correctAnswerId?: ID | null) {
  // if answer does not have an id, check the isCorrect property.
  if (!(answer.id || correctAnswerId)) {
    return answer.isCorrect;
  }
  let isCorrect = answer.id === correctAnswerId;
  if (answer.correctness != null) { isCorrect = (answer.correctness === MAX_CORRECTNESS); }

  return isCorrect;
};

export const isAnswerIncorrect = (answer: Answer, incorrectAnswerId?: ID) =>
  // Allow multiple attempts to show incorrectness without the correct_answer_id
  answer.id === incorrectAnswerId;

export const isAnswerChecked = (answer: Answer, answerId?: ID) =>
   answer.id == answerId;

export function countWords(text: string) {
  const trimmedText = text.trim();
  if (!trimmedText) return 0;
  // Count whitespace-separated tokens
  const words = trimmedText.split(/\s+/);
  return words.length;
}

export const numberfyId = (id: ID) => typeof id === 'string' ? parseInt(id, 10) : id;
