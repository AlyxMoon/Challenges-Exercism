
const [data, prev, next] = [Symbol('data'), Symbol('prev'), Symbol('next')]
const sentinel = Symbol('sentinel')

class Node {
  constructor (d, p = null, n = null) {
    this[data] = d
    this[prev] = p
    this[next] = n
  }
}

export class LinkedList {
  constructor () {
    this[sentinel] = new Node(null)
    this[sentinel][prev] = this[sentinel][next] = this[sentinel]
  }

  push (value) {
    this.insertAfter(this[sentinel][prev], value)
  }

  pop () {
    return this.remove(this[sentinel][prev])
  }

  unshift (value) {
    this.insertAfter(this[sentinel], value)
  }

  shift () {
    return this.remove(this[sentinel][next])
  }

  count () {
    let items = 0

    for (let node = this[sentinel][next]; node !== this[sentinel]; node = node[next]) {
      items++
    }

    return items
  }

  find (value) {
    for (let node = this[sentinel][next]; node !== this[sentinel]; node = node[next]) {
      if (node[data] === value) return node
    }
  }

  delete(value) {
    const node = this.find(value)
    return node ? this.remove(node) : null
  }

  insertAfter(existingNode, value) {
    existingNode[next] = existingNode[next][prev] = new Node(value, existingNode, existingNode[next])
  }

  remove(node) {
    node[prev][next] = node[next]
    node[next][prev] = node[prev]
    return node[data]
  }
}
