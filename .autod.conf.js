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
    /* ------------------------------------------------------------
     * `lerna` based packages require manual installation for now.
     * @SEE https://github.com/node-modules/autod/issues/34
     * ------------------------------------------------------------
    '@commitlint/cli',
    '@commitlint/config-conventional',
    */
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
}