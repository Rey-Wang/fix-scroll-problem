import React from 'react'
import { render } from 'react-dom'
import Root from './Root'

render(<Root />, document.getElementById('root'))

// If HMR is enabled, then accept store reducer replacement when a hot update happens
if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept()
  }
}
