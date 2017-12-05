export default class EuclidGcdModel {
  /** Finds freates common divider by Euclid's algorithm https://en.wikipedia.org/wiki/Euclidean_algorithm#Implementations
   * @param {Number} a - first number
   * @param {Number} b - second number
   * @returns {Number}
   */
  findGcd(a, b) {
    let t;
    [a, b] = a < b ? [a, b] : [b, a];
    while (b) {
      t = b;
      b = a % b;
      a = t;
    }
    return a;
  }
}
