import Filters from '../Filters/Filters'
import DrillList from '../DrillList/DrillList'
import { navigateTo } from '../Router/navigateTo'

const Drills = () => {

  const handleCreateDrill = event => {
    navigateTo('/create-drill')
  }
  
  return (
    <div className="drills">
      <button onClick={handleCreateDrill}>Create</button>
      <Filters />
      <DrillList />
    </div>
  )
}

export default Drills
