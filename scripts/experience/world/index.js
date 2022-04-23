import * as THREE from 'three'

import Experience from 'experience'
import Environment from 'experience/world/Environment'

export default class World {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.debug = this.experience.debug

    // Test mesh
    this.box = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial(),
    )

    this.scene.add(this.box)

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder({
        title: 'box',
        expanded: true,
      })

      this.debugFolder.addInput(this.box.position, 'x', {
        min: -3,
        max: 3,
        step: 0.1,
      })

      this.debugFolder.addInput(this.box.position, 'y', {
        min: -3,
        max: 3,
        step: 0.1,
      })

      this.debugFolder.addInput(this.box.position, 'z', {
        min: -3,
        max: 3,
        step: 0.1,
      })
    }

    // Wait for resources
    this.resources.on('ready', () => {
      // Setup
      this.environment = new Environment()
    })
  }
}
