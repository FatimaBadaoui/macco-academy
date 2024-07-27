import convertRomanToArabic from "../exercise3"

describe("Exercise 3: Convert Roman to Arabic", () => {
  test("Converts I to 1", () => {
    expect(convertRomanToArabic("I")).toBe(1)
  })

  test("Converts IV to 4", () => {
    expect(convertRomanToArabic("IV")).toBe(4)
  })

  test("Converts IX to 9", () => {
    expect(convertRomanToArabic("IX")).toBe(9)
  })

  test("Converts MCMLIV to 1954", () => {
    expect(convertRomanToArabic("MCMLIV")).toBe(1954)
  })

  test("Converts MMXXI to 2021", () => {
    expect(convertRomanToArabic("MMXXI")).toBe(2021)
  })
})
