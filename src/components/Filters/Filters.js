import Select from '../Select/Select'
import Search from '../Search/Search'
import { config } from '../../config'

const Filters = ({ handleAges, handleCategories, handleSort, handleCount, handleSearch }) => {

  // need to allow for combination filtering
  
  return (
    <div>
      <select id="age" className="select" onChange={handleAges}>
        {config.data.drills.ages.map((item, index) => <option key={index} hidden={index === 0}>{item}</option>)}
      </select>
      <select id="category" className="select" onChange={handleCategories}>
        {config.data.drills.categories.map((item, index) => <option key={index} hidden={index === 0}>{item}</option>)}
      </select>
      <select id="sort" className="select" onChange={handleSort}>
        {config.data.drills.sort.map((item, index) => <option key={index} hidden={index === 0}>{item}</option>)}
      </select>                  
                                           
      <Select options={config.data.drills.count} onChange={handleCount} />
      <Search className="search-drills" placeholder="Search Drills" onSubmit={handleSearch} />
    </div>
  )
}

export default Filters
