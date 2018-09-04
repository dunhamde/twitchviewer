import React, { Component } from "react";
import "./style/tv_header.css";
import "./style/featured_streams.css";
import HeaderButton from "./header_button";
import FeaturedStreams from "./featured_streams";
import Search from "./search";
import { CSSTransition } from "react-transition-group";
import onClickOutside from "react-onclickoutside";
import { showFeatured } from "../actions/streams";
import { getShowFeatured } from "../reducers/reducer_streams";
import { connect } from "react-redux";

class TVHeader extends Component {
  static defaultProps = {
    showFeaturedStreams: false
  };

  constructor(props) {
    super(props);
    this.toggleFeaturedStreams = this.toggleFeaturedStreams.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside() {
    this.props.showFeatured(false);
  }

  toggleFeaturedStreams() {
    this.props.showFeaturedStreams
      ? this.props.showFeatured(false)
      : this.props.showFeatured(true);
  }
  toggleRecentStreams() {}

  render() {
    return (
      <div className="header_container">
        <div className="tv_header">
          <HeaderButton
            onClick={() => this.toggleFeaturedStreams()}
            text="Featured"
          />
          <Search />
          <h3 className="tv_header_brand">TwitchViewer</h3>
          <HeaderButton
            onClick={() => {
              this.toggleRecentStreams();
            }}
            text="Recents"
          />
        </div>

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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showFeaturedStreams: getShowFeatured(state)
  };
}

export default connect(
  mapStateToProps,
  { showFeatured }
)(onClickOutside(TVHeader));
