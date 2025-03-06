export const config = {
  url: {
    home: '/'
  },
  api: {
    drills: '/api/v1/drills'
  },
  data: {
    drills: {
      ages : [
        'View All Ages', 
        'U7 - U9', 
        'U11 - U13', 
        'U13 and up'
      ],
      categories: [
        'View All Categories', 
        'Skating', 
        'Defense', 
        'Puck Control', 
        'Shooting', 
        'Scoring',
        'Passing',
        'Individual Skill',
        'Individual Tactic',
        'Team Tactic',
        'Checking Drill',
        'Small Area Game',
        'Warm-up Drill',
        'Goaltending Drill'
      ],
      sort: [
        'Sort By',
        'Alphabetical',
        'Date Added'
      ],
      count: [
        'Items Per Page 12',
        12,
        24,
        48
      ]
    }
  }
}
