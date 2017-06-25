import React, { Component } from 'react'
import { Container, Title, SubTitle } from './styled'

import Achievement from 'component/Achievement'

class MyProgress extends Component {
  render() {
    return (
      <Container>
        <Title>My Progress</Title>
        <SubTitle>Premiership</SubTitle>
        <Achievement goal={38} achieved={38} />
        <SubTitle>Championship</SubTitle>
        <Achievement goal={42} achieved={12} />
      </Container>
    )
  }
}

MyProgress.displayName = 'MyProgress'

export default MyProgress
