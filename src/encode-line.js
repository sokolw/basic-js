const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  for (let index = 0, counter = 1; index < str.length; index++) {
    if(str[index] === str[index + 1]) {
      counter++;
    } else {
      result += `${counter === 1 ? '' : counter}${str[index]}`;
      counter = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
