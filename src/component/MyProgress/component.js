import React, { Component } from 'react'
import { AppContainer, Title } from './styled'

class App extends Component {
  render() {
    const boo = 'woo'
    const woo = `yeah: ${boo}`
    return (
      <AppContainer>
        <Title>Hello World {woo}</Title>
      </AppContainer>
    )
  }
}

export default App
