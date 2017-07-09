import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, number, text } from '@storybook/addon-knobs'

import ProgressDonut from './component'

const stories = storiesOf('ProgressDonut', module)
stories.addDecorator(withKnobs)

stories.add('default', () =>
  (<ProgressDonut
    baseTitle={text('Base Title', 'Grounds')}
    goal={number('Goal', 92)}
    achieved={number('Achieved', 83)}
  />),
)

stories.add('all options', () =>
  (<ProgressDonut
    baseTitle={text('Base Title', 'Grounds')}
    goal={number('Goal', 92)}
    achieved={number('Achieved', 83)}
    strokeWidth={number('strokeWidth', 15)}
    width={number('width', 150)}
    height={number('height', 150)}
    resultsColor={text('resultsColor', 'green')}
    baseColor={text('baseColor', 'gray')}
  />),
)

stories.add('complete', () => <ProgressDonut baseTitle="Grounds" goal={92} achieved={92} />)
