import React, { Component } from "react";
import "./style/main_stream.css";
import { connect } from "react-redux";
import { getActiveChannel } from "../reducers/reducer_streams";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

class MainStream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0
    };
  }
  static defaultProps = {
    targetID: "twitch-embed",
    width: "100%",
    height: "480",
    channel: "ninja",
    layout: "video"
  };

  componentDidUpdate(previousProps) {
    if (previousProps.channel !== this.props.channel) {
      this.setState({
        key: this.state.key + 1
      });
    }
  }

  render() {
    console.log("Current channel" + this.props.channel);
    return (
      <div className="mainstream">
        <ReactTwitchEmbedVideo
          layout="video"
          channel={this.props.channel}
          width="100%"
          height="480"
          key={this.state.key}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channel: getActiveChannel(state)
  };
}

export default connect(mapStateToProps)(MainStream);
