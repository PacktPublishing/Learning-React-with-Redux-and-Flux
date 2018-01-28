const incrementApi = n => Promise.resolve();

export function increment(step) {
  return dispatch =>
    incrementApi(step).then(() => {
      dispatch({
        type: "INCREMENT",
        n: step
      });
    });
}
