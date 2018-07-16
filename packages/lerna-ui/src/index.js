import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

import './styles/global.less'

const ROOT = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <App/>,
    ROOT
  )
}

render()