
const getSurroundingCells = (r, c, rowLength, colLength) => {
  return [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
    .map(([x, y]) => [r + x, c + y])
    .filter(([x, y]) => (x > -1) && (x < rowLength) && (y > -1) && (y < colLength))
}

const getCountAdjacentMines = (grid, r, c) => {
  const rowLength = grid.length
  const colLength = grid[0].length

  return getSurroundingCells(r, c, rowLength, colLength).reduce((count, [cellRow, cellCol]) => {
    return count + (grid[cellRow][cellCol] === '*' ? 1 : 0)
  }, 0)
}

export const annotate = (input = []) =>  {
  if (input.length === 0 || input[0].length === 0) return input

  return input.map((row, iRow) => row.split('').map((cell, iCell) => {
      return cell === '*'
        ? cell
        : (getCountAdjacentMines(input, iRow, iCell) || ' ')
  }).join(''))
}
