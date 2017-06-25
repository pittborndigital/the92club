import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container, ProgressDisplay } from './styled'

function calculateProgressPercent({ goal, achieved }) {
  return Math.round(achieved / goal * 100)
}

class Achievement extends Component {
  render() {
    const { goal, achieved } = this.props
    const progressPercent = calculateProgressPercent({ goal, achieved })
    return (
      <Container>
        <ProgressDisplay>{goal} / {achieved} [{progressPercent}%]</ProgressDisplay>
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
