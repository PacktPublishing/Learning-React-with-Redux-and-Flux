import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "./ducks/counter";

export function Counter({ n, inc, dec }) {
  return (
    <div>
      <button onClick={inc}>+</button>
      <h2>{n}</h2>
      <button onClick={dec}>-</button>
    </div>
  );
}

export default connect(
  state => state.counter,
  (dispatch, props) => ({
    inc: () => dispatch(actions.increment(props.step)),
    dec: () => dispatch(actions.increment(-props.step))
  })
)(Counter);
