const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and direct ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const directMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if(typeof(message) === "undefined" || typeof(key) === "undefined"){
      throw new Error("Incorrect arguments!");
    }
    let encryptedMessage = '';
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //to uppercase
    message = message.toUpperCase();
    key = key.toUpperCase();
    //direct
    if (typeof(this.direct) === "boolean") {
      message = message.split('').reverse().join('');
    }
    //generate key
    if(message.length > key.length){
      let count = 0;
      for (const char of message) {
        if(ALPHABET.includes(char)) {
          count++;
        }
      }
      key = key.repeat(Math.ceil(count / key.length)).slice(0, count)
    }

    for (let i = 0, k = 0; i < message.length; i++) {
      if(ALPHABET.includes(message[i])){
        let index = ((message[i].codePointAt(0) - ALPHABET.codePointAt(0)) + (key[k].codePointAt(0) - ALPHABET.codePointAt(0))) % ALPHABET.length;
        encryptedMessage += ALPHABET[index];
        k++;
      } else {
        encryptedMessage += message[i];
      }
    }
    return encryptedMessage;
  }

  decrypt(message, key) {
    if(typeof(message) === "undefined" || typeof(key) === "undefined"){
      throw new Error("Incorrect arguments!");
    }
    let decryptedMessage = '';
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //to uppercase
    message = message.toUpperCase();
    key = key.toUpperCase();
    //direct
    if (typeof(this.direct) === "boolean") {
      message = message.split('').reverse().join('');
    }
    //generate key
    if(message.length > key.length){
      let count = 0;
      for (const char of message) {
        if(ALPHABET.includes(char)) {
          count++;
        }
      }
      key = key.repeat(Math.ceil(count / key.length)).slice(0, count)
    }

    for (let i = 0, k = 0; i < message.length; i++) {
      if(ALPHABET.includes(message[i])){
        let index = ((message[i].codePointAt(0) - ALPHABET.codePointAt(0)) - (key[k].codePointAt(0) - ALPHABET.codePointAt(0))) % ALPHABET.length;
        if (index >= 0){
          decryptedMessage += ALPHABET[index];
        } else {
          decryptedMessage += ALPHABET.slice(index, index < -1 ? index + 1 : undefined);
        }
        k++;
      } else {
        decryptedMessage += message[i];
      }
    }
    return decryptedMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};
