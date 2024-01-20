import AppFilter from "../app-filter/AppFilter"
import AppInfo from "../app-info/AppInfo"
import MovieList from "../movie-list/MovieList";
import SearchPanel from "../search-panel/SearchPanel"
import MovieAddForm from "../movie-add-form/MovieAddForm";
import './app.css';

const App = () => {
  const movies = [
    {id:1, name: 'Empire of Osman', viewers: 944, favourite: true},
    {id:2, name: 'Ertugru', viewers: 451, favourite: false},
    {id:3, name: 'Omar', viewers: 711, favourite: true}
  ]

  return (
    <div className="app font-monospace">
        <div className="content">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <MovieList movies={movies} />
            <MovieAddForm />
        </div>
    </div>
  )
}

export default App