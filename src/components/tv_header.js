import React, { Component } from "react";
import "./style/tv_header.css";
import FeaturedButton from "./featured_button";

class TVHeader extends Component {
	render() {
		return (
			<div className="tv_header">
				<FeaturedButton />
				<h3 className="tv_header_brand">TwitchViewer</h3>
				<FeaturedButton />
			</div>
		);
	}
}

export default TVHeader;
