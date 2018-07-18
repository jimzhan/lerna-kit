const { registry } = require('../../.autod.conf.js')

module.exports = Object.assign({
  write: true,
  prefix: '~',
  devprefix: '^',
  dep: [
    'convict-register',
  ],
  devdep: [
  ],
}, { registry })
