const { registry } = require('../../.autod.conf.js')

module.exports = Object.assign({
  write: true,
  prefix: '~',
  devprefix: '^',
  dep: [
    'antd',
    'browserslist',
    'cross-env',
    'per-env',
    'react',
    'react-dom',
    'react-app-rewired',
    'react-app-rewire-less',
    'react-scripts',
    'rimraf',
  ],
  devdep: [
    'babel-plugin-import',
  ],
}, { registry })
