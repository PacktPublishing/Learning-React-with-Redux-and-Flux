import { search } from "../api";

const initialState = {
  page: 1,
  limit: 10,
  results: []
};

function received(state, action) {
  const { jokes } = action;

  return {
    ...state,
    results: jokes.results
  };
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVED:
      return received(state, action);
    default:
      return state;
  }
}

const RECEIVED = "jokes/RECEIVED";

export const actions = {
  search: (term, page, limit) => dispatch =>
    search({ term, page, limit }).then(resp =>
      dispatch({ type: RECEIVED, jokes: resp.data })
    )
};
