const Big = require('big.js');

function encryptChar(M, p, g, y) {
  let k = randomIntFromInterval(2, p - 2);
  let a = Big(g).pow(k).mod(p);
  let b = Big(y).pow(k).mul(M).mod(p);

  return {a: a, b: b};
}

function decryptChar(a, b, p, x) {
  return Big(b).mul(Big(a).pow(p - 1 - x)).mod(p);
}

function primRoot(val) {
  for (let i = 2; i < val - 1; i++) {
    let start = Big('1');
    let flag = true;

    for (let j = 0; j < val / 2; j++) {
      start = start.mul(i).mod(val);
      if (start.mod(val).toString() === '1') {
        flag = false;
        break;
      }
    }

    if (flag) {
      return i;
    }
  }

  return false;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function sieve(n) {
  let s = [];
  s[1] = 0;

  for (let k = 2; k <= n; k++) {
    s[k] = 1;
  }

  for (let k = 2; k * k <= n; k++) {
    if (s[k] === 1) {
      for (let l = k * k; l <= n; l += k) {
        s[l] = 0;
      }
    }
  }

  return s;
}

function randEasyNum() {
  let minNum = 1106;
  let maxNum = 2000;
  let binaryArray = sieve(maxNum);
  let easyNums = [];

  for (let i = minNum; i < binaryArray.length; ++i) {
    if (binaryArray[i]) {
      easyNums.push(i);
    }
  }

  let easyNumPos = randomIntFromInterval(0, easyNums.length - 1);

  return easyNums[easyNumPos];
}

export default class ElGamalModel {
  /**
   * @param {String} keys
   * @param {Object} message
   * @returns {string}
   */
  encrypt(keys, message) {
    let abs = [];
    message.split('').forEach(function (char) {
      let code = char.charCodeAt(0);
      let ab = encryptChar(code, keys.p, keys.g, keys.y);
      abs.push(ab);
    });

    return abs;
  }

  /**
   * @param {Object} keys
   * @param {String} message
   * @returns {string}
   */
  decrypt(keys, message) {
    let res = '';
    message.forEach(function (char) {
      res += String.fromCharCode(decryptChar(char.a, char.b, keys.p, keys.x));
    });

    return res;
  }

  /**
   *
   * @returns {{p: *, g: *, y: *, x: *}}
   */
  generateKeys() {
    let p = randEasyNum();
    let g = primRoot(p);
    let x = randomIntFromInterval(2, p - 1);
    let y = Big(g).pow(x).mod(p);

    return {
      p, g, y,  // public
      x         // secret
    };
  }
}