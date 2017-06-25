import styled from 'styled-components'
import { colors, breakpoints } from 'config'

export const Container = styled.div`
  background-color: ${colors.primary};
`

export const Title = styled.h1`
  color: ${colors.secondary};
  @media (min-width: ${breakpoints.small}) {
    color: green;
  }
`
