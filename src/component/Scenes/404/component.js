import React, { Component } from 'react'
import Link from 'redux-first-router-link'
import { ACTION_HOME } from '../../../store/routesMap'

class Scene404 extends Component {
  render() {
    return (
      <div>
        <h2> 404 - Page not found </h2>
        <p><Link href={{ type: ACTION_HOME }}>Please click here to go to the homepage.</Link></p>
      </div>
    )
  }
}

export default Scene404
