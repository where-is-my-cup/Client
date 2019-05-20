import React, { Component } from "react";
import { Fade, Input } from "reactstrap";

export default class CheckCP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cpw: "",
      fadeIn: false,
      color: "",
      coment: "s"
    };
  }

  _checkCP = e => {
    const pw = this.props.pw;
    const cpw = e.target.value;

    if (cpw === pw) {
      this._toggle(true);
    } else {
      this._toggle(false);
    }
  };

  _toggle = data => {
    if (data) {
      this.props.check("pw");
      this.setState({ fadeIn: true, color: "green", coment: "확인되었습니다." });
    } else {
      this.setState({ fadeIn: true, color: "red", coment: "다시 확인해주세요." });
    }
  };

  render() {
    return (
      <div className="signUp-inputFam">
        <Input onChange={this._checkCP} placeholder="Confirm Password" type="password" />
        <Fade in={this.state.fadeIn} className="mt-3" style={{ color: this.state.color }}>
          {this.state.coment}
        </Fade>
      </div>
    );
  }
}
