const initialState = {
  n: 0
};

function inc(state, action) {
  return { ...state, n: state.n + action.n };
}

const INCREMENT = "counter/INCREMENT";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return inc(state, action);
    default:
      return state;
  }
}

export const actions = {
  increment: step => ({
    type: INCREMENT,
    n: step
  })
};
