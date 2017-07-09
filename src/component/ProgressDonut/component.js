import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  InfoContainer,
  Info,
  AchievedCount,
  GoalCount,
  GoalOf,
  GoalTitle,
} from './styled'

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * (Math.PI / 180.0)
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  }
}

function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle)
  const end = polarToCartesian(x, y, radius, startAngle)
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'
  const d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ')
  return d
}

let timer
const timerDelayMilliseconds = 10

function getPercentageAchieved({ goal, achieved }) {
  const percent = Math.round(achieved / goal * 100)
  if (percent < 0) {
    return 0
  }
  if (percent > 100) {
    return 100
  }
  return percent
}

class ProgressDonut extends Component {
  constructor(props) {
    super(props)
    this.state = {
      percentageFilteredTarget: getPercentageAchieved({
        achieved: props.achieved,
        goal: props.goal,
      }),
      percentageFiltered: 0,
      achievedDisplayTarget: props.achieved,
      achievedDisplay: 0,
    }
  }

  componentWillMount() {
    this.animateState()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.goal !== this.props.goal || nextProps.achieved !== this.props.achieved) {
      const target = getPercentageAchieved({
        goal: nextProps.goal,
        achieved: nextProps.achieved,
      })
      this.setState({
        percentageFilteredTarget: Number(target),
        achievedDisplayTarget: Number(nextProps.achieved),
      })
    }
  }

  componentDidUpdate() {
    this.animateState()
  }

  animateState() {
    const {
      percentageFiltered: percentageFilteredState,
      percentageFilteredTarget: percentageFilteredTargetState,
      achievedDisplay: achievedDisplayState,
      achievedDisplayTarget: achievedDisplayTargetState,
    } = this.state
    if (
      percentageFilteredState !== percentageFilteredTargetState ||
      achievedDisplayState !== achievedDisplayTargetState
    ) {
      clearInterval(timer)
      timer = setInterval(() => {
        this.setState((prevState) => {
          const {
            percentageFiltered,
            percentageFilteredTarget,
            achievedDisplay,
            achievedDisplayTarget,
          } = prevState
          let newPercentageFiltered = percentageFiltered
          let newAchievedDisplay = achievedDisplay
          if (percentageFiltered !== percentageFilteredTarget) {
            const incrementDecrementValue = percentageFilteredTarget > percentageFiltered ? 1 : -1
            newPercentageFiltered = percentageFiltered + incrementDecrementValue
          }
          if (achievedDisplay !== achievedDisplayTarget) {
            const diff = Math.abs(achievedDisplayTarget - achievedDisplay)
            const percentDiff = Math.abs(percentageFilteredTarget - percentageFiltered)
            const incrementalDiff = Math.round(diff / percentDiff)
            const incrementDecrementValue = achievedDisplayTarget > achievedDisplay
              ? incrementalDiff
              : -incrementalDiff
            newAchievedDisplay = achievedDisplay + incrementDecrementValue
            if (isNaN(newAchievedDisplay) || !isFinite(newAchievedDisplay)) {
              newAchievedDisplay = achievedDisplayTarget
            }
          }
          return {
            percentageFiltered: newPercentageFiltered,
            achievedDisplay: newAchievedDisplay,
          }
        })
      }, timerDelayMilliseconds)
    } else {
      clearInterval(timer)
    }
  }

  render() {
    const { baseTitle, goal, width, height, baseColor, resultsColor, strokeWidth } = this.props
    const { percentageFiltered, achievedDisplay } = this.state
    const base = describeArc(150, 150, 100, 0, 360 - 0.0001)
    const arcDegrees = percentageFiltered === 0 ? 360 - 0.0001 : 360 * (percentageFiltered / 100)
    let arc
    if (arcDegrees === 360) {
      arc = describeArc(150, 150, 100, 0, 360 - 0.0001)
    } else {
      arc = describeArc(150, 150, 100, 0, arcDegrees)
    }
    const widgetStyles = {
      width,
      height,
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }

    return (
      <Container width={width} height={height}>
        <svg className="results-donut" viewBox="42 42 216 216" style={widgetStyles}>
          <path d={base} fill="none" stroke={baseColor} strokeWidth={strokeWidth} />
        </svg>
        {percentageFiltered > 0 &&
          <svg className="results-donut" viewBox="42 42 216 216" style={widgetStyles}>
            <path d={arc} fill="none" stroke={resultsColor} strokeWidth={strokeWidth} />
          </svg>}
        <InfoContainer width={width} height={height}>
          <Info>
            <AchievedCount>{achievedDisplay}</AchievedCount>
            <GoalOf>of</GoalOf>
            <GoalCount>{goal}</GoalCount>
            <GoalTitle>{baseTitle}</GoalTitle>
          </Info>
        </InfoContainer>
      </Container>
    )
  }
}

ProgressDonut.displayName = 'ProgressDonut'

ProgressDonut.propTypes = {
  baseTitle: PropTypes.string.isRequired,
  goal: PropTypes.number.isRequired,
  achieved: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  baseColor: PropTypes.string,
  resultsColor: PropTypes.string,
}

ProgressDonut.defaultProps = {
  strokeWidth: 15,
  width: 150,
  height: 150,
  resultsColor: '#01E400',
  baseColor: '#BBB',
}

export default ProgressDonut
