import React, { Component } from "react";
import { Transition } from "react-transition-group";
import anime from "animejs";
import "./style/featured_streams.css";

class FeaturedStreams extends Component {
	constructor() {
		super();

		this.duration = 2000;
		this.state = {
			in: false
		};

		setTimeout(() => {
			this.setState({
				in: true
			});
		}, 2000);

		setTimeout(() => {
			this.setState({
				in: false
			});
		}, 6000);
	}

	render() {
		return (
			<Transition
				in={this.state.in}
				timeout={this.duration}
				mountOnEnter
				unmountOnExit
			>
				{status => {
					return (
						<div className={"featured_streams trans-" + status}>
							Featured Streams
						</div>
					);
				}}
			</Transition>
		);
	}
}

export default FeaturedStreams;
