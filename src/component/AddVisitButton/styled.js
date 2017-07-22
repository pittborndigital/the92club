import styled from 'styled-components'
import { colors } from 'config'

export const Button = styled.button`
  background-color: ${colors.secondary};
  color: white;
  position: fixed;
  bottom: 10px;
  right: 10%;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 45px;
  cursor: pointer;
  &::after {
    content: "+";
    position: absolute;
    top: -6px;
    left: 12px;
  }
}
`
Button.displayName = 'AddVisitButton.Button'
