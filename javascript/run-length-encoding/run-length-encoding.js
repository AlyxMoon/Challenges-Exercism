
export const encode = (string = '') => {
  const encodedPairs = []
  let currentIndex = -1
  let currentChar = ''
  string.split('').forEach(char => {
    if (char !== currentChar) {
      encodedPairs.push([char, 0])
      currentIndex += 1
      currentChar = char
    }
    encodedPairs[currentIndex][1] += 1
  })

  return encodedPairs.reduce((retval, [char, count]) => {
    return retval + `${count === 1 ? '' : count}${char}`
  }, '')
};

export const decode = (string = '') => {
  if (string === '') return ''

  const decodedPairs = [...string.matchAll(/([0-9]*)([ a-zA-Z])/g)]
    .map(matches => [matches[2], matches[1] === '' ? 1 : matches[1]])
    
  return decodedPairs.reduce((retval, [char, count]) => {
    return retval + char.repeat(parseInt(count, 10))
  }, '')
}
