import React, { Component } from 'react';
import { addMessage } from '../actions/MessageListActions';
import { connect } from 'react-redux';

const initState = {
  name: '',
  message: ''
};

class AddMessageForm extends Component {
  constructor() {
    super();
    this.state = initState;
  }

  clearInput = () => {
    this.setState(initState);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, message } = this.state;
    if (name && !message) {
      alert('Message is required!');
    } else if (message) {
      this.props.addMessage(this.state);
      this.clearInput();
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} onReset={this.clearInput}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="">Message: </label>
        <input
          type="text"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" value="Add" />
        <input type="reset" value="Clear" />
      </form>
    );
  }
}

export default connect(
  null,
  { addMessage }
)(AddMessageForm);
