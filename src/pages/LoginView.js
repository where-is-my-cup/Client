import React, { Component } from "react";
import "../styles/login.css";
import { Row, Col, Input, Button } from "reactstrap";
import axios from "axios";

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      admin: "false"
    };
  }

  _inputOnChange = e => {
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

  _onClick = e => {
    if (e.target.id === "login-su") {
      this.props.history.push("/signUp");
    } else {
      this._auth();
    }
  };

  _auth = () => {
    axios
      .post("http://localhost:3001/user/login", {
        isID: this.state.id,
        isPW: this.state.pw,
        isAdmin: this.state.admin
      })
      .then(({ data }) => {
        if (data.message) {
          localStorage.setItem("token", data.token);
          alert("로그인되셨습니다.");
        } else {
          alert("비밀번호 혹은 ");
        }
      });
  };

  _toggle = () => {
    this.setState();
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
            onChange={this._inputOnChange}
          />
          <Input
            id="login-pw"
            className="login-input"
            placeholder="PW를 입력해주세요."
            type="password"
            onChange={this._inputOnChange}
          />
          <Row id="login-bottenBox" className="login-input">
            <Col md="6" xs="4" sm="4">
              <Input type="checkbox" onChange={this._inputOnChange} />
              <span style={{ color: "aliceblue", fontWeight: "bold" }}> Admin </span>
            </Col>
            <Col md="3" xs="4" sm="4">
              <Button id="login-su" className="login-button" onClick={this._onClick}>
                SignUp
              </Button>
            </Col>
            <Col md="3" xs="4" sm="4">
              <Button id="login-lg" className="login-button" onClick={this._onClick}>
                Login
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
