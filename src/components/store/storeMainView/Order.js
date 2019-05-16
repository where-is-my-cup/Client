import React, { Component } from "react";
import "../../../styles/Order.css";
import { Button } from "react-bootstrap";
import OrderMenuList from "./OrderMenuList";

export class Order extends React.Component {
  render() {
    const { order } = this.props;
    return (
      <div className="order">
        <div>
          <span>{order.orderNumber}. </span>
          <span>{order.NickName}</span>
        </div>
        <div className="order-list">
          {order.orderList.map((list, index) => (
            <OrderMenuList list={list} key={index} />
          ))}
        </div>
        <div>Total : {order.totalPrice}</div>
        <Button outline color="primary">
          완료
        </Button>
      </div>
    );
  }
}

export default Order;
