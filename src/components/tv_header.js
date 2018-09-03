import React, { Component } from "react";
import "./style/tv_header.css";
import "./style/featured_streams.css";
import HeaderButton from "./header_button";
import FeaturedStreams from "./featured_streams";
import { CSSTransition } from "react-transition-group";
import onClickOutside from "react-onclickoutside";

class TVHeader extends Component {
  constructor(props) {
    super(props);
    this.showFeaturedStreams = this.showFeaturedStreams.bind(this);
    this.hideFeaturedStreams = this.hideFeaturedStreams.bind(this);
    this.toggleFeaturedStreams = this.toggleFeaturedStreams.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      showFeatured: false
    };
  }

  handleClickOutside() {
    this.hideFeaturedStreams();
  }

  showFeaturedStreams() {
    this.setState({
      showFeatured: true
    });
  }
  hideFeaturedStreams() {
    this.setState({
      showFeatured: false
    });
  }

  toggleFeaturedStreams() {
    this.setState({
      showFeatured: !this.state.showFeatured
    });
  }

  render() {
    return (
      <div className="header_container">
        <div className="tv_header">
          <HeaderButton onClick={this.toggleFeaturedStreams} text="Featured" />
          <h3 className="tv_header_brand">TwitchViewer</h3>
          <HeaderButton text="Recents" />
        </div>

        <CSSTransition
          in={this.state.showFeatured}
          timeout={{
            enter: 0,
            exit: 500
          }}
          mountOnEnter
          unmountOnExit
          classNames="featured"
        >
          <div className="featured_streams">
            <FeaturedStreams
              updateActiveChannel={this.props.updateActiveChannel}
            />
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default onClickOutside(TVHeader);
