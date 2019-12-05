
export class Triangle {
  constructor (a = 0, b = 0, c = 0) {
    [this.a, this.b, this.c] = [a, b, c]
  }

  kind () {
    if (!this.isValidTriangle()) {
      throw new Error('Not a valid triangle.')
    }

    if (this.a === this.b && this.a === this.c) return 'equilateral'
    if (this.a === this.b || this.a === this.c || this.b === this.c) return 'isosceles'
    return 'scalene'
  }

  isValidTriangle () {
    return !(
      (this.a <= 0 || this.b <= 0 || this.c <= 0) ||
      (this.a + this.b < this.c) ||
      (this.a + this.c < this.b) ||
      (this.b + this.c < this.a)
    )
  }

  isDegenerateTriangle () {
    return this.a + this.b === this.c || this.a + this.c === this.b || this.b + this.c === this.a
  }
}
