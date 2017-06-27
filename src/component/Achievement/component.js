// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, ProgressDisplay } from './styled'

function calculateProgressPercent({ goal: number, achieved: number }) {
  // function calculateProgressPercent(goal: number, achieved: number) {
  return Math.round(achieved / goal * 100)
}

class Achievement extends Component {
  render() {
    const { goal, achieved } = this.props
    const progressPercent = calculateProgressPercent({ goal, achieved })
    const breakProgressPercent = calculateProgressPercent({ goal, achieved: 'grr' })
    return (
      <Container>
        <ProgressDisplay>{achieved} / {goal} [{progressPercent}%] [{breakProgressPercent}]</ProgressDisplay>
      </Container>
    )
  }
}

Achievement.displayName = 'Achievement'

Achievement.propTypes = {
  goal: PropTypes.number.isRequired,
  achieved: PropTypes.number.isRequired,
}

export default Achievement
