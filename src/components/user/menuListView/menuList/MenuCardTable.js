import React, { Component } from "react";
import MenuCard from "./MenuCard";
import OrderMenuCard from "../../menuOrderListView/OrderMenuCard";

export default class MenuCardTable extends Component {
  render() {
    var { menuList, changeOrderList } = this.props;
    return (
      <div>
        {menuList.map((data, index) => (
          <div
            style={{
              marginTop: "5px",
              marginLeft: "10px",
              marginRight: "10px"
            }}
            key={index}
          >
            {changeOrderList === undefined ? (
              <MenuCard menu={data} selectMenu={this.props.selectMenu} />
            ) : (
              <OrderMenuCard
                menu={data}
                keys={index}
                changeOrderList={changeOrderList}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}
