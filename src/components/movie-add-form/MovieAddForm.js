import { Component} from 'react'
import { v4 as uuidv4 } from 'uuid';
import './movieAddForm.css'

class MovieAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      viewers: ''
    }
  }

  changeHandlerInput = (e) => {
    this.setState({  
      [e.target.name]: e.target.value
    })
  }

  addFormHandler = (event) => {
    event.preventDefault()
    if (this.state.name.length > 0 && this.state.viewers.length > 0){
      this.props.addForm({name: this.state.name, viewers: this.state.viewers, id: uuidv4(), favourite: false, like: false})
      this.setState({
        name: '',
        viewers: ''   
      })
    }
  }

  render(){
    const {name, viewers} = this.state

    return (
      <div className="movie-add-form">
          <h4>Yangi kino qo'shish</h4>
          <form className="add-form d-flex" onSubmit={this.addFormHandler}>
              <input 
                type="text" 
                placeholder='Kino nomi' 
                className='form-control new-post-label' 
                onChange={this.changeHandlerInput} 
                name='name'
                value={name}
                autoComplete='off'
              />
              <input 
                type="number" 
                placeholder="Kino necha marta ko'rilgan?" 
                className='form-control new-post-label' 
                onChange={this.changeHandlerInput} 
                name='viewers'
                value={viewers}
              />
              <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
          </form>
      </div>
    )
  }
}

export default MovieAddForm