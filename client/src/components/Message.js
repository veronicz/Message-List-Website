import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMessage } from '../actions/MessageListActions';
import { showDetailedView } from '../actions/DetailedViewActions';

class Message extends Component {
  handleDelete = e => {
    const { message, deleteMessage } = this.props;
    e.stopPropagation();
    deleteMessage(message._id);
  };

  render() {
    const { message, showDetailedView } = this.props;
    let content = message.name
      ? `${message.name}: ${message.message}`
      : message.message;
    return (
      <li onClick={() => showDetailedView(message)}>
        <span className="content"> {content} </span>
        <span className="close" onClick={this.handleDelete}>
          x
        </span>
      </li>
    );
  }
}

export default connect(
  null,
  { deleteMessage, showDetailedView }
)(Message);
