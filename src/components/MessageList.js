import React, { Component } from "react";
import Message from "./Message";
import { connect } from "react-redux";
import { clearMessages } from "../actions";

class MessageList extends Component {
  render() {
    const { messages, clearMessages } = this.props;
    const messageList = messages.map(msg => {
      return <Message key={msg.id} message={msg} />;
    });
    return (
      <div>
        <ul id="message-list">{messageList}</ul>
        <div className="arrow-down">
          <button onClick={() => clearMessages()}>Clear List</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messages };
};

export default connect(
  mapStateToProps,
  { clearMessages }
)(MessageList);
