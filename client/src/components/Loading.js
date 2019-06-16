import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loading extends Component {
  render() {
    const { error, isLoading } = this.props;
    return (
      <div className="loading-dots">
        {error ? error.toString() : null}
        {isLoading ? loadingDots() : null}
      </div>
    );
  }
}

function loadingDots() {
  return (
    <span>
      <span className="dot one"> &#8729;</span>
      <span className="dot two">&#8729;</span>
      <span className="dot three">&#8729;</span>
    </span>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.messages.isLoading,
    error: state.messages.error
  };
};

export default connect(mapStateToProps)(Loading);
