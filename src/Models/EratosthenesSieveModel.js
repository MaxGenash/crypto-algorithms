export default class EratosthenesSieveModel {

    constructor() {
    }

    findPrimeNumber(upperBound) {
        let upperBoundSquareRoot = Math.floor(Math.sqrt(upperBound));
        let initialArray = new Array(upperBound - 1);
        initialArray.fill(true);

        for (let i = 2; i <= upperBoundSquareRoot; i++) {
            if (initialArray[i]) {
                for (let j = i * i; j < upperBound; j += i) {
                    initialArray[j] = false;
                }
            }
        }

        let resultArray = [];
        for (let i = 2; i < upperBound; i++) {
            if (initialArray[i]) {
                resultArray.push(i);
            }
        }

        return resultArray;
    }
}