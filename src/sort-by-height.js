const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let tempArr = [];
  for (const number of arr) {
    if(number !== -1) {
      tempArr.push(number);
    }
  }
  tempArr.sort((a,b) => a-b);
  for (let index = 0, k = 0; index < arr.length; index++) {
    if(arr[index] !== -1) {
      arr[index] = tempArr[k];
      k++;
    }
  }
  return arr;
}

module.exports = {
  sortByHeight
};
