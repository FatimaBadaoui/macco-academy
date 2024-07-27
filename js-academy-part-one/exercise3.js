/**
 * Convert a Roman numeral to an Arabic number
 *
 * This function takes a string representing a Roman numeral and converts it
 * to its equivalent Arabic number (integer).
 *
 * Roman numeral rules:
 * - I = 1
 * - V = 5
 * - X = 10
 * - L = 50
 * - C = 100
 * - D = 500
 * - M = 1000
 * - If a smaller numeral appears before a larger one, it is subtracted
 *   (e.g., IV = 4, CM = 900)
 *
 * @param {string} romanNumeral - Roman numeral to convert
 * @returns {number} - Equivalent Arabic number
 */
function convertRomanToArabic(romanNumeral) {
  // Implement your solution here
  const romanVal = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevVal = 0;

  // starting from right to left, we add or subtract the amount of the romanNumeral
  for (let i = romanNumeral.length - 1; i >= 0; i--) {
    let currentVal = romanVal[romanNumeral[i]];

    if (currentVal >= prevVal) {
      result += currentVal;
    } else {
      result -= currentVal;
    }

    prevVal = currentVal;
  }
}

export default convertRomanToArabic;
