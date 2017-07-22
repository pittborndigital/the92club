import React from 'react'
import ReactDOM from 'react-dom'

import AddVisitButton from './component'

it('AddVisitButton renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<AddVisitButton />, div)
})
