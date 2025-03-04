import Select from '../Select/Select'
import Search from '../Search/Search'

const ages = [
  'View All Ages', 
  'U7 - U9', 
  'U11 - U13', 
  'U13 and up'
]

const categories = [
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
]

const Filters = () => {

  const handleAges = event => {
    console.log('event.target.value: ', event.target.value)
  }
  
  return (
    <div>
      <Select options={ages} onChange={handleAges} />
      <Select options={categories} onChange={handleAges} />
      <Search ckassName="search-drills" placeholder="Search Srills" />
    </div>
  )
}

export default Filters
