import { SERVER } from "./secret/secret";
import socktio from "socket.io-client";
var socket = socktio.connect(SERVER);

/* 매장 로그인 하는 부분 */
export const storeLogin = param => {
  socket.emit("storeLogin", {
    storeId: param.storeId,
    storeSocketId: socket.id
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
