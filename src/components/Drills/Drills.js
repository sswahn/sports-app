import { useState, useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import Filters from '../Filters/Filters'
import DrillList from '../DrillList/DrillList'
import Modal from '../Modal/Modal'
import Drill from '../Drill/Drill'
import { navigateTo } from '../Router/navigateTo'
import { data } from '../../test_data.js'

const Drills = () => {
  const [context, dispatch] = useContext(Context)
  const [drills, setDrills] = useState(data.drills)
  const [drill, setDrill] = useState(undefined)
  const [filters, setFilters] = useState({
    age: undefined,
    category: undefined,
    sort: undefined,
    search: undefined,
    count: undefined
  })
  
  const handleCreateDrill = event => {
    navigateTo('/sports-app/create-drill')
  }

  const handleDisplayDrill = event => {
    const drill = data.drills.filter(item => item.id === Number(event.currentTarget.id))[0]
    dispatch({ type: 'drill', payload: true })
    setDrill(drill)
  }

  const handleCloseDrill = event => {
    dispatch({ type: 'drill', payload: false })
    setDrill(undefined)
  }


  const handleAges = ({ target: { value } }) => {

    console.log('active filters: ', filters)

    const category = filters.category ? data.drills.filter(item => item.category === filters.category).filter(item => item.age === value) : []
    // other filters here
    
    console.log('category: ', category)

    const filtered = category.length ? category : data.drills.filter(item => item.age === value)
    
    console.log('filtered data by age:', filtered)
    
    setFilters({ ...filters, age: value })
    setDrills(filtered)
    
  }

  const handleCategories = ({ target: { value } }) => {

    console.log('active filters: ', filters)

    const age = filters.age ? data.drills.filter(item => item.age === filters.age).filter(item => item.category === value) : []

    console.log('age: ', age)
    
    const filtered = age.length ? age : data.drills.filter(item => item.category === value)
    
    console.log('filtered data by category:', filtered)
    
    setFilters({ ...filters, category: value })
    setDrills(filtered)
  }

  const handleSort = event => {
    const sorted = [...data.drills].sort((a, b) => 
      key === 'Alphabetically' 
        ? a.title.localeCompare(b.title) 
        : new Date(a.date) - new Date(b.date)
    )
    setDrills(sorted)
  }

  const handleCount = event => {
    console.log('event.target.value: ', event.target.value)
  }

  const handleSearch = event => {
    event.preventDefault()
    const filtered = data.drills.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(search.toLowerCase())
      )
    )
    setDrills(filtered)
  }
  

  useEffect(() => {
    return () => {
      handleCloseDrill()
    }
  }, [])
  
  return (
    <div className="drills">
      <h1>Drill Hub</h1>
      <button className="create-btn" onClick={handleCreateDrill}>Create</button>
      <Filters handleAges={handleAges} handleCategories={handleCategories} handleSort={handleSort} handleCount={handleCount} handleSearch={handleSearch} />
      <DrillList drills={drills} onClick={handleDisplayDrill} />
      <Modal className="modal" open={context.drill} onClose={handleCloseDrill}>
       {drill && <Drill data={drill} />}
      </Modal>
    </div>
  )
}

export default Drills
