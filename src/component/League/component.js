import React, { Component } from 'react'
import Link from 'redux-first-router-link'

import { ACTION_HOME } from 'store/routesMap'

class League extends Component {
  render() {
    return (
      <div>
        <h2> League View </h2>
        <Link href={{ type: ACTION_HOME }}> Back </Link>
      </div>
    )
  }
}

export default League
