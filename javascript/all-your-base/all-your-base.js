
const getMaxDigitsOfNum = (num, base) => Math.floor(Math.log(num) / Math.log(base))
const getValOfDigitForNum = (num, d, base) => Math.floor(num / (base ** d)) % base

export const convert = (numArray = [], inputBase = 0, outputBase = 0) => {
  if (!Number.isInteger(inputBase) || inputBase < 2) throw new Error('Wrong input base')
  if (!Number.isInteger(outputBase) || outputBase < 2) throw new Error('Wrong output base')
  if (
    numArray.length === 0 ||
    (numArray[0] === 0 && numArray.length > 1) ||
    numArray.some(n => n < 0 || n >= inputBase)
  ) throw new Error('Input has wrong format')
  if (numArray.length === 1 && numArray[0] === 0) return [0]

  const numAsDecimal = numArray.slice().reverse().reduce((sum, n, i) => {
    return sum + n * (inputBase ** i)
  }, 0)

  const result = []
  for (let i = getMaxDigitsOfNum(numAsDecimal, outputBase); i >= 0; i--) {
    result.push(getValOfDigitForNum(numAsDecimal, i, outputBase))
  }

  return result
};
