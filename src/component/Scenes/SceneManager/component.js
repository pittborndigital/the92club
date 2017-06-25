import React, { Component } from 'react'
import { NOT_FOUND } from 'redux-first-router'

import { ACTION_HOME, ACTION_LEAGUE, ACTION_404 } from 'store/routesMap'

import MyProgress from 'component/MyProgress'
import League from 'component/League'
import Scene404 from '../404'

const getSceneForRoute = (type) => {
  switch (type) {
    case ACTION_HOME:
      return <MyProgress />

    case ACTION_LEAGUE:
      return <League />

    case NOT_FOUND:
    case ACTION_404:
      return <Scene404 />

    default:
      return <p> ERROR </p>
  }
}

class SceneManager extends Component {
  render() {
    const { location } = this.props
    return getSceneForRoute(location.type)
  }
}

export default SceneManager
