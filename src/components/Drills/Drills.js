import { useContext } from 'react'
import { Context } from '../../Provider'
import Filters from '../Filters/Filters'
import DrillList from '../DrillList/DrillList'
import { navigateTo } from '../Router/navigateTo'

const Drills = () => {
  const [context, dispatch] = useContext(Context)
  
  const handleCreateDrill = event => {
    navigateTo('/create-drill')
  }

  const handleCloseDrill = event => {
    dispatch({ type: 'drill' })
  }
  
  return (
    <div className="drills">
      <button onClick={handleCreateDrill}>Create</button>
      <Filters />
      <DrillList />
      <Modal className="camera-modal" open={context.drill} onClose={handleCloseDrill}>
        {context.drill}
      </Modal>
    </div>
  )
}

export default Drills
