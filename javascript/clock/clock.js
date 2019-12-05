
export class Clock {
  constructor (hours = 0, minutes = 0) {
    [this.hours, this.minutes] = this.formatTimes(hours, minutes)
  }

  formatTimes (hours, minutes) {
    let newMinutes = minutes % 60
    if (newMinutes < 0) newMinutes += 60

    let newHours = (hours + Math.floor(minutes / 60)) % 24
    if (newHours < 0) newHours += 24

    return [newHours, newMinutes]
  }

  toString () {
    return this.hours.toString().padStart(2, '0') + ':' + this.minutes.toString().padStart(2, '0')
  }

  plus (minutes = 0) {
    [this.hours, this.minutes] = this.formatTimes(this.hours, this.minutes + minutes)
    return this
  }

  minus (minutes = 0) {
    [this.hours, this.minutes] = this.formatTimes(this.hours, this.minutes - minutes)
    return this
  }

  equals (otherClock = {}) {
    return this.hours === otherClock.hours && this.minutes === otherClock.minutes
  }
}
