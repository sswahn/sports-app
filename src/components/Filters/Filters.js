import { useState, useEffect } from 'react'
import Select from '../Select/Select'
import Search from '../Search/Search'
import RefreshIcon from '../Icons/RefreshIcon/RefreshIcon'

const Filters = ({ options, handleAges, handleCategories, handleSort, handleCount, handleSearch, handleRefresh }) => {
  const [age, setAge] = useState('')
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState('')

  useEffect(() => {
    setAge('')
    setCategory('')
    setSort('')
  }, [options])
  
  return (
    <div className="filters">
      <select id="age" className="select" value={age} onChange={handleAges}>
        {options.ages.map((item, index) => <option key={index} hidden={index === 0}>{item}</option>)}
      </select>
      <select id="category" className="select" value={category} onChange={handleCategories}>
        {options.categories.map((item, index) => <option key={index} hidden={index === 0}>{item}</option>)}
      </select>
      <select id="sort" className="select" value={sort} onChange={handleSort}>
        {options.sort.map((item, index) => <option key={index} hidden={index === 0}>{item}</option>)}
      </select>                  
                                           
      <Select options={options.count} onChange={handleCount} />
      <Search className="search-drills" placeholder="Search Drills" onSubmit={handleSearch} />

      <button className="refresh-btn" type="button" onClick={handleRefresh}>
        <RefreshIcon />
        <div className="tooltip" role="tooltip">Reset</div>
      </button>
    </div>
  )
}

export default Filters
