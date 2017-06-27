import React from 'react'
import ReactDOM from 'react-dom'

import <%= componentName %> from './component'

it('<%= componentName %> renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<<%= componentName %> />, div)
})
