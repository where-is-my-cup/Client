import React, { Component } from "react";
import { Container } from "react-bootstrap";

export class StoreMain extends React.Component {
  constructor(props) {
    super(props);
    this.Timeout = undefined;
    this.state = {};
  }
  render() {
    return <Container>로그인 되었습니다.</Container>;
  }
}

export default StoreMain;
