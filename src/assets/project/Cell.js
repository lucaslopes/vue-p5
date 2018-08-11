import p5 from 'p5'
import * as sketch from './sketch.js'

export default class Cell {
  constructor(i, j) {
    this.row = i
    this.column = j
    this.position = p5.createVector(
      this.column * cellWidth,
      this.row  * cellWidth,
    )
    this.queen = false
    this.target = 0
  }

  show() {
    (this.row + this.column + 1) % 2 == 0 ?
    p5.fill(222, 227, 230) : p5.fill(140, 162, 173)
    p5.noStroke()
    p5.rect(this.position.x, this.position.y, cellWidth, cellWidth)

    if (this.queen) {
      let width = cellWidth / 2
      p5.fill(146, 177, 102)
      p5.ellipse(
        this.position.x + width,
        this.position.y + width,
        width, width
      )
    }

    if(!this.areYouAvaible()) {
      p5.stroke(204, 41, 54)
      p5.strokeWeight(5)

      let begin = createVector(this.position.x + 10, this.position.y + 10)
      let end = cellWidth - 20

      p5.line(begin.x, begin.y, begin.x + end, begin.y + end)
      p5.line(begin.x + end, begin.y, begin.x, begin.y + end);
    }
  }

  areYouAvaible() {
    if (this.target > 0) return false
    else return true
  }

  putQueen() {
    this.queen = true
    this.updateTargets(1)
  }

  removeQueen() {
    this.verified = true
    this.queen = false
    this.updateTargets(-1)
  }

  updateTargets(value) {
    let x = 1
    while (board[this.row + x] != null) {
      board[this.row + x][this.column].target += value

      if (board[this.row + x][this.column - x] != null)
        board[this.row + x][this.column - x].target += value

      if (board[this.row + x][this.column + x] != null)
        board[this.row + x][this.column + x].target += value

      x++
    }
  }

  contains(x, y) {
    return (
      x > this.position.x &&
      x < this.position.x + cellWidth &&
      y > this.position.y &&
      y < this.position.y + cellWidth
    )
  }
}
