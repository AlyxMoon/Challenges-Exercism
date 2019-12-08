import { score } from './scrabble-score'

describe('Scrabble', () => {
  test('lowercase letter', () => {
    expect(score('a')).toEqual(1)
  })

  test('uppercase letter', () => {
    expect(score('A')).toEqual(1)
  })

  test('valuable letter', () => {
    expect(score('f')).toEqual(4)
  })

  test('short word', () => {
    expect(score('at')).toEqual(2)
  })

  test('short, valuable word', () => {
    expect(score('zoo')).toEqual(12)
  })

  test('medium word', () => {
    expect(score('street')).toEqual(6)
  })

  test('medium, valuable word', () => {
    expect(score('quirky')).toEqual(22)
  })

  test('long, mixed-case word', () => {
    expect(score('OxyphenButazone')).toEqual(41)
  })

  test('english-like word', () => {
    expect(score('pinata')).toEqual(8)
  })

  test('empty input', () => {
    expect(score('')).toEqual(0)
  })

  test('entire alphabet available', () => {
    expect(score('abcdefghijklmnopqrstuvwxyz')).toEqual(87)
  })
})

describe('Custom User Tests', () => {
  test('word with 1x modifier', () => {
    expect(score('street', { word: 1 })).toEqual(6)
  })

  test('word with 2x modifier', () => {
    expect(score('zoo', { word: 2 })).toEqual(24)
  })

  test('word with 3x modifier', () => {
    expect(score('quirky', { word: 3 })).toEqual(66)
  })

  test('word with a single 2x letter', () => {
    expect(score('quirky', { letters: { 5: 2 } })).toEqual(26)
  })

  test('word with two 2x letters', () => {
    expect(score('street', { letters: { 0: 2, 3: 2 } })).toEqual(8)
  })

  test('word with a single 3x letter', () => {
    expect(score('quirky', { letters: { 5: 3 } })).toEqual(30)
  })

  test('word with two 3x letters', () => {
    expect(score('quirky', { letters: { 1: 3, 5: 3 } })).toEqual(32)
  })

  test('word with a single 2x and 3x letter', () => {
    expect(score('street', { letters: { 3: 2, 4: 3 } })).toEqual(9)
  })

  test('word with two 2x and 3x letters', () => {
    expect(score('pinata', { letters: { 0: 2, 1: 3, 2: 2, 3: 3 } })).toEqual(16)
  })

  test('word with word multiplier and letter multipler', () => {
    expect(score('at', { word: 3, letters: { 1: 2 } })).toEqual(9)
  })
})
