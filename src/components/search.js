import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      term: ""
    };
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="input-group">
        <input
          placeholder="Search for streams"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

export default Search;
