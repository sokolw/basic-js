const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(typeof(date) === "undefined"){
    return 'Unable to determine the time of year!';
  }
  // date?.constructor.name === "Date"
  if(date instanceof Date && date[Symbol.toStringTag] !== "Date"){
    if([11, 0, 1].includes(date.getMonth())){
      return "winter";
    }
    if([2, 3, 4].includes(date.getMonth())){
      return "spring";
    }
    if([5, 6, 7].includes(date.getMonth())){
      return "summer";
    }
    if([8, 9, 10].includes(date.getMonth())){
      return "fall";
    }
  } else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
