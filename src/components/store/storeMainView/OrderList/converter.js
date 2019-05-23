var orderNumber = 0;
export const converter = function(obj) {
  var convertedObj = {};
  var totalPrice = 0;
  var orderList = obj.orderList.map(menu => {
    return {
      menuName: menu.selectMenu.menuname,
      hotIce: menu.kind,
      size: menu.size,
      count: menu.count,
      price: menu.selectMenu.price
    };
  });

  orderList.forEach(menu => {
    totalPrice += menu.count * menu.price;
  });

  orderNumber++;
  convertedObj.orderNumber = orderNumber;
  convertedObj.nickName = obj.nickName;
  convertedObj.orderList = orderList;
  convertedObj.totalPrice = totalPrice;

  return convertedObj;
};
