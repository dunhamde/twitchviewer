import React, { Component } from "react";
import "./style/recent_streams.css";

class RecentStreams extends Component {
  render() {
    return (
      <ul className="recent_streams_list">
        <li className="recent_stream">ninja</li>
        <li className="recent_stream">loltyler1</li>
        <li className="recent_stream">reckful</li>
        <li className="recent_stream">mitchjones</li>
      </ul>
    );
  }
}

export default RecentStreams;
