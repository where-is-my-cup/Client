import React, { Component } from "react";
import "../../../../styles/Order.css";
import { Button, Card, Modal } from "react-bootstrap";
import OrderMenuList from "../OrderList/OrderMenuList";

export class Order extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { order } = this.props;
    return (
      <Card style={{ width: "240px" }}>
        <Card.Body>
          <Card.Title>
            {order.orderNumber}.{order.NickName}
          </Card.Title>
          <div className="order-list">
            {order.orderList.map((list, index) => (
              <OrderMenuList list={list} key={index} />
            ))}
          </div>
          <div>Total : {order.totalPrice}</div>
          <Button variant="primary" onClick={this.handleShow}>
            완료
          </Button>
        </Card.Body>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Order check please!</Modal.Title>
          </Modal.Header>
          <Modal.Body>해당 주문을 삭제 하시겠습니까?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              취소
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                this.props.completeOrder(order.orderNumber);
                this.handleClose();
              }}
            >
              삭제
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    );
  }
}

export default Order;
