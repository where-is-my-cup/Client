import React, { Component } from "react";
import "../styles/signUp.css";
import { InputGroup, Button } from "reactstrap";
import {
  CheckCP,
  CheckID,
  CheckNN,
  CheckPW
} from "../components/user/signUpView/index";
import Axios from "axios";
import swal from "sweetalert";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      nickname: "",
      idCheck: false,
      pwCheck: false,
      nicknameCheck: false
    };
  }

  _stateHandler = e => {
    if (e.target.id === "signUp-id") {
      this.setState({ id: e.target.value });
    } else if (e.target.id === "signUp-checkPW") {
      this.setState({ pw: e.target.value });
    } else {
      this.setState({ nickname: e.target.value });
    }
  };

  _back = () => {
    this.props.history.push("/");
  };

  _check = key => {
    if (key === "id") {
      this.setState({ idCheck: true });
    } else if (key === "pw") {
      this.setState({ pwCheck: true });
    } else {
      this.setState({ nicknameCheck: true });
    }
  };

  _onClick = e => {
    if (
      this.state.idCheck === true &&
      this.state.pwCheck === true &&
      this.state.nicknameCheck === true
    ) {
      swal("Good !", "CupHolder에 가입해주셔서 감사해요!", "success");
      Axios.post("http://localhost:3001/user/signUp", {
        id: this.state.id,
        pw: this.state.pw,
        nickname: this.state.nickname
      }).then(result => {
        if (result) {
          this.props.history.push("/");
        }
      });
    } else {
      swal("Error!", "모든 부분을 채워주세요!", "error");
    }
  };

  render() {
    return (
      <div id="signUp-body">
        <div id="signUp-inputBox">
          <div className="signUp-inputFam">
            <h1>SignUp</h1>
          </div>

          <CheckID
            check={this._check}
            onChange={this._stateHandler}
            id={this.state.id}
          />
          <CheckPW onChange={this._stateHandler} pw={this.state.pw} />
          <CheckCP check={this._check} pw={this.state.pw} />
          <CheckNN
            check={this._check}
            onChange={this._stateHandler}
            nickname={this.state.nickname}
          />

          <div id="signUp-buttonFam" className="signUp-inputFam">
            <InputGroup>
              <Button
                onClick={this._onClick}
                id="signUp-add"
                className="signUp-inputButton"
              >
                가입하기
              </Button>
              <Button onClick={this._back} id="signUp-cancle">
                취소하기
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>
    );
  }
}
