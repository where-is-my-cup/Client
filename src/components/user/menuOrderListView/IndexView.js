import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import MenuCardTable from "../../common/MenuCardTable";
import EmptyOrderList from "./EmptyOrderList";
import { sendOrderMenu } from "../menuListView/getServerDate";
import Confirm from "./Confirm";

export default class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [{ count: 0, kind: "1", selectMenu: {}, size: 1 }],
      show: false
    };
  }
  componentDidMount = () => {
    var orderList = JSON.parse(localStorage.getItem("orderList"));
    this.setState({
      orderList
    });
  };
  _deleteOrderList = index => {
    var orderList = [...this.state.orderList];
    orderList.splice(index, 1);
    localStorage.setItem("orderList", JSON.stringify(orderList));
    this.setState({
      orderList
    });
  };
  _backmenuListView = () => {
    this.props.history.push("./menulist");
  };
  _orderMenu = () => {
    this.setState({
      show: true
    });
    sendOrderMenu(this.state.orderList);
  };
  _closeConfirm = () => {
    this.setState({
      show: false
    });
  };
  render() {
    let totalPrice = 0;
    for (var menu of this.state.orderList)
      totalPrice += menu.selectMenu.price * menu.count;

    return (
      <div className="MenuDetail">
        <div className="MenuDetail-head">장바구니</div>
        {this.state.orderList.length === 0 ? (
          <EmptyOrderList backmenuListView={this._backmenuListView} />
        ) : (
          <div>
            <div className="MenuDetail-body">
              <MenuCardTable
                menuList={this.state.orderList}
                changeOrderList={this._deleteOrderList}
              />
            </div>
            <div className="MenuDetail-foot">
              <Row>
                <Col>
                  <div style={{ padding: "30px" }}>총 가격 ₩{totalPrice}</div>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 5 }}>
                  <div style={{ display: "flex", margin: "30px" }}>
                    <div style={{ padding: "30px" }}>
                      <Button
                        outline
                        color="primary"
                        onClick={() => {
                          this._orderMenu();
                        }}
                      >
                        주문하기
                      </Button>
                    </div>
                    <div style={{ padding: "30px" }}>
                      <Button
                        outline
                        color="primary"
                        onClick={() => {
                          this.props.history.push("/menuList");
                        }}
                      >
                        뒤로가기
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}
        <Confirm show={this.state.show} closeConfirm={this._closeConfirm} />
      </div>
    );
  }
}
