import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as counter } from "./ducks/counter";
import { reducer as jokes } from "./ducks/jokes";

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

const reducer = combineReducers({ counter, jokes });

export default createStore(reducer, applyMiddleware(async, logger));
