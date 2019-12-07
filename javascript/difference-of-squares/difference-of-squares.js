
export class Squares {
  constructor (range = 0) {
    this.range = range
  }

  get sumOfSquares () {
    return (this.range * (this.range + 1) * (2 * this.range + 1)) / 6
  }

  get squareOfSum () {
    return (this.range * (this.range + 1) / 2) ** 2
  }

  get difference () {
    return Math.abs(((3 * this.range ** 2) + (2 * this.range)) * (1 - (this.range ** 2)) / 12)
  }
}
