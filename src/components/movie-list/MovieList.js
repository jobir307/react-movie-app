import './movieList.css'
import MovieListItem from '../movie-list-item/MovieListItem'

const MovieList = ({movies, onDelete}) => {
  return (
    <ul className='movie-list'>
      {
        movies.map(movie => (
          <MovieListItem 
            key={movie.id} 
            {...movie}
            onDelete={() => onDelete(movie.id)}
          />
        ))
      }
    </ul>
  )
}

export default MovieList