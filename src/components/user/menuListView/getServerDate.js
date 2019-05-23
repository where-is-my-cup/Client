import axios from "axios";
import secret from "../../../secret/secret";
const sock = require("../../../socket");

const localURL = secret.SERVER;
export const getMenuList = storeId => {
  let url = storeId === undefined ? localURL + "/menu/menulistAll" : localURL + "/menu/menulist";
  let params = {
    storeId: storeId
  };
  return requestServer(url, "get", params);
};
export const sendOrderMenu = (state, history) => {
  /* 소켓으로 서버에게 주문 리스트 보내는 부분 */
  let url = localURL + "/menu/orderList";

  localStorage.setItem("orderList", "[]");
  const { orderList, storeId, userId, nickName } = state;
  let params = {
    orderList: orderList,
    storeId: storeId,
    userId: userId,
    nickName: localStorage.getItem("nickname")
  };
  history.push({
    pathname: "/waitingView",
    storeId: storeId,
    userId: userId
  });
  sock.user_order(params);
  return requestServer(url, "post", params);
};

export const getStoerList = userId => {
  let url = localURL + "/menu/storelist";

  let params = {
    userId: userId
  };
  return requestServer(url, "get", params);
};
export const getStoreListAll = () => {
  let url = localURL + "/menu/storelistAll";

  let params = {
    userId: "1"
  };
  return requestServer(url, "get", params);
};
const requestServer = (url, method, params) => {
  return axios({
    method: method,
    url: url,
    params: params
  });
};
