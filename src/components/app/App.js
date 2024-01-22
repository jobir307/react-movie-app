import { Component } from "react";
import AppFilter from "../app-filter/AppFilter"
import AppInfo from "../app-info/AppInfo"
import MovieList from "../movie-list/MovieList";
import SearchPanel from "../search-panel/SearchPanel"
import MovieAddForm from "../movie-add-form/MovieAddForm";

import './app.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [
        {id:1, name: 'Empire of Osman', viewers: 944, favourite: false, like: false},
        {id:2, name: 'Ertugru', viewers: 451, favourite: false, like: false},
        {id:3, name: 'Omar', viewers: 711, favourite: false, like: false}
      ],
      searchText: '',
      filter: 'all'
    }
  }

  movieDelete = (id) => {
    this.setState(({ movies }) => {
      /* const index = movies.findIndex(c => c.id === id)
      movies.splice(index, 1) // mutable - bu react qonunlariga xos emas!!!  */

      const newMovies = movies.filter(c => c.id !== id) // immutable - bu react qonunlariga muvofiq !!! 
      return {
        movies: newMovies
      }
    })
  }

  addForm = (item) => {
    this.setState(({ movies }) => ({
      movies: [...movies, item]
    }))
  }

  toggleHandler = (id, prop) => {
    this.setState(({ movies }) => ({
      movies: movies.map(movie => {
        if (movie.id === id) {
          return {...movie, [prop]: !movie[prop]}
        }
        return movie
      })
    }))
  }

  searchHandler = (arr, term) => {
    if (term.length === 0){
      return arr
    } else {
      return arr.filter(movie => movie.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
    }
  }

  updateSearchTextHadler = (term) => {
    this.setState({ searchText: term })
  }

  filterHandler = (arr, filter) => {
    switch (filter) {
      case 'most':
        return arr.filter(movie => movie.viewers > 800)
      case 'popular':
        return arr.filter(movie => movie.like)
      default:
        return arr;
    }
  }

  updateFilterHandler = (filter) => {
    this.setState({filter})
  } 

  render() {
    const { movies, searchText, filter } = this.state
    const allMoviesCount = movies.length
    const favouriteMoviesCount = movies.filter(movie => movie.favourite).length
    const visibleMovies = this.filterHandler(this.searchHandler(movies, searchText), filter)

    return (
      <div className="app font-monospace">
          <div className="content">
              <AppInfo 
                allMoviesCount={allMoviesCount}
                favouriteMoviesCount={favouriteMoviesCount}
              />
              <div className="search-panel">
                  <SearchPanel 
                    updateSearchTextHadler={this.updateSearchTextHadler}
                  />
                  <AppFilter
                    updateFilterHandler={this.updateFilterHandler}
                    filter={filter}
                  />
              </div>
              <MovieList 
                movies={visibleMovies} 
                onDelete={this.movieDelete}
                toggleHandler={this.toggleHandler}
              />
              <MovieAddForm 
                addForm={this.addForm}
              />
          </div>
      </div>
    )
  }

}

export default App