import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import Emitter from 'tiny-emitter'

export default class Resources extends Emitter {
  constructor(sources) {
    super()

    this.sources = sources

    this.items = {}
    this.toLoad = this.sources.length
    this.loaded = 0

    this.setLoaders()
    this.startLoading()
  }

  setLoaders() {
    this.loaders = {}
    this.loaders.gltfLoader = new GLTFLoader()
    this.loaders.textureLoader = new THREE.TextureLoader()
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
  }

  startLoading() {
    for (const source of this.sources) {
      switch (source.type) {
        case 'gltfModel':
          console.log('gltf')
          this.loaders.gltfLoader.load(source.path, file => {
            this.loadSource(source, file)
          })

        case 'texture':
          console.log('texture')
          this.loaders.textureLoader.load(source.path, file => {
            this.loadSource(source, file)
          })

        case 'cubeTexture':
          this.loaders.cubeTextureLoader.load(source.path, file => {
            this.loadSource(source, file)
          })
      }
    }
  }

  loadSource(source, file) {
    this.items[source.name] = file
    this.loaded++

    if (this.loaded === this.toLoad) {
      this.emit('ready')
    }
  }
}
