import React, { Component } from "react";
import T from "prop-types";
import Home from "./Home";
import "./App.css";

class App extends Component {
  static childContextTypes = {
    message: T.string
  };

  state = {
    message: "Hot reloading is great!"
  };

  getChildContext() {
    return { message: this.state.message };
  }

  updateMessage = message => this.setState({ message });

  render() {
    return <Home updateMessage={this.updateMessage} />;
  }
}

export default App;
