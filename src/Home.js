import React from "react";
import Layout from "./Layout";
import { AppIntro } from "./styles";

export default function Home() {
  return (
    <Layout
      title="Welcome to React"
      renderContent={() => (
        <React.Fragment>
          <AppIntro>
            To get started, edit <code>src/App.js</code> and save to reload.
          </AppIntro>
          <h2>Hot reloading is amazing!</h2>
        </React.Fragment>
      )}
    />
  );
}
