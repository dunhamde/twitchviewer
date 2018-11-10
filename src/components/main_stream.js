import React, { Component } from "react";
import { connect } from "react-redux";
import { getActiveChannel } from "../selectors/selectors.js";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import styled from "styled-components";

const CurrentChannel = styled.div`
  margin: 0 auto;
  margin-top: 76px;
`;

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
    return (
      <CurrentChannel>
        <ReactTwitchEmbedVideo
          layout="video"
          channel={this.props.channel}
          width="100%"
          height="480"
          autoplay="false"
          key={this.state.key}
        />
      </CurrentChannel>
    );
  }
}

function mapStateToProps(state) {
  return {
    channel: getActiveChannel(state)
  };
}

export default connect(mapStateToProps)(MainStream);
