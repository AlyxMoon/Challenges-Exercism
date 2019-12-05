
export const transform = (oldData = {}) => {
  return Object.entries(oldData).reduce((newData, [key, values]) => {
    values.forEach((letter) => newData[letter.toLowerCase()] = parseInt(key, 10))
    return newData
  }, {})
}
