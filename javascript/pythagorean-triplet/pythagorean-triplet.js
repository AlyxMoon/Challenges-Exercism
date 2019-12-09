
export const getFactorPairs = (num) => {
  const pairs = [[1, num]]
  for (let i = 2, bound = Math.sqrt(num); i <= bound; i++) {
    if (num % i === 0) pairs.push([i, num / i])
  }
  return pairs
}

export class TripletArray extends Array {
  sort () {
    return super.sort((t1, t2) => {
      for (let key of ['a', 'b', 'c']) {
        if (t1[key] < t2[key]) return -1
        if (t1[key] > t2[key]) return 1
      }
      return 0
    })
  }
}

export class Triplet {
  constructor (a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  sum () {
    return this.a + this.b + this.c
  }

  product () {
    return this.a * this.b * this.c
  }

  isPythagorean () {
    return this.a ** 2 + this.b ** 2 === this.c ** 2
  }

  static where ({ minFactor = 1, maxFactor = 0, sum = 0 }) {
    const triplets = new TripletArray()

    // Dickson's Method for generating triplets
    // Lowest r that produces an a value is minFactor / 1.5 rounded up. Then round up again to nearest even number.
    const start = 2 * Math.round(Math.ceil(minFactor / 1.5) / 2)
    // Lowest c value is r * 2.5, so that's end
    const end = maxFactor / 2.5

    for (let r = start; r <= end; r += 2) {
      triplets.push(...getFactorPairs((r ** 2) / 2)
        .map(([s, t]) => [r + s, r + t, r + s + t])
        .filter(([a, b, c]) => {
          return (
            a >= minFactor &&
            c <= maxFactor &&
            (sum ? a + b + c === sum : true)
          )
        })
        .map(([a, b, c]) => new Triplet(a, b, c))
      )
    }

    return triplets
  }
}