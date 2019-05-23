import { SERVER } from "./secret/secret";
import socketio from "socket.io-client";
var socket = socketio.connect(SERVER);

socket.on("/storeLogin", function(data) {
  console.log("dididiididididididid");
});

/* 매장 로그인 하는 부분 */
export const storeLogin = param => {
  socket.on("connect", () => {
    socket.emit("storeLogin", {
      storeId: param,
      storeSocketId: socket.id
    });
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
