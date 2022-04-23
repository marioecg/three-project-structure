import Emitter from 'tiny-emitter'

import store from 'app/store'

import { Events } from 'app/events'

export default class Sizes extends Emitter {
  constructor() {
    super()

    this.width = store.bounds.ww
    this.height = store.bounds.wh
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)

    this.addEvents()
  }

  addEvents() {
    Events.on('resize', ({ width, height }) => {
      this.width = width
      this.height = height
      this.pixelRatio = Math.min(window.devicePixelRatio, 2)

      this.emit('resize')
    })
  }
}
