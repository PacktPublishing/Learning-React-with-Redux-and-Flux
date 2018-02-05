import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "./ducks/jokes";

export class Jokes extends Component {
  componentDidMount() {
    this.props.search();
  }

  render() {
    return false;
  }
}

export default connect(undefined, actions)(Jokes);
