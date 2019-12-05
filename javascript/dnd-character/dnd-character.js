
export const abilityModifier = (stat) => {
  if (stat < 3) throw new Error('Ability scores must be at least 3')
  if (stat > 18) throw new Error('Ability scores can be at most 18')
  return Math.floor((stat - 10) / 2)
}

export const rollDice = () => Math.floor(Math.random() * 5) + 1

export class Character {
  static rollAbility () {
    const rolls = [rollDice(), rollDice(), rollDice(), rollDice()]
    return rolls.reduce((sum, num) => sum + num, 0) - Math.min(...rolls)
  }

  constructor () {
    this.strength = Character.rollAbility()
    this.dexterity = Character.rollAbility()
    this.constitution = Character.rollAbility()
    this.intelligence = Character.rollAbility()
    this.wisdom = Character.rollAbility()
    this.charisma = Character.rollAbility()
    this.hitpoints = 10 + abilityModifier(this.constitution)
  }

  set strength(stat) { this._strength = stat }
  get strength() {
    return this._strength
  }

  set dexterity(stat) { this._dexterity = stat }
  get dexterity() {
    return this._dexterity
  }

  set constitution(stat) { this._constitution = stat }
  get constitution() {
    return this._constitution
  }

  set intelligence(stat) { this._intelligence = stat }
  get intelligence() {
    return this._intelligence
  }

  set wisdom(stat) { this._wisdom = stat }
  get wisdom() {
    return this._wisdom
  }

  set charisma(stat) { this._charisma = stat }
  get charisma() {
    return this._wisdom
  }

  set hitpoints(stat) { this._hitpoints = stat }
  get hitpoints() {
    return this._hitpoints
  }
}
