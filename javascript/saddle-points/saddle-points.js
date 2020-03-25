
export const saddlePoints = (matrix) => {
  const points = []

  const rows = matrix.length
  const cols = matrix[0].length

  const highestInRows = Array(rows).fill(-Infinity)
  const lowestInCols = Array(cols).fill(Infinity)

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const num = matrix[r][c]
      highestInRows[r] = Math.max(num, highestInRows[r])
      lowestInCols[c] = Math.min(num, lowestInCols[c])
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const num = matrix[r][c]
      if (num === highestInRows[r] && num === lowestInCols[c]) {
        points.push({ row: r + 1, column: c + 1 })
      }
    }
  }

  return points
}
