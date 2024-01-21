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
        {id:1, name: 'Empire of Osman', viewers: 944, favourite: true},
        {id:2, name: 'Ertugru', viewers: 451, favourite: false},
        {id:3, name: 'Omar', viewers: 711, favourite: true}
      ]
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

  render() {
    return (
      <div className="app font-monospace">
          <div className="content">
              <AppInfo />
              <div className="search-panel">
                  <SearchPanel />
                  <AppFilter />
              </div>
              <MovieList 
                movies={this.state.movies} 
                onDelete={this.movieDelete}
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