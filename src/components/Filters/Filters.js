import Select from '../Select/Select'
import Search from '../Search/Search'
import { config } from '../../config'

const Filters = ({ handleAges, handleCategories, handleSort, handleCount, handleSearch }) => {
  return (
    <div>
      <Select options={config.data.drills.ages} onChange={handleAges} />
      <Select options={config.data.drills.categories} onChange={handleCategories} />
      <Select options={config.data.drills.sort} onChange={handleSort} />
      <Select options={config.data.drills.count} onChange={handleCount} />
      <Search className="search-drills" placeholder="Search Drills" onSubmit={handleSearch} />
    </div>
  )
}

export default Filters
