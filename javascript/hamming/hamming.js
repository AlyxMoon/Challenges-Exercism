
export const compute = (leftStrand = '', rightStrand = '') => {
  if (leftStrand.length !== rightStrand.length) {
    if (!leftStrand.length) throw new Error('left strand must not be empty')
    if (!rightStrand.length) throw new Error('right strand must not be empty')
    throw new Error('left and right strands must be of equal length')
  }

  let count = 0
  for (let i = leftStrand.length - 1; i >= 0; i--) {
    count += (leftStrand[i] === rightStrand[i]) ? 0 : 1
  }
  return count
}
