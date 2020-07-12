import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import ts from '@wessberg/rollup-plugin-ts'
import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default [
  {
    input: 'src/index.ts',
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'esm',
      },
    ],
    plugins: [
      ts(),
      json(),
      resolve({ extensions }),
      commonjs(),
      babel({
        extensions,
        include: ['src/**/*'],
      }),
      terser(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        name: 'boilerplate',
        file: pkg.browser,
        format: 'umd',
      },
    ],
    plugins: [
      ts(),
      json(),
      resolve({ extensions }),
      commonjs(),
      babel({
        extensions,
        include: ['src/**/*'],
      }),
      terser(),
    ],
  },
]
