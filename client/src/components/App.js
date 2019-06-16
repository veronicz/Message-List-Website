import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import Loading from './Loading';
import AddMessage from './AddMessageForm';
import MessageList from './MessageList';
import DetailedMessage from './DetailedMessage';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/MessageListActions';
import '../App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <AddMessage />
        <Loading />
        <MessageList />
        <DetailedMessage />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchMessages }
)(App);
