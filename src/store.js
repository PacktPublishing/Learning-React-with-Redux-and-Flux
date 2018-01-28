import { createStore } from "redux";

const initialState = {
  n: 0
};

function inc(state, action) {
  return { ...state, n: state.n + action.n };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return inc(state, action);
    default:
      return state;
  }
}

export default createStore(reducer);
