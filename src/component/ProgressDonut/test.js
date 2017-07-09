import React from 'react'
import ReactDOM from 'react-dom'

import ProgressDonut from './component'

it('ProgressDonut renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProgressDonut baseTitle="Keep Ups" goal={66} achieved={64} />, div)
})
