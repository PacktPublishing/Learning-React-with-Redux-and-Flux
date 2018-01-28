import React, { Component } from "react";
import { connect } from "react-redux";
import { increment } from "./actions";

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
  state => state,
  (dispatch, props) => ({
    inc: () => dispatch(increment(props.step)),
    dec: () => dispatch(increment(-props.step))
  })
)(Counter);
