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
    <form className="create-drill">
      <input tyoe="text" placeholder="Title of drill" />
      <textarea placeholder="Description of drill."></textarea>
      <input type="file" />
      <div>
        <Select options={config.data.drills.ages} onChange={handleAges} />
        <br />
        <Select options={config.data.drills.categories} onChange={handleCategories} />
      </div>
      <button>Preview</button>
      <button type="submit">Submit</button>
    </form>
  )
}

export default CreateDrill
