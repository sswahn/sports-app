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


  // somethings up with filtering age and categories, they dont seem to stack

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

    console.log('age: ', age) // if the above filters return an empty array then it breaks the purpose of the below condition
    
    const filtered = age.length ? age : data.drills.filter(item => item.category === value)
    
    console.log('filtered data by category:', filtered)
    
    setFilters({ ...filters, category: value })
    setDrills(filtered)
  }

  const handleSort = ({ target: { value } }) => {
    const sorted = [...drills].sort((a, b) => 
      value === 'Alphabetical' 
        ? a.title.localeCompare(b.title) 
        : new Date(b.date) - new Date(a.date)
    )
    setDrills(sorted)
  }

  const handleCount = ({ target: { value } }) => {
    console.log('event.target.value: ', value)
  }

  const handleSearch = event => {
    event.preventDefault()
    const { value } = event.currentTarget.elements[0]
    const search = value.trim().toLowerCase()
    if (!search) {
      return setDrills(drills)
    }
    const filtered = drills.filter(item =>
      Object.values(item).some(val => 
        val.toString().toLowerCase().includes(search)
      )
    )
    setDrills(filtered)
  }

  const handleRefresh = event => {
    setDrills(data.drills)
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
      <Filters 
        handleAges={handleAges} 
        handleCategories={handleCategories} 
        handleSort={handleSort} 
        handleCount={handleCount} 
        handleSearch={handleSearch} 
        handleRefresh={handleRefresh}
      />
      <DrillList drills={drills} onClick={handleDisplayDrill} />
      <Modal className="modal" open={context.drill} onClose={handleCloseDrill}>
       {drill && <Drill data={drill} />}
      </Modal>
    </div>
  )
}

export default Drills
