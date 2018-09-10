import React, { Component } from "react";
import { connect } from "react-redux";
import { updateActiveChannel } from "../actions/header";
import {
  getSearchLoading,
  getSearchStreams
} from "../reducers/reducer_streams";
import styled from "styled-components";

const SearchCard = styled.div`
  width: 314px;
  display: inline-flex;
  background-color: black;
  border: 1px solid purple;
`;

const SearchCardImage = styled.img`
  height: 45px;
  width: 80px;
`;

const SearchCardInfo = styled.p`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: white;
`;

const SearchResultsList = styled.ul`
  position: fixed;
  margin-top: 28px;
  max-height: 0px;
  list-style: none;
  -webkit-padding-start: 0px;
  -webkit-transition: max-height 0.5s ease;
  -moz-transition: max-height 0.5s ease;
  -o-transition: max-height 0.5s ease;
  transition: max-height 0.5s ease;
  display: flex;
  flex-direction: column;

  &.search-enter-done {
    max-height: 500px;
  }
  &.search-exiting {
    max-height: 0px;
  }
`;

const _SearchResultCard = props => (
  <SearchCard>
    <SearchCardImage
      onClick={() => {
        props.updateActiveChannel(props.stream.channel.name);
      }}
      src={props.stream.preview.small}
      alt={props.stream.title}
    />
    <SearchCardInfo>
      <a href={props.stream.channel.url}>{props.stream.channel.status}</a>
      {props.stream.game}
      <br />
      {props.stream.channel.display_name}
    </SearchCardInfo>
  </SearchCard>
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
    return <SearchResultsList>{this.renderStreams()}</SearchResultsList>;
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
  { updateActiveChannel }
)(_SearchResultCard);

export default connect(mapStateToProps)(SearchResults);
