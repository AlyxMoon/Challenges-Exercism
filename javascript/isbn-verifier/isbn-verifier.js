
const valueMap = {
  0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5,
  6: 6, 7: 7, 8: 8, 9: 9, X: 10,
}

export const isValid = (isbn) => {
  if (
    typeof isbn !== 'string' ||
    !/^[0-9]{1}-?[0-9]{3}-?[0-9]{5}-?[X0-9]$/.test(isbn)
  ) return false
  
  return isbn
    .replace(/-/g, '').split('')
    .reduce((sum, char, i) => sum + (valueMap[char] * (10 - i)), 0) % 11 === 0
}
