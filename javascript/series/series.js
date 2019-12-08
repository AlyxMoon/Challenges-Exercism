
export class Series {
  constructor (digits = '') {
    this.digits = digits
  }

  set digits (digits) {
    this.digit = digits.split('').map(digit => parseInt(digit, 10))
  }
  get digits () {
    return this.digit
  }

  slices (subStringLength = 0) {
    if (!subStringLength || this.digits.length < subStringLength) throw new Error('Slice size is too big.')

    return [...Array(this.digits.length - subStringLength + 1)]
      .map((_, i) => this.digits.slice(i, i + subStringLength))
  }
}
