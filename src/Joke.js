import React, { Component } from "react";
import { fetch } from "./api";
import dataLoader from "./dataLoader";

export function Joke({ joke }) {
  return (
    <h1>
      {joke}
    </h1>
  );
}

export default dataLoader("joke", ({ match }) =>
  fetch(match.params.id).then(resp => resp.data.joke)
)(Joke);
