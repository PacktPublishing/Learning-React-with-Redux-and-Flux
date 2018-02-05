import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "./ducks/jokes";
import styled from "styled-components";

const JokeList = styled.div`
  padding: 2rem;
  background-color: lightgray;
  width: 50%;
  height: 100%;
`;

const Joke = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 2rem 1rem;
  background-color: white;
  border: 1px solid darkgray;

  &:hover {
    background-color: forestgreen;
    color: white;
  }
`;

export class Jokes extends Component {
  componentDidMount() {
    this.props.search();
  }

  render() {
    const { results } = this.props;

    return (
      <JokeList>
        {results.map(j => (
          <Joke key={j.id}>
            {j.joke}
          </Joke>
        ))}
      </JokeList>
    );
  }
}

export default connect(state => state.jokes, actions)(Jokes);
