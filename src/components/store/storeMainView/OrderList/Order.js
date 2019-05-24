import React from "react";
import "../../../../styles/Order.css";
import { Button, Card } from "react-bootstrap";
import OrderMenuList from "../OrderList/OrderMenuList";
import TimerExample from "./timer";
import swal from "sweetalert";

export class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      borderColor: "primary"
    };
  }

  _handleOrder = async () => {
    if (this.props.variant === "success") {
      this.props.deleteCompleted(this.props.order.orderNumber);
    } else {
      var temp = await swal({
        title: "제품준비가 되었습니까?",
        text: "OK 버튼을 누르면 고객에게 제품완료 알림이 전송됩니다.",
        icon: "warning",
        buttons: true,
        dangerMode: false
      });
      if (temp) {
        await swal("알림이 전달되었습니다.", { icon: "success" });
        this.props.addCompleted(this.props.order.orderNumber);
      }
    }
  };

  _setColor = time => {
    this.setState({
      borderColor: time === 10 ? "warning" : "danger"
    });
  };

  render() {
    const { order } = this.props;
    return (
      <div>
        <Card
          className="order-card"
          border={this.state.borderColor}
          style={{ width: "18rem" }}
        >
          <Card.Header>
            {order.orderNumber}.{order.nickName}
          </Card.Header>
          <Card.Body>
            <div className="order-card-line">
              {order.orderList.map((list, index) => (
                <OrderMenuList list={list} key={index} />
              ))}
            </div>
            <Button variant={this.props.variant} onClick={this._handleOrder}>
              {this.props.buttonText}
            </Button>
          </Card.Body>
          <Card.Footer>
            <TimerExample setColor={this._setColor} />
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default Order;
