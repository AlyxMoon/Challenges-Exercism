
const isNum = (val) => !isNaN(val)

export class Forth {
  #operations
  #customDefinitions
  #stack

  #maxOperationsAllowed

  constructor () {
    this.#maxOperationsAllowed = 100

    this.#stack = []

    this.#customDefinitions = {}

    this.#operations = {
      '+': (stackIndex) => {
        if (stackIndex < 2) throw new Error('Stack empty')
        const [val1, val2] = this.removeFromStack(stackIndex - 2, stackIndex - 1)
        this.addToStackAt(val1 + val2, stackIndex - 2)
      },
      '-': (stackIndex) => {
        if (stackIndex < 2) throw new Error('Stack empty')
        const [val1, val2] = this.removeFromStack(stackIndex - 2, stackIndex - 1)
        this.addToStackAt(val1 - val2, stackIndex - 2)
      },
      '*': (stackIndex) => {
        if (stackIndex < 2) throw new Error('Stack empty')
        const [val1, val2] = this.removeFromStack(stackIndex - 2, stackIndex - 1)
        this.addToStackAt(val1 * val2, stackIndex - 2)
      },
      '/': (stackIndex) => {
        if (stackIndex < 2) throw new Error('Stack empty')
        const [val1, val2] = this.removeFromStack(stackIndex - 2, stackIndex - 1)
        if (val2 === 0) throw new Error('Division by zero')
        this.addToStackAt(Math.floor(val1 / val2), stackIndex - 2)
      },
      'dup': (stackIndex) => {
        if (stackIndex < 1) throw new Error('Stack empty')
        this.addToStackAt(this.#stack[stackIndex - 1], stackIndex)
      },
      'drop': (stackIndex) => {
        if (stackIndex < 1) throw new Error('Stack empty')
        this.removeFromStack(stackIndex - 1)
      },
      'swap': (stackIndex) => {
        if (stackIndex < 2) throw new Error('Stack empty')
        const [val1, val2] = this.removeFromStack(stackIndex - 2, stackIndex - 1)
        this.addToStackAt([val2, val1], stackIndex - 2)
      },
      'over': (stackIndex) => {
        if (stackIndex < 2) throw new Error('Stack empty')
        const [val1, val2] = this.removeFromStack(stackIndex - 2, stackIndex - 1)
        this.addToStackAt([val1, val2, val1], stackIndex - 2)
      },
      ':': (stackIndex) => {
        let [definition, nextOp] = this.removeFromStack(stackIndex, stackIndex + 1)
        if (isNum(definition)) throw new Error('Invalid definition')

        definition = definition.toLowerCase()
        this.#customDefinitions[definition] = []
        for (; nextOp !== ';'; nextOp = this.removeFromStack(stackIndex)[0]) {
          this.#customDefinitions[definition].push(nextOp)
        }
      },
    }
  }

  evaluate (sequence) {
    this.addToStack(sequence)

    let stackIndex = 0
    let operationsPerformed = 0

    while (stackIndex < this.#stack.length) {
      if (!isNum(this.#stack[stackIndex])) {
        this.doOperation(stackIndex)
        operationsPerformed++
        stackIndex = 0
      } else {
        stackIndex++
      }

      if (operationsPerformed > this.#maxOperationsAllowed) {
        throw new Error('Potential infinite loop detected, stopped evaluation')
      }
    }
  }

  get stack () {
    return this.#stack.slice()
  }

  hasOperation (operation = '') {
    return operation.toLowerCase() in this.#operations
  }

  hasCustomDefinition (definition = '') {
    return definition.toLowerCase() in this.#customDefinitions
  }

  doOperation (stackIndex = 0) {
    const currentOp = this.removeFromStack(stackIndex)[0].toLowerCase()

    if (this.hasCustomDefinition(currentOp)) {
      return this.addToStackAt(this.#customDefinitions[currentOp], stackIndex)
    }

    if (this.hasOperation(currentOp)) {
      return this.#operations[currentOp](stackIndex)
    }

    throw new Error('Unknown command')
  }

  addToStack (data = '') {
    this.addToStackAt(data, 0)
  }

  addToStackAt (data, index) {
    const parseNums = (val) => isNum(val) ? Number(val) : val

    if (typeof data === 'number') {
      this.#stack.splice(index, 0, data)
    }
    if (typeof data === 'string') {
      this.#stack.splice(index, 0, ...data.split(' ').map(parseNums))
    }
    if (Array.isArray(data)) {
      this.#stack.splice(index, 0, ...data.map(parseNums))
    }
  }

  removeFromStack (startIndex, endIndex = startIndex) {
    return this.#stack.splice(startIndex, endIndex - startIndex + 1)
  }
}
