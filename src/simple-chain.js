const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  links: [],

  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof(position) === "number" && Number.isInteger(position) && position > 0 && this.links.length >= position){
      this.links.splice(position - 1,1);
      return this;
    } else {
      this.links = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let result = this.links.join("~~");
    this.links = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
