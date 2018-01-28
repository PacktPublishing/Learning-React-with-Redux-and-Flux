import { createStore, applyMiddleware } from "redux";

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

const logger = store => next => action => {
  console.log("dispatching", action);
  console.log("current state", store.getState());
  const result = next(action);
  console.log("next state", store.getState());
  return result;
};

const async = store => next => action => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }

  return next(action);
};

export default createStore(reducer, applyMiddleware(async, logger));
