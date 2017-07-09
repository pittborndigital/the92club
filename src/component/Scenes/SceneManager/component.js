import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NOT_FOUND } from 'redux-first-router'

import { ACTION_HOME, ACTION_LEAGUE, ACTION_404 } from 'store/routesMap'

import MyProgress from 'component/MyProgress'
import League from 'component/League'
import PageWrapper from 'component/PageWrapper'
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
    return (
      <PageWrapper>
        {getSceneForRoute(location.type)}
      </PageWrapper>
    )
  }
}

SceneManager.propTypes = {
  location: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequred,
}

export default SceneManager
