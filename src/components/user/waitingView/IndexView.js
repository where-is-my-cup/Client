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
      waiting: 0,
      storeId: "11"
    };
  }
  componentDidMount() {
    this.socket = socktio.connect(SERVER);
    var bind = this;
    socket.sock.on("waiting", function(data) {
      this.setState({
        waiting: data.waiting
      });
    });

    socket.sock.on("completedOrder", function(data) {
      swal(
        "주문 완료",
        `${data.nickname}님, 주문이 완료되었습니다.`,
        "success"
      ).then(() => {
        bind.setState({
          waiting: data.waiting
        });
        bind.props.history.push({
          pathname: "/menuList",
          storeId: bind.props.location.storeId,
          userId: bind.props.location.userId
        });
        socket.sock.emit("leaveRoom", bind.state.storeId);
      });
    });
    this.setState({
      storeId: this.props.location.storeId
    });
  }

  render() {
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
          현재 {this.state.waiting}번째로 준비 중입니다.
        </div>
      </div>
    );
  }
}
