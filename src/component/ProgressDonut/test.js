import React from 'react'
import renderer from 'react-test-renderer'

import ProgressDonut from './component'

it('renders correctly', () => {
  const tree = renderer
    .create(<ProgressDonut goal={38} achieved={64} goalTitle="Donuts Eaten" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
