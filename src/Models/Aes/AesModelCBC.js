var CryptoJS = require("crypto-js");
export default class AesModelCBC {
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
    let encrypted = CryptoJS.AES.encrypt(msg, key, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    console.log('called AesModel.encrypt(mode, key, msg) with args = ', mode, key, msg);
    
    return encrypted.toString();
  }

  /**
   * @param {String} mode - one of 'ecb', 'cbc', 'pcpc', 'cfb', 'ofb'
   * @param {String} key - encryption key
   * @param {String} msg - message to be decrypted
   * @returns {string}
   */
  decrypt(mode, key, msg) {
    let decrypted = CryptoJS.AES.decrypt(msg, key, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    console.log('called AesModel.decrypt(mode, key, msg) with args = ', mode, key, msg);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}