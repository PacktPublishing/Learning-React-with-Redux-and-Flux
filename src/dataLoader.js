import React from "react";

export default function dataLoader(propName, loader, mutators = {}) {
  return Component =>
    class extends React.Component {
      state = {
        data: null,
        initial: null
      };

      reload = async () => {
        const data = await loader(this.props);
        this.setState({ data, initial: data });
      };

      componentDidMount() {
        this.reload();
      }

      send = mutator => (...args) => {
        const f = mutators[mutator];

        if (!f) {
          this.setState(null);
        } else {
          this.setState({ data: f(this.state.data)(...args) });
        }
      };

      revert = () => this.setState(state => ({ data: state.initial }));

      render() {
        const { data } = this.state;

        if (!data) {
          return false;
        }

        const props = { ...this.props, [propName]: data };

        return (
          <Component
            {...props}
            reload={this.reload}
            send={this.send}
            revert={this.revert}
          />
        );
      }
    };
}
