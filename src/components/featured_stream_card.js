import React from "react";
import { updateActiveChannel } from "../actions/header";
import { connect } from "react-redux";
import styled from "styled-components";

const FeaturedStreamCardContainer = styled.div`
	max-width: 350;
	max-height: 350;
	border: 2px solid purple;
	margin: 0 10px 0 10px;
	text-align: center;
	font-size: 20px;
`;

const FeaturedStreamCardTitle = styled.p`
	padding: 2px;
`;

const FeaturedStreamCard = props => (
	<FeaturedStreamCardContainer>
		<FeaturedStreamCardTitle>
			<a href={props.stream.stream.channel.url}>{props.stream.title}</a>
		</FeaturedStreamCardTitle>
		<img
			onClick={() => {
				props.updateActiveChannel(props.stream.stream.channel.name);
			}}
			className="featured_card_img"
			src={props.stream.stream.preview.medium}
			alt={props.stream.title}
		/>
	</FeaturedStreamCardContainer>
);

export default connect(
	null,
	{ updateActiveChannel }
)(FeaturedStreamCard);
