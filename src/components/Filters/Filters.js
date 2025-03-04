import Select from '../Select/Select'

const Filters = () => {

  const handleAges = event => {
    console.log('event.target.value: ', event.target.value)
  }
  
  return (
    <>
    <Select options={[
      'View All Ages', 
      'U7 - U9', 
      'U11 - U13', 
      'U13 and up'
    ]} onChange={handleAges} />
    <Select options={[
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
    ]} onChange={handleAges} />
    </>
  )
}

export default Filters
