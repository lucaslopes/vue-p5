import p5 from 'p5'

function p(p5) {
  p5.setup = function() {
    let canvas = p5.createCanvas(500, 500)
    canvas.parent('CanvasComponent')
    p5.background(51)
    p5.fill(255)
    p5.ellipse(200, 200, 250, 250)
  }
}

new p5(p);
