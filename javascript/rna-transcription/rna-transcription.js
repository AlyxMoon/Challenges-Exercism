
export const toRna = (sequence = '') => {
  const complementMap = { C: 'G', G: 'C', T: 'A', A: 'U' }

  return sequence.split('').map(char => complementMap[char]).join('')
}
