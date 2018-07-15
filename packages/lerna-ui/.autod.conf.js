const { registry } = require('../../.autod.conf.js')

module.exports = Object.assign({
  write: true,
  prefix: '~',
  devprefix: '^',
  dep: [
    'antd',
    'browserslist',
    'classnames',
    'cross-env',
    'per-env',
    'prop-types',
    'react',
    'react-dom',
    'react-router-dom',
    'react-loadable',
    'react-hot-loader',
    'react-helmet',
    'react-app-rewired',
    'react-app-rewire-less',
    'react-scripts',
    'rimraf',
    'styled-components',
  ],
  devdep: [
    'babel-plugin-import',
  ],
}, { registry })
