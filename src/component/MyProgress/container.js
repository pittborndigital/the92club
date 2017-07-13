import { connect } from 'react-redux'
import { totalNumberOfTeams, totalVisited } from 'store/reducers'
import component from './component'

const mapStateToProps = state => ({
  totalTeams: totalNumberOfTeams(state),
  totalVisited: totalVisited(state),
})

export default connect(mapStateToProps)(component)
