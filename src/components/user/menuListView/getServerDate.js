export const getMenuList = () => {
  let url = "http://localhost:5000/menu/menulist";
  return requestServer(url);
};
export const getCategorys = () => {
  let url = "http://localhost:5000/menu/category";
  return requestServer(url);
};

const requestServer = url => {
  return new Promise(resolve => {
    fetch(url)
      .then(response => response.json())
      .then(value => {
        resolve(value);
      });
  });
};
