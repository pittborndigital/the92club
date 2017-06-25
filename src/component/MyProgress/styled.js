import styled from 'styled-components'
import { colors, breakpoints } from 'config'

export const Container = styled.div`
  background-color: ${colors.primary};
`
Container.displayName = 'MyProgress.Container'

export const Title = styled.h1`
  color: ${colors.secondary};
  @media (min-width: ${breakpoints.small}) {
    color: green;
  }
`
Title.displayName = 'MyProgress.Title'
