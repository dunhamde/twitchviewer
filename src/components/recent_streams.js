import React, { Component } from "react";
import styled from "styled-components";

const RecentStreamsList = styled.ul`
	float: right;
	width: 25%;
	background-color: black;
	height: 0px;
	overflow: hidden;
	-webkit-transition: height 0.5s ease;
	-moz-transition: height 0.5s ease;
	-o-transition: height 0.5s ease;
	transition: height 0.5s ease;
	display: flex;
	align-items: center;

	&.recent-enter-done {
		height: 300px;
		background-color: black;
	}
	&.recent-exiting {
		height: 0px;
	}
`;

class RecentStreams extends Component {
	render() {
		return (
			<RecentStreamsList>
				<li>ninja</li>
				<li>loltyler1</li>
				<li>reckful</li>
				<li>mitchjones</li>
			</RecentStreamsList>
		);
	}
}

export default RecentStreams;
