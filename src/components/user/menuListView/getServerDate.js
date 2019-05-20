import axios from "axios";

export const getMenuList = storeId => {
  let url = "http://localhost:3001/menu/menulist";

  let params = {
    storeId: storeId
  };
  return requestServer(url, "get", params);
};

export const sendOrderMenu = orderList => {
  /* 소켓으로 서버에게 주문 리스트 보내는 부분 */
};
const requestServer = (url, method, params) => {
  return axios({
    method: method,
    url: url,
    params: params
  });
};
