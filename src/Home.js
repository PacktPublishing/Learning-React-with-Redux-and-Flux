import React from "react";
import { withLayout } from "./Layout";
import { AppIntro } from "./styles";

export function Home() {
  return (
    <React.Fragment>
      <AppIntro>
        To get started, edit <code>src/App.js</code> and save to reload.
      </AppIntro>
      <h2>Hot reloading is amazing!</h2>
    </React.Fragment>
  );
}

export default withLayout("Welcome to React!")(Home);
