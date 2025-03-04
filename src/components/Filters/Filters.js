import Select from '../Select/Select'
import Search from '../Search/Search'
import { config } from '../../config'

const Filters = () => {

  const handleAges = event => {
    console.log('event.target.value: ', event.target.value)
  }

  const handleCategories = event => {
    console.log('event.target.value: ', event.target.value)
  }

  const handleSearch = event => {
    event.preventDefault()
    console.log('event.target.value: ', event.target.value)
  }
  
  return (
    <div>
      <Select options={config.data.drills.ages} onChange={handleAges} />
      <Select options={config.data.drills.categories} onChange={handleCategories} />
      <Search className="search-drills" placeholder="Search Drills" onSubmit={handleSearch} />
    </div>
  )
}

export default Filters
