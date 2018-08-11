import p5 from 'p5'
import Cell from './Cell.js'

export const func = (p5) => {
  const boardLength = () => {
    let length
    (p5.windowHeight < p5.windowWidth) ?
      length = p5.windowHeight - 17 :
      length = p5.windowWidth - 17
    return length
  }

  const createBoard = () => {
    const sides = prompt('How many sides?')
    let boardSize
    let cellWidth
    let board = []

    boardSize = boardLength()
    cellWidth = boardSize / sides
    let canvas = p5.createCanvas(boardSize, boardSize)
    canvas.parent('CanvasComponent')

    for (let i = 0; i < sides; i++) {
      let row = []
      for (let j = 0; j < sides; j++)
        row.push(new Cell(i, j))
      board.push(row)
    }

    showBoard(board, sides)
  }

  const showBoard = (board, sides) => {
    for (let i = 0; i < sides; i++)
      for (let j = 0; j < sides; j++)
          board[i][j].show();
  }

  p5.mousePressed = (board, sides) => {
    for (let i = 0; i < sides; i++)
      for (let j = 0; j < sides; j++)
        if (board[i][j].contains(p5.mouseX, p5.mouseY))
          board[i][j].queen ?
          board[i][j].removeQueen() :
          board[i][j].putQueen()
  }
}

new p5(func)
