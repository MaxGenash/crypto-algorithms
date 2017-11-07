var CryptoJS = require("crypto-js");

export default class Md5Model{

    constructor() {
    }

    hash(inputMsg, outputLength) {
        return CryptoJS.SHA3(inputMsg, {outputLength: outputLength}).toString();
    }

}