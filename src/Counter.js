import React, { Component } from "react";

const initialState = { n: 0 };

const CounterContext = React.createContext(initialState);

debugger;

function Count() {
  return (
    <CounterContext.Consumer>
      {counter => <h1>{counter.n}</h1>}
    </CounterContext.Consumer>
  );
}

export default class Counter extends Component {
  state = initialState;

  increment = n => () => this.setState(state => ({ n: state.n + n }));

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        <div>
          <button onClick={this.increment(1)}>+</button>
          <Count />
          <button onClick={this.increment(-1)}>-</button>
        </div>
      </CounterContext.Provider>
    );
  }
}
