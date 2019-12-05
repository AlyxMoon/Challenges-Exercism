
export const validate = (number) => {
  let string = `${number}`
  let digits = string.length

  return number === string.split('')
    .map(num => parseInt(num, 10))
    .reduce((sum, num) => sum + (num ** digits), 0)
}
