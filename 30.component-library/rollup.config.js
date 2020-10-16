import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
  // input – tells Rollup which file is the root file
  input: 'src/index.ts',
  // output – tells Rollup where to bundle your file to and in what format
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  // plugins – tells Rollup which plugins we want to use along with the configuration for each one
  plugins: [
    sass({ insert: true }),
    typescript({ objectHashIgnoreUnknownHack: true })
  ],
  // externals – tells Rollup which modules being used by the package should be supplied by the host environment
  external: ['react', 'react-dom']
}