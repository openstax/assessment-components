import { Answer, ID } from '../src/types';
export declare const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export declare const isAnswerCorrect: (answer: Answer, correctAnswerId?: ID | null) => boolean | undefined;
export declare const isAnswerIncorrect: (answer: Answer, incorrectAnswerId?: ID) => boolean;
export declare const isAnswerChecked: (answer: Answer, answerId?: ID) => boolean;
export declare function countWords(text: string): number;
export declare const numberfyId: (id: ID) => number;
