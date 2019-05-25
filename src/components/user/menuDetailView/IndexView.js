import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "../../../styles/menuListView.css";
import SelectOptional from "./SelectOptional";
import swal from "sweetalert";

export default class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectMenu: "",
      kind: "ICE",
      size: "S",
      count: "개수선택",
      storeId: undefined,
      dropdownOpen: false,
      category: ""
    };
  }
  componentDidMount = () => {
    var kind =
      this.props.location.state.category === "JUICE" ||
      this.props.location.state.category === "DESSERT"
        ? "-"
        : "ICE";
    var size = this.props.location.state.category === "DESSERT" ? "-" : "S";
    this.setState({
      selectMenu: this.props.location.state,
      storeId: this.props.location.storeId,
      category: this.props.location.state.category,
      kind: kind,
      size: size
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
  _addOrderList = async () => {
    var subMessage =
      this.state.selectMenu.menuname +
      " / " +
      this.state.kind +
      " / " +
      this.state.size +
      " / " +
      this.state.count;
    if (this.state.count === "개수선택") {
      alert("개수를 선택해주세요");
      return;
    }
    var result = await swal({
      title: "해당 메뉴를 장바구니에 담으시겠습니까?",
      text: subMessage,
      icon: "warning",
      buttons: true,
      dangerMode: false
    });

    if (result) {
      if (this.state.selectMenu.count < this.state.count) {
        alert(`수량은 최대 ${this.state.selectMenu.count}개 까지 가능합니다.`);
        return;
      }

      var orderList = localStorage.getItem("orderList");
      orderList ? (orderList = JSON.parse(orderList)) : (orderList = []);
      var flag = true;
      for (var orderMenu of orderList) {
        if (
          orderMenu.selectMenu.id === this.state.selectMenu.id &&
          orderMenu.size === this.state.size &&
          orderMenu.kind === this.state.kind
        ) {
          orderMenu.count =
            parseInt(orderMenu.count) + parseInt(this.state.count);
          flag = false;
          break;
        }
      }
      if (flag) orderList.push(this.state);
      localStorage.setItem("orderList", JSON.stringify(orderList));
      this._clickCancle();
    }
  };
  _clickCancle = () => {
    this.props.history.push({
      pathname: "/menuList",
      storeId: this.state.storeId
    });
  };

  _toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };
  render() {
    let { imageURL } = this.state.selectMenu;
    const menuImageSize = 200;
    let arr = [];
    for (var i = 1; i <= 50; i++) {
      arr.push(i);
    }
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
                    data={
                      this.state.category === "JUICE" ||
                      this.state.category === "DESSERT"
                        ? []
                        : ["ICE", "HOT"]
                    }
                    setKind={this._setKind}
                  />
                </div>
              </Col>
              <Col>
                <div className="MenuDetail-selection">
                  <SelectOptional
                    data={
                      this.state.category === "DESSERT" ? [] : ["S", "M", "L"]
                    }
                    setSize={this._setSize}
                  />
                </div>
              </Col>
              <Col>
                <div className="MenuDetail-selection">
                  <Dropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this._toggle}
                  >
                    <DropdownToggle caret>{this.state.count}</DropdownToggle>
                    <DropdownMenu>
                      <div
                        style={{
                          height: "150px",
                          overflowY: "scroll",
                          borderRadius: "15px"
                        }}
                      >
                        {arr.map(data => (
                          <div
                            onClick={() => {
                              this.setState({ count: data });
                            }}
                          >
                            <DropdownItem>{data}</DropdownItem>
                          </div>
                        ))}
                      </div>
                    </DropdownMenu>
                  </Dropdown>
                  {/*                   <input
                    type="number"
                    onChange={e => {
                      this._setCount(e.target.value);
                    }}
                  /> */}
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
                  <Button outline color="primary" onClick={this._clickCancle}>
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
