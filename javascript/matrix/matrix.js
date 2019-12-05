
export class Matrix {
  constructor (gridAsString = '') {
    this.generateGrid(gridAsString)
  }

  generateGrid (gridAsString = '') {
    this.rows = []
    this.columns = []
    gridAsString.split('\n').forEach((row, r) => {
      this.rows.push([])
      row.split(' ').forEach((cell, c) => {
        if (r === 0) this.columns.push([])

        this.rows[r].push(Number(cell))
        this.columns[c].push(Number(cell))
      })
    })
  }

  // Attempt at making fun 'one-liners'
  generateGridAlternate1 (gridAsString = '') {
    this.rows = gridAsString.split('\n').map(row => row.split(' ').map(Number))
    this.columns = [...Array(this.rows[0].length)].map((_, i) => this.rows.map(row => row[i]))
  }
}
