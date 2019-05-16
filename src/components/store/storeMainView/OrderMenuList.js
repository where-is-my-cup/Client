import React, { Component } from "react";
import "../../../styles/OrderMenwList.css";
export class OrderMenuList extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <span className="list-name">{list.menuName} </span>
        <span className="list-details">
          {list.hotIce} / {list.size} / {list.count}
        </span>
      </div>
    );
  }
}

export default OrderMenuList;

// menuName: "아메리카노",
// hotIce: "Hot",
// size: "M",
// count: "5",
// price: "25,000"
