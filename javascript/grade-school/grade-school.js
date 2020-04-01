
const insertSorted = (arr, item) => {
  const index = arr.findIndex(element => element >= item)
  arr.splice(index === -1 ? arr.length : index, 0, item)
}

const getCopy = (obj) => JSON.parse(JSON.stringify(obj))

export class GradeSchool {
  #database

  constructor() {
    this.#database = {}
  }

  roster () {
    return getCopy(this.#database)
  }

  add (student, grade) {
    if (!(grade in this.#database)) this.#database[grade] = []
    insertSorted(this.#database[grade], student)
  }

  grade (grade) {
    return (this.#database[grade] || []).slice()
  }

}
