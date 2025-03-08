import { useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import Filters from '../Filters/Filters'
import DrillList from '../DrillList/DrillList'
import Modal from '../Modal/Modal'
import Drill from '../Drill/Drill'
import { navigateTo } from '../Router/navigateTo'
import { data } from '../../test_data.js'

const Drills = () => {
  const [context, dispatch] = useContext(Context)
  
  const handleCreateDrill = event => {
    navigateTo('/sports-app/create-drill')
  }

  const handleDisplayDrill = event => {
    // put <Drill /> inside modal and pass "data" to it
    console.log('display drill.')
  }

  const handleCloseDrill = event => {
    dispatch({ type: 'drill' })
  }

  useEffect(() => {
    return () => {
      dispatch({ type: 'drill' })
    }
  }, [])
  
  return (
    <div className="drills">
      <h1>Drill Hub</h1>
      <button className="create-btn" onClick={handleCreateDrill}>Create</button>
      <Filters />
      <DrillList data={data} onClick={handleDisplayDrill} />
      <Modal className="modal" open={context.drill} onClose={handleCloseDrill}>
       {context.drill && <Drill data={data} />}
      </Modal>
    </div>
  )
}

export default Drills
