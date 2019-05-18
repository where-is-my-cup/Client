import axios from "axios";

export const getMenuList = storeId => {
  let url = "http://localhost:5000/menu/menulist";

  let params = {
    storeId: storeId
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
