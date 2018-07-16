module.exports = {
  write: true,
  prefix: '~',
  devprefix: '^',
  dep: [
    'cross-env',
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
  /* ------------------------------------------------------------
   * `lerna` based packages require manual installation via npm registry.
   * @SEE https://github.com/node-modules/autod/issues/34
   * ------------------------------------------------------------*/
  registry: 'https://registry.npm.taobao.org',
  exclude: [
    'packages',
  ]
}
