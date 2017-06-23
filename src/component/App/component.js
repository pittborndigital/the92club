import React, { Component } from 'react'
import { AppContainer, Title } from './styled'
import SceneManager from '../Scenes/SceneManager'

class App extends Component {
  render() {
    const boo = 'woo'
    const woo = `yeah: ${boo}`
    return (
      <AppContainer>
        <Title>Hello World {woo}</Title>
        <SceneManager />
      </AppContainer>
    )
  }
}

export default App
