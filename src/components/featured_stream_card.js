import React from "react";
import { updateActiveChannel } from "../actions/header";
import { connect } from "react-redux";
import styled from "styled-components";

const FeaturedStreamCardContainer = styled.div`
  border: 2px solid purple;
  margin: 0 10px 0 10px;
  text-align: center;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (max-width: 650px) {
    width: 100%;
    height: 100px;
    font-size: 1em;
    flex-direction: row-reverse;
  }
`;

const FeaturedStreamCardTitle = styled.p`
  padding: 2px;
`;

const FeaturedStreamCardImage = styled.img`
  @media (max-width: 650px) {
    height: 100px;
    width: 100px;
    padding: 5px;
  }
`;

const FeaturedStreamCard = props => (
  <FeaturedStreamCardContainer>
    <FeaturedStreamCardTitle>
      <a href={props.stream.stream.channel.url}>{props.stream.title}</a>
    </FeaturedStreamCardTitle>
    <FeaturedStreamCardImage
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
