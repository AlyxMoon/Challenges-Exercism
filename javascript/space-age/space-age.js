
export class PlanetAge {
  constructor (ageInSeconds = 0) {
    this.age = ageInSeconds / 31557600
    this.adjustment = {
      mercury: 0.2408467,
      venus: 0.61519726,
      earth: 1,
      mars: 1.8808158,
      jupiter: 11.862615,
      saturn: 29.447498,
      uranus: 84.016846,
      neptune: 164.79132,
    }
  }

  convert (planet = 'earth', decimalPlaces = 2) {
    return +(this.age / this.adjustment[planet]).toFixed(decimalPlaces)
  }
}

export const age = (planet = 'earth', ageInSeconds = 0) => {
  return (new PlanetAge(ageInSeconds)).convert(planet)
}
