
const lines = [
  { subject: 'house that Jack built.' },
  { subject: 'malt', verb: 'lay in' },
  { subject: 'rat', verb: 'ate' },
  { subject: 'cat', verb: 'killed' },
  { subject: 'dog', verb: 'worried' },
  { subject: 'cow with the crumpled horn', verb: 'tossed' },
  { subject: 'maiden all forlorn', verb: 'milked' },
  { subject: 'man all tattered and torn', verb: 'kissed' },
  { subject: 'priest all shaven and shorn', verb: 'married' },
  { subject: 'rooster that crowed in the morn', verb: 'woke' },
  { subject: 'farmer sowing his corn', verb: 'kept' },
  { subject: 'horse and the hound and the horn', verb: 'belonged to' },
]

export class House {
  static verse(n) {
    if (!lines[n - 1]) throw new Error('That verse index is out of range')

    const returnArray = [`This is the ${lines[n - 1].subject}`]
    for (let i = n - 2; i >= 0; i--) {
      returnArray.push(`that ${lines[i + 1].verb} the ${lines[i].subject}`)
    }
    return returnArray
  }

  static verses(start, end) {
    if (!lines[start - 1] || !lines[end - 1]) throw new Error('start or end index is out of range')

    const returnArray = []
    for (let i = start; i <= end; i++) {
      returnArray.push(...House.verse(i), ...(i < end ? [''] : []))
    }
    return returnArray
  }
}
