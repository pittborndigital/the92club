import { connect } from 'react-redux'
import Component from './component'

const mapStateToProps = state => ({
  test: true
})

export default connect(mapStateToProps)(Component)
