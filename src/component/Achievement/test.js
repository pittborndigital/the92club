import React from 'react'
import ReactDOM from 'react-dom'

import Achievement from './component'

it('Achievement renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Achievement goal={38} achieved={64} />, div)
})
