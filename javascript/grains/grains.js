const BigInt = require('./lib/big-integer')

export class Grains {
  square (cell = 1) {
    return BigInt(2).pow(cell - 1).toString()
  }

  total (cell = 64) {
    return BigInt(2).pow(cell).minus(1).toString()
  }
}
