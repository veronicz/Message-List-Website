import React, { Component } from "react";
import banner from "../images/banner.png";

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <a className="active" href="#">
            Leave a message!
          </a>
        </div>
        <img src={banner} width="100%" alt="Banner" />
      </div>
    );
  }
}

export default NavigationBar;
