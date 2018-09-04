import React, { Component } from "react";
import "./style/main_stream.css";
import { connect } from "react-redux";
import { getActiveChannel } from "../reducers/reducer_streams";
import ReactTwitchEmbedVideo from "react-twitch-embed-video";

const EMBED_URL = "https://embed.twitch.tv/embed/v1.js";

class MainStream extends Component {
	static defaultProps = {
		targetID: "twitch-embed",
		width: "100%",
		height: "480",
		channel: "ninja",
		layout: "video"
	};

	render() {
		console.log("Current channel" + this.props.channel);
		return (
			<div className="mainstream">
				<ReactTwitchEmbedVideo
					layout="video"
					channel={this.props.channel}
					width="100%"
					height="480"
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
