import path from 'path'
import register from 'convict-register'
import { basedir } from '../consts'

const here = path.resolve(basedir, 'settings')

export default register(here, false, {
  env: {
    doc: 'Deployment environment',
    format: String,
    default: 'development',
    env: 'NODE_ENV',
  },
  host: {
    format: String,
    default: '0.0.0.0',
    env: 'HOST',
  },
  port: {
    format: 'port',
    default: 9394,
    env: 'PORT',
  },
  keys: {
    doc: 'Application secret keys',
    format: Array,
    default: [],
    env: 'KEYS',
  },
})
