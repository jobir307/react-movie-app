import AppFilter from "../app-filter/AppFilter"
import AppInfo from "../app-info/AppInfo"
import MovieList from "../movie-list/MovieList";
import SearchPanel from "../search-panel/SearchPanel"
import './app.css';

const App = () => {
  return (
    <div className="app font-monospace">
        <div className="content">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <MovieList />
        </div>
    </div>
  )
}

export default App