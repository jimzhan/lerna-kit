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
    '@commitlint/cli',
    '@commitlint/config-conventional',
    'commitizen',
    'cz-conventional-changelog',
    'eslint',
    'eslint-config-airbnb-base',
    'eslint-plugin-import',
    'eslint-plugin-jest',
    'husky',
    'jest',
    'lint-staged',
  ],
  semver: [
    'eslint@4.19.1',
  ],
}, { registry })
