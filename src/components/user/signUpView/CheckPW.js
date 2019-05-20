import React, { Component } from "react";
import { Fade, Input } from "reactstrap";

export default class CheckPW extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: false,
      color: "",
      coment: "s"
    };
  }

  _checkPW = e => {
    console.log("체크 패스워드");
    if (e.target.value.length > 5) {
      this._toggle(true);
    } else {
      this._toggle(false);
    }
  };

  _toggle = data => {
    if (data) {
      this.setState({ fadeIn: true, color: "green", coment: "사용 가능한 패스워드입니다." });
    } else {
      this.setState({ fadeIn: true, color: "red", coment: "비밀번호는 6자 이상이여야합니다." });
    }
  };

  render() {
    return (
      <div className="signUp-inputFam">
        <Input
          id="signUp-checkPW"
          onChange={e => {
            this._checkPW(e);
            this.props.onChange(e);
          }}
          placeholder="Password"
          type="password"
        />
        <Fade in={this.state.fadeIn} className="mt-3" style={{ color: this.state.color }}>
          {this.state.coment}
        </Fade>
      </div>
    );
  }
}
