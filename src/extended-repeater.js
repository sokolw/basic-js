const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

//default separator = "+"
//default additionSeparator = "|"

function repeater(str, options) {
  if(typeof (options) === "undefined"){
    return str;
  }
  //по умолчанию
  options.separator = options.separator ?? "+";
  options.additionSeparator = options.additionSeparator ?? "|";
  //доп
  let additionString = '';
  let resultString = '';

  if(typeof (options.addition) !== "undefined"){
    options.addition = String(options.addition);
  }

  if((options.addition ?? '').length > 0) { //проверяем на addition на его существование
    if(options.additionRepeatTimes > 1) {
      for (let times = 1; times <= options.additionRepeatTimes; times++) {
        if(times === 1){
          additionString = options.addition;
        } else {
          additionString += `${options.additionSeparator}${options.addition}`
        }
      }
    } else {
      additionString = options.addition;
    }
  }

  if(options.repeatTimes > 1) {  //проверяем на повторения
    //main repeat
    for (let times = 1; times <= options.repeatTimes; times++) {
      if(times === 1){
        resultString = `${str}${additionString}`;
      } else {
        resultString += `${options.separator}${str}${additionString}`
      }
    }
    return resultString;
  } else {
    return `${str}${additionString}`;
  }
}

module.exports = {
  repeater
};
