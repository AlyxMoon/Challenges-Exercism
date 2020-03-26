
const [head, tail, size] = [Symbol('head'), Symbol('tail'), Symbol('size')]

class Node {
  constructor (data, prev, next) {
    this.data = data
    this.prev = prev
    this.next = next
  }
}

export class LinkedList {
  constructor () {
    this[head] = null
    this[tail] = null
    this[size] = 0
  }

  push (data) {
    const newNode = new Node(data, this[tail], null)

    if (!this[head]) this[head] = newNode
    else this[tail].next = newNode

    this[tail] = newNode
    this[size]++

    return data
  }

  pop () {
    if (!this[tail]) return

    const { data, prev } = this[tail]

    if (prev) prev.next = null

    this[tail] = prev
    this[size]--

    return data
  }

  unshift (data) {
    const newNode = new Node(data, null, this[head])

    if (!this[tail]) this[tail] = newNode
    else this[head].prev = newNode

    this[head] = newNode
    this[size]++

    return data
  }

  shift () {
    if (!this[tail]) return

    const { data, next } = this[head]

    if (next) next.prev = null

    this[head] = next
    this[size]--

    return data
  }

  delete (data) {
    for (let currentNode = this[head]; currentNode; currentNode = currentNode.next) {
      if (currentNode.data === data) {
        const { prev, next } = currentNode

        if (prev) {
          prev.next = next
        } else {
          this[head] = next
        }

        if (next) {
          next.prev = prev
        } else {
          this[tail] = prev
        }

        this[size]--
        break
      }
    }

    return data
  }

  count () {
    return this[size]
  }
}
