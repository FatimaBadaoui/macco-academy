import calculateCoins from "../exercise2"

describe("Exercise 2: Calculate Coins", () => {
  test("Calculates correctly for 99 cents", () => {
    expect(calculateCoins(99)).toEqual([3, 2, 0, 4])
  })

  test("Calculates correctly for 50 cents", () => {
    expect(calculateCoins(50)).toEqual([2, 0, 0, 0])
  })

  test("Calculates correctly for 7 cents", () => {
    expect(calculateCoins(7)).toEqual([0, 0, 1, 2])
  })

  test("Handles 0 cents correctly", () => {
    expect(calculateCoins(0)).toEqual([0, 0, 0, 0])
  })
})
