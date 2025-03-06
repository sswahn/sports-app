import { useState, useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import Select from '../Select/Select'
import Drill from '../Drill/Drill'
import Modal from '../Modal/Modal'
import { config } from '../../config'
import storage from '@sswahn/storage'

const CreateDrill = () => {
  const [context, dispatch] = useContext(Context)
  const [data, setData] = useState({
    title: storage.local.get('drill')?.title || '',
    description: storage.local.get('drill')?.description || '',
    subdescription: storage.local.get('drill')?.subdescription || '',
    image: undefined,
    age: storage.local.get('drill')?.age || '',
    category: storage.local.get('drill')?.category || ''
  })

  const store = (id, value) => {
    const drill = storage.local.get('drill')
    storage.local.set('drill', { ...drill, [id]: value })
  }

  const handleOnChange = ({ target }) => {
    setData({ ...data, [target.id]: target.value })
    store(target.id, target.value)
  }

  const handleImage = event => {
    const reader = new FileReader()
    reader.onload = ({ target }) => {
      setData({ ...data, image: target.result })
    }
    reader.readAsDataURL(
      event.target.files[0]
    )
  }
    
  const handlePreview = event => {
    dispatch({ type: 'preview', payload: true })
  }

  const handleClosePreview = event => {
    dispatch({ type: 'preview', payload: false })
  }

  const handleSubmit = event => {
    // validate values
    // post server
    // check response
    // redirect to drill list
  }

  useEffect(() => {
    return () => {
      dispatch({ type: 'preview', payload: false })
    }
  }, [])
  
  return (
    <div>
      <form className="create-drill" onSubmit={handleSubmit}>
      <h2>Create A Drill</h2>
        <input id="title" tyoe="text" placeholder="Title of drill" onChange={handleOnChange} value={data.title} />
        <textarea id="description" placeholder="Description of drill." onChange={handleOnChange} value={data.description}></textarea>
        <textarea id="subdescription" placeholder="Key teaching points." onChange={handleOnChange} value={data.subdescription}></textarea>
        <div>
          <input id="image" type="file" accept="image/*" onChange={handleImage} />
          {data.image && <img className="drill-image-preview" src={data.image} alt="Image Preview" />}
        </div>
        <div>
          <Select id="age" options={config.data.drills.ages.map((val, i) => (i === 0 ? 'Choose An Age Group' : val))} onChange={handleOnChange} value={data.age} />
          <Select id="category" options={config.data.drills.categories.map((val, i) => (i === 0 ? 'Choose A Category' : val))} onChange={handleOnChange} value={data.category} />
        </div>
        <div>
          <button type="button" onClick={handlePreview}>Preview</button>
          <button type="submit">Submit</button>
        </div>
      </form>
      <Modal className="modal" open={context.drill} onClose={handleClosePreview}>
        <Drill data={data} />
      </Modal>
  </div>
  )
}

export default CreateDrill
