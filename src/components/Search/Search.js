import SearchIcon from '../Icons/SearchIcon/SearchIcon'

const Search = ({ className, placeholder, onSubmit }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      <input type="search" placeholder={placeholder} />
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  )
} 

export default Search
