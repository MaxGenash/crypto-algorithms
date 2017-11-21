const Big = require('big.js');

export default class Recipient {

    constructor(publicBase, publicModulus) {
        this.publicBase = publicBase;
        this.publicModulus = publicModulus;
        this.privateKey = randomIntFromInterval(0, publicModulus - 1);
        this.publicKey = Big(this.publicModulus).pow(this.privateKey).mod(this.publicBase);
    }

    generateSharedSecretKey(anotherRecipientPublicKey) {
        return Big(anotherRecipientPublicKey).pow(this.privateKey).mod(this.publicBase).toString();
    }

    getPrivateKey() {
        return this.privateKey;
    }

    getPublicKey() {
     return this.publicKey.toString();
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}