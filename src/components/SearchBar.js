import React, { Component } from 'react';

class SearchBar extends Component {
  state = { value: '' };

  render() {
    const { value } = this.state;
    
    return (
      <div className="search-bar">
        <input
          onChange={event => this.onInputChange(event.target.value)} 
          value={value} 
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }

  onInputChange(value) {
    this.setState({value});
    this.props.onSearchTermChange(value);
  }
}

export default SearchBar;
