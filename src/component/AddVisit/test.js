import React from 'react'
import ReactDOM from 'react-dom'

import AddVisit from './component'

it('AddVisit renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddVisit />, div)
})
