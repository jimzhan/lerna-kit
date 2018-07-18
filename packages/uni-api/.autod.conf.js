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
    'dotenv',
    'glob',
    'graphql',
    'graphql-import',
    'graphql-tools',
    'koa',
    'koa-bodyparser',
    'koa-compress',
    'koa-conditional-get',
    'koa-csrf',
    'koa-etag',
    'koa-graphql',
    'koa-helmet',
    'koa-pino-logger',
    'koa-router',
    'per-env',
    'rimraf',
  ],
  devdep: [
    'nodemon',
    'supertest',
  ],
}, { registry })
