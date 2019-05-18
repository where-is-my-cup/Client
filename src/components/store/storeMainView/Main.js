import React, { Component } from "react";
import { Container } from "react-bootstrap";
import StoreNav from "./StoreNav";

export class Main extends React.Component {
  render() {
    return (
      <Container>
        <StoreNav />
      </Container>
    );
  }
}

export default Main;
