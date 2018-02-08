import React from "react";

export default function Joke({ match }) {
  return <h1>{match.params.id}</h1>;
}
