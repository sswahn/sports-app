export const config = {
  url: {
    home: '/'
  },
  api: {
    posts: '/api/v1/posts',
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
        'Alphabetical',
        'Date Added'
      ],
      count: [
        12,
        24,
        48
      ]
    }
  }
}
