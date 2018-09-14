import React, { Component } from 'react'

class Search extends Component {
  state = {
    query: '',
  }

  handleChange = () => {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }

  render() {
    return (
      <span>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          width="90"
          onChange={this.handleChange} />
      </span>
    );
  }
}

export default Search