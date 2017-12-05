export default class ExtendedEuclidGcdModel {
  /** Finds freates common divider by extended Euclid's algorithm https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm
   * @param {Number} a - first number
   * @param {Number} b - second number
   * @returns {Number}
   */
  findGcd(a, b) {
    [a, b] = a > b ? [a, b] : [b, a];

    let t, q, r,
      a0 = 1,
      a1 = 0,
      b0 = 0,
      b1 = 1,
      alpha = a,
      betha = b;
    do {
      q = Math.floor(a / b);
      r = a % b;
      a = b;
      b = r;
      t = a0;
      a0 = a1;
      a1 = t - a1*q;
      t = b0;
      b0 = b1;
      b1 = t - b1*q;
    } while (r);
    return alpha*a0 + betha*b0;
  }
}
