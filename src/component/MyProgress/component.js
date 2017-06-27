import React, { Component } from 'react'
import Link from 'redux-first-router-link'

import { ACTION_LEAGUE } from 'store/routesMap'
import Achievement from 'component/Achievement'
import ProgressDonut from 'component/ProgressDonut'
import { Container, Title, SubTitle } from './styled'

class MyProgress extends Component {
  render() {
    return (
      <Container>
        <Title>My Progress</Title>

        <ProgressDonut achieved={48} goal={92} baseTitle="Grounds" />

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

export default MyProgress
