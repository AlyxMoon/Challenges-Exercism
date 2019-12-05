
export class NucleotideCounts {
  static parse (sequence = '') {
    const counts = { A: 0, C: 0, G: 0, T: 0 }

    sequence.split('').forEach(char => {
      if (!['A', 'C', 'G', 'T'].includes(char)) throw new Error('Invalid nucleotide in strand')
      counts[char] += 1
    })

    return `${counts.A} ${counts.C} ${counts.G} ${counts.T}`
  }

  // Attempt at making as 'one-liner'-y as possible
  static parseAlternate1 (sequence = '') {
    if ((/[^ACGT]/g).test(sequence)) throw new Error('Invalid nucleotide in strand')

    const parsedSequence = sequence.split('')
    return ['A', 'C', 'G', 'T'].map(char => parsedSequence.filter(c => c === char).length).join(' ')
  }
}
