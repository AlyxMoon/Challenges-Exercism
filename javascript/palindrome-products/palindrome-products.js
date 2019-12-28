
export class Palindromes {
  static generate({ minFactor, maxFactor }) {
    if (!Number.isInteger(minFactor) || !Number.isInteger(maxFactor)) throw new Error('Invalid input passed!')
    if (minFactor > maxFactor) throw new Error('min must be <= max')

    const [smallest, largest] = [{ value: Infinity, factors: [] }, { value: -Infinity, factors: [] }]

    for (let n = minFactor; n <= maxFactor; n++) {
      Palindromes.getPalindromesFromNumber(n)
        .map(pal => [pal, Palindromes.getFactors(pal, minFactor, maxFactor)])
        .filter(([, factors]) => factors.length)
        .forEach(([pal, factors]) => {
          if (pal < smallest.value) [smallest.value, smallest.factors] = [pal, factors]
          if (pal > largest.value) [largest.value, largest.factors] = [pal, factors]
        })
    }

    return {
      smallest: { factors: smallest.factors, value: smallest.value === Infinity ? null : smallest.value },
      largest: { factors: largest.factors, value: largest.value === -Infinity ? null : largest.value },
    }
  }

  static getPalindromesFromNumber (number) {
    if (!Number.isInteger(number) || number < 0) throw new Error('Invalid input passed!')

    let [pal1, pal2] = [Math.floor(number / 10), number]
    for (let num = number; num > 0; num = Math.floor(num / 10)) {
      [pal1, pal2] = [(pal1 * 10) + (num % 10), (pal2 * 10) + (num % 10)]
    }

    return [pal1, pal2]
  }

  static getFactors (number, min, max) {
    if (!Number.isInteger(number) || number < 0) throw new Error('Invalid input passed!')
    if (!Number.isInteger(min) || !Number.isInteger(max)) throw new Error('Invalid input passed!')

    const factors = []
    for (let i = min, end = Math.sqrt(number); i <= end; i++) {
      if ((number % i === 0 ) && (number / i) <= max) factors.push([i, number / i])
    }

    return factors
  }
}
