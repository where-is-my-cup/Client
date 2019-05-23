import React from "react";
import "../../../../styles/Order.css";
import { Button, Card } from "react-bootstrap";
import OrderMenuList from "../OrderList/OrderMenuList";
import swal from "sweetalert";
import TimerExample from "./timer";

export class Order extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      variant: "primary",
      buttonText: "준비중...",
      buttonState: true
    };
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.order.orderNumber !== this.props.order.orderNumber) {
      this.setState({
        variant: "primary",
        buttonText: "준비중...",
        buttonState: true
      });
    }
    return true;
  }

  _handleOrder = async () => {
    if (this.state.buttonState) {
      var temp = await swal({
        title: "제품준비가 되었습니까?",
        text: "OK 버튼을 누르면 고객에게 제품완료 알림이 전송됩니다.",
        icon: "warning",
        buttons: true,
        dangerMode: false
      });
      if (temp) {
        await swal("알림이 전달되었습니다.", { icon: "success" });
        this.setState({
          variant: "success",
          buttonText: "제공완료",
          buttonState: false
        });
      }
    } else {
      this.props.completeOrder(this.props.order.orderNumber);
    }
  };

  render() {
    const { order } = this.props;
    return (
      <div>
        <Card
          className="order-card"
          border="primary"
          style={{ width: "18rem" }}
        >
          <Card.Header>
            {order.orderNumber}.{order.NickName}
          </Card.Header>
          <Card.Body>
            <div className="order-card-line">
              {order.orderList.map((list, index) => (
                <OrderMenuList list={list} key={index} />
              ))}
            </div>
            <Button variant={this.state.variant} onClick={this._handleOrder}>
              {this.state.buttonText}
            </Button>
          </Card.Body>
          <Card.Footer>
            00 : 00
            {/* <TimerExample /> */}
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default Order;
