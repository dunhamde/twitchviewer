import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getSearchLoading,
  getSearchStreams
} from "../reducers/reducer_streams";
import "./style/search.css";

class SearchResults extends Component {
  componentDidMount() {}
  renderStreams() {
    // const streams = this.props.streams;
    // if (streams) {
    //   return streams.slice(1, 4).map(stream => {
    //     return (
    //       <li key={stream.title}>
    //         <FeaturedStreamCard stream={stream} />
    //       </li>
    //     );
    //   }, this);
    // } else {
    //   return (
    //     <li className="list-group-item">
    //       <h3>Not yet bruh</h3>
    //     </li>
    //   );
    // }
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
    streams: getSearchStreams(state),
    loading: getSearchLoading(state)
  };
}

export default connect(mapStateToProps)(SearchResults);
