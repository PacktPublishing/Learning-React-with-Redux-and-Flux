export const inc = step => state => ({ ...state, n: state.n + step });

export const increment = inc(1);
export const decrement = inc(-1);
