/**
 * Calculate the number of coins needed for change
 *
 * This function takes an amount in cents and calculates the minimum number of coins
 * needed to make that amount. The available coin denominations are:
 * - 25 cents (quarter)
 * - 10 cents (dime)
 * - 5 cents (nickel)
 * - 1 cent (penny)
 *
 * The function should use the largest coins possible first.
 *
 * @param {number} amount - Total amount in cents
 * @returns {[number, number, number, number]} - [quarters, dimes, nickels, pennies]
 */
function calculateCoins(amount) {
  // Implement your solution here
  // if amount = 0, You are broke
  if (amount === 0) return [0, 0, 0, 0];

  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  // Let's see How many quarters we have first
  while (amount >= 25) {
    quarters++;
    amount -= 25;
  }

  // Let's see How many dimes we have first
  while (amount >= 10) {
    dimes++;
    amount -= 10;
  }

  // Let's see How many nickles we have first
  while (amount >= 5) {
    nickels++;
    amount -= 5;
  }

  // Let's see How many pennies we have first
  while (amount >= 1) {
    pennies++;
    amount--;
  }

  return [quarters, dimes, nickels, pennies];
}

export default calculateCoins;
