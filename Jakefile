const path = require('path')
const glob = require('glob')
const chalk = require('chalk')
const inquirer = require('inquirer')
const assert = require('assert')
const shell = require('shelljs')
const validate = require('is-valid-npm-name')
const updatePkg = require('update-pkg')

const origin = 'uni'
const version = '0.1.0'
const { log } = console
const basedir = __dirname

/**
 * Get last segment from the given path.
 */
const getLastSegment = p => p.split(path.sep).filter(x => x).slice(-1)[0]

/**
 * Normalize the given package name to align with `lerna`'s convention. (e.g. @lerna/cli).
 */
const normalize = (name) => {
  const prefix = name.replace(/(\w*)-.*/, '$1')
  return name.replace(new RegExp(`^${prefix}\-(.*)$`), `@${prefix}\/$1`)
}

/**
 * Update package.json's meta data.
 * @param {String} abspath - absolute path to the package root.
 * @param {String} name - new package name to be updated.
 * @param {boolean} normalized - whether to normalize the package name to align with `lerna`.
 */
const update = (abspath, name, normalized = true) => {
  const pkg = new updatePkg(abspath)
  pkg.set('name', normalized ? normalize(name) : name)
  pkg.set('version', version)
  pkg.saveSync()
}

/**
 * Rename package.json#name with the given one & its relevant folder..
 * @param {String} name - new package name (validate against npm package naming).
 */
function bootstrap(name) {
  const origins = glob.sync(`${basedir}/packages/${origin}*`)

  // rename folders & relevant packages' names.
  origins.forEach((src) => {
    const previous = getLastSegment(src)
    const folder = previous.replace(origin, name)
    const validity = validate(folder)
    assert(validity === true, validity)
    const dest = path.join(basedir, 'packages', folder)
    shell.mv(src, dest)
    update(dest, folder)
    log(`${chalk.green('[lerna-kit]')}  packages/${previous}    =>  packages/${folder}`)
  })
  update(basedir, name, false)
}


desc('`lerna-kit` COMMANDS')
task('default', () => {
  console.log('COMMANDS')
  console.log('* jake init - initialize new project')
})

desc('Initialize a new `lerna` project')
task('init', () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Please provide your project name:',
      },
    ])
    .then((answers) => {
      const { name } = answers
      const validity = validate(name)
      assert(validity === true, validity)
      bootstrap(name)
    })
})
