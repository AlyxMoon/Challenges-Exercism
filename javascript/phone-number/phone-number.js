
export class PhoneNumber {
  constructor (rawNumber) {
    this.rawNumber = rawNumber
  }

  number () {
    let formatted = this.rawNumber.replace(/\D/g, '')

    if (formatted.length === 11) {
      formatted = formatted[0] === '1' ? formatted.slice(1) : ''
    }
    if (formatted.length === 10) {
      if (['0','1'].includes(formatted[0]) || ['0','1'].includes(formatted[3])) formatted = ''
    }

    return formatted.length === 10 ? formatted : null
  }
}
