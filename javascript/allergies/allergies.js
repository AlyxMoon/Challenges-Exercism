
export class Allergies {
  constructor (allergyScore = 0) {
    this.allergyScore = allergyScore

    this.allergyScoreMap = {
      eggs: 1, peanuts: 2, shellfish: 4, strawberries: 8,
      tomatoes: 16, chocolate: 32, pollen: 64, cats: 128,
    }
  }

  list () {
    return Object.keys(this.allergyScoreMap).filter(allergy => this.allergicTo(allergy))
  }

  allergicTo (allergy) {
    return (this.allergyScoreMap[allergy] & this.allergyScore) > 0
  }
}
