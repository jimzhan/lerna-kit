const { registry } = require('../../auto.conf.js')

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
