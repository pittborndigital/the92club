import styled from 'styled-components'
import { colors, breakpoints } from 'config'

export const Container = styled.div`
`
Container.displayName = 'MyProgress.Container'

export const Title = styled.h1`
  color: ${colors.primary};
  @media (min-width: ${breakpoints.small}) {
    color: green;
  }
`
Title.displayName = 'MyProgress.Title'

export const SubTitle = styled.h2`
  color: ${colors.secondary};
`
SubTitle.displayName = 'MyProgress.SubTitle'
