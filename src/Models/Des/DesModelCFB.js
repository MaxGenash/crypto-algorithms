var CryptoJS = require("crypto-js");
export default class DesModelCFB {
  constructor() {

  }

  /**
   * @param {String} mode - one of 'ecb', 'cbc', 'pcpc', 'cfb', 'ofb'
   * @param {String} key - encryption key
   * @param {String} msg - message to be encrypted
   * @returns {string}
   */
  encrypt(mode, key, msg) {
    // todo smth
     let encrypted = CryptoJS.DES.encrypt(msg, key, {
        mode: CryptoJS.mode,
        padding: CryptoJS.pad.Pkcs7
    });
    console.log('called DesModel.encrypt(mode, key, msg) with args = ', mode, key, msg);
    return 'this is encrypted msg';
  }

  /**
   * @param {String} mode - one of 'ecb', 'cbc', 'pcpc', 'cfb', 'ofb'
   * @param {String} key - encryption key
   * @param {String} msg - message to be decrypted
   * @returns {string}
   */
  decrypt(mode, key, msg) {
    // todo smth
    console.log('called DesModel.decrypt(mode, key, msg) with args = ', mode, key, msg);
    return 'this is decrypt msg';
  }
}