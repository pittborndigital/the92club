import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
`
Container.displayName = 'ProgressDonut.Container'

export const InfoContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => `${props.height}px`};
  width: ${props => `${props.width}px`};
`
InfoContainer.displayName = 'ProgressDonut.InfoContainer'

export const Info = styled.div`
  text-align: center;
`
Info.displayName = 'ProgressDonut.Info'

export const AchievedCount = styled.div`
  font-size: 26px;
  font-weight: bold;
`
AchievedCount.displayName = 'ProgressDonut.AchievedCount'

export const GoalCount = styled.div`
  font-size: 16px;
  padding: 2px;

`
GoalCount.displayName = 'ProgressDonut.GoalCount'

export const GoalOf = styled.div`
  font-size: 12px;
`
GoalOf.displayName = 'ProgressDonut.GoalOf'

export const GoalTitle = styled.div`
  font-size: 12px;
  padding-bottom: 6px;
`
GoalTitle.displayName = 'ProgressDonut.GoalTitle'
