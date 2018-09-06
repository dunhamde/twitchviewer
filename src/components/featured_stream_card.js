import React from "react";
import "./style/featured_stream_card.css";
import { updateActiveChannel } from "../actions/header";
import { connect } from "react-redux";

const FeaturedStreamCard = props => (
  <div className="featured_card">
    <p className="featured_card_title">
      <a href={props.stream.stream.channel.url}>{props.stream.title}</a>
    </p>
    <img
      onClick={() => {
        props.updateActiveChannel(props.stream.stream.channel.name);
      }}
      className="featured_card_img"
      src={props.stream.stream.preview.medium}
      alt={props.stream.title}
    />
  </div>
);

export default connect(
  null,
  { updateActiveChannel }
)(FeaturedStreamCard);
