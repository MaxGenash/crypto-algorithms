export default class AesModel {
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
    console.log('called AesModel.encrypt(mode, key, msg) with args = ', mode, key, msg);
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
    console.log('called AesModel.decrypt(mode, key, msg) with args = ', mode, key, msg);
    return 'this is decrypt msg';
  }
}