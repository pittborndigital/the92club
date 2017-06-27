import React from 'react'
import { shallow } from 'enzyme'

import MyProgress from './component'

it('renders without crashing', () => {
  const wrapper = shallow(<MyProgress />)
  expect(wrapper.exists()).toBe(true)
})
