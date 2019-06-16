import React, { Component } from 'react';
import NavigationBar from './NavigationBar';
import AddMessage from './AddMessageForm';
import MessageList from './MessageList';
import DetailedMessage from './DetailedMessage';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: '' };
  }

  callAPI() {
    fetch('http://localhost:3001/testAPI')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div>
        {this.state.apiResponse}
        <NavigationBar />
        <AddMessage />
        <MessageList />
        <DetailedMessage />
      </div>
    );
  }
}

export default App;
