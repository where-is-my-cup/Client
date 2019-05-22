import axios from "axios";
import secret from "../../../secret/secret";

const localURL = secret.SERVER;
export const getMenuList = storeId => {
  let url =
    storeId === undefined
      ? localURL + "/menu/menulistAll"
      : localURL + "/menu/menulist";
  let params = {
    storeId: storeId
  };
  return requestServer(url, "get", params);
};

export const sendOrderMenu = orderList => {
  /* 소켓으로 서버에게 주문 리스트 보내는 부분 */
};

export const getStoerList = userId => {
  let url = localURL + "/menu/storelist";

  let params = {
    userId: userId
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
