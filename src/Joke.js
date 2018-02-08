import React, { Component } from "react";
import { fetch, random } from "./api";
import dataLoader from "./dataLoader";
import { Container, Content, Input, Button, Row } from "./styles";

export function Joke({ joke, send, revert, reload }) {
  return (
    <Container>
      <Content>
        <h1>
          {joke}
        </h1>
        <Input
          width={70}
          value={joke}
          onChange={e => send("UPDATE_JOKE")(e.target.value)}
        />
        <Row width={70}>
          <Button width={45} onClick={revert}>Revert</Button>
          <Button width={45} onClick={reload}>Shuffle</Button>
        </Row>
      </Content>
    </Container>
  );
}

export default dataLoader(
  "joke",
  ({ match }) => random().then(resp => resp.data.joke),
  {
    UPDATE_JOKE: state => text => text
  }
)(Joke);
