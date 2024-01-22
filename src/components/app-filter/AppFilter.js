import './appFilter.css'

const AppFilter = ({ updateFilterHandler, filter }) => {
  const btnsArr = [
    {name: 'all', label: 'Barcha kinolar'},
    {name: 'popular', label: 'Mashhur kinolar'},
    {name: 'most', label: 'Eng ko\'p ko\'rilgan kinolar'},
  ]

  return (
    <div className="btn-group app-filter">
      {
        btnsArr.map(item => (
          <button 
            key={item.name} 
            className={`btn ${item.name === filter ? 'btn-dark' : 'btn-outline-dark'}`}
            type="button"
            name={item.name}
            onClick={() => updateFilterHandler(item.name)}
          >
            {item.label}
          </button>
        ))
      }
    </div>
  )
}

export default AppFilter