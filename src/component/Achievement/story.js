import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs'

import Achievement from './component'

const stories = storiesOf('Achievement', module)
stories.addDecorator(withKnobs)

stories.add('default', () =>
  <Achievement goal={number('Goal', 10)} achieved={number('Achieved', 8)} />,
)

stories.add('complete', () => <Achievement goal={10} achieved={10} />)
