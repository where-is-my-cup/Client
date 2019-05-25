import React from "react";
import "../../../../styles/Orders.css";
import Order from "./Order";

const socket = require("../../../../socket");

export class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completedIndex: [],
      orderList: []
    };
  }
  addCompleted = orderNumber => {
    var order;
    var names = [];
    for (var val of this.state.orderList) {
      if (val.orderNumber === orderNumber) {
        order = val;
      } else {
        console.log(this.state.completedIndex);
        console.log(orderNumber);
        if (this.state.completedIndex.includes(orderNumber)) break;
        names.push(val.nickName);
      }
    }

    socket.completedOrder(order, names);
    this.setState({
      completedIndex: [...this.state.completedIndex, orderNumber]
    });
  };
  deleteCompleted = orderNumber => {
    var arr = [...this.state.completedIndex];
    arr.splice(arr.indexOf(orderNumber), 1);
    this.setState({
      completedIndex: arr,
      orderList: this.state.orderList.filter(list => {
        return list.orderNumber !== orderNumber;
      })
    });
  };
  componentDidMount() {
    var bind = this;
    socket.setOrderList(this);
  }

  render() {
    return (
      <div className="orderBoard">
        {this.state.orderList.map((order, index) => (
          <Order
            order={order}
            key={index}
            addCompleted={this.addCompleted}
            deleteCompleted={this.deleteCompleted}
            variant={
              this.state.completedIndex.includes(order.orderNumber)
                ? "success"
                : "primary"
            }
            buttonText={
              this.state.completedIndex.includes(order.orderNumber)
                ? "제공완료"
                : "준비중..."
            }
          />
        ))}
      </div>
    );
  }
}

export default Orders;
