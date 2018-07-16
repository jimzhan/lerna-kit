const { registry } = require('../../.autod.conf.js')

module.exports = Object.assign({
  write: true,
  prefix: '~',
  devprefix: '^',
  dep: [
    'boom',
    'convict-register',
    'chalk',
    'cross-env',
    'dataloader',
    'per-env',
    'rimraf',
  ],
  devdep: [
  ],
}, { registry })
