import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import MenuCardTable from "../menuListView/menuList/MenuCardTable";
import EmptyOrderList from "./EmptyOrderList";
import { sendOrderMenu } from "../menuListView/getServerDate";
import swal from "sweetalert";

export default class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [{ count: 0, kind: "1", selectMenu: {}, size: 1 }],
      storeId: undefined,
      userId: undefined,
      nickname: undefined
    };
  }
  componentDidMount = () => {
    var orderList = JSON.parse(localStorage.getItem("orderList"));
    this.setState({
      orderList,
      storeId: this.props.location.storeId,
      userId: this.props.location.userId,
      nickname: this.props.location.nickname
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
  _orderMenu = () => {
    swal({
      title: "선택하신 메뉴로 주문을 하시겠습니까?",
      text: "주문 이후에는 변경할 수 없습니다.",
      icon: "warning",
      buttons: true,
      dangerMode: false
    }).then(willDelete => {
      if (willDelete) {
        sendOrderMenu(this.state, this.props.history);
      }
    });
  };
  _clickCancle = () => {
    this.props.history.push({
      pathname: "/menuList",
      storeId: this.state.storeId,
      userId: this.state.userId
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
          <EmptyOrderList clickCancle={this._clickCancle} />
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
                        onClick={this._clickCancle}
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
      </div>
    );
  }
}
