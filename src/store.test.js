import { createStore } from "./store";
import { increment, decrement } from "./actions";

test("increment action can increment some value n", () => {
  const state = { n: 0 };
  expect(increment(state).n).toBe(state.n + 1);
});

test("decrement action can decrement some value n", () => {
  const state = { n: 0 };
  expect(decrement(state).n).toBe(state.n - 1);
});

describe("store", () => {
  const initialState = { n: 0 };
  const initialize = () => createStore(initialState);

  it("returns the initial state", () => {
    const store = initialize();
    expect(store.getState()).toBe(initialState);
  });

  it("can increment the internal state", () => {
    const store = initialize();
    store.dispatch(increment);
    expect(store.getState().n).toBe(initialState.n + 1);
  });

  it("can decrement the internal state", () => {
    const store = initialize();
    store.dispatch(decrement);
    expect(store.getState().n).toBe(initialState.n - 1);
  });
});
