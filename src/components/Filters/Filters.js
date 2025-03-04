import { useState } from 'react'

const Filters = () => {

  const [ages, setAges] = useState('View All Ages')

  const handleAges = event => {
    console.log('event.target.value: ', event.target.value)
    setAges(event.target.value)
  }
  
  return (
    <select value={ages} onChange={handleAges}>
      <option>U7 - U9</option>
      <option>U11 - U13</option>
      <option>U13 and up</option>
    </select>
  )
}

export default Filters
