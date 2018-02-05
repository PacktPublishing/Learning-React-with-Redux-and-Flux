import React from "react";
import { withLayout } from "./Layout";
import { AppIntro } from "./styles";
import Greeting from "./Greeting";
import Counter from "./Counter";
import Jokes from "./Jokes";

export function Home({ updateMessage }) {
  return (
    <React.Fragment>
      <Jokes />
    </React.Fragment>
  );
}

export default withLayout("Welcome to React!")(Home);
