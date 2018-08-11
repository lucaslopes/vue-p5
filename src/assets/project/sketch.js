import p5 from 'p5'
import { func as f } from './functions.js'

export const sketch = (p5) => {
  p5.setup = () => {
    f.createBoard()
    // let canvas = p5.createCanvas(500, 500)
    // canvas.parent('CanvasComponent')
  }

  p5.draw = () => {
    f.showBoard()
  }
}

new p5(sketch)
