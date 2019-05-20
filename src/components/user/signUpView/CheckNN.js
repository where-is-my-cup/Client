import React, { Component } from "react";
import { Fade, InputGroup, Input, Button } from "reactstrap";
import Axios from "axios";

export default class CheckNN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      fadeIn: false,
      color: "",
      coment: "s"
    };
  }

  _checkNN = e => {
    Axios.post("http://localhost:3001/user/checkNN", {
      nickname: this.props.nickname
    }).then(({ data }) => {
      this._toggle(data);
    });
  };

  _onChange = e => {
    this.setState({ nickname: e.target.value });
  };

  _toggle = data => {
    if (data) {
      this.props.check("nickname");
      this.setState({ fadeIn: true, color: "green", coment: "사용 가능한 닉네임입니다." });
    } else {
      this.setState({ fadeIn: true, color: "red", coment: "중복된 닉네임입니다." });
    }
  };
  render() {
    return (
      <div className="signUp-inputFam">
        <InputGroup>
          <Input
            onChange={e => {
              this._onChange(e);
              this.props.onChange(e);
            }}
            placeholder="Nickname"
            className="signUp-inputButton"
          />
          <Button id="signUp-nickCheck" onClick={this._checkNN}>
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
