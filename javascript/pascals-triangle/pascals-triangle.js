
export class Triangle {
  #rows

  constructor (rows = 1) {
    if (!Number.isInteger(rows) || rows < 1) throw new Error('Invalid value passed as row count')

    this.#rows = Triangle.generateRows(rows)
  }

  get lastRow () {
    return this.#rows[this.#rows.length - 1].slice()
  }

  get rows () {
    return this.#rows.map(row => row.slice())
  }

  static generateRows(rows) {
    if (!Number.isInteger(rows) || rows < 1) throw new Error('Invalid value passed as row count')

    return [...Array(rows)].map((_, n) => {
      const line = [1]
      for (let i = 0; i < n; i++) line.push(line[i] * (n - i) / (i + 1))
      return line
    })
  }
}
