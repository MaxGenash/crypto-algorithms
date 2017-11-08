var CryptoJS = require("crypto-js");
export default class DesModelCBC {
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
     let encrypted = CryptoJS.TripleDES.encrypt(msg, key, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    console.log('called KalinaModel.encrypt(mode, key, msg) with args = ', mode, key, msg);
    return encrypted.toString();
  }

  /**
   * @param {String} mode - one of 'ecb', 'cbc', 'pcpc', 'cfb', 'ofb'
   * @param {String} key - encryption key
   * @param {String} msg - message to be decrypted
   * @returns {string}
   */
  decrypt(mode, key, msg) {
    // todo smth
    let decrypted = CryptoJS.TripleDES.decrypt(msg, key, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    console.log('called KalinaModel.decrypt(mode, key, msg) with args = ', mode, key, msg);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}