import AppFilter from "../app-filter/AppFilter"
import AppInfo from "../app-info/AppInfo"
import SearchPanel from "../search-panel/SearchPanel"
import './app.css';

const App = () => {
  return (
    <div className="app">
        <div className="content">
            <AppInfo />
            <div>
                <AppFilter />
                <SearchPanel />
            </div>
        </div>
    </div>
  )
}

export default App