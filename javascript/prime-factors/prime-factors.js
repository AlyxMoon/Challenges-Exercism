
function* generatePrimes () {
  const markedNotPrimeMap = new Map()
  for (let valueToCheck = 2 ;; valueToCheck++) {
    if (markedNotPrimeMap.has(valueToCheck)) {
      markedNotPrimeMap.get(valueToCheck).forEach(prime => {
        const nextMultipleOfPrime = prime + valueToCheck
        if (markedNotPrimeMap.has(nextMultipleOfPrime)) {
          markedNotPrimeMap.get(nextMultipleOfPrime).push(prime)
        } else {
          markedNotPrimeMap.set(nextMultipleOfPrime, [prime])
        }
      })
      markedNotPrimeMap.delete(valueToCheck)
    } else {
      markedNotPrimeMap.set(valueToCheck ** 2, [valueToCheck])
      yield valueToCheck
    }
  }
}

export const primeFactors = (number) => {
  const generator = generatePrimes()
  const primeFactors = []

  let n = number
  for (
    let prime = generator.next().value;
    prime <= Math.ceil(Math.sqrt(n));
    prime = (n % prime) ? generator.next().value : prime
  ) {
    if (n % prime === 0) {
      primeFactors.push(prime)
      n /= prime
    }
  }

  if (n > 1) primeFactors.push(n)
  return primeFactors
}
