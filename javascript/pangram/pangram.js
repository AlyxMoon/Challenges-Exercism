
export const alphabetArray = [...Array(26)].map((_, i) => String.fromCharCode(97 + i))

export const isPangram = (sentence = '') => {
  let parsedSentence = sentence.toLowerCase()
  return alphabetArray.every(char => parsedSentence.includes(char))
}

export const isPangramAlternate1 = (sentence = '') => {
  return (new Set(sentence.toLowerCase().replace(/[^a-z]/g, ''))).size === 26
}
