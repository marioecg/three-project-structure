import gsap from 'gsap'

import Emitter from './Emitter'

import store from '../store'

class Raf {
  constructor() {
    this.init()
  }

  tick = (time, deltaTime) => {
    Emitter.emit('tick', {
      time,
      delta: deltaTime,
    })
  }

  on() {
    gsap.ticker.add(this.tick)
  }

  init() {
    this.on()
  }
}

export default new Raf()
