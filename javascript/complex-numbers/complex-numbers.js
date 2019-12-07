
export class ComplexNumber {
  constructor (real, imag) {
    this.real = real
    this.imag = imag
  }

  set real (real) {
    this._real = isNaN(real) ? 0 : real
  }
  get real () {
    return this._real
  }

  set imag (imag) {
    this._imag = isNaN(imag) ? 0 : imag
  }
  get imag () {
    return this._imag
  }

  add (complexNumber) {
    return new ComplexNumber(
      this.real + complexNumber.real,
      this.imag + complexNumber.imag,
    )
  }

  sub (complexNumber) {
    return new ComplexNumber(
      this.real - complexNumber.real,
      this.imag - complexNumber.imag,
    )
  }

  div (complexNumber) {
    return new ComplexNumber(
      ((this.real * complexNumber.real) + (this.imag * complexNumber.imag)) / (complexNumber.real ** 2 + complexNumber.imag ** 2),
      ((this.imag * complexNumber.real) - (this.real * complexNumber.imag)) / (complexNumber.real ** 2 + complexNumber.imag ** 2),
    )
  }

  mul (complexNumber) {
    return new ComplexNumber(
      (this.real * complexNumber.real) - (this.imag * complexNumber.imag),
      (this.imag * complexNumber.real) + (this.real * complexNumber.imag),
    )
  }

  get abs () {
    return Math.sqrt(this.real ** 2 + this.imag ** 2)
  }

  get conj () {
    return new ComplexNumber(
      this.real,
      this.imag ? -this.imag : 0,
    )
  }

  get exp () {
    return new ComplexNumber(
      Math.exp(this.real) * Math.cos(this.imag),
      this.real * Math.sin(this.imag),
    )
  }
}
