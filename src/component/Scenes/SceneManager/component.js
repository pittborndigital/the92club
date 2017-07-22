import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NOT_FOUND } from 'redux-first-router'

import { ACTION_HOME, ACTION_LEAGUE, ADD_VISIT, ACTION_404 } from 'store/routesMap'

import MyProgress from 'component/MyProgress'
import AddVisit from 'component/AddVisit'
import League from 'component/League'
import PageWrapper from 'component/PageWrapper'
import Scene404 from '../404'

import AddVisitButton from 'component/AddVisitButton'

const getSceneForRoute = (type) => {
  switch (type) {
    case ACTION_HOME:
      return <MyProgress />

    case ACTION_LEAGUE:
      return <League />

    case ADD_VISIT:
      return <AddVisit />

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
    // to do - decide when this button should appear (nav logic etc)
    // however am just plumbing it in for now
    return (
      <PageWrapper>
        {getSceneForRoute(location.type)}
        <AddVisitButton />
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
