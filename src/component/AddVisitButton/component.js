import React, { Component } from 'react'
import Link from 'redux-first-router-link'
import PropTypes from 'prop-types'

import { ADD_VISIT } from 'store/routesMap'

import { Button } from './styled'

class AddVisitButton extends Component {
  render() {
    return (
      <Link href={{ type: ADD_VISIT }}>
        <Button />
      </Link>
    )
  }
}

AddVisitButton.displayName = 'AddVisitButton'

AddVisitButton.propTypes = {}

export default AddVisitButton
