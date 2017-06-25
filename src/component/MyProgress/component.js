import React, { Component } from 'react'
import { Container, Title } from './styled'

class MyProgress extends Component {
  render() {
    const boo = 'woo'
    const woo = `yeah: ${boo}`
    return (
      <Container>
        <Title>Hello World {woo}</Title>
      </Container>
    )
  }
}

MyProgress.displayName = 'MyProgress'

export default MyProgress
