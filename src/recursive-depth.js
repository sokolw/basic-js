const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  maxDeep = 0;

  calculateDepth(arr, deep = 1) {
    if(arr.length === 0) {
      if (deep > this.maxDeep){
        this.maxDeep = deep;
      }
    }
    for (const elem of arr) {
      if(Array.isArray(elem)){
        this.calculateDepth(elem, deep + 1);
      } else {
        if (deep > this.maxDeep){
          this.maxDeep = deep;
        }
      }
    }
    if(deep === 1) {
      let temp = this.maxDeep;
      this.maxDeep = 0;
      return temp;
    }
  }
}

module.exports = {
  DepthCalculator
};


// calculateDepth(arr, deep = 1) {
//   let maxDeep = 0;
//   if(deep > maxDeep){
//     maxDeep = deep;
//   }
//   for (const elem of arr) {
//     if(Array.isArray(elem)){
//       let tempDeep = calculateDepth(elem, deep + 1);
//       if (tempDeep > deep){
//         maxDeep = tempDeep;
//       }
//     }
//   }
//   return deep;
// }