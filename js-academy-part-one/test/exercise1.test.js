import killCreatures from "../exercise1";

describe("Exercise 1: Kill Creatures", () => {
  test("Kills all creatures with sufficient arrows", () => {
    expect(killCreatures(5, 3, 2, 21)).toEqual([5, 3, 2, 0]);
  });

  test("Kills all but one troll with almost sufficient arrows", () => {
    expect(killCreatures(5, 3, 2, 20)).toEqual([5, 3, 1, 4]);
  });

  test("Kills only rats and goblins with limited arrows", () => {
    expect(killCreatures(5, 3, 2, 11)).toEqual([5, 3, 0, 0]);
  });

  test("Kills only rats with few arrows", () => {
    expect(killCreatures(5, 3, 2, 5)).toEqual([5, 0, 0, 0]);
  });

  test("Kills no creatures without arrows", () => {
    expect(killCreatures(5, 3, 2, 0)).toEqual([0, 0, 0, 0]);
  });

  test("Handles excess arrows correctly", () => {
    expect(killCreatures(2, 1, 1, 30)).toEqual([2, 1, 1, 21]);
  });

  test("Kills all rats and leaves excess arrows", () => {
    expect(killCreatures(5, 0, 0, 10)).toEqual([5, 0, 0, 5]);
  });

  test("Kills some rats and leaves no arrows", () => {
    expect(killCreatures(10, 0, 0, 7)).toEqual([7, 0, 0, 0]);
  });

  test("Handles large numbers of rats", () => {
    expect(killCreatures(100, 0, 0, 150)).toEqual([100, 0, 0, 50]);
  });

  test("Kills rats and some goblins with excess arrows", () => {
    expect(killCreatures(5, 5, 0, 14)).toEqual([5, 4, 0, 1]);
  });

  test("Handles zero rats with other creatures present", () => {
    expect(killCreatures(0, 3, 2, 20)).toEqual([0, 3, 2, 4]);
  });

  test("Handles all zeros", () => {
    expect(killCreatures(0, 0, 0, 0)).toEqual([0, 0, 0, 0]);
  });
});
