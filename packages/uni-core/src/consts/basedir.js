const path = require('path')
/**
 * Temporary fix for unsupported `import.meta.url`.
 * const __dirname = path.dirname(new URL(import.meta.url).pathname)
 */
module.exports = path.resolve(__dirname, '..')
