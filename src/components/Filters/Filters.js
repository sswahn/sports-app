import { useState, useEffect } from 'react'
import Select from '../Select/Select'
import Search from '../Search/Search'
import RefreshIcon from '../Icons/RefreshIcon/RefreshIcon'

const Filters = ({ 
  filters,
  options, 
  handleAges, 
  handleCategories, 
  handleSort, 
  handleCount, 
  handleSearch, 
  handleRefresh 
}) => {
  
  return (
    <div className="filters">
      <select id="age" className="select" value={filters.age} onChange={handleAges}>
        {options.ages.map((item, index) => <option key={index} hidden={index === 0}>{item}</option>)}
      </select>
      <select id="category" className="select" value={filters.category} onChange={handleCategories}>
        {options.categories.map((item, index) => <option key={index} hidden={index === 0}>{item}</option>)}
      </select>
      <select id="sort" className="select" value={filters.sort} onChange={handleSort}>
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
