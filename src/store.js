export function createStore(initialState) {
  let currentState = initialState;
  const listeners = [];

  const getState = () => currentState;

  const dispatch = action => {
    currentState = action(currentState);
    listeners.forEach(l => l(currentState));
  };

  const subscribe = callback => {
    listeners.push(callback);
  };

  const unsubscribe = callback => {
    if (listeners.includes(callback)) {
      listeners.splice(listeners.indexOf(callback));
    }
  };

  return { getState, dispatch, subscribe, unsubscribe };
}
