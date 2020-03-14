const height = 600

export function sketch(p) {
  p.setup = () => {
    p.createCanvas(p.windowWidth, height)
    window.addEventListener('keypress', () => {})
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, height)
  }

  p.draw = () => {
    p.background(255)

    // from here: https://p5js.org/examples/control-conditionals-1.html
    for (let i = 10; i < p.windowWidth; i += 10) {
      if (i % 20 === 0) {
        p.stroke(255, 109, 91)
        p.line(i, 80, i, height / 2)
      } else {
        p.stroke(153)
        p.line(i, 20, i, 180)
      }
    }
  }
}
