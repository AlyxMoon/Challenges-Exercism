
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
    this[sentinel][prev] = this[sentinel]
    this[sentinel][next] = this[sentinel]
  }

  push (value) {
    const newNode = new Node(value, this[sentinel][prev], this[sentinel][prev][next])

    this[sentinel][prev][next] = newNode
    this[sentinel][prev] = newNode
  }

  pop () {
    const value = this[sentinel][prev][data]

    this[sentinel][prev][prev][next] = this[sentinel][prev][next]
    this[sentinel][prev] = this[sentinel][prev][prev]

    return value
  }

  unshift (value) {
    const newNode = new Node(value, this[sentinel][next][prev], this[sentinel][next])

    this[sentinel][next][prev] = newNode
    this[sentinel][next] = newNode
  }

  shift () {
    const value = this[sentinel][next][data]

    this[sentinel][next][next][prev] = this[sentinel][next][prev]
    this[sentinel][next] = this[sentinel][next][next]

    return value
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
    if (!node) return

    node[prev][next] = node[next]
    node[next][prev] = node[prev]

    return node[data]
  }
}
