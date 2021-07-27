import fs from 'fs'
import path from 'path'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const isDev = process.env.NODE_ENV !== 'production'
const isFull = process.env.FULL

const plugins = isFull ? [] : [
    vue({
        preprocessStyles: true,
        template: {
            isProduction: true,
        }
    }),
    json(),
    commonjs(),
    nodeResolve(),
    postcss({
        extract: true,
    }),
    babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        babelrc: false,
        presets: [['@babel/preset-env', { modules: false }]]
    })
]

isDev || plugins.push(terser())

const root = path.resolve(__dirname, 'packages')


module.exports = fs.readdirSync(root)
    .filter(item => fs.statSync(path.resolve(root, item)).isDirectory() && (isFull ? item == 'sunshine' : item != 'sunshine'))
    .map(item => {
        const pkg = require(path.resolve(root, item, 'package.json'))
        return {
            input: path.resolve(root, item, 'index.js'),
            external: ['vue'],
            output: {
                exports: 'auto',
                file: path.resolve(root, item, pkg.module),
                format: 'es',
                globals: {
                    vue: 'Vue'
                }
            },
            plugins: plugins
        }
    })