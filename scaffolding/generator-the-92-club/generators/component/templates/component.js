import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Container } from './styled'

class <%= componentName %> extends Component {
  render() {
    return (
      <Container>

      </Container>
    )
  }
}

<%= componentName %>.displayName = '<%= componentName %>'

<%= componentName %>.propTypes = {

}

export default <%= componentName %>
