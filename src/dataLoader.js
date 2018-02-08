import React from "react";

export default function dataLoader(propName, loader) {
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

      render() {
        const { data } = this.state;

        if (!data) {
          return false;
        }

        const props = { ...this.props, [propName]: data };

        return <Component {...props} reload={this.reload} />;
      }
    };
}
