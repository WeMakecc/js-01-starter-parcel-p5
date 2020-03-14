import p5 from 'p5'
import { sketch } from './sketch'
import superb from 'superb'

document.title = '🦄'

console.log('hi! 👋')

const hello = document.createElement('h1')
hello.innerHTML = 'Hello 🦄'
document.body.appendChild(hello)

const superWord = document.createElement('p')
superWord.innerHTML = superb.random()
document.body.appendChild(superWord)

const canvasContainer = document.createElement('div')
document.body.appendChild(canvasContainer)

const p5instance = new p5(sketch, canvasContainer)
