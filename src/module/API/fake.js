const DB = {
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
  users: {
    u1: {
      visits: {
        v1: {
          team: 't1',
          ground: 'g1',
          datetime: '20160831T1930Z',
        },
      },
    },
  },
}

export const getData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ...DB,
      })
    }, 1200)
  })
