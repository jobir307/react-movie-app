import './movieAddForm.css'

const MovieAddForm = () => {
  return (
    <div className="movie-add-form">
        <h4>Yangi kino qo'shish</h4>
        <form className="add-form d-flex">
            <input type="text" placeholder='Kino nomi' className='form-control new-post-label' />
            <input type="number" placeholder="Kino necha marta ko'rilgan?" className='form-control new-post-label' />
            <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
        </form>
    </div>
  )
}

export default MovieAddForm