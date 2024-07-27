import findMissingNumber from "../exercise4"

describe("Exercise 4: Find Missing Number", () => {
  test("Finds the missing number in a short sequence", () => {
    expect(findMissingNumber([1, 2, 4, 5])).toBe(3)
  })

  test("Finds the missing number at the beginning of the sequence", () => {
    expect(findMissingNumber([2, 3, 4, 5])).toBe(1)
  })

  test("Finds the missing number at the end of the sequence", () => {
    expect(findMissingNumber([1, 2, 3, 4])).toBe(5)
  })

  test("Finds the missing number in a long sequence", () => {
    expect(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10])).toBe(9)
  })
})
