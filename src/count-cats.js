const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arrayCats) {
  let counter = 0;
  for (const elem of arrayCats) {
    if(elem?.includes("^^")) {
      for (const cell of elem) {
        if(cell === "^^"){
          counter++;
        }
      }
    }
  }
  return counter;
}

module.exports = {
  countCats
};
