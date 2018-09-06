import React, { Component } from "react";
import { connect } from "react-redux";
import { activeChannelUpdate } from "../actions/header";
import {
  getSearchLoading,
  getSearchStreams
} from "../reducers/reducer_streams";
import "./style/search.css";

const _SearchResultCard = props => (
  <div className="search-card">
    <img
      onClick={() => {
        props.activeChannelUpdate(props.stream.channel.name);
      }}
      className="search-card-img"
      src={props.stream.preview.small}
      alt={props.stream.title}
    />
    <p className="search-card-info">
      <a href={props.stream.channel.url}>{props.stream.channel.status}</a>
      {props.stream.game}
      <br />
      {props.stream.channel.display_name}
    </p>
  </div>
);

class SearchResults extends Component {
  renderStreams() {
    const streams = this.props.streams;
    if (streams) {
      return streams.slice(1, 6).map(stream => {
        return (
          <li key={stream.title}>
            <SearchResultCard stream={stream} />
          </li>
        );
      }, this);
    } else {
      return (
        <li className="list-group-item">
          <h3>Not yet bruh</h3>
        </li>
      );
    }
  }

  render() {
    if (this.props.loading === true) {
      return <div />;
    }
    return <ul className="search-results-list">{this.renderStreams()}</ul>;
    // return <div className="search-results">Search</div>;
  }
}

function mapStateToProps(state) {
  return {
    streams: getSearchStreams(state),
    loading: getSearchLoading(state)
  };
}

export const SearchResultCard = connect(
  null,
  { activeChannelUpdate }
)(_SearchResultCard);

export default connect(mapStateToProps)(SearchResults);
