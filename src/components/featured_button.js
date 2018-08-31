import React, { Component } from "react";
import "./style/featured_btn.css";

class FeaturedButton extends Component {
	onClick() {
		alert("helllo :)");
	}
	render() {
		return (
			<a onClick={this.onClick()} id="featured_btn" href="#btn">
				Featured
			</a>
		);
	}
}

export default FeaturedButton;
