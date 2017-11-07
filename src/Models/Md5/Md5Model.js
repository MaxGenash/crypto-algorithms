var CryptoJS = require("crypto-js");

export default class Md5Model{

    constructor() {
    }

    hash(inputMsg) {
        return CryptoJS.MD5(inputMsg).toString();
    }

}