import p5 from 'p5'
import { sketch } from './sketch'

document.title = '🦄'

console.log('hi! 👋')

const hello = document.createElement('h1')
hello.innerHTML = 'Hello 🦄'
document.body.appendChild(hello)

const canvasContainer = document.createElement('div')
document.body.appendChild(canvasContainer)

const p5instance = new p5(sketch, canvasContainer)
