import SearchIcon from '../Icons/SearchIcon/SearchIcon'

const Search = ({ className, placeholder, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input className={className} type="search" placeholder={placeholder} />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  )
} 

export default Search
