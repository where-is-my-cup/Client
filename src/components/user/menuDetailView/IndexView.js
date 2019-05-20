import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import "../../../styles/menuListView.css";
import SelectOptional from "./SelectOptional";

export default class IndexView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectMenu: "",
      kind: "ICE",
      size: "S",
      count: 0
    };
  }
  componentDidMount = () => {
    this.setState({
      selectMenu: this.props.location.state
    });
  };
  _setKind = value => {
    this.setState({
      kind: value
    });
  };
  _setSize = value => {
    this.setState({
      size: value
    });
  };
  _setCount = value => {
    this.setState({
      count: value
    });
  };
  _addOrderList = () => {
    if (this.state.selectMenu.count < this.state.count) {
      alert(`수량은 최대 ${this.state.selectMenu.count}개 까지 가능합니다.`);
      return;
    }
    var orderList = localStorage.getItem("orderList");
    orderList ? (orderList = JSON.parse(orderList)) : (orderList = []);
    var flag = true;
    for (var orderMenu of orderList) {
      if (orderMenu.selectMenu.id === this.state.selectMenu.id) {
        orderMenu.count =
          parseInt(orderMenu.count) + parseInt(this.state.count);
        flag = false;
        break;
      }
    }
    if (flag) orderList.push(this.state);
    localStorage.setItem("orderList", JSON.stringify(orderList));
    this.props.history.push("/menuList");
  };
  render() {
    let { imageURL } = this.state.selectMenu;
    const menuImageSize = 200;
    return (
      <div className="MenuDetail">
        <div className="MenuDetail-head">주문 상세메뉴</div>
        <div className="MenuDetail-body">
          <div className="MenuDetail-menuInfo">
            {
              <img
                src={
                  imageURL === undefined
                    ? ""
                    : require("../../../image/" + imageURL)
                }
                width={menuImageSize}
                height={menuImageSize}
              />
            }
            <div className="MenuDetail-textInfo">
              <h1>{this.state.selectMenu.menuname}</h1>
              <h5 style={{ marginTop: "50px" }}>
                {this.state.selectMenu.description}
              </h5>
              가격 : {this.state.selectMenu.price}원
            </div>
          </div>
          <div className="MenuDetail-select">
            <Row>
              <Col>
                <div className="MenuDetail-selection">
                  <SelectOptional
                    data={["ICE", "HOT"]}
                    setKind={this._setKind}
                  />
                </div>
              </Col>
              <Col>
                <div className="MenuDetail-selection">
                  <SelectOptional
                    data={["S", "M", "L"]}
                    setSize={this._setSize}
                  />
                </div>
              </Col>
              <Col>
                <div className="MenuDetail-selection">
                  <input
                    type="number"
                    onChange={e => {
                      this._setCount(e.target.value);
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="MenuDetail-foot">
          <Row>
            <Col sm="12" md={{ size: 6, offset: 5 }}>
              <div style={{ display: "flex", margin: "30px" }}>
                <div style={{ padding: "30px" }}>
                  <Button outline color="primary" onClick={this._addOrderList}>
                    확인
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
                    취소
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
