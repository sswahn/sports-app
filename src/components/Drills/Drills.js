import { useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import Filters from '../Filters/Filters'
import DrillList from '../DrillList/DrillList'
import Modal from '../Modal/Modal'
import { navigateTo } from '../Router/navigateTo'

const Drills = () => {
  const [context, dispatch] = useContext(Context)
  
  const handleCreateDrill = event => {
    navigateTo('/sports-app/create-drill')
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
      <button className="primary" onClick={handleCreateDrill}>Create</button>
      <Filters />
      <DrillList />
      <Modal className="modal" open={context.drill} onClose={handleCloseDrill}>
        {context.drill}
      </Modal>
    </div>
  )
}

export default Drills
