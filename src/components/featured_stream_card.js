import React from "react";
import "./style/featured_streams.css";

const FeaturedStreamCard = props => (
  <div className="featured_card">
    <h6>
      <a href={props.stream.stream.channel.url}>{props.stream.title}</a>
    </h6>
    <img src={props.stream.image} alt={props.stream.title} />
  </div>
);

export default FeaturedStreamCard;
