import React from "react";
import "./style/featured_stream_card.css";
import { activeChannelUpdate } from "../actions/streams";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const FeaturedStreamCard = props => (
  <div className="featured_card">
    <p className="featured_card_title">
      <a href={props.stream.stream.channel.url}>{props.stream.title}</a>
    </p>
    <img
      onClick={activeChannelUpdate}
      className="featured_card_img"
      src={props.stream.stream.preview.medium}
      alt={props.stream.title}
    />
  </div>
);

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ activeChannelUpdate }, dispatch);
}

export default connect(mapDispatchToProps)(FeaturedStreamCard);
