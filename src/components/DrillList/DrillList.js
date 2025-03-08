import { useContext } from 'react'
import { Context } from '../../Provider'


const DrillList = ({ data }) => {
  const [context, dispatch] = useContext(Context)

  const handleDrill = event => {
    console.log('clicked: ', event.currentTarget.id)
    dispatch({ type: 'drill', payload: event.currentTarget.id })
  }
  
  return (
    <div className="drill-list">
      {data.drills.map(item => 
        <div id={item.id} onClick={handleDrill}>
          <header>
            <h2>{item.title}</h2>
          </header>
          <img src={item.image} alt={item.title} />
        </div>
      )}
    </div>
  )
}

export default DrillList
