
export const generateCharCountArray = (word = '') => {
  const arr = Array(26).fill(0)
  word.toLowerCase().replace(/[^a-z]/g, '').split('').forEach(char => arr[char.charCodeAt(0) - 97] += 1)
  return arr
}

export const isIsogram = (word = '') => {
  return generateCharCountArray(word).every(count => count < 2)
}
