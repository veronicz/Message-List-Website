import React, { Component } from "react";
import { connect } from "react-redux";
import { hideDetailedView } from "../actions";

class DetailedMessage extends Component {
  render() {
    const { message, hideDetailedView } = this.props;
    if (message) {
      let content = message.name
        ? `${message.name}: ${message.message}`
        : message.message;
      return (
        <div className="detailed-modal">
          <div className="detailed-content-container">
            <div className="detailed-content">
              <div className="close" onClick={() => hideDetailedView()}>
                x
              </div>
              {content}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return { message: state.view };
};

export default connect(
  mapStateToProps,
  { hideDetailedView }
)(DetailedMessage);
