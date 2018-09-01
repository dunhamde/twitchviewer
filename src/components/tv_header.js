import React, { Component } from "react";
import "./style/tv_header.css";
import FeaturedButton from "./featured_button";
import FeaturedStreams from "./featured_streams";

class TVHeader extends Component {
	constructor(props) {
		super(props);
		this.showFeaturedStreams = this.showFeaturedStreams.bind(this);
		this.hideFeaturedStreams = this.hideFeaturedStreams.bind(this);
		this.toggleFeaturedStreams = this.toggleFeaturedStreams.bind(this);
		this.state = {
			showFeatured: false
		};
	}

	showFeaturedStreams() {
		this.setState({
			showFeatured: true
		});
	}
	hideFeaturedStreams() {
		this.setState({
			showFeatured: false
		});
	}

	toggleFeaturedStreams() {
		this.setState({
			showFeatured: !(this.state.showFeatured)
		})
	}


	render() {
		return (
			<div className="header_container">
				<div className="tv_header">
					<FeaturedButton onClick={this.toggleFeaturedStreams} />
					<h3 className="tv_header_brand">TwitchViewer</h3>
					<FeaturedButton />
				</div>
				{this.state.showFeatured && <FeaturedStreams />}
				
			</div>
		);
	}
}

export default TVHeader;
