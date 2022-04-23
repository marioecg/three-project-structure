import * as THREE from 'three'

import Experience from 'experience'

export default class Renderer {
  constructor() {
    this.experience = new Experience()
    this.canvas = this.experience.canvas
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.camera = this.experience.camera

    this.setInstance()
  }

  setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    })

    this.instance.setSize(this.sizes.width, this.sizes.height)
    this.instance.setPixelRatio(this.sizes.setPixelRatio)
    this.instance.setClearColor('#f0f0f0', 1)
  }

  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height)
    this.instance.setPixelRatio(this.sizes.setPixelRatio)
  }

  update() {
    this.instance.render(this.scene, this.camera.instance)
  }
}
