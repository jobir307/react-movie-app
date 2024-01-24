import { useEffect, useState } from "react";
import AppFilter from "../app-filter/AppFilter"
import AppInfo from "../app-info/AppInfo"
import MovieList from "../movie-list/MovieList";
import SearchPanel from "../search-panel/SearchPanel"
import MovieAddForm from "../movie-add-form/MovieAddForm";

import './app.css';

const App = () => {
  const [movies, setMovies] = useState([{
    id: '',
    name: '',
    like: false,
    favourite: false,
    viewers: ''
  }])
  const [searchText, setSearchText] = useState('')
  const [filter, setFilter] = useState('all')

  const movieDelete = (id) => {
    setMovies(() => (
      movies.filter(c => c.id !== id) // immutable - bu react qonunlariga muvofiq !!! 
    ))
  }

  const addForm = (item) => {
    setMovies([...movies, item])
  }

  const toggleHandler = (id, prop) => {
    setMovies(movies.map(movie => {
        if (movie.id === id) {
          return {...movie, [prop]: !movie[prop]}
        }
        return movie
      }))
  }

  const searchHandler = (arr, term) => {
    if (term.length === 0){
      return arr
    } else {
      return arr.filter(movie => movie.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
    }
  }

  const updateSearchTextHadler = (term) => {
    setSearchText(term)
  }

  const filterHandler = (arr, filter) => {
    switch (filter) {
      case 'most':
        return arr.filter(movie => movie.viewers > 800)
      case 'popular':
        return arr.filter(movie => movie.like)
      default:
        return arr;
    }
  }

  const updateFilterHandler = (filter) => {
    setFilter(filter)
  }
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=30')
    .then(response => response.json())
    .then(moviesList => {
      const newArr = moviesList.map(movie => ({
        id: movie.id,
        name: movie.title,
        like: false,
        favourite: false,
        viewers: Math.floor(Math.random() * 1500)
      }))
      setMovies(newArr)
    })
  }, [])
  const allMoviesCount = movies.length
  const favouriteMoviesCount = movies.filter(movie => movie.favourite).length
  const visibleMovies = filterHandler(searchHandler(movies, searchText), filter)

  return (
    <div className="app font-monospace">
        <div className="content">
            <AppInfo 
              allMoviesCount={allMoviesCount}
              favouriteMoviesCount={favouriteMoviesCount}
            />
            <div className="search-panel">
                <SearchPanel 
                  updateSearchTextHadler={updateSearchTextHadler}
                />
                <AppFilter
                  updateFilterHandler={updateFilterHandler}
                  filter={filter}
                />
            </div>
            <MovieList 
              movies={visibleMovies} 
              onDelete={movieDelete}
              toggleHandler={toggleHandler}
            />
            <MovieAddForm 
              addForm={addForm}
            />
        </div>
    </div>
  )
}

export default App