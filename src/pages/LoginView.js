import React, { Component } from "react";
import "../styles/login.css";
import { Row, Col, Input, Button } from "reactstrap";
import { Redirect } from "react-router-dom";

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      admin: false
    };
  }

  inputOnChange = e => {
    if (e.target.id === "login-id") {
      const id = e.target.value;
      this.setState({ id: id });
    } else if (e.target.id === "login-pw") {
      const pw = e.target.value;
      this.setState({ pw: pw });
    } else {
      const admin = this.state.admin ? false : true;
      this.setState({ admin: admin });
    }
  };

  onClick = e => {
    console.log(this.props.history);
    if (e.target.id === "login-su") {
      this.props.history.push("/signUp");
    } else {
    }
  };

  render() {
    return (
      <div id="login-body">
        <h1 id="login-title">Cup Holder</h1>
        <div id="login-inputbox">
          <Input
            id="login-id"
            className="login-input"
            placeholder="ID를 입력해주세요."
            onChange={this.inputOnChange}
          />
          <Input
            id="login-pw"
            className="login-input"
            placeholder="PW를 입력해주세요."
            type="password"
            onChange={this.inputOnChange}
          />
          <Row id="login-bottenBox" className="login-input">
            <Col md="6" xs="4" sm="4">
              <Input type="checkbox" onChange={this.inputOnChange} />
              <span style={{ color: "aliceblue", fontWeight: "bold" }}> Admin </span>
            </Col>
            <Col md="3" xs="4" sm="4">
              <Button id="login-su" className="login-button" onClick={this.onClick}>
                SignUp
              </Button>
            </Col>
            <Col md="3" xs="4" sm="4">
              <Button id="login-lg" className="login-button" onClick={this.onClick}>
                Login
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
