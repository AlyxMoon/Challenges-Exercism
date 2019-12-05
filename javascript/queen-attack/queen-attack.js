
export class QueenAttack {
  constructor ({ white, black } = { white: [0, 3], black: [7, 3] }) {
    if (white[0] === black[0] && white[1] === black[1]) throw new Error('Queens cannot share the same space')

    this.white = white
    this.black = black

    this.board = [...Array(8)].map((_, i) => {
      let row = Array(8).fill('_')

      if (i === white[0]) row[white[1]] = 'W'
      if (i === black[0]) row[black[1]] = 'B'

      return row.join(' ')
    }).join('\n') + '\n'
  }

  toString () {
    return this.board
  }

  canAttack () {
    return (
      this.white[0] === this.black[0] ||
      this.white[1] === this.black[1] ||
      Math.abs((this.white[0] - this.black[0]) / (this.white[1] - this.black[1])) === 1
    )
  }
}
