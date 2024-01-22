import { Component } from 'react'
import './searchPanel.css'

class SearchPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      term: ''
    }
  }

  searchHandler = (e) => {
    const term = e.target.value
    this.setState({ term })
    this.props.updateSearchTextHadler(term)
  }

  render() {
    return (
      <input 
        type="text" 
        className="form-control search-input" 
        placeholder="Kinolarni qidirish" 
        onChange={this.searchHandler}
        value={this.state.term}  
      />
  
    )
  }
}

export default SearchPanel