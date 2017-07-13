import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'redux-first-router-link'

import { ACTION_LEAGUE } from 'store/routesMap'
import Achievement from 'component/Achievement'
import ProgressDonut from 'component/ProgressDonut'
import { Container, Title, SubTitle } from './styled'

class MyProgress extends Component {
  render() {
    const { totalTeams, totalVisited } = this.props
    return (
      <Container>
        <Title>My Progress</Title>

        <ProgressDonut achieved={totalVisited} goal={totalTeams} baseTitle="Grounds" />

        <SubTitle>
          <Link href={{ type: ACTION_LEAGUE, payload: { leagueId: 'premiership' } }}>
            Premiership
          </Link>
        </SubTitle>
        <Achievement goal={38} achieved={38} />

        <SubTitle>
          <Link href={{ type: ACTION_LEAGUE, payload: { leagueId: 'championship' } }}>
            Championship
          </Link>
        </SubTitle>
        <Achievement goal={42} achieved={12} />
      </Container>
    )
  }
}

MyProgress.displayName = 'MyProgress'

MyProgress.defaultProps = {
  totalTeams: 0,
  totalVisited: 0,
}

MyProgress.propTypes = {
  totalTeams: PropTypes.number.isRequired,
  totalVisited: PropTypes.number.isRequired,
}

export default MyProgress
