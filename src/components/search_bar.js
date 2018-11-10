import React, { Component } from "react";
import _ from "lodash";
import { search } from "../actions/search";
import { connect } from "react-redux";
import SearchResults from "./search_results";
import { CSSTransition } from "react-transition-group";
import onClickOutside from "react-onclickoutside";
import { getSearchStreams, getSearchLoading } from "../selectors/selectors.js";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      showResults: false
    };
    this.debounceSearch = _.debounce(this.props.search, 300);
  }

  onInputChange = event => {
    this.setState({
      term: event.target.value,
      showResults: true
    });
    if (this.state.term !== "") {
      this.debounceSearch(this.state.term);
    }
  };

  handleSubmit(e) {
    e.preventDefault();
  }

  handleClickOutside = () => {
    this.setState({
      showResults: false
    });
  };

  handleSearchClick = () => {
    this.setState({
      showResults: true
    });
  };

  render() {
    return (
      <SearchContainer>
        <form onSubmit={this.handleSubmit} className="search-form">
          <input
            placeholder="Search for streams"
            className="search-input"
            size="40"
            value={this.state.term}
            onClick={this.handleSearchClick}
            onChange={this.onInputChange}
          />
        </form>

        <CSSTransition
          in={
            this.props.loading === false &&
            this.state.term &&
            this.state.showResults
          }
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
      </SearchContainer>
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
)(onClickOutside(Search));
