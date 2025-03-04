import SearchIcon from '../Icons/SearchIcon/SearchIcon'

const Search = ({ className, placeholder }) => {
  return (
    <form>
      <input className={className} type="search" placeholder={placeholder}>
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
  )
} 
