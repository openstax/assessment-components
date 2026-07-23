"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTimestamp = exports.numberfyId = exports.countWords = exports.isAnswerChecked = exports.isAnswerIncorrect = exports.isAnswerCorrect = exports.ALPHABET = void 0;
exports.ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const MAX_CORRECTNESS = '1.0';
const isAnswerCorrect = function (answer, correctAnswerId) {
    // if answer does not have an id, check the isCorrect property.
    if (!(answer.id || correctAnswerId)) {
        return answer.isCorrect;
    }
    let isCorrect = answer.id === correctAnswerId;
    if (answer.correctness != null) {
        isCorrect = (answer.correctness === MAX_CORRECTNESS);
    }
    return isCorrect;
};
exports.isAnswerCorrect = isAnswerCorrect;
const isAnswerIncorrect = (answer, incorrectAnswerId) => 
// Allow multiple attempts to show incorrectness without the correct_answer_id
answer.id === incorrectAnswerId;
exports.isAnswerIncorrect = isAnswerIncorrect;
const isAnswerChecked = (answer, answerId) => answer.id == answerId;
exports.isAnswerChecked = isAnswerChecked;
function countWords(text) {
    const trimmedText = text.trim();
    if (!trimmedText)
        return 0;
    // Count whitespace-separated tokens
    const words = trimmedText.split(/\s+/);
    return words.length;
}
exports.countWords = countWords;
const numberfyId = (id) => typeof id === 'string' ? parseInt(id, 10) : id;
exports.numberfyId = numberfyId;
const formatTimestamp = (timestamp) => new Date(timestamp).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
});
exports.formatTimestamp = formatTimestamp;
//# sourceMappingURL=utils.js.map