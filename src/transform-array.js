const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let resultArr = [];
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    
    switch (arr[i]) {
      case "--discard-next":
        i++;
        flag = true;
        break;
      case "--discard-prev":
        if(resultArr.length > 0 && !flag) {
          resultArr.pop();
        }
        flag = false;
        break;
      case "--double-next":
        i++;
        if(i < arr.length){
          resultArr.push(...[arr[i], arr[i]]);
        }
        flag = false;
        break;
      case "--double-prev":
        if(resultArr.length > 1 && arr.length > 1 && !flag) {
          resultArr.push(arr[i - 1]);
        }
        flag = false;
        break;
      default:
        resultArr.push(arr[i]);
        break;
    }
  }
  return resultArr;
}

module.exports = {
  transform
};


      // if(arr[i] === "--discard-next") {
      //   i++;
      // }
  
      // if(arr[i] === "--discard-prev" && resultArr.length > 0) {
      //   resultArr.pop();
      // }
  
      // if(arr[i] === "--double-next" && i < arr.length - 1) {
      //   resultArr.push(arr[i + 1], arr[i + 1]);
      //   i++;
      // }
  
      // if(arr[i] === "--double-prev" && resultArr.length > 1) {
      //   resultArr.pop();
      //   resultArr.pop();
      // }