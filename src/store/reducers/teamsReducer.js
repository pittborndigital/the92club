/*
 * Data Structures:
 *
 *     Team
 *  (eff dated)
 *    /    \
 * Ground  League
 *
 */

const db = {
  teams: {
    t1: {
      name: 'Arsenal',
      ground: 'g1',
      league: 'l1',
    },
    t2: {
      name: 'Tottenham Hotspur',
      aka: 'Spurs',
      ground: 'g2',
      league: 'l1',
    },
    t3: {
      name: 'Chelsea',
      ground: 'g3',
      league: 'l1',
    },
    t4: {
      name: 'Manchester United',
      ground: 'g4',
      league: 'l1',
    },
    t5: {
      name: 'Leeds United',
      ground: 'g5',
      league: 'l2',
    },
  },
  grounds: {
    g1: {
      name: 'Emirates Stadium',
      lat: '',
      lng: '',
    },
    g2: {
      name: 'Wembley Stadium',
      lat: '',
      lng: '',
    },
    g3: {
      name: 'Stamford Bridge',
      lat: '',
      lng: '',
    },
    g4: {
      name: 'Old Trafford',
      lat: '',
      lng: '',
    },
    g5: {
      name: 'Elland Road',
      lat: '',
      lng: '',
    },
  },
  leagues: {
    l1: {
      name: 'Premier League',
    },
    l2: {
      name: 'Championship',
    },
  },
}

const teams = {}
Object.keys(db.teams).forEach((teamId) => {
  const team = db.teams[teamId]
  teams[teamId] = {
    ...team,
    league: {
      leagueId: team.league,
      ...db.leagues[team.league],
    },
    ground: {
      groundId: team.ground,
      ...db.grounds[team.ground],
    },
  }
})

export default () => teams

// *** SELECTORS

export const totalNumberOfTeams = state => Object.keys(state).length
