import React, { Component } from "react";
import { Fade, InputGroup, Input, Button } from "reactstrap";
import axios from "axios";

export default class CheckID extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: false,
      color: "",
      coment: "s"
    };
  }

  _checkID = e => {
    axios
      .post("http://localhost:3001/user/checkID", {
        id: this.props.id
      })
      .then(({ data }) => {
        this._toggle(data);
      });
  };

  _toggle = data => {
    if (!data) {
      this.props.check("id");
      this.setState({ fadeIn: true, color: "green", coment: "사용 가능한 아이디입니다." });
    } else {
      this.setState({ fadeIn: true, color: "red", coment: "중복된 아이디입니다." });
    }
  };

  render() {
    return (
      <div className="signUp-inputFam" style={{ marginTop: "80px" }}>
        <InputGroup>
          <Input
            id="signUp-id"
            onChange={this.props.onChange}
            placeholder="ID"
            className="signUp-inputButton"
          />
          <Button id="signUp-checkID" onClick={this._checkID}>
            중복확인
          </Button>
        </InputGroup>
        <Fade in={this.state.fadeIn} className="mt-3" style={{ color: this.state.color }}>
          {this.state.coment}
        </Fade>
      </div>
    );
  }
}
