import React, { Component } from "react";
import socktio from "socket.io-client";
import { SERVER } from "../../../secret/secret";
import swal from "sweetalert";
const socket = require("../../../socket");
export default class IndexView extends Component {
  constructor(props) {
    super(props);
    this.socket = undefined;
    this.state = {
      waitingNames: [],
      storeId: "11"
    };
  }
  componentDidMount() {
    this.socket = socktio.connect(SERVER);
    var bind = this;
    socket.sock.on("waiting", function(data) {
      bind.setState({
        waitingNames: data
      });
    });

    socket.sock.on("completedOrder", function(data) {
      swal(
        "주문 완료",
        `${localStorage.nickname}님, 주문이 완료되었습니다.`,
        "success"
      ).then(() => {
        socket.sock.emit("leaveRoom", bind.state.storeId);
        bind.props.history.push({
          pathname: "/menuList",
          storeId: bind.props.location.storeId,
          userId: bind.props.location.userId
        });
      });
    });
    this.setState({
      storeId: this.props.location.storeId
    });
  }

  render() {
    var name = localStorage.nickname;
    var number = this.state.waitingNames.indexOf(name) + 1;
    return (
      <div>
        <div
          style={{ textAlign: "center", fontSize: "30px", paddingTop: "25px" }}
        >
          고객님의 주문이 준비중입니다.
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "20px",
            paddingTop: "50px",
            paddingBottom: "25px"
          }}
        >
          {" "}
          현재 {number}번째로 준비 중입니다.
        </div>
      </div>
    );
  }
}
