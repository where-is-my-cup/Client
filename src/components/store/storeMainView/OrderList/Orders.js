import React, { Component } from "react";
import { Col } from "react-bootstrap";
import "../../../../styles/Orders.css";
import Order from "./Order";

export class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [
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
        },
        {
          orderNumber: "3",
          NickName: "사팔팔오",
          orderList: [
            {
              menuName: "토피넛라떼",
              hotIce: "Hot",
              size: "L",
              count: "1",
              price: "5,000"
            }
          ],
          totalPrice: "6,000"
        },
        {
          orderNumber: "4",
          NickName: "이중구",
          orderList: [
            {
              menuName: "자몽에이드",
              hotIce: "Ice",
              size: "L",
              count: "1",
              price: "6,000"
            }
          ],
          totalPrice: "5,500"
        },
        {
          orderNumber: "4",
          NickName: "이중구",
          orderList: [
            {
              menuName: "자몽에이드",
              hotIce: "Ice",
              size: "L",
              count: "1",
              price: "6,000"
            }
          ],
          totalPrice: "5,500"
        },
        {
          orderNumber: "4",
          NickName: "이중구",
          orderList: [
            {
              menuName: "자몽에이드",
              hotIce: "Ice",
              size: "L",
              count: "1",
              price: "6,000"
            }
          ],
          totalPrice: "5,500"
        },
        {
          orderNumber: "4",
          NickName: "이중구",
          orderList: [
            {
              menuName: "자몽에이드",
              hotIce: "Ice",
              size: "L",
              count: "1",
              price: "6,000"
            }
          ],
          totalPrice: "5,500"
        },
        {
          orderNumber: "4",
          NickName: "이중구",
          orderList: [
            {
              menuName: "자몽에이드",
              hotIce: "Ice",
              size: "L",
              count: "1",
              price: "6,000"
            }
          ],
          totalPrice: "5,500"
        }
      ]
    };
  }

  completeOrder = orderNumber => {
    this.setState({
      orderList: this.state.orderList.filter(list => {
        return list.orderNumber !== orderNumber;
      })
    });
  };

  render() {
    return (
      <div className="orderBoard">
        {this.state.orderList.map((order, index) => (
          <Order order={order} key={index} completeOrder={this.completeOrder} />
        ))}
      </div>
    );
  }
}

export default Orders;
