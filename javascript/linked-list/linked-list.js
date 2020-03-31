
const [head, tail] = [Symbol('head'), Symbol('tail')]

class Node {
  constructor (data, prev = null, next = null) {
    this.data = data
    this.prev = prev
    this.next = next
  }
}

export class LinkedList {
  constructor () {
    this[head] = null
    this[tail] = null
  }

  push (data) {
    const newNode = new Node(data, this[tail], null)
    if (this[tail]) this[tail].next = newNode
    if (!this[head]) this[head] = newNode
    this[tail] = newNode
  }

  pop () {
    const { data } = this[tail]
    this[tail] = this[tail].prev
    if (!this[tail]) this[head] = null
    return data
  }

  unshift (data) {
    const newNode = new Node(data, null, this[head])
    if (this[head]) this[head].prev = newNode
    if (!this[tail]) this[tail] = newNode
    this[head] = newNode
  }

  shift () {
    const { data } = this[head]
    this[head] = this[head].next
    if (!this[head]) this[tail] = null
    return data
  }

  count () {
    let items = 0
    for (let node = this[head]; node; node = node.next) items++
    return items
  }

  delete(data) {
    const nodeToRemove = this.find(data)
    if (!nodeToRemove) return

    const { prev, next } = nodeToRemove

    if (prev) prev.next = next
    if (next) next.prev = prev

    if (!prev) this[head] = next
    if (!next) this[tail] = prev

    return data
  }

  find (data) {
    for (let node = this[head]; node; node = node.next) {
      if (node.data === data) return node
    }
  }
}
