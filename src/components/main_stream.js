import React, { Component } from "react";
import "./style/main_stream.css";
import { connect } from "react-redux";
import { getActiveChannel } from "../reducers/reducer_streams";

const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

class MainStream extends Component {
  static defaultProps = {
    targetID: "twitch-embed",
    width: "100%",
    height: "480",
    channel: "ninja",
    layout: "video"
  };

  componentDidMount() {
    let embed;
    const script = document.createElement("script");
    script.setAttribute("src", EMBED_URL);
    script.addEventListener("load", () => {
      embed = new window.Twitch.Embed(this.props.targetID, { ...this.props });
    });
    document.body.appendChild(script);
  }

  render() {
    return <div className="mainstream" id={this.props.targetID} />;
  }
}

function mapStateToProps(state) {
  return {
    channel: getActiveChannel(state)
  };
}

export default connect(mapStateToProps)(MainStream);
