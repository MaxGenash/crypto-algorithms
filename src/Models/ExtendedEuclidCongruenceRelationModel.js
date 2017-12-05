export default class ExtendedEuclidCongruenceRelationModel {
  extendedEuclidAlgorithm(firstNumber, secondNumber ) {
    let resultArr = [
      {
        firstNumber: firstNumber,
        secondNumber: secondNumber,
        a0: 1,
        a1: 0,
        b0: 0,
        b1: 1
      }
    ];

    let counter = 0;

    while(resultArr[counter].secondNumber !== 0 ) {
      resultArr[counter].integer = this._integerPart( resultArr[counter].firstNumber, resultArr[counter].secondNumber );
      resultArr[counter].fractional = this._fractionalPart( resultArr[counter].firstNumber, resultArr[counter].secondNumber );
      resultArr[counter].nextFirstNumber = (resultArr[counter].firstNumber - resultArr[counter].fractional)/resultArr[counter].integer;

      counter++;
      resultArr.push({});

      resultArr[counter].firstNumber = (resultArr[ counter -1 ].firstNumber - resultArr[ counter -1 ].fractional)/resultArr[ counter - 1 ].integer;
      resultArr[counter].secondNumber = resultArr[ counter -1 ].fractional;

      resultArr[counter].a0 = resultArr[ counter -1 ].a1;
      resultArr[counter].a1 = resultArr[ counter -1 ].a0 - resultArr[ counter -1 ].a1 * resultArr[ counter - 1 ].integer;

      resultArr[counter].b0 = resultArr[ counter -1 ].b1;
      resultArr[counter].b1 = resultArr[ counter -1 ].b0 - resultArr[ counter -1 ].b1 * resultArr[ counter - 1 ].integer;
    }

    return resultArr;
  }

  _simplifyNumber(a, b) {
    let res = a;

    if( a > b ) {
      res = this._fractionalPart( a, b );
    }

    return res;
  }

  _fractionalPart(a, b ) {
    return a % b;
  }

  _integerPart(a, b ) {
    return Math.floor(a / b);
  }
  
  /** Finds congruence relation https://en.wikipedia.org/wiki/Modular_arithmetic#Example_implementations
   * @param {Number} a
   * @param {Number} b
   * @param {Number} n
   * @returns {Number}
   */
  findGcd(a, b, n) {
    let solutionStates = this.extendedEuclidAlgorithm(n, a),
      simpleSolution = solutionStates[solutionStates.length - 1].b0 + solutionStates[solutionStates.length - 1].b1;
    simpleSolution = this._simplifyNumber(simpleSolution, n);

    return this._simplifyNumber(b * simpleSolution, n);
  }
}
