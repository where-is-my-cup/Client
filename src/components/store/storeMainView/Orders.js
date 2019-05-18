import React, { Component } from "react";
import "../../../styles/Orders.css";
import Order from "./Order";

var orderData = [
  {
    orderNumber: "1",
    NickName: "방이동불주먹",
    orderList: [
      {
        menuName: "아메리카노",
        hotIce: "Hot",
        size: "M",
        count: "5",
        price: "25,000"
      },
      {
        menuName: "카페라떼",
        hotIce: "Ice",
        size: "L",
        count: "3",
        price: "15,500"
      },
      {
        menuName: "모카 프라푸치노",
        hotIce: "Ice",
        size: "L",
        count: "3",
        price: "21,000"
      }
    ],
    totalPrice: "55,000"
  },
  {
    orderNumber: "2",
    NickName: "오태식",
    orderList: [
      {
        menuName: "그린티라떼",
        hotIce: "Hot",
        size: "M",
        count: "1",
        price: "5,000"
      },
      {
        menuName: "에스프레소",
        hotIce: "Ice",
        size: "S",
        count: "2",
        price: "6,000"
      }
    ],
    totalPrice: "46,000"
  }
];

export class Orders extends React.Component {
  render() {
    return (
      <div className="orderBoard">
        {orderData.map((order, index) => (
          <Order order={order} key={index} />
        ))}
      </div>
    );
  }
}

export default Orders;
