import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

import './styles/global.less'

const ROOT = document.getElementById('root')

const render = () => {
  /* eslint-disable react/jsx-filename-extension */
  ReactDOM.render(<App />, ROOT)
  /* eslint-enable */
}

render()
