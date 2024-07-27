/**
 * Calculate the number of creatures killed and remaining arrows
 *
 * This function simulates a battle scenario where the player has a certain number of arrows
 * and must kill creatures in a specific order: rats first, then goblins, and finally trolls.
 *
 * Rules:
 * - 1 arrow is needed to kill a rat
 * - 2 arrows are needed to kill a goblin
 * - 5 arrows are needed to kill a troll
 * - Creatures must be killed in order: rats -> goblins -> trolls
 *
 * @param {number} rats - Number of rats
 * @param {number} goblins - Number of goblins
 * @param {number} trolls - Number of trolls
 * @param {number} arrows - Number of available arrows
 * @returns {[number, number, number, number]} - [rats killed, goblins killed, trolls killed, arrows left]
 */
function killCreatures(rats, goblins, trolls, arrows) {
  // Implement your solution here
  if (arrows === 0) return [0, 0, 0, 0]; // if there are no arrows, no monsters are killed

  let ratsKilled = 0;
  let goblinsKilled = 0;
  let trollsKilled = 0;

  // Let's kill the rats First!!
  while (rats > 0 && arrows >= 1) {
    rats--;
    ratsKilled++;
    arrows--; // 1 rat = 1 arrow
  }

  // Let's kill the goblins next!
  while (goblins > 0 && arrows >= 2) {
    goblins--;
    goblinsKilled++;
    arrows -= 2; // 1 goblin = 2 arrows
  }

  // Let's kill the Trolls Last!!
  while (trolls > 0 && arrows >= 5) {
    trolls--;
    trollsKilled++;
    arrows -= 5;
  }

  return [ratsKilled, goblinsKilled, trollsKilled, arrows];
}

export default killCreatures;
