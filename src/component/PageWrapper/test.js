import React from 'react'
import { shallow } from 'enzyme'

import PageWrapper from './component'

it('renders without crashing', () => {
  const wrapper = shallow(<PageWrapper><h1>some content</h1></PageWrapper>)
  expect(wrapper.exists()).toBe(true)
})
