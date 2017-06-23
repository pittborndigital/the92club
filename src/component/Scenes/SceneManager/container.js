import { connect } from 'react-redux'
import Component from './component'

const mapStateToProps = state => ({
  location: state.location,
})

export default connect(mapStateToProps)(Component)
