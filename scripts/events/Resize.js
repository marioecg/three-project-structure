import Emitter from './Emitter'

import store from '../store'

import debounce from 'lodash.debounce'

class Resize {
  constructor() {
    this.init()
  }

  resize = () => {
    const w = window.innerWidth
    const h = window.innerHeight

    store.bounds.ww = w
    store.bounds.wh = h

    Emitter.emit('resize', { width: w, height: h })
  }

  on() {
    window.addEventListener('resize', debounce(this.resize, 200))
  }

  init() {
    this.on()
  }
}

export default new Resize()
