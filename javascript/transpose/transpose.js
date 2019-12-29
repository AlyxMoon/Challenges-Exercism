
export const transpose = (strings) => {
  if (!Array.isArray(strings) || strings.some(string => typeof string !== 'string')) {
    throw new Error('Invalid input')
  }

  const length = strings.length

  return length === 0
    ? []
    : Array(Math.max(...strings.map(string => string.length)))
        .fill('')
        .map((str, i) => {
          for (let j = length - 1, fillChar = false; j >= 0; j--) {
            if (strings[j][i]) {
              str = strings[j][i] + str
              fillChar = true
            }
            else if (fillChar) str = ' ' + str
          }
          return str
        })
}
