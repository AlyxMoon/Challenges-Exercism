
export const valid = (numString = '') => {
  if (typeof numString !== 'string') return false
  if (/[^0-9 ]/.test(numString)) return false

  const parsedString = numString.replace(/[^0-9]/g, '')
  if (parsedString.length < 2) return false

  let sum = 0
  for (let i = parsedString.length - 1, double = false; i >= 0; i--, double = !double) {
    const num = Number(parsedString[i]) * (double ? 2 : 1)
    sum += Math.floor(num / 10) + (num % 10)
  }

  return !(sum % 10)
}
