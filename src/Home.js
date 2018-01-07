import React from "react";
import { withLayout } from "./Layout";
import { AppIntro } from "./styles";
import Greeting from "./Greeting";

export function Home({ updateMessage }) {
  return (
    <React.Fragment>
      <AppIntro>
        To get started, edit <code>src/App.js</code> and save to reload.
      </AppIntro>
      <Greeting />
      <button onClick={() => updateMessage("foo")}>Click me!</button>
    </React.Fragment>
  );
}

export default withLayout("Welcome to React!")(Home);
