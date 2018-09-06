import React, { Component } from "react";
import "./style/search.css";
import { search } from "../actions/search";
import { connect } from "react-redux";
import SearchResults from "./search_results";
import { CSSTransition } from "react-transition-group";
import {
  getSearchStreams,
  getSearchLoading
} from "../reducers/reducer_streams";

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

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    console.log(this.props.streams);
    return (
      <div className="search-container">
        <form onSubmit={this.handleSubmit} className="search-form">
          <input
            placeholder="Search for streams"
            className="search-input"
            size="40"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>

        <CSSTransition
          in={this.props.loading === false}
          timeout={{
            enter: 0,
            exit: 500
          }}
          mountOnEnter
          unmountOnExit
          classNames="search"
        >
          <SearchResults />
        </CSSTransition>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: getSearchLoading(state),
    streams: getSearchStreams(state)
  };
}

export default connect(
  mapStateToProps,
  { search }
)(Search);
