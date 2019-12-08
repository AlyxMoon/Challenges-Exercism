
export class Anagram {
  constructor (word = '') {
    this.word = word
    this.wordAsArray = this.generateCharCountArray(word)
  }

  matches (words = []) {
    return words.filter(word => this.isWordAnagram(word))
  }

  generateCharCountArray (word) {
    const arr = Array(26).fill(0)
    word.toLowerCase().split('').forEach(char => arr[char.charCodeAt(0) - 97] += 1)
    return arr
  }

  isWordAnagram (word = '') {
    if (this.word.toLowerCase() === word.toLowerCase()) return false

    const wordAsArray2 = this.generateCharCountArray(word)
    return this.wordAsArray.every((count, i) => count === wordAsArray2[i])
  }
}
