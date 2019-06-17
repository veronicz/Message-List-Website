import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';
import { connect } from 'react-redux';
import { updateMessage } from '../actions/MessageListActions';
import { hideDetailedView } from '../actions/DetailedViewActions';

class DetailedMessage extends Component {
  state = {
    id: this.props.message.id,
    name: this.props.message.name,
    message: this.props.message.message
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleMessageChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  render() {
    const { hideDetailedView, updateMessage } = this.props;
    const { message, name } = this.state;
    return (
      <div className="detailed-modal">
        <div className="detailed-content-container">
          <div className="detailed-content">
            <div className="close" onClick={() => hideDetailedView()}>
              x
            </div>
            {name ? (
              <span>
                <ContentEditable
                  className="editable-message"
                  html={name}
                  onChange={this.handleNameChange}
                />
                :&nbsp;
              </span>
            ) : null}
            <ContentEditable
              className="editable-message"
              html={message}
              onChange={this.handleMessageChange}
            />
          </div>
          <button className="save" onClick={() => updateMessage(this.state)}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { hideDetailedView, updateMessage }
)(DetailedMessage);
