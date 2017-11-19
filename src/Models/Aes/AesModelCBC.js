var CryptoJS = require("crypto-js");
export default class AesModelCBC {
  constructor() {

  }

  /**
   * @param {String} key - encryption key
   * @param {String} msg - message to be encrypted
   * @returns {string}
   */
  encrypt(key, msg) {
    // todo smth
    let encrypted = CryptoJS.AES.encrypt(msg, key, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    return encrypted.toString();
  }

  /**
   * @param {String} key - encryption key
   * @param {String} msg - message to be decrypted
   * @returns {string}
   */
  decrypt(key, msg) {
    let decrypted = CryptoJS.AES.decrypt(msg, key, {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}