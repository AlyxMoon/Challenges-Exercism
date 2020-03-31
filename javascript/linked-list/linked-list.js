
const [head, tail] = [Symbol('head'), Symbol('tail')]

class Node {
  constructor (data) {
    this.data = data
    this.prev = null
    this.next = null
  }
}

export class LinkedList {
  constructor () {
    this[head] = null
    this[tail] = null
  }

  push (data) {
    return this.addTo(tail, data)
  }

  pop () {
    return this.delete(null, tail)
  }

  unshift (data) {
    return this.addTo(head, data)
  }

  shift () {
    return this.delete(null, head)
  }

  count () {
    let items = 0
    for (let currentNode = this[head]; currentNode; currentNode = currentNode.next) {
      items++
    }

    return items
  }

  addTo (direction, data) {
    const newNode = new Node(data)

    if (!this[head]) {
      this[head] = newNode
      this[tail] = newNode
    } else {
      if (direction === head) {
        newNode.next = this[head]
        this[head].prev = newNode
        this[head] = newNode
      }

      if (direction === tail) {
        newNode.prev = this[tail]
        this[tail].next = newNode
        this[tail] = newNode
      }
    }

    return data
  }

  delete(data, direction) {
    const nodeToRemove = data
      ? this.find(data, direction)
      : this[direction]

    if (!nodeToRemove) return

    const { prev, next } = nodeToRemove

    if (prev) prev.next = next
    if (next) next.prev = prev

    // removed the head/tail
    if (!prev) this[head] = next
    if (!next) this[tail] = prev

    return nodeToRemove.data
  }

  find (data, direction = head) {
    if (!this[head]) return

    const forwardNode = direction === head ? 'next' : 'prev'
    for (let currentNode = this[direction]; currentNode; currentNode = currentNode[forwardNode]) {
      if (currentNode.data === data) return currentNode
    }
  }
}
