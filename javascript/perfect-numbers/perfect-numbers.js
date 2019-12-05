
export const classify = (num) => {
  if (!num || num < 0) throw new Error('Classification is only possible for natural numbers.')
  if (num === 1) return 'deficient'

  let sqrt = num ** 0.5
  let sum = 1 + (Math.floor(sqrt) === Math.ceil(sqrt) ? sqrt : 0)
  for (let i = 2; i < sqrt; i++) {
    sum += (num % i) ? 0 : (i + num / i)
  }

  if (num < sum) return 'abundant'
  if (num > sum) return 'deficient'
  return 'perfect'
}

