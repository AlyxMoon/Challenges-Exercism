
export class HighScores {
  constructor (scores = []) {
    this.scores = scores
  }

  set scores (scores) {
    this._scores = scores
  }

  get scores () {
    return this._scores
  }

  get latest () {
    return this.scores[this.scores.length - 1]
  }

  get personalBest () {
    return Math.max(...this.scores)
  }

  get personalTopThree () {
    return this.scores.slice().sort((a, b) => b - a).slice(0, 3)
  }
}