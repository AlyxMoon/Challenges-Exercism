
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

  while (number > 1) {
    const nextPrime = generator.next().value
    while (number % nextPrime === 0) {
      primeFactors.push(nextPrime)
      number = number / nextPrime
    }
  }

  return primeFactors
};
