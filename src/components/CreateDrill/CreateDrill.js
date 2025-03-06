import Select from '../Select/Select'
import { config } from '../../config'

const CreateDrill = () => {
    
  const handleAges = event => {
    console.log('event.target.value: ', event.target.value)
  }

  const handleCategories = event => {
    console.log('event.target.value: ', event.target.value)
  }

  const handleImage = event => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = e => {
            const preview = document.getElementById("preview")
            preview.src = e.target.result
            preview.style.display = "block"
        }
      reader.readAsDataURL(file)
    }
  }
    
  const handlePreview = event => {
    console.log('open preview modal.')
  }
  
  return (
    <form className="create-drill">
      <h2>Create A Drill</h2>
      <input tyoe="text" placeholder="Title of drill" />
      <textarea placeholder="Description of drill."></textarea>
      <input type="file" accept="image/*" onChange={handleImage} />
      <div id="preview" className="drill-image-preview"></div>
      <div>
        <Select options={config.data.drills.ages.map((val, i) => (i === 0 ? 'Choose An Age Group' : val))} onChange={handleAges} />
        <Select options={config.data.drills.categories.map((val, i) => (i === 0 ? 'Choose A Category' : val))} onChange={handleCategories} />
      </div>
      <div>
        <button onClick={handlePreview}>Preview</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default CreateDrill
