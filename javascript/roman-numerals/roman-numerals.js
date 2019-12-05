
export const toRoman = (number) => {
  const numerals = [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M']]
  const conversion = {
    0: [],
    1: [0],
    2: [0, 0],
    3: [0, 0, 0],
    4: [0, 1],
    5: [1],
    6: [1, 0],
    7: [1, 0, 0],
    8: [1, 0, 0, 0],
    9: [0, 2]
  }

  let convertedNum = 'M'.repeat(number / 1000)
  for (let i = 2; i >= 0; i--) {
    let digit = Math.floor(number / (10 ** i)) % 10
    convertedNum += conversion[digit].reduce((val, d) => val + numerals[i][d], '')
  }

  return convertedNum
}
