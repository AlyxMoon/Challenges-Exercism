
export class List {
  constructor (data = []) {
    if (data instanceof List) {
      this.values = data.values
    } else if (Array.isArray(data)) {
      this.values = data
    } else {
      this.values = [data]
    }
  }

  append (list) {
    const start = this.length()
    const listToAdd = list instanceof List ? list : new List(list)

    for (let i = 0; i < listToAdd.length(); i++) {
      this.values[start + i] = listToAdd.values[i]
    }

    return this
  }

  concat (lists) {
    const newList = new List(this.values)

    for (const list of lists.values) {
      for (const val of list.values) {
        newList.append(val)
      }
    }

    return newList
  }

  filter (callback = () => {}) {
    const newList = new List()

    for (let i = 0; i < this.length(); i++) {
      if (callback(this.values[i], i, this.values)) {
        newList.append(this.values[i])
      }
    }

    return newList
  }

  map (callback = () => {}) {
    const newList = new List()

    for (let i = 0; i < this.length(); i++) {
      newList.append(callback(this.values[i], i, this.values))
    }

    return newList
  }

  length () {
    let count = 0
    // eslint-disable-next-line no-unused-vars
    for (const _ in this.values) count++

    return count
  }

  foldl (callback, initialValue) {
    let accumulator = initialValue

    for (let i = 0; i < this.length(); i++) {
      accumulator = callback(accumulator, this.values[i])
    }

    return accumulator
  }

  foldr (callback, initialValue) {
    let accumulator = initialValue

    for (let i = this.length() - 1; i >= 0; i--) {
      accumulator = callback(accumulator, this.values[i])
    }

    return accumulator
  }

  reverse () {
    const newList = new List()

    for (let i = this.length() - 1; i >= 0; i--) {
      newList.append(this.values[i])
    }

    this.values = newList.values
    return this
  }
}
