import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "./ducks/jokes";
import { Form, Row, Input, Button } from "./styles";

export class Search extends Component {
  state = {
    query: this.props.filters.term
  };

  onChange = e => this.setState({ query: e.target.value });

  submit = e => {
    e.preventDefault();
    this.props.setFilter("term", this.state.query);
  };

  render() {
    return (
      <Form onSubmit={this.submit}>
        <Input value={this.state.query} onChange={this.onChange} />
        <Row>
          <Button type="submit">Search</Button>
        </Row>
      </Form>
    );
  }
}

export default connect(state => state.jokes, actions)(Search);
