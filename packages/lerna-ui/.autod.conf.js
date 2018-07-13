const { registry } = require('../../.autod.conf.js')

module.exports = Object.assign({
  write: true,
  prefix: '~',
  devprefix: '^',
  dep: [
    'react',
  ],
  devdep: [
  ],
  semver: [
    'eslint@4.19.1',
  ],
}, { registry })
