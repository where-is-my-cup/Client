import React, { Component } from "react";
import { Container } from "react-bootstrap";
import StoreNav from "./StoreNav";
import "../../../styles/storeMain.css";

export class Main extends React.Component {
  render() {
    return (
      <Container>
        <div id="storeMain">
          <StoreNav />
        </div>
      </Container>
    );
  }
}

export default Main;
