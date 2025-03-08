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
  const [state, setState] = useState(undefined)
  
  const handleCreateDrill = event => {
    navigateTo('/sports-app/create-drill')
  }

  const handleDisplayDrill = event => {
    console.log('event.target.id: ', event.target.id)

    //console.log('', )
    
    const drill = data.drills.filter(item => item.id === event.target.id)[0]
    console.log('drill: ', drill)
    setState(drill)
    console.log('display drill.')
  }

  const handleCloseDrill = event => {
    dispatch({ type: 'drill' })
    setState(undefined)
  }

  const handleAges = event => {
    console.log('event.target.value: ', event.target.value)
    
    const filtered = data.filter(item => item.age === event.target.value)
    
    console.log('filtered data by age:', filtered)
  }

  const handleCategories = event => {
    console.log('event.target.value: ', event.target.value)
        
    const filtered = data.filter(item => item.category === event.target.value)
    
    console.log('filtered data by category:', filtered)
  }

  const handleSort = event => {
    console.log('event.target.value: ', event.target.value)
    //const sorted = data.sort((a, b) => a.name.localeCompare(b.name))
  }

  const handleCount = event => {
    console.log('event.target.value: ', event.target.value)
  }

  const handleSearch = event => {
    event.preventDefault()
    console.log('event.target.elements[0].value: ', event.target.elements[0].value)
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
      <DrillList data={data} onClick={handleDisplayDrill} />
      <Modal className="modal" open={context.drill} onClose={handleCloseDrill}>
       {state && <Drill data={state} />}
      </Modal>
    </div>
  )
}

export default Drills
