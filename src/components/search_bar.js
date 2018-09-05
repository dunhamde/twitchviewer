import React, { Component } from "react";
import "./style/search.css";
import { search } from "../actions/search";
import { connect } from "react-redux";
import SearchResults from "./search_results";

class Search extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.timeout = 0;
    this.state = {
      term: ""
    };
  }

  onInputChange(event) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.setState({
      term: event.target.value
    });
    if (this.state.term !== "") {
      this.timeout = setTimeout(() => {
        this.props.search(this.state.term);
      }, 300);
    }
  }

  render() {
    return (
      <div className="search_form">
        <form onSubmit={this.handleSubmit} className="input-group">
          <input
            placeholder="Search for streams"
            className="form-control"
            size="40"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
        <SearchResults />
      </div>
    );
  }
}

export default connect(
  null,
  { search }
)(Search);
