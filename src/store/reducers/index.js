import teamsReducer, * as fromTeams from './teamsReducer'
import visitsReducer, * as fromVisits from './visitsReducer'

export default {
  teams: teamsReducer,
  visits: visitsReducer,
}

// *** TEAMS SELECTORS
export const totalNumberOfTeams = state => fromTeams.totalNumberOfTeams(state.teams)

// *** VISITS SELECTORS
export const totalVisited = state => fromVisits.totalVisited(state.visits)
