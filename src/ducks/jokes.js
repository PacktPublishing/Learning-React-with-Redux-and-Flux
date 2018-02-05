import { search } from "../api";

const RECEIVED = "jokes/RECEIVED";

export const actions = {
  search: (term, page, limit) => dispatch =>
    search({ term, page, limit }).then(resp =>
      dispatch({ type: RECEIVED, jokes: resp.data })
    )
};
