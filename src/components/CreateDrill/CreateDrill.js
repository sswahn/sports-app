import Select from '../Select/Select'
import { config } from '../../config'

const CreateDrill = () => {
    
  const handleAges = event => {
    console.log('event.target.value: ', event.target.value)
  }

  const handleCategories = event => {
    console.log('event.target.value: ', event.target.value)
  }
  
  return (
    <div>
      <form>
        <input tyoe="text" placeholder="Title of drill" />
        <textarea placeholder="Description of drill."></textarea>
        <input type="file" />
        <Select options={config.data.drills.ages} onChange={handleAges} />
        <Select options={config.data.drills.categories} onChange={handleCategories} />
        <button>Preview</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateDrill
