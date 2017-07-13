const visits = {
  v1: {
    team: 't1',
    datetime: '20160831T1930Z',
  },
}

export default () => visits

// *** SELECTORS

export const totalVisited = (state) => {
  const visitIds = Object.keys(state)
  const teamsVisited = []
  visitIds.forEach((visitId) => {
    if (teamsVisited.indexOf(state[visitId].team) === -1) {
      teamsVisited.push(state[visitId].team)
    }
  })
  return teamsVisited.length
}
