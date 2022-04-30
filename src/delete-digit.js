const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = 0;
  for(let i = 0; i < String(n).length; i++){
    let temp = String(n).split('');
    temp[i] = '';
    temp = +temp.join('');
    if(temp > maxNumber){
      maxNumber = temp;
    }
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
