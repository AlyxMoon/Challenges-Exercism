
export const steps = (num) => {
  if (!num || num < 0) throw new Error('Only positive numbers are allowed')

  let retval = 0
  for (; num > 1; retval++) {
    num = num % 2 === 0 ? (num / 2) : (num * 3 + 1)
  }
  return retval
}
