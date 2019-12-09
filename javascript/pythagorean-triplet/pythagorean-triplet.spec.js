import { Triplet, TripletArray } from './pythagorean-triplet'

describe('Triplet', () => {
  test('calculates the sum', () => {
    expect(new Triplet(3, 4, 5).sum()).toBe(12)
  })

  test('calculates the product', () => {
    expect(new Triplet(3, 4, 5).product()).toBe(60)
  })

  test('can recognize a pythagorean triplet', () => {
    expect(new Triplet(3, 4, 5).isPythagorean()).toBe(true)
  })

  test('can recognize a non pythagorean triplet', () => {
    expect(new Triplet(5, 6, 7).isPythagorean()).toBe(false)
  })

  test('can make triplets up to 10', () => {
    const triplets = Triplet.where({ maxFactor: 10 })
    const products = triplets.sort().map(triplet => triplet.product())
    expect(products).toEqual([60, 480])
  })

  test('can make triplets 11 through 20', () => {
    const triplets = Triplet.where({ minFactor: 11, maxFactor: 20 })
    const products = triplets.sort().map(triplet => triplet.product())
    expect(products).toEqual([3840])
  })

  test('can filter on sum', () => {
    const triplets = Triplet.where({ sum: 180, maxFactor: 100 })
    const products = triplets.sort().map(triplet => triplet.product())
    expect(products).toEqual([118080, 168480, 202500])
  })
})

describe('Custom User Tests - TripletArray', () => {
  test('Successfully creates the array', () => {
    const tripletArray = new TripletArray(new Triplet(3, 4, 5), new Triplet(5, 6, 7))
    expect(tripletArray.length).toBe(2)
    expect(tripletArray).toEqual([new Triplet(3, 4, 5), new Triplet(5, 6, 7)])
  })

  test('Overrides array sort method to sort by {a - b - c} ', () => {
    expect(new TripletArray({ a: 2, b: 2, c: 2 }, { a: 1, b: 2, c: 2 }).sort())
      .toEqual([{ a: 1, b: 2, c: 2 }, { a: 2, b: 2, c: 2 }])

    expect(new TripletArray({ a: 1, b: 3, c: 2 }, { a: 1, b: 2, c: 2 }).sort())
      .toEqual([{ a: 1, b: 2, c: 2 }, { a: 1, b: 3, c: 2 }])

    expect(new TripletArray({ a: 3, b: 3, c: 7 }, { a: 3, b: 3, c: 5 }).sort())
      .toEqual([{ a: 3, b: 3, c: 5 }, { a: 3, b: 3, c: 7 }])
  })
})
