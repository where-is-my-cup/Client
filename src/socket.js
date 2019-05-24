import { SERVER } from "./secret/secret";
import socketio from "socket.io-client";
import { converter } from "./components/store/storeMainView/OrderList/converter";

var socket = socketio.connect(SERVER);

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
    user_socketId: socket.id,
    nickName: param.nickName
  });
};

export const setOrderList = bind => {
  socket.on("ordering", data => {
    var convertData = converter(data);
    var addOrder = [...bind.state.orderList, convertData];
    var waitingNames = addOrder.map(data => {
      return data.nickName;
    });
    var obj = { storeId: localStorage.storeId, waitingNames: waitingNames };

    socket.emit("waiting", obj);

    bind.setState({
      orderList: addOrder
    });
  });
};

export const completedOrder = (order, waitingNames) => {
  socket.emit("completedOrder", {
    user_socketId: order.user_socketId
  });
  console.log(localStorage.storeId);
  console.log(waitingNames);
  var obj = { storeId: localStorage.storeId, waitingNames: waitingNames };
  socket.emit("waiting", obj);
};

export const sock = socket;
