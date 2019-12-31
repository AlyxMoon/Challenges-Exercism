
export class SpiralMatrix {
  static ofSize(size) {
    if (!Number.isInteger(size) || size < 0) throw new Error('Invalid size passed')
    if (size === 0) return []

    const grid = [...Array(size)].map(() => Array(size))
    const dxy = [[0, 1], [1, 0], [0, -1], [-1, 0]]

    for (
      let i = 1, x = 0, y = 0, lineEnd = size, currLineLength = 1, direction = 0;
      i <= size ** 2;
      i++
    ) {
      grid[x][y] = i
      x += dxy[direction][0]
      y += dxy[direction][1]

      if (++currLineLength === lineEnd) {
        currLineLength = 0
        if (direction % 2 === 0) lineEnd -= 1
        if (++direction === dxy.length) direction = 0
      }
    }

    return grid
  }
}
