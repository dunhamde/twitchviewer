import React, { Component } from "react";
import "./style/featured_btn.css";

class FeaturedButton extends Component {
	render() {
		return (
			<a onClick={this.props.onClick} id="featured_btn" href="#btn">
				Featured
			</a>
		);
	}
}

export default FeaturedButton;
