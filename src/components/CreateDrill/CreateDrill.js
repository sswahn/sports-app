import Select from '../Select/Select'
import { config } from '../../config'

const CreateDrill = () => {
    
  const handleAges = event => {
    console.log('event.target.value: ', event.target.value)
  }

  const handleCategories = event => {
    console.log('event.target.value: ', event.target.value)
  }
  
  const handlePreview = event => {
    console.log('open preview modal.')
  }
  
  return (
    <form className="create-drill">
      <h2>Create A Drill</h2>
      <input tyoe="text" placeholder="Title of drill" />
      <textarea placeholder="Description of drill."></textarea>
      <input type="file" />
      <div>
        {/* need ot change default text of select */}
        <Select options={config.data.drills.ages} onChange={handleAges} />
        <Select options={config.data.drills.categories} onChange={handleCategories} />
      </div>
      <div>
        <button onClick={handlePreview}>Preview</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default CreateDrill
