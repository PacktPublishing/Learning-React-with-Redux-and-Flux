import React, { Component } from "react";
import Home from "./Home";
import "./App.css";

class App extends Component {
  state = {
    message: "Hot reloading is great!"
  };

  updateMessage = message => this.setState({ message });

  render() {
    return (
      <Home message={this.state.message} updateMessage={this.updateMessage} />
    );
  }
}

export default App;
