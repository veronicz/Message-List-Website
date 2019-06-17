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
        {this.props.message ? (
          <DetailedMessage message={this.props.message} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { message: state.view };
};

export default connect(
  mapStateToProps,
  { fetchMessages }
)(App);
