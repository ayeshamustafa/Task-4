const SearchBar = ({search, setSearch, maxLength, setMaxLength, sortMovies, sortOrder}) => {
    
    const searchHandler = (e) => {
        setSearch(e.target.value);
    }

    const maxLengthHandler = (e) => {
        setMaxLength(e.target.value);
    }

    const sortHandler = () => {
        sortMovies(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    return <>
        <label htmlFor="search">Search Query </label>
        <input type="text" name="search" onChange={searchHandler} value={search} />
        <label htmlFor="max-length"> Max Length </label>
        <input type="number" name="max-length" onChange={maxLengthHandler} value={maxLength} />
        <button onClick={sortHandler}>
        Sort by Length in {sortOrder === 'Ascending' ? 'Descending' : 'Ascending'} Order
      </button>
    </>
}

export default SearchBar;