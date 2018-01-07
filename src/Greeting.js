import React from "react";
import T from "prop-types";

export default function Greeting(_, context) {
  return <h2>{context.message}</h2>;
}

Greeting.contextTypes = {
  message: T.string
};
