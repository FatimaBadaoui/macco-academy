/**
 * Find the missing number in a sequence
 *
 * This function takes an array of numbers in ascending order with one number missing.
 * It should return the missing number.
 *
 * Assumptions:
 * - The sequence starts from 1
 * - There is exactly one number missing in the sequence
 * - The sequence is otherwise consecutive
 *
 * @param {number[]} sequence - Array of numbers in ascending order with one number missing
 * @returns {number} - The missing number in the sequence
 */
function findMissingNumber(sequence) {
  // Implement your solution here
  if (sequence[0] !== 1) return 1;

  for (let i = 0; i < sequence.length; i++) {
    // if the next value - current value = mot 1 means the missing value is current value + 1
    if (sequence[i + 1] - sequence[i] !== 1) {
      return sequence[i] + 1;
    }
  }
}

export default findMissingNumber;
