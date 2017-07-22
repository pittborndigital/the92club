const NAV_PREFIX = 'NAVIGATE'

export const ACTION_HOME = `${NAV_PREFIX}_HOME`
export const ACTION_LEAGUE = `${NAV_PREFIX}_LEAGUE`
export const ACTION_404 = `${NAV_PREFIX}_404`
export const ADD_VISIT = `${NAV_PREFIX}_ADD_VISIT`

export default {
  [ACTION_HOME]: '/',
  [ACTION_LEAGUE]: '/league/:leagueId',
  [ADD_VISIT]: '/add-visit',
  [ACTION_404]: '/404',
}
