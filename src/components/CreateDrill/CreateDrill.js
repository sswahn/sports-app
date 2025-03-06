import { useState, useContext } from 'react'
import { Context } from '../../Provider'
import Select from '../Select/Select'
import { config } from '../../config'

const CreateDrill = () => {
  const [context, dispatch] = useContext(Context)
  const [preview, setPreview] = useState(undefined)
    
  const handleAges = event => {
    console.log('event.target.value: ', event.target.value)
  }

  const handleCategories = event => {
    console.log('event.target.value: ', event.target.value)
  }

  const handleImage = event => {
    const reader = new FileReader()
    reader.onload = ({ target }) => {
      setPreview(target.result)
    }
    reader.readAsDataURL(
      event.target.files[0]
    )
  }
    
  const handlePreview = event => {
    console.log('open preview modal.')
    dispatch({ type: 'preview', payload: true })
  }
  
  return (
    <div>
      <form className="create-drill">
      <h2>Create A Drill</h2>
        <input tyoe="text" placeholder="Title of drill" />
        <textarea placeholder="Description of drill."></textarea>
        <div>
          <input type="file" accept="image/*" onChange={handleImage} />
          {preview && <img className="drill-image-preview" src={preview} alt="Preview" />}
        </div>
        <div>
          <Select options={config.data.drills.ages.map((val, i) => (i === 0 ? 'Choose An Age Group' : val))} onChange={handleAges} />
          <Select options={config.data.drills.categories.map((val, i) => (i === 0 ? 'Choose A Category' : val))} onChange={handleCategories} />
        </div>
        <div>
          <button onClick={handlePreview}>Preview</button>
          <button type="submit">Submit</button>
        </div>
      </form>
      <Modal className="modal" open={context.drill} onClose={handleCloseDrill}>
        {}
      </Modal>
  </div>
  )
}

export default CreateDrill
