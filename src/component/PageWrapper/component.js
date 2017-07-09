import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { OuterContainer, InnerContainer } from './styled'

class PageWrapper extends Component {
  render() {
    const { children } = this.props
    return (
      <OuterContainer>
        <InnerContainer>
          {children}
        </InnerContainer>
      </OuterContainer>
    )
  }
}

PageWrapper.displayName = 'PageWrapper'

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageWrapper
