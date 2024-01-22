import './movieList.css'
import MovieListItem from '../movie-list-item/MovieListItem'

const MovieList = ({movies, onDelete, toggleHandler}) => {
  return (
    <ul className='movie-list'>
      {
        movies.map(movie => (
          <MovieListItem 
            key={movie.id} 
            {...movie}
            onDelete={() => onDelete(movie.id)}
            onToggleHandler={ (e) => toggleHandler(movie.id, e.currentTarget.getAttribute('data-toggle')) }
          />
        ))
      }
    </ul>
  )
}

export default MovieList