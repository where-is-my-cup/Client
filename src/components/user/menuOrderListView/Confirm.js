import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

export default class Confirm extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.closeConfirm}>
          <Modal.Header closeButton>
            <Modal.Title>주문하기</Modal.Title>
          </Modal.Header>
          <Modal.Body>선택하신 메뉴로 주문을 하시겠습니까?</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => {}}>
              주문하기
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
