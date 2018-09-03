import React, { Component } from "react";
import "./style/featured_streams.css";
import { fetchFeaturedStreams } from "../actions/streams";
import { connect } from "react-redux";
import { getFeaturedStreams, getIsLoading } from "../reducers/reducer_streams";
import FeaturedStreamCard from "./featured_stream_card";

class FeaturedStreams extends Component {
  componentDidMount() {
    this.props.fetchFeaturedStreams();
  }

  renderStreams() {
    const streams = this.props.streams;
    if (streams) {
      return streams.slice(1, 6).map(stream => {
        return (
          <li key={stream.title}>
            <FeaturedStreamCard
              stream={stream}
              updateActiveChannel={this.props.updateActiveChannel}
            />
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

    return <ul>{this.renderStreams()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    streams: getFeaturedStreams(state),
    loading: getIsLoading(state)
  };
}

export default connect(
  mapStateToProps,
  { fetchFeaturedStreams }
)(FeaturedStreams);
