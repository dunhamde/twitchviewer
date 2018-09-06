import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getSearchLoading,
  getSearchStreams
} from "../reducers/reducer_streams";
import "./style/search.css";

const SearchResultCard = props => (
  <div className="search-card">
    <img
      onClick={() => {
        props.activeChannelUpdate(props.stream.channel.name);
      }}
      className="search_card_img"
      src={props.stream.preview.small}
      alt={props.stream.title}
    />
    <p className="search-card-title">
      <a href={props.stream.channel.url}>{props.stream.channel.name}</a>
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

export default connect(mapStateToProps)(SearchResults);
