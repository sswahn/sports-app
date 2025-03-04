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
    console.log('event.target.value: ', event.target.value)
  }
  
  return (
    <div>
      <Select options={config.data.drills.ages} onChange={handleAges} />
      <Select options={config.data.drills.categories} onChange={handleCategories} />
      <Search ckassName="search-drills" placeholder="Search Srills" onSubmit={handleSearch} />
    </div>
  )
}

export default Filters
