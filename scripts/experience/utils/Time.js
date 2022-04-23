import Emitter from 'tiny-emitter'

import { Events } from 'app/events'

export default class Time extends Emitter {
  constructor() {
    super()

    this.start = Date.now()
    this.current = this.start
    this.elapsed = 0
    this.delta = 16 // default screens run at 60ps, at 60fps delta time between each frame is around 16 ms

    this.addEvents()
  }

  addEvents() {
    Events.on('tick', this.tick)
  }

  tick = () => {
    const currentTime = Date.now()
    this.delta = currentTime - this.current
    this.current = currentTime
    this.elapsed = this.current - this.start

    this.emit('tick')
  }
}
