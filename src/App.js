import React, { Component, Fragment } from "react";
import Home from "./Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment><Home /><h1 key="heading">Is where the heart is?</h1></Fragment>
    );
  }
}

export default App;
