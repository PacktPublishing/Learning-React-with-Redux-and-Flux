import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "./ducks/jokes";
import styled from "styled-components";
import Filters from "./Filters";

const JokeLink = ({ id, ...props }) => <Link to={`/jokes/${id}`} {...props} />;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const JokeList = styled.div`
  padding: 2rem;
  background-color: lightgray;
  width: 50%;
  height: 100%;
`;

const Joke = styled(JokeLink)`
  text-decoration: none;
  color: black;
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
    const { limit, page, search, filters: { term } } = this.props;

    search(term, page, limit);
  }

  componentWillReceiveProps(nextProps) {
    const { limit, page, search, filters: { term } } = nextProps;

    if (page !== this.props.page || term !== this.props.filters.term) {
      search(term, page, limit);
    }
  }

  render() {
    const { results } = this.props;

    return (
      <Content>
        <JokeList>
          {results.map(j => (
            <Joke key={j.id} id={j.id}>
              {j.joke}
            </Joke>
          ))}
        </JokeList>
        <Filters />
      </Content>
    );
  }
}

export default connect(state => state.jokes, actions)(Jokes);
