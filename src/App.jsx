import React from 'react';
import { useState, useEffect } from 'react'
import Movies from './components/Movies';
import SearchBar from './components/SearchBar';
import movieData from './utils/movies';


function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [maxLength, setMaxLength] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

useEffect(() => {

  setMovies(movieData.filter(movie => {
       return (movie.title.toUpperCase().includes(search.toUpperCase())) &&
          ([NaN,0].includes(parseInt(maxLength,10)) || parseInt(maxLength,10) >= movie.length )
   }));

  setMovies(movieData.sort((a, b) => {
        return (sortOrder === 'asc' ? a.length - b.length : b.length - a.length)

   }));
}, [search, maxLength, sortOrder]);

  const sortMovies = (direction) => {
    setSortOrder(direction);
  };
  
  return (
    <>
    
      {/* Header Bar for Searching */}
      <SearchBar 
        search={search} 
        setSearch={setSearch} 
        maxLength={maxLength} 
        setMaxLength={setMaxLength}
        sortMovies={sortMovies}
        sortOrder={sortOrder}
      />
      {/* Output the Movies */}
      <Movies movies={movies} />
    </>
  )
}

export default App