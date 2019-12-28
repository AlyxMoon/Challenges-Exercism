
export const largestProduct = (numString, digits) => {
  if (
    typeof numString !== 'string' || /[^0-9]/.test(numString) ||
    !Number.isInteger(digits) || digits < 0
  ) throw new Error('Invalid input.')
  if (digits > numString.length) throw new Error('Slice size is too big.')
  if (digits === 0) return 1

  const nums = numString.split('').map(Number)
  let greatest = 0
  for (
    let i = 0, product = 1, end = nums.length - digits + 1;
    i < end;
    i++, product = 1
  ) {
    for (let j = i; j < i + digits; j++) product *= nums[j]
    greatest = Math.max(greatest, product)
  }

  return greatest
}
