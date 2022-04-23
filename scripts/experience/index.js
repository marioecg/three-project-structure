import * as THREE from 'three'

import Sizes from 'experience/utils/Sizes'
import Time from 'experience/utils/Time'
import Camera from 'experience/Camera'
import Renderer from 'experience/Renderer'
import World from 'experience/world'
import Resources from 'experience/utils/Resources'
import sources from 'experience/sources'
import Debug from 'experience/utils/Debug'

let instance = null

export default class Experience {
  constructor(el) {
    if (instance) {
      return instance
    }

    instance = this

    // Global access
    window.experience = this

    // Options
    this.canvas = el

    // Setup
    this.debug = new Debug()
    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene()
    this.resources = new Resources(sources)
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.world = new World()

    // Add events
    this.sizes.on('resize', this.resize)
    this.time.on('tick', this.update)
  }

  resize = () => {
    this.camera.resize()
    this.renderer.resize()
  }

  update = () => {
    this.camera.update()
    this.renderer.update()
  }

  destroy = () => {
    this.sizes.off('resize')
    this.sizes.off('tick')

    // Traverse scene
    this.scene.traverse(child => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose()

        for (const key in child.material) {
          const value = child.material[key]

          if (value && typeof value.dispose === 'function') {
            value.dispose()
          }
        }
      }
    })

    // Controls
    this.camera.controls.dispose()
    this.renderer.instance.dispose()
  }
}
