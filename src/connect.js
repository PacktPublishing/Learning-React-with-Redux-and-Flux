import React from "react";
import { createStore } from "./store";

const defaultStore = createStore({ n: 0 });

export default function connect(selector = () => ({}), store = defaultStore) {
  return Component =>
    class extends React.Component {
      state = store.getState();

      refresh = newState => {
        if (this.mounted) {
          this.setState(newState);
        }
      };

      componentDidMount() {
        this.mounted = true;
        store.subscribe(this.refresh);
      }

      componentWillUnmount() {
        this.mounted = false;
        store.unsubscribe(this.refresh);
      }

      send = action => () => store.dispatch(action);

      render() {
        return (
          <Component
            {...this.props}
            {...selector(store.getState(), this.props)}
            send={this.send}
          />
        );
      }
    };
}
