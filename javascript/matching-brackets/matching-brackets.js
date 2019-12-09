
const startBrackets = ['{', '[', '(']
const endBrackets = ['}', ']', ')']
const bracketMatch = {
  '}': '{',
  ']': '[',
  ')': '(',
}

export const matchingBrackets = (string = '') => {
  const savedBrackets = []
  for (let char of string) {
    if (startBrackets.includes(char)) savedBrackets.push(char)
    if (endBrackets.includes(char)) {
      if (savedBrackets[savedBrackets.length - 1] === bracketMatch[char]) savedBrackets.pop()
      else return false
    }
  }

  return savedBrackets.length === 0
};
