var CryptoJS = require("crypto-js");

export default class KupynaModel{

    constructor() {
    }

    hash(inputMsg, outputLength) {
        return CryptoJS.SHA3(inputMsg, {outputLength: outputLength}).toString();
    }

}