
const Filters = () => {

  const handleAges = event => {
    console.log('event.target.value: ', event.target.value)
  }
  
  return (
    <select className="select" onChange={handleAges}>
      <option hidden>View All Ages</option>
      <option>U7 - U9</option>
      <option>U11 - U13</option>
      <option>U13 and up</option>
    </select>
  )
}

export default Filters
