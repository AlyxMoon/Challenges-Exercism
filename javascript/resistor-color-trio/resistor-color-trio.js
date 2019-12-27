
const colorValue = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

export class ResistorColorTrio {
  #value

  constructor ([color1, color2, color3]) {
    [color1, color2, color3].forEach((c, i) => {
        if (!(c in colorValue)) throw new Error(`invalid color ${i}: ${c}`)
    })

    this.#value = (colorValue[color1] * 10 + colorValue[color2]) * (10 ** colorValue[color3])
  }

  get label () {
    return 'Resistor value: ' +
      `${this.#value / (this.#value > 999 ? 1000 : 1 )} ` +
      `${this.#value > 999 ? 'kilo' : ''}ohms`
  }
}
