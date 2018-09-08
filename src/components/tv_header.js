import React, { Component } from "react";
import "./style/featured_streams.css";
import FeaturedStreams from "./featured_streams";
import Search from "./search_bar";
import { CSSTransition } from "react-transition-group";
import onClickOutside from "react-onclickoutside";
import { showFeatured, showRecent } from "../actions/header";
import { getShowFeatured, getShowRecent } from "../reducers/reducer_streams";
import { connect } from "react-redux";
import RecentStreams from "./recent_streams";
import styled from "styled-components";

const TVHeaderButton = styled.a`
	outline: none;
	text-decoration: none;
	padding: 5px 10px 5px 10px;
	line-height: 1.5;
	color: purple;
	border: thin solid purple;
	margin-left: 5px;
	margin-right: 5px;
	&: link,&: visted,&: focus {
		background: white;
		text-decoration: none;
	}
	&: hover {
		background: purple;
		color: white;
		text-decoration: none;
	}
`;

const TVHeaderBrand = styled.h3`
	color: purple;
	flex: 1;
	display: flex;
	justify-content: space-around;
`;

const HeaderContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const StyledHeader = styled.div`
	height: 76px;
	color: black;
	background-color: white;
	display: flex;

	position: fixed;
	z-index: 99;
	top: 0;
	right: 0;
	left: 0;
`;

class TVHeader extends Component {
	static defaultProps = {
		showFeaturedStreams: false,
		showRecentStreams: false
	};

	handleClickOutside = () => {
		this.props.showFeatured(false);
		this.props.showRecent(false);
	};

	toggleFeaturedStreams = () => {
		this.props.showRecent(false);
		this.props.showFeaturedStreams
			? this.props.showFeatured(false)
			: this.props.showFeatured(true);
	};
	toggleRecentStreams = () => {
		this.props.showFeatured(false);
		this.props.showRecentStreams
			? this.props.showRecent(false)
			: this.props.showRecent(true);
	};

	render() {
		return (
			<div>
				<StyledHeader>
					<HeaderContainer>
						<Search />
					</HeaderContainer>
					<TVHeaderBrand>TwitchViewer</TVHeaderBrand>
					<HeaderContainer>
						<TVHeaderButton onClick={() => this.toggleRecentStreams()}>
							Recent
						</TVHeaderButton>
						<TVHeaderButton onClick={() => this.toggleFeaturedStreams()}>
							Featured
						</TVHeaderButton>
					</HeaderContainer>
				</StyledHeader>

				<CSSTransition
					in={this.props.showFeaturedStreams}
					timeout={{
						enter: 0,
						exit: 500
					}}
					mountOnEnter
					unmountOnExit
					classNames="featured"
				>
					<div className="featured_streams">
						<FeaturedStreams />
					</div>
				</CSSTransition>
				<CSSTransition
					in={this.props.showRecentStreams}
					timeout={{
						enter: 0,
						exit: 500
					}}
					mountOnEnter
					unmountOnExit
					classNames="recent"
				>
					<RecentStreams />
				</CSSTransition>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		showFeaturedStreams: getShowFeatured(state),
		showRecentStreams: getShowRecent(state)
	};
}

export default connect(
	mapStateToProps,
	{ showFeatured, showRecent }
)(onClickOutside(TVHeader));
