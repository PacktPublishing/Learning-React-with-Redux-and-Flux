import React from "react";
import { withLayout } from "./Layout";
import { AppIntro } from "./styles";

export function Home({ message, updateMessage }) {
  return (
    <React.Fragment>
      <AppIntro>
        To get started, edit <code>src/App.js</code> and save to reload.
      </AppIntro>
      <h2>{message}</h2>
      <button onClick={() => updateMessage("foo")}>Click me!</button>
    </React.Fragment>
  );
}

export default withLayout("Welcome to React!")(Home);
