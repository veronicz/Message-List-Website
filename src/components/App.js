import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import AddMessage from "./AddMessageForm";
import MessageList from "./MessageList";
import DetailedMessage from "./DetailedMessage";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <AddMessage />
        <MessageList />
        <DetailedMessage />
      </div>
    );
  }
}

export default App;
