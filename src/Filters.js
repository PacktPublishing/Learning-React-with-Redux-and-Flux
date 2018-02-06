import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { actions } from "./ducks/jokes";
import { Button } from "./styles";

const Container = styled.div`
  width: 50%;
  padding: 2rem;
`;

const Content = styled.div`
  border: 1px solid lightgray;
  border-radius: 1rem;
  padding: 2rem;
`;

const PageInfo = styled.span`
  margin: 1rem;
`;

export function Filters({ page, totalPages, next, previous }) {
  return (
    <Container>
      <Content>
        <Button width={10} disabled={page === 1} onClick={previous}>
          &lt;
        </Button>
        <PageInfo>Page {page} of {totalPages}</PageInfo>
        <Button width={10} disabled={page === totalPages} onClick={next}>
          &gt;
        </Button>
      </Content>
    </Container>
  );
}

export default connect(state => state.jokes, actions)(Filters);
