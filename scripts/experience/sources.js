import px from 'assets/textures/envmap/px.jpg'
import nx from 'assets/textures/envmap/nx.jpg'
import py from 'assets/textures/envmap/py.jpg'
import ny from 'assets/textures/envmap/ny.jpg'
import pz from 'assets/textures/envmap/pz.jpg'
import nz from 'assets/textures/envmap/nz.jpg'

export default [
  {
    name: 'environmentMapTexture',
    type: 'cubeTexture',
    path: [px, nx, py, ny, pz, nz],
  },
]
