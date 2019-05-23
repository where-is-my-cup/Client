import { SERVER } from "./secret/secret";
import socketio from "socket.io-client";
var socket = socketio.connect(SERVER);

socket.on("/storeLogin", function(data) {
  console.log("dididiididididididid");
});

socket.on("ordering", data => {
  console.log("data -----", data);

  socket.emit("waiting", {});
});

/* 매장 로그인 하는 부분 */
export const storeLogin = param => {

  socket.emit("storeLogin", {
    storeId: param
  });
};

/* 주문 들어가는 부분 */
export const user_order = param => {
  socket.emit("ordering", {
    orderList: param.orderList,
    userId: param.userId,
    storeId: param.storeId,
    user_socketId: socket.id
  });
};

export const sock = socket;
