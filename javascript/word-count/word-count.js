
export class Words {
  count (string = '') {
    const charCounter = Object.create(null)
    string.trim().toLowerCase().split(/\s+/).forEach(word => {
      charCounter[word] = (charCounter[word] || 0) + 1
    })
    return charCounter
  }
}
