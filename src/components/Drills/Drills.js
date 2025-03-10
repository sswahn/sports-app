import { useState, useEffect } from 'react'
import Filters from '../Filters/Filters'
import DrillList from '../DrillList/DrillList'
import Modal from '../Modal/Modal'
import Drill from '../Drill/Drill'
import { navigateTo } from '../Router/navigateTo'
import { config } from '../../config'
import { data } from '../../test_data.js'

const Drills = () => {
  const [showModal, setShowModal] = useState(false)
  const [options, setOptions] = useState(config.data.drills)
  const [drills, setDrills] = useState(data.drills)
  const [drill, setDrill] = useState(undefined)
    
  const [filters, setFilters] = useState({
    age: '',
    category: '',
    sort: '',
    search: '',
    count: ''
  })
  
  const handleCreateDrill = event => {
    navigateTo('/sports-app/create-drill')
  }

  const handleDisplayDrill = event => {
    const drill = data.drills.filter(item => item.id === Number(event.currentTarget.id))[0]
    setShowModal(true)
    setDrill(drill)
  }

  const handleCloseDrill = event => {
    setShowModal(false)
    setDrill(undefined)
  }

  const handleAges = ({ target: { value } }) => {
    const category = filters.category ? data.drills.filter(item => item.category === filters.category) : []
    const filtered = category.length ? category.filter(item => item.age === value) : data.drills.filter(item => item.age === value)
    setFilters({ ...filters, age: value })
    setDrills(filtered)
  }

  const handleCategories = ({ target: { value } }) => {
    const age = filters.age ? data.drills.filter(item => item.age === filters.age) : []
    const filtered = age.length ? age.filter(item => item.category === value) : data.drills.filter(item => item.category === value)
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
    setOptions(config.data.drills)
    setFilters({
      age: '',
      category: '',
      sort: '',
      search: '',
      count: ''
    })
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
        filters={filters}
        options={options}
        handleAges={handleAges} 
        handleCategories={handleCategories} 
        handleSort={handleSort} 
        handleCount={handleCount} 
        handleSearch={handleSearch} 
        handleRefresh={handleRefresh}
      />
      <DrillList drills={drills} onClick={handleDisplayDrill} />
      <Modal className="modal" open={showModal} onClose={handleCloseDrill}>
       {drill && <Drill data={drill} />}
      </Modal>
    </div>
  )
}

export default Drills
