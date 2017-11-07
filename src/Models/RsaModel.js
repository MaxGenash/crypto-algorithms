import {JSEncrypt} from 'jsencrypt';

export default class RsaModel {
  constructor() {

  }

  /**
   * @param {String} key
   * @param {String} msg
   * @returns {string}
   */
  encrypt(key, msg) {
    const crypt = new JSEncrypt();
    crypt.setKey(key);
    return crypt.encrypt(msg);
  }

  /**
   * @param {String} key
   * @param {String} msg
   * @returns {string}
   */
  decrypt(key, msg) {
    const crypt = new JSEncrypt();
    crypt.setKey(key);
    return crypt.decrypt(msg);
  }

  generateKeys(keySize) {
    const crypt = new JSEncrypt({default_key_size: keySize});
    crypt.getKey();
    return {
      privateKey: crypt.getPrivateKey(),
      publicKey: crypt.getPublicKey()
    };
  }
}