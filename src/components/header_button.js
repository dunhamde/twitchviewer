import React, { Component } from "react";
import "./style/header_btn.css";

class HeaderButton extends Component {
  render() {
    return (
      <a onClick={this.props.onClick} id="header_btn" href="#btn">
        {this.props.text}
      </a>
    );
  }
}

export default HeaderButton;
