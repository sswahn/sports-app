import { useContext } from 'react'
import { Context } from '../../Provider'


const DrillList = () => {
  const [context, dispatch] = useContext(Context)

  const handleDrill = event => {
    console.log('clicked: ', event.currentTarget.id)
    dispatch({ type: 'drill', payload: event.currentTarget.id })
  }
  
  return (
    <div className="drill-list">
      <div id="1" onClick={handleDrill}>
        <header>
          <h2>{data.title}</h2>
        </header>
        <img src={data.image} alt={data.title} />
      </div>
    </div>
  )
}

export default DrillList
