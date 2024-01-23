import './appInfo.scss'

const AppInfo = ({ allMoviesCount, favouriteMoviesCount }) => {
  return (
    <div className='app-info'>
      <p className="text-uppercase" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>Barcha kinolar soni: { allMoviesCount }</p>
      <p className="fs-4 text-uppercase">Sevimli kinolar soni: { favouriteMoviesCount }</p>
    </div>
  )
}

export default AppInfo