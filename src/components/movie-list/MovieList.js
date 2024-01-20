import './movieList.css'
import MovieListItem from '../movie-list-item/MovieListItem'

const MovieList = ({movies}) => {
  return (
    <ul className='movie-list'>
      {
        movies.map(movie => (
          <MovieListItem key={movie.id} {...movie} />
        ))
      }
    </ul>
  )
}

export default MovieList