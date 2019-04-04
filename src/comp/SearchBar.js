import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SearchBar extends Component {

  state = {
    value: ''
  }

  doSearch = (event) => {
    this.timeout = ''
    this.setState({
      value: event.target.value
    })

    clearTimeout(this.timeout)

    this.timeout = setTimeout( () => {
      this.props.callback(this.state.value)
    }, 500) 

  }


  render() {
    return (
      <div className="search">
        <div className="search_content">
          <FontAwesomeIcon icon="search" className="iconsearch" />
          <input 
            type="text" 
            placeholder="Search"
            onChange={this.doSearch}
            value={this.state.value}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar