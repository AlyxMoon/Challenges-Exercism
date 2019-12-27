
export const parse = (phrase = '') => {
  if (typeof phrase !== 'string') throw new Error('Invalid argument type')
  return phrase
    .replace(/(?<=[a-zA-Z])[a-zA-Z']+|[^a-zA-Z]*/g, '')
    .toUpperCase()
}
